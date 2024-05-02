'use client';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';
import React, { useEffect } from 'react';

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
  });

  const handleButtonClick = (jobId) => {
    // Send event to Google Analytics
    window.gtag('event', 'click', {
      'event_category': 'Button Click',
      'event_label': `More Info Button Click - ${jobId}`
    });
    
    console.log("Button clicked");
  };
  

  return (
    <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
      {jobs?.length > 0 && jobs.map((job, index) => (
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
                <span>{new Date(job.activation_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </li>
              <button
                className="btn btn-sm btn-aj mt-4 more-info-btn"
                onClick={() => {
                  window.open(job.how_to_apply, '_blank');
                  handleButtonClick(job.id); 
                }}
              >
                More Info
              </button>
            </ul>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TopJobs;
