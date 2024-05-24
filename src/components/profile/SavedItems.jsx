import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox2 from '@/components/JobSearchBox2';
import SearchResults2 from '@/components/SearchResults2';
import { BaseApi } from '@/lib/store/Base';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const SavedItems = ({ favoriteJobs, favoriteEmployers }) => {
  const queryClient = useQueryClient();

  const mutationJob = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteJobId', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('favoriteJobs');
    },
  });

  const mutationEmployer = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteEmployerId', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('favoriteEmployers');
    },
  });

  return (
    <div>
      <section className="md:flex">
        <div className="md:w-2/3 w-full">
          {favoriteJobs?.length > 0 && (
            <>
              <h3>Jobs</h3>
              {favoriteJobs.map(({ userId, jobId, job: { title, employer: { company_name, logo } } }, i) => (
                <div key={i} className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                  <figure className="mr-2">
                    <Image
                      width={100}
                      height={100}
                      src={logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` : '/favicon.png'}
                      alt=""
                    />
                  </figure>
                  <div className="flex flex-col justify-center">
                    <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">{title}</h3>
                    <p className="font-bold">{company_name}</p>
                  </div>
                  <div className="flex flex-col justify-center ml-auto gap-2">
                    <Link
                      className="btn btn-accent"
                      href={`/jobs/${title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-')}/${jobId}`}
                    >
                      Job Post
                    </Link>
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        const mode = 'remove';
                        mutationJob.mutate({ jobId, userId, mode });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
          {favoriteEmployers?.length > 0 && (
            <>
              <h3>Employers</h3>
              {favoriteEmployers.map(({ userId, employer: { id: employerId, company_name, logo } }, i) => (
                <div key={i} className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                  <figure className="mr-2">
                    <Image
                      width={100}
                      height={100}
                      src={logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` : '/favicon.png'}
                      alt=""
                    />
                  </figure>
                  <div className="flex flex-col justify-center">
                    <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">{company_name}</h3>
                  </div>
                  <div className="flex flex-col justify-center ml-auto gap-2">
                    <Link
                      className="btn btn-accent"
                      href={`/employers/${company_name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-')}/${employerId}`}
                    >
                      Employer Profile
                    </Link>
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        const mode = 'remove';
                        mutationEmployer.mutate({ employerId, userId, mode });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="md:w-1/3 w-full md:m-4 p-2">
          <div className="listings_content">
            <div className="">
              <JobSearchBox2 />
            </div>
            <SearchResults2 q={{ q: '', l: '' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SavedItems;
