import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import fieldsData from '@/data/jobCategories1.json';
import locationData from '@/data/locationData.json';
import { useSession } from "next-auth/react";
import { BaseApi } from '@/lib/store/Base';

const JobAlertForm = ({ filters, alert, onClose }) => {
  const { data: session } = useSession();
  const [mainField, setMainField] = useState('');
  const [subFields, setSubFields] = useState([]);
  const [selectedSubFields, setSelectedSubFields] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedInstitutions, setSelectedInstitutions] = useState([]);
  const [salaryRange, setSalaryRange] = useState([10000, 250000]);
  const [frequency, setFrequency] = useState(null);
  const options = fieldsData.master_category_job_type.map((category) => ({
    value: category,
    label: category,
  }));

  useEffect(() => {
    if (alert) {
      setMainField(alert.mainField);
      setSelectedSubFields(JSON.parse(alert.subFields || '[]').map(subField => ({ value: subField, label: subField })));
      setSelectedCountry({ value: alert.country, label: alert.country });
      setSelectedStates(JSON.parse(alert.states || '[]').map(state => ({ value: state, label: state })));
      setFrequency(alert.frequency || null);
      setSalaryRange([alert.salaryFrom || 10000, alert.salaryTo || 250000]);
      setSelectedInstitutions(JSON.parse(alert.institutions || '[]').map(institution => ({ value: institution, label: institution })));
    }
  }, [alert]);

  useEffect(() => {
    if (mainField) {
      setSubFields(fieldsData[mainField]?.map(subField => ({ value: subField, label: subField })) || []);
    } else {
      setSubFields([]);
    }
  }, [mainField]);

  useEffect(() => {
    if (filters) {
      console.log("filters", filters)
      const uniqueStates = [];
      const uniqueInstitutions = [];
      filters.forEach(({ category, filter }) => {
        if (category === 'region' || category === 'Country') {
          setSelectedCountry({ value: filter, label: filter });
        } else if (category === 'State') {
          if (!uniqueStates.find(state => state.value === filter)) {
            uniqueStates.push({ value: filter, label: filter });
          }
        } else if (category === 'InstitutionName') {
          if (!uniqueInstitutions.find(institution => institution.value === filter)) {
            uniqueInstitutions.push({ value: filter, label: filter });
          }
        } else if (category === 'JobType') {
          setMainField(filter);
        } else if (['HRJobs', 'AdministrationSupportJobs', 'FacultyDepartmentJobs', 'ExecutiveJobs', 'PositionType'].includes(category)) {
          setSelectedSubFields(prev => {
            if (!prev.some(item => item.value === filter)) {
              return [...prev, { value: filter, label: filter }];
            }
            return prev;
          });
        } else if (category === 'SalaryRange') {
          const regex = /\$\d+(,\d{3})*/g;
          const matches = filter.match(regex);
          const values = matches.map(match => match.replace(/[$,]/g, ''));
          setSalaryRange([values[0], values[1]]);
        }
      });
      setSelectedStates(uniqueStates);
      setSelectedInstitutions(uniqueInstitutions);
    }
  }, [filters]);

  const handleSubFieldChange = (selectedOptions) => {
    setSelectedSubFields(selectedOptions || []);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedStates([]);
    setSelectedInstitutions([]);
  };

  const handleStateChange = (states) => {
    setSelectedStates(states || []);
    setSelectedInstitutions([]);
  };

  const handleInstitutionChange = (institutions) => {
    setSelectedInstitutions(institutions || []);
  };

  const handleSliderChange = (value) => {
    setSalaryRange(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session || !session.user || !session.user.id) {
      window.location.href = '/auth/signin';
      return;
    }

    const formData = {
      mainField,
      subFields: JSON.stringify(selectedSubFields.map(item => item.value)),
      country: selectedCountry ? selectedCountry.value : null,
      states: JSON.stringify(selectedStates.map(state => state.value)),
      institutions: JSON.stringify(selectedInstitutions.map(institution => institution.value)),
      frequency,
      salaryFrom: salaryRange[0],
      salaryTo: salaryRange[1],
      userId: session.user.id
    };

    try {
      if (alert) {
        const response = await BaseApi.put(`/updateJobAlert/${alert.id}`, formData);
        console.log('Success:', response.data);
      } else {
        const response = await BaseApi.post('/createJobAlert', formData);
        console.log('Success:', response.data);
      }
      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getStateOptions = () => {
    if (selectedCountry) {
      return Object.keys(locationData[selectedCountry.value] || {}).map(state => ({ value: state, label: state }));
    }
    return [];
  };

  const getInstitutionOptions = () => {
    if (selectedCountry && selectedStates.length > 0) {
      let institutions = [];
      selectedStates.forEach(state => {
        const stateData = locationData[selectedCountry.value]?.[state.value];
        if (stateData && stateData.universities) {
          institutions = institutions.concat(stateData.universities.map(university => ({ value: university, label: university })));
        }
      });
      return institutions;
    }
    return [];
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-4">{alert ? 'Edit job alert' : 'Create job alert'}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <Select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              options={Object.keys(locationData).map(country => ({ value: country, label: country }))}
              className="mt-1 custom-select"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">States</label>
            <Select
              id="state"
              isMulti
              value={selectedStates}
              onChange={handleStateChange}
              options={getStateOptions()}
              className="mt-1 custom-select"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institutions</label>
            <Select
              id="institution"
              isMulti
              value={selectedInstitutions}
              onChange={handleInstitutionChange}
              options={getInstitutionOptions()}
              className="mt-1 custom-select"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mainField" className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <Select
              id="mainField"
              value={options.find(option => option.value === mainField)}
              onChange={(selectedOption) => setMainField(selectedOption ? selectedOption.value : '')}
              options={options}
              className="mt-1 custom-select"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subField" className="block text-sm font-medium text-gray-700">Subfields</label>
            <Select
              id="subField"
              isMulti
              value={selectedSubFields}
              onChange={handleSubFieldChange}
              options={subFields}
              className="mt-1 custom-select"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">Salary Range</label>
            <Slider
              range
              min={10000}
              max={250000}
              step={10000}
              value={salaryRange}
              onChange={handleSliderChange}
              className="mt-1 custom-slider"
            />
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <span>{`$${salaryRange[0].toLocaleString()}`}</span>
              <span>{`$${salaryRange[1].toLocaleString()}`}</span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">Select Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="twiceWeekly">Twice a week</option>
              <option value="Weekly">Weekly</option>
              <option value="Fortnightly">Fortnightly</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="mx-auto block text-center py-2 px-4 bg-amber-500 text-white rounded-md hover:bg-gray-600">
              Save job alert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobAlertForm;
