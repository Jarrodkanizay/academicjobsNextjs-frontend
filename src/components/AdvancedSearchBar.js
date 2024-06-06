'use client';
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import { filterType } from "@/utils/data";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import JobKeywordSearchBlock from '@/components/JobKeywordSearchBlock';
import { useStore } from '@/lib/store/store';
import { regionData } from "@/data/africaPositions";
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';

export default function Page({
  p,
  forceClass = '',
}) {
  const { region, setQ, setL, setLon, setLat, q, l, lon, lat, category, country, currentMiddleCategory, filter1, setRegion, setFilter1, setCategory, setCountry, setCurrentMiddleCategory } = useStore();
  let region1
  if (region.length > 0 && region != "Global") region1 = region
  const keyWordRef = useRef(null);
  const [page, setPage] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    setQ('')
    if (p?.filter1) {
      setFilter1(p.filter1)
    }
    if (p?.q) setQ(p?.q)
  }, []);

  const searchParams = useSearchParams();
  const filterType1 = {
    JobType: true,   
    ExecutiveJobs: false,
    AdministrationSupportJobs: false,
    HRJobs: false,
    StaffAdministration: false,
    FacultyDepartmentJobs: false,
    AcademicPositionType: false,
    PositionType: false,
    thirdcategory: false,
  };

  const filterType = {
    Country: false,
    State: true,
    InstitutionName: true,
    EmploymentType: true,    
    SalaryRange: true,
    OnsiteRemote: true,
  };

  const [filterTypes1, setfilterTypes1] = useState(filterType1);
  const [filterTypes, setfilterTypes] = useState(filterType);
  const onEditorStateChange1 = (suggestion) => {
  };
  // const [category, setCategory] = useState('');
  // const [currentMiddleCategory, setCurrentMiddleCategory] = useState('');
  // const [filter1, setfilter] = useState([{ category:'country', filter: region}]);
  const [filter2, setfilter2] = useState([]);
   useEffect(() => {
    //alert(category)
    //setCurrentMiddleCategory('')
    //setSearchJobQuery({ filter1 })
    setfilterTypes1((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes1((p) => ({ ...p, PositionType: false }));
    setfilterTypes1((p) => ({ ...p, HRJobs: false }));
    setfilterTypes1((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes1((p) => ({ ...p, FacultyDepartmentJobs: false }));
    setfilterTypes1((p) => ({ ...p, AcademicPositionType: false }));
    setfilterTypes1((p) => ({ ...p, thirdcategory: false }));
    if (category == "AcademicPositionType") setfilterTypes1((p) => ({ ...p, thirdcategory: true }));

     if (filter1.some((obj) => obj.filter.includes('Executive '))) {
       setfilterTypes1((p) => ({ ...p, ExecutiveJobs: true }));
     }

    if (filter1.some((obj) => obj.filter.includes('Human Resources'))) {
      setfilterTypes1((p) => ({ ...p, HRJobs: true }));
    }

     if (filter1.some((obj) => obj.filter.includes('Staff / Administration'))) {
       setfilterTypes1((p) => ({ ...p, AdministrationSupportJobs: true }));
       console.log('Testing Academic / Faculty1', filter1);
       console.log('Testing Academic / Faculty2', filter1.some((obj) => obj.filter.includes('Academic / Faculty')));
     }

    if (filter1.some((obj) => obj.filter.includes('Academic / Faculty'))) {
      setfilterTypes1((p) => ({ ...p, AcademicPositionType: true }));
      setfilterTypes1((p) => ({ ...p, PositionType: true }));
    }
  }, [filter1]);

  useEffect(() => {
    setfilter2(filter1);
  }, [category]);

  useEffect(() => {
    console.log("keywordSuggestion21", q);
  }, [q]);

  useEffect(() => {
    if (region == 'Global') setfilterTypes((p) => ({ ...p, Country: true }));
  }, []);

  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: filters,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['filter', { category, filter2, q, l, lon, lat }],
    queryFn: async () => {
      const response = await BaseApi.post('/filters', {
        currentMiddleCategory,
        category,
        filter1, q, l, lon, lat
      });
      return response.data.data;
    },
    enabled: category !== '',
  });

  const filterValues9 = {
    Country: 'Country',
    State: 'State',
    City: 'City',
    JobType: 'Job Type',
    PositionType: 'Position Type',
    ExecutiveJobs: 'Executive Jobs',
    AdministrationSupportJobs: 'Staff/Administration Jobs',
    HRJobs: 'HR Specialty',
    FacultyDepartmentJobs: 'Faculty/Department',
    AcademicPositionType: 'Faculty/Department',
    EmploymentType: 'Employment Type',
    InstitutionName: 'Institution Name',
    SalaryRange: 'Salary Range',
    OnsiteRemote: 'Onsite/Remote',
    thirdcategory: 'thirdcategory',
  };

  const [isShowFilter, setIsShowFilter] = useState(false);

  const handleCheckboxChange = (filter) => {
    const isChecked = selectedFilters.includes(filter);
    let updatedFilters;

    if (isChecked) {
      updatedFilters = selectedFilters.filter(item => item !== filter);
      const updatedFilter1 = filter1.filter(f => f.filter !== filter);
      setFilter1(updatedFilter1);
    } else {
      updatedFilters = [...selectedFilters, filter];
      setFilter1([...filter1, { category, filter }]);
    }

    setSelectedFilters(updatedFilters);
    setCurrentMiddleCategory(filter);
  };

  return (
    <>
      <main>
        <div className="w-full  pt-2 ">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto ">
              <div className={` py-4 `}>
                <div className=" lg:max-w-screen-lg mx-auto ">
                  <div className="join mx-auto w-full border border-gray-200 shadow-md flex flex-col md:flex-row">
                    <Autocomplete
                      className="input input-bordered join-item w-full md:text-left text-center rounded-xl"
                      style={{ width: '100%' }}
                      apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
                      onPlaceSelected={(place) => {
                        const lat = place.geometry.location.lat();
                        const lon = place.geometry.location.lng();
                        setLon(lon);
                        setLat(lat);
                      }}
                      options={{
                        types: ['geocode', 'establishment'],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-5xl  flex flex-col  ">
          {filter1.length > 0 && (
            <div className="md:flex md:gap-4 md:flex-wrap pb-2 p-2">
              {filter1.map(({ category1, filter }, i) => (
                <button
                  key={i}
                  className="btn  btn-xs bg-blue-900 text-white "
                  onClick={() => {
                    const updatedFilter = filter1.filter(
                      (_, index) => index !== i
                    );
                    setPage(0);
                    setFilter1(updatedFilter);
                    setCategory("");
                    setCurrentMiddleCategory("");
                    setSelectedFilters(selectedFilters.filter(item => item !== filter));
                  }}
                >
                  {`${filter} X`}
                </button>
              ))}
            </div>
          )}
          <div className="flex gap-4 flex-wrap p-2 ml-4">
            {Object.entries(filterTypes1).map(([filterType, showYN], i) => (
              <React.Fragment key={i}>
                <button
                  key={i}
                  className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white border-gray-500'
                    }
                  ${showYN ? 'block' : 'hidden'} `}
                  onClick={() => {
                    if (category === filterType) {
                      setIsShowFilter((prev) => !prev);
                    } else {
                      setIsShowFilter(true);
                    }
                    setCategory(filterType);
                  }}
                >
                  {filterValues9[filterType] === 'thirdcategory' ? `${currentMiddleCategory} Specialty` : filterValues9[filterType]}
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap p-2 ml-4">
            {Object.entries(filterTypes).map(([filterType, showYN], i) => (
              <React.Fragment key={i}>
                <button
                  key={i}
                  className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white border-gray-500'
                    }
                  ${showYN ? 'block' : 'hidden'} `}
                  onClick={() => {
                    if (category === filterType) {
                      setIsShowFilter((prev) => !prev);
                    } else {
                      setIsShowFilter(true);
                    }
                    setCategory(filterType);
                  }}
                >
                  {filterValues9[filterType] === 'thirdcategory' ? currentMiddleCategory : filterValues9[filterType]}
                </button>
              </React.Fragment>
            ))}
            <JobKeywordSearchBlock
              field="Enter a keyword"
              customKey="Enter a keyword"
              label="Enter a keyword"
              forceClass="mb-6"
              onChange={onEditorStateChange1}
            />
          </div>
          {isShowFilter && (
            <>
              <div className="p-2 w-full max-h-64 overflow-y-scroll custom-scrollbar bg-white rounded-xl">
                {filters?.length > 0 &&
                  filters.map(({ filter, job_count }, i) => (
                    <label key={i} className="block text-left text-gray-500 text-sm p-2">
                      <input
                        type="checkbox"
                        value={filter}
                        checked={selectedFilters.includes(filter)}
                        onChange={() => handleCheckboxChange(filter)}
                        className="mr-2"
                      />
                      {`${filter ? filter : 'Others'} (${job_count})`}
                    </label>
                  ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
