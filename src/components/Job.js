import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Job = ({ job, lefthandView }) => {
  const router = useRouter();
  const {
    employer_id,
    title,
    location,
    activation_date,
    expiration_date,
    how_to_apply,
    logo,
    company_name,
    salary_from,
    salary_to,
    master_category_job_type,
    currency,
    featured,
    id,
  } = job;
  console.log({ 'new Date(expiration_date)': new Date(expiration_date).setHours(0, 0, 0, 0), 'new Date()': new Date().setHours(0, 0, 0, 0) })
  return (
    <article
      className={`listing ${lefthandView ? 'bg-gray-100 border border-gray-300 p-4 mb-4 rounded-xl shadow-md narrow-card' : 'bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg'}`}
      style={{ marginTop: lefthandView ? '0' : '' }}
    >
      {featured ? (
        <div className="badge badge-sm badge-featured bg-[#f4a10c] text-white absolute top-[-0.3rem] right-[-0.3rem] border-transparent items-end pt-4 shadow-md">
          Featured
        </div>
      ) : null}

      {lefthandView ? (

        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4">
            <Link href={`/employers/${company_name.replace(/\W+/g, '-').toLowerCase()}/${employer_id}/`}>
              <Image
                src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` || '/favicon.png'}
                width={100}
                height={100}
                alt={company_name}
                className="w-full h-full object-contain rounded-lg"
              />
            </Link>
          </div>
          <Link className="block text-blue-500 text-xl font-bold leading-tight hover:underline cursor-pointer mb-2" href={`/jobs/${title.replace(/\W+/g, '-').toLowerCase()}/${id}/`}>
            {title}
          </Link>
          <div className="text-sm text-gray-600 mb-4">{company_name}</div>
          <div className="applications-close border-2 rounded px-2 mt-1 mx-auto w-max">
            <p className="text-center text-gray-400 text-sm mb-0">Closes</p>
            <div className="text-sm">
              {expiration_date ? (
                <time>
                  {new Date(expiration_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              ) : (
                <p className="text-center mb-0">NA</p>
              )}
            </div>
          </div>
          {(new Date(expiration_date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) && expiration_date && (
            <div className="bg-opacity-50 bg-red-500 text-white text-sm px-1 py-1 rounded-full absolute top-[2%] left-[66%] transform -translate-y-1/2 skew-y-0">
              Job Fulfilled By AcademicJobs.com
            </div>
          )}
        </div>
      ) : (
        <>

          <div className="flex items-center mb-2">
            <div className="w-20 h-20 mr-4">
              <Link href={`/employers/${company_name.replace(/\W+/g, '-').toLowerCase()}/${employer_id}/`}>
                <Image
                  src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` || '/favicon.png'}
                  width={100}
                  height={100}
                  alt={company_name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </Link>
            </div>
            <Link className="flex-1 block text-blue-500 text-xl font-bold leading-tight hover:underline cursor-pointer" href={`/jobs/${title.replace(/\W+/g, '-').toLowerCase()}/${id}/`}>
              {title}
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <div className="mb-1">{company_name}</div>
              {location && (
                <div className="text-gray-700 font-light text-sm">
                  &#8226; {location.split(',').length > 2 ? location.substring(location.indexOf(',') + 1).trim() : location}
                </div>
              )}
              {(salary_from && salary_from !== 0) || (salary_to && salary_to !== 0) ? (
                <div className="text-gray-700 font-light text-sm">
                  {(salary_from && salary_from !== 0 && salary_from > 1000) || (salary_to && salary_to !== 0) ? (
                    <>
                      &#8226;
                      {(salary_from && salary_from !== 0 && salary_from > 1000) ? (
                        currency === 'GBP' ? `£${salary_from.toLocaleString()}` :
                          currency === 'EUR' ? `€${salary_from.toLocaleString()}` :
                            ` $${salary_from.toLocaleString()}`
                      ) : ''}
                      {(salary_from && salary_from !== 0) && (salary_to && salary_to !== 0) ? ' - ' : ''}
                      {(salary_to && salary_to !== 0) ? (
                        currency === 'GBP' ? `£${salary_to.toLocaleString()}` :
                          currency === 'EUR' ? `€${salary_to.toLocaleString()}` :
                            ` $${salary_to.toLocaleString()}`
                      ) : ''}
                    </>
                  ) : null}
                </div>
              ) : null}
              {master_category_job_type && (<div className="text-gray-700 font-light text-sm">
                &#8226; {master_category_job_type}
              </div>)}
            </div>
            <div className="applications-close border-2 rounded px-2 mt-1 ml-2">
              <p className="text-center text-gray-400 text-sm mb-0">Closes</p>
              <div className="text-sm">
                {expiration_date ? (
                  <time>
                    {new Date(expiration_date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                ) : (
                  <p className="text-center mb-0">NA</p>
                )}
              </div>
            </div>
              {(new Date(expiration_date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) && expiration_date && (
              <div className="bg-opacity-50 bg-red-500 text-white text-sm px-1 py-1 rounded-full absolute top-[2%] left-[66%] transform -translate-y-1/2 skew-y-0">
                Job Fulfilled By AcademicJobs.com
              </div>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default Job;
