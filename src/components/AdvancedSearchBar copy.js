'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import { filterType } from "@/utils/data";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import JobSearchBox6 from '@/components/JobSearchBox6';
import { useStore } from '@/lib/store/store';
import { regionData } from "@/data/africaPositions";
export default function Page() {
  const keyWordRef = useRef(null);
  const { setSearchJobQuery } = useStore();
  const { searchJobQuery, region } = useStore();
  const searchParams = useSearchParams();
  const filterType = {
    State: true,
    InstitutionName: true,
    JobType: true,
    ExecutiveJobs: false,
    AdministrationSupportJobs: false,
    HRJobs: false,
    FacultyDepartmentJobs: false,
    AcademicPositionType: false,
    thirdcategory: false,
    EmploymentType: true,
    PositionType: false,
    SalaryRange: true,
    OnsiteRemote: true,
  };
  // const q = decodeURIComponent(searchParams.get('q') || '');
  // const l = decodeURIComponent(searchParams.get('l') || '');
  // const lon = decodeURIComponent(searchParams.get('lon') || 0);
  // const lat = decodeURIComponent(searchParams.get('lat') || 0);
  const [filterTypes, setfilterTypes] = useState(filterType);
  const [category, setCategory] = useState('');
  const [currentMiddleCategory, setCurrentMiddleCategory] = useState('');
  const [filter1, setfilter] = useState([{ category:'country', filter: region}]);
  const [filter2, setfilter2] = useState([]);
  useEffect(() => {
    //alert(category)
    //setCurrentMiddleCategory('')
    setSearchJobQuery({ filter1 })
    console.log("setSearchJobQuery1", searchJobQuery)
    setfilterTypes((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes((p) => ({ ...p, HRJobs: false }));
    setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: false }));
    setfilterTypes((p) => ({ ...p, AcademicPositionType: false }));
    setfilterTypes((p) => ({ ...p, thirdcategory: false }));
    if (category == "AcademicPositionType") setfilterTypes((p) => ({ ...p, thirdcategory: true }));
    switch (true) {
      case filter1.some((obj) => obj.filter.includes('Executive ')):
        setfilterTypes((p) => ({ ...p, ExecutiveJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Human Resources')):
        setfilterTypes((p) => ({ ...p, HRJobs: true }));
        break;
      case filter1.some((obj) =>
        obj.filter.includes('Support /Administration')
      ):
        setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Academic / Faculty')):
        setfilterTypes((p) => ({ ...p, AcademicPositionType: true }));
        setfilterTypes((p) => ({ ...p, PositionType: true }));
        break;
      default:
        break;
    }
  }, [filter1]);
  useEffect(() => {
    console.log("setSearchJobQuery2", searchJobQuery)
    console.log("category", category)
    let category1 = category
    setSearchJobQuery({ category: category1 })
    console.log("setSearchJobQuery3", searchJobQuery)
    setTimeout(() => {
      console.log("setSearchJobQuery4", searchJobQuery)
    }, 0);
    setfilter2(filter1)
  }, [category, currentMiddleCategory]);
  // useEffect(() => {
  //   alert(currentMiddleCategory)
  // }, [currentMiddleCategory]);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: filters,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['filter', { ...searchJobQuery, country: region }],
    queryFn: async () => {
      const response = await BaseApi.post('/filters', { ...searchJobQuery, country: region } );
        // { currentMiddleCategory, category, filter1, q, l, mode: 'normal', lon, lat }
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
    AdministrationSupportJobs: 'Administration Support Jobs',
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
  return (
    <>
      <main>
        <div className="w-full bg-gray-100 py-4 mb-4 mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto ">
              <JobSearchBox6 forceClass="hidden md:block" type="advancedSearch" />
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-5xl  flex flex-col  ">
          {  // 顶层已选X  top
            filter1.length > 0 && (
              <div className="md:flex md:gap-4 md:flex-wrap pb-2">
                {filter1.map(({ category1, filter }, i) => (
                  <button
                    key={i}
                    className="btn  btn-xs bg-blue-900 text-white "
                    onClick={() => {
                      const updatedFilter = filter1.filter(
                        (_, index) => index !== i
                      );
                      setPage(0);
                      setfilter(updatedFilter);
                      setCategory("")
                      setCurrentMiddleCategory("")
                    }}
                  >
                    {`${filter} X`}
                  </button>
                ))}
              </div>
            )
          }
          <div className="flex gap-4 flex-wrap  p-6 ">
            {Object.entries(filterTypes).map(([filterType, showYN], i) => (// 中层大目录m
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
                {filterValues9[filterType] == 'thirdcategory' ? currentMiddleCategory : filterValues9[filterType]}
              </button>
            )
            )}
            <input
              type="text"
              className="input input-sm input-bordered  w-[200px] md:text-left text-center"
              placeholder="Keywords"
              ref={keyWordRef}
            />
          </div>
          <details className="bg-gray-300 open:bg-[amber-200] duration-300 md:hidden">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">
              Filters
            </summary>
            <div className="flex gap-4 flex-wrap md:hidden m-4">
              {Object.entries(filterTypes).map(
                (
                  [filterType, showYN],
                  i // 中层大目录m
                ) => (
                  <button
                    key={i}
                    className={`px - 2 py - 1 text - gray - 500  border  rounded - md text - sm font - bold ${category === filterType
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'bg-white border-gray-500'
                      }
                  ${showYN ? 'block' : 'hidden'}
  `}
                    onClick={() => {
                      if (category === filterType) {
                        setIsShowFilter((prev) => !prev);
                      } else {
                        setIsShowFilter(true);
                      }
                      console.log(filterType);
                      setCategory(filterType);
                    }}
                  >
                    {currentMiddleCategory ? currentMiddleCategory : filterValues9[filterType]}
                  </button>
                )
              )}
              <input
                type="text"
                className="input input-bordered join-item w-full md:text-left text-center"
                placeholder="Keywords"
                ref={keyWordRef}
              />
            </div>
          </details>
          {isShowFilter && (
            <div className="grid md:grid-cols-4 gap-1 grid-cols-2 pl-6 py-2">
              {filters?.length > 0 && // 低层小目录b
                filters.map(({ filter, job_count }, i) => (
                  <button
                    key={i}
                    className="text-left text-gray-500 text-sm truncate"
                    onClick={() => {
                      setPage(0);
                      setfilter([...filter1, { category, filter }]);
                      //setIsShowFilter(false);
                      setCurrentMiddleCategory(filter)
                    }}
                  >{`${filter ? filter : 'Others'} (${job_count})`}</button>
                ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
