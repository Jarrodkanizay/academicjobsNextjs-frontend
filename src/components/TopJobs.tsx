import Link from 'next/link';
import React from 'react';

const jobs = [
  {
    id: 108717,
    title: 'Vice President of Academic Affairs',
    company_name: 'Nicolet College',
    address: '5364 College Dr, Rhinelander, WI 54501, USA',
    date: 'Apr 22, 2024',
    more_info_link: 'https://apptrkr.com/5145101',
  },
  {
    id: 108717,
    title: 'Vice President of Academic Affairs',
    company_name: 'Nicolet College',
    address: '5364 College Dr, Rhinelander, WI 54501, USA',
    date: 'Apr 22, 2024',
    more_info_link: 'https://apptrkr.com/5145101',
  },
  {
    id: 108717,
    title: 'Vice President of Academic Affairs',
    company_name: 'Nicolet College',
    address: '5364 College Dr, Rhinelander, WI 54501, USA',
    date: 'Apr 22, 2024',
    more_info_link: 'https://apptrkr.com/5145101',
  },
  {
    id: 108717,
    title: 'Vice President of Academic Affairs',
    company_name: 'Nicolet College',
    address: '5364 College Dr, Rhinelander, WI 54501, USA',
    date: 'Apr 22, 2024',
    more_info_link: 'https://apptrkr.com/5145101',
  },
];

const TopJobs = () => {
  return (
    <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
    {jobs.map((job, index) => (
        <div className="column">
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
                <span>{job.address}</span>
              </li>
              <li>
                <span>{job.date}</span>
              </li>
              <Link
                href={job.more_info_link}
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
