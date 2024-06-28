import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import fieldsData from '@/data/jobCatgeories.json';
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
  const [salaryRange, setSalaryRange] = useState(null);
  // const [remote, setRemote] = useState(null);
  const [frequency, setFrequency] = useState(null);
  // const [employmentType, setEmploymentType] = useState(null);
  const [showSubFieldDropdown, setShowSubFieldDropdown] = useState(false);

  useEffect(() => {
    if (alert) {
      setMainField(alert.mainField);
      setSelectedSubFields(JSON.parse(alert.subFields || '[]').map(subField => ({ value: subField, label: subField })));
      setSelectedCountry({ value: alert.country, label: alert.country });
      setSelectedStates(JSON.parse(alert.states || '[]').map(state => ({ value: state, label: state })));
      setFrequency(alert.frequency || null);
      setSalaryRange(alert.salaryRange || null);
      // setRemote(alert.remote || null);
      setSelectedInstitutions(JSON.parse(alert.institutions || '[]').map(institution => ({ value: institution, label: institution })));
      // setEmploymentType(alert.employmentType || null);
    }
  }, [alert]);

  useEffect(() => {
    const field = fieldsData.find(field => field[mainField]);
    setSubFields(field ? field[mainField] : []);
  }, [mainField]);

  useEffect(() => {
    if (filters) {
      const uniqueStates = [];
      const uniqueInstitutions = [];
      filters.forEach(({ category, filter }) => {
        if (category === 'region' || category === 'Country') {
          setSelectedCountry({ value: filter, label: filter });
        } else if (category === 'State') {
          if (!uniqueStates.find(state => state.value === filter)) {
            uniqueStates.push({ value: filter, label: filter });
          }
        } else if (category === 'Institution') {
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
        } else if (category === 'Salary Range') {
          setSalaryRange(filter);
        } 
      });
      setSelectedStates(uniqueStates);
      setSelectedInstitutions(uniqueInstitutions);
    }
  }, [filters]);

  const handleSubFieldChange = (subField) => {
    setSelectedSubFields(prev => (
      prev.some(item => item.value === subField.value) ? prev.filter(item => item.value !== subField.value) : [...prev, subField]
    ));
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
      salaryRange,
      userId: session.user.id
    };
  
    try {
      if (alert) {
        // Update existing job alert
        const response = await BaseApi.put(`/updateJobAlert/${alert.id}`, formData);
        console.log('Success:', response.data);
      } else {
        // Create new job alert
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
              className="mt-1"
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
              className="mt-1"
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
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mainField" className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
              id="mainField"
              value={mainField}
              onChange={(e) => setMainField(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Job Type</option>
              {fieldsData.map((field, index) => (
                <option key={index} value={Object.keys(field)[0]}>{Object.keys(field)[0]}</option>
              ))}
            </select>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="subField" className="block text-sm font-medium text-gray-700">Subfields</label>
            <div className="mt-1 p-2 block w-full border border-gray-300 rounded-md cursor-pointer"
              onClick={() => setShowSubFieldDropdown(!showSubFieldDropdown)}>
              {selectedSubFields.length > 0 ? selectedSubFields.map(item => item.label).join(', ') : 'Select subfields'}
            </div>
            {showSubFieldDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {subFields.map((subField, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer flex justify-between items-center hover:bg-gray-100"
                    onClick={() => handleSubFieldChange({ value: subField, label: subField })}
                  >
                    <span>{subField}</span>
                    {selectedSubFields.some(item => item.value === subField) && <span>&#10003;</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700">Salary Range</label>
            <select
              id="salaryRange"
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Salary Range</option>
              <option value="up to $20,000">up to $20,000</option>
              <option value="$20,000 - $40,000">$20,000 - $40,000</option>
              <option value="$40,000 - $75,000">$40,000 - $75,000</option>
              <option value="$75,000 - $120,000">$75,000 - $120,000</option>
              <option value="$100,000 - $150,000">$100,000 - $150,000</option>
              <option value="$150,000 - $200,000">$150,000 - $200,000</option>
              <option value="$200,000 and up">$200,000 and up</option>
            </select>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="remote" className="block text-sm font-medium text-gray-700">Remote</label>
            <select
              id="remote"
              value={remote}
              onChange={(e) => setRemote(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Select Remote Option</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div> */}
          <div className="mb-4">
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">Select Frequency</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="3Days">Every 3 days</option>
              <option value="Weekly">Weekly</option>
              <option value="Fortnightly">Fortnightly</option>
            </select>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
            <select
              id="employmentType"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part time">Part Time</option>
              <option value="Sessional">Sessional</option>
              <option value="Contractor">Contractor</option>
              <option value="Others">Others</option>
            </select>
          </div> */}
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
