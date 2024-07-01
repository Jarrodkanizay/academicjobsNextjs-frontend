'use client';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { StarRank } from '@/components/StarRank';

const JobOfTheWeek = ({ jobsList: any }) => {
  let jobData;
  if (jobsList) {
    jobData = jobsList;
  } else {
    jobData = [
      {
        company_name: 'Australian National University (ANU)',
        title: 'Associate Research Fellow',
        ranking: 5,
        location: 'Canberra ACT 2601, Australia',
        jobPostLink: '/jobs/associate-research-fellow/123216',
        employerLink: '/employers/australian-national-university-anu-/3739',
        applyNowLink:
          'https://jobs.anu.edu.au/jobs/associate-research-fellow-canberra-act-act-australia',
      },
      {
        company_name: 'Queensland University of Technology (QUT)',
        title: 'Executive Dean, Faculty of Indigenous Knowledges and Culture',
        ranking: 5,
        location: 'Kelvin Grove QLD 4059, Australia',
        jobPostLink:
          '/jobs/executive-dean-faculty-of-indigenous-knowledges-and-culture/129914',
        employerLink:
          '/employers/queensland-university-of-technology-qut-/3786',
        applyNowLink:
          '/jobs/executive-dean-faculty-of-indigenous-knowledges-and-culture/129914',
      },
      {
        company_name: 'Queensland University of Technology (QUT)',
        title: 'Principal HR Partner',
        ranking: 5,
        location: 'Kelvin Grove QLD 4059, Australia',
        jobPostLink: '/jobs/principal-hr-partner/131056',
        employerLink:
          '/employers/queensland-university-of-technology-qut-/3786',
        applyNowLink:
          'https://qut.nga.net.au/cp/index.cfm?event=jobs.checkJobDetailsNewApplication&returnToEvent=jobs.listJobs&jobid=C63CB99A-2266-9C42-1B0D-DAD5A7949E07&CurATC=EXT&CurBID=1877E01E%2D78DD%2D4ED2%2D9D7A%2D9DB40135CFF4&JobListID=22fc4f47%2De994%2D46a3%2Db8c9%2D9bc901269f43&jobsListKey=88db6b26%2D44b9%2D4904%2D9ea3%2De03326670378&persistVariables=CurATC,CurBID,JobListID,jobsListKey,JobID&lid=64736390058&rmuh=3D3CDB0C501CD287054F6AE8883D5D502AF87D53',
      },
      {
        company_name: 'Queensland University of Technology (QUT)',
        title: 'Sessional Academic Pool (Law)',
        ranking: 5,
        location: 'Kelvin Grove QLD 4059, Australia',
        jobPostLink: '/jobs/sessional-academic-pool-law-/131064',
        employerLink:
          '/employers/queensland-university-of-technology-qut-/3786',
        applyNowLink:
          'https://qut.nga.net.au/cp/index.cfm?event=jobs.viewDisplayOnlyJobDetails&returnToEvent=jobs.listJobs&jobid=80E2854B-378B-4CCF-AD0F-B18B00EBABB5&CurATC=EXT&CurBID=1877E01E%2D78DD%2D4ED2%2D9D7A%2D9DB40135CFF4&JobListID=22fc4f47%2De994%2D46a3%2Db8c9%2D9bc901269f43&jobsListKey=88db6b26%2D44b9%2D4904%2D9ea3%2De03326670378&persistVariables=CurATC,CurBID,JobListID,jobsListKey&lid=64736390008&rmuh=18B96F13A08A836AB65C97B087F13A078C0C7823',
      },
    ];
  }

  return (
    <div className="w-full mx-auto mb-8">
      <div className="bg-white relative content-grid mx-auto">
        <div className="full-width">
          <div className="flex flex-wrap -mx-4">
            {jobData.map((job, index) => (
              <div key={index} className="w-full md:w-1/4 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between relative">
                  {/* <Link href={job.employerLink}>
                                            <div className="rounded-lg p-4 flex justify-center">
                                                <img
                                                    src={job.logo}
                                                    alt={job.company_name}
                                                    width={170}
                                                    height={170}
                                                />
                                            </div>
                                        </Link> */}
                  <div className="w-full flex-1">
                    <a href={job.jobPostLink} className="flex">
                      <h3 className="flex-1 text-2xl font-bold mb-2 text-black">
                        {job.title}
                      </h3>
                    </a>

                    <div className="job_post_header_panel text-sm text-gray-600 mb-16">
                      <h3 className="company_name">{job.company_name}</h3>
                      <section>
                        <h4 className="text-gray-700 font-light text-sm m-0">
                          {job.location}
                        </h4>
                      </section>
                      <section className="ranking flex flex-row pb-2">
                        <StarRank ranking={job.ranking} />
                      </section>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Link
                      href={job.applyNowLink}
                      className="btn btn-aj"
                      target="_blank"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobOfTheWeek;
