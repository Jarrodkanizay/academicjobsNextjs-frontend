'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SearchResults1 from '@/components/SearchResults1';
import { useSearchParams } from 'next/navigation';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import JobSearchBox2 from '@/components/JobSearchBox2';
import JobSearchBox5 from '@/components/JobSearchBox5';
// import { filterType } from '@/utils/data';
import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
export default function Page() {
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
  const q = decodeURIComponent(searchParams.get('q') || '');
  const l = decodeURIComponent(searchParams.get('l') || '');
  const lon = decodeURIComponent(searchParams.get('lon') || 0);
  const lat = decodeURIComponent(searchParams.get('lat') || 0);
  const [filterTypes, setfilterTypes] = useState(filterType);
  const [category, setCategory] = useState('');
  const [currentMiddleCategory, setCurrentMiddleCategory] = useState('');
  const [filter1, setfilter] = useState([]);
  const [filter2, setfilter2] = useState([]);
  const [page, setPage] = useState(0);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  useEffect(() => {
    //alert(category)
    //setCurrentMiddleCategory('')
    setfilterTypes((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes((p) => ({ ...p, HRJobs: false }));
    setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: false }));
    setfilterTypes((p) => ({ ...p, AcademicPositionType: false }));
    setfilterTypes((p) => ({ ...p, thirdcategory: false }));
    if (category == "AcademicPositionType")  setfilterTypes((p) => ({ ...p, thirdcategory: true }));
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
    setfilter2(filter1)
  }, [category]);
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
    queryKey: ['filter', { currentMiddleCategory, category, filter2, q, l, lon, lat }],
    queryFn: async () => {
      const response = await BaseApi.post('/filters', {
        currentMiddleCategory,
        category,
        filter1,
        q,
        l,
        mode: 'normal',
        lon, lat
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
              <JobSearchBox5 forceClass="hidden md:block" type="advancedSearch" />
              <JobSearchBox2 forceClass="block md:hidden" type="advancedSearch" />
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
          <div className="md:flex gap-4 flex-wrap hidden p-6 ">
            {Object.entries(filterTypes).map(([filterType, showYN], i) => (// 中层大目录m
              <button
                key={i}
                className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white border-gray-500' }
                  ${showYN ? 'block' : 'hidden'}`}
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
                    className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
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
                  { currentMiddleCategory ? currentMiddleCategory : filterValues9[filterType]}
                  </button>
                )
              )}
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
                  >{`${filter ? filter : 'Others'}  (${job_count})`}</button>
                ))}
            </div>
          )}
        </div>
        <section class="jobs_grid job_post_search_container">
          <div class="filters_panel">
            <div class="filters_content">
              <JobFilter />
            </div>
          </div>
          <div class="listings_panel">
            <div class="listings_content">
              <SearchResults1 q={{ q: q, l: l || '', lon, lat, filter1 }} />
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto py-8"></div>
        <div className="max-w-4xl mx-auto py-8"></div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-8">
            <p className="text-lg font-semibold mb-8">
              Search & Find your next academic journey with our cutting-edge job
              board tailored exclusively for higher education, researchers, and
              staff professionals. Whether you're pursuing faculty roles,
              post-doctoral fellowships, or staff positions, our platform
              seamlessly connects you with an array of exciting opportunities
              within universities and research institutions worldwide.
            </p>
            <h2 className="text-2xl font-bold mb-4">How It Benefits You:</h2>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-2">
                <span className="font-bold">Efficient Search Tools:</span>{' '}
                Utilize our advanced search filters to streamline your search
                based on location, discipline, and job category, ensuring you
                find the perfect fit for your expertise.
              </li>
              <li className="mb-2">
                <span className="font-bold">Stay Ahead of the Curve:</span> Set
                up customized alerts to stay informed about the latest openings
                in your field, empowering you to stay ahead of the competition.
              </li>
              <li>
                <span className="font-bold">Seamless Application Process:</span>{' '}
                Submit your applications directly through our platform and
                effortlessly track your application status, simplifying the
                entire application process.
              </li>
            </ol>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="mb-4">
              From renowned institutions in the United States and the United
              Kingdom to burgeoning research hubs across Asia and Europe, we
              meticulously curate a diverse range of academic positions to
              elevate your career trajectory. Our wealth of resources and expert
              guides provide invaluable support at every stage of your job
              search, equipping you with the tools and knowledge needed to seize
              your next career opportunity with confidence.
            </p>
          </div>
        </div>
        <div className="container alert mt-16 bg-emerald-100 text-xl mx-4">
          <span>
            <strong>Are you a recruiter?</strong> Try our{' '}
            <Link
              className="link link-aj text-xl"
              href="/quick-job-post-technology"
            >
              Quick Job Post Technology
            </Link>{' '}
            now and see how we make your life easier!
          </span>
          <div className="ml-auto">
            <Link href="/post-a-job" className="btn btn-sm btn-aj">
              Quick Job Post
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
