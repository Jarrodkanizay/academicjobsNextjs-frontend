'use client';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';


import Link from 'next/link';
import React from 'react';

// const jobs = [
//   {
//     id: 108717,
//     title: 'Vice President of Academic Affairs',
//     company_name: 'Nicolet College',
//     address: '5364 College Dr, Rhinelander, WI 54501, USA',
//     date: 'Apr 22, 2024',
//     more_info_link: 'https://apptrkr.com/5145101',
//   },
//   {
//     id: 108717,
//     title: 'Vice President of Academic Affairs',
//     company_name: 'Nicolet College',
//     address: '5364 College Dr, Rhinelander, WI 54501, USA',
//     date: 'Apr 22, 2024',
//     more_info_link: 'https://apptrkr.com/5145101',
//   },
//   {
//     id: 108717,
//     title: 'Vice President of Academic Affairs',
//     company_name: 'Nicolet College',
//     address: '5364 College Dr, Rhinelander, WI 54501, USA',
//     date: 'Apr 22, 2024',
//     more_info_link: 'https://apptrkr.com/5145101',
//   },
//   {
//     id: 108717,
//     title: 'Vice President of Academic Affairs',
//     company_name: 'Nicolet College',
//     address: '5364 College Dr, Rhinelander, WI 54501, USA',
//     date: 'Apr 22, 2024',
//     more_info_link: 'https://apptrkr.com/5145101',
//   },
// ];

const TopJobs = () => {
    const {
    data: jobs,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['job'],
    queryFn: async () => {
      const response = await BaseApi.get(`/getTopJobs`);
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    // enabled: id,
  });
  return (
    <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
      { jobs?.length >0 && jobs.map((job, index) => (
        <div className="column" key={index}>
          <ul>
            <li className="mb-1 mt-4 hover:underline">
              <Link
                href={`/jobs/${job.company_name}/${job.id}`}
                className="text-blue-500 font-bold"
              >
                {job.title}
              </Link>
            </li>
            <ul className="innerUL">
              <li>
                <span>{job.company_name}</span>
              </li>
              <li>
                <span>{job.location}</span>
              </li>
              <li>
                <span>{job.activation_date}</span>
              </li>
              <Link
                href={job.how_to_apply}
                className="btn btn-sm btn-aj mt-4"
                target="_blank"
              >
                More Info
              </Link>
            </ul>
          </ul>
        </div>
      ))}
    </div>
  );
};


export default TopJobs;
