'use client';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { StarRank } from '@/components/StarRank';

const JobOfTheWeek = () => {
    const jobData = [
        {
            company_name: "Bond University",
            logo: "bond-logo.webp",
            title: "Appointment of Executive Dean (Level E) | Bond Business School",
            ranking: 5,
            location: "14 University Dr, Robina QLD 4226, Australia",
            jobPostLink: "/jobs/appointment-of-executive-dean-level-e-bond-business-school/111856",
            employerLink: "/employers/bond-university/3785",
            applyNowLink: "https://www.academicjobs.com/jobs/appointment-of-executive-dean-level-e-bond-business-school/111856"
        },
        {
            company_name: "Bond University",
            logo: "bond-logo.webp",
            title: "Professor / Associate Professor of Genetics (Level E / Level D)",
            ranking: 5,
            location: "14 University Dr, Robina QLD 4226, Australia",
            jobPostLink: "/jobs/professor-associate-professor-of-genetics-level-e-level-d-/115945",
            employerLink: "/employers/bond-university/3785",
            applyNowLink: "https://bond.edu.au/jobs/8139/professor-associate-professor-of-genetics-level-e-level-d"
        },
        {
            company_name: "Bond University",
            logo: "bond-logo.webp",
            title: "Student Administration and Compliance Officer",
            ranking: 5,
            location: "14 University Dr, Robina QLD 4226, Australia",
            jobPostLink: "/jobs/student-administration-and-compliance-officer/117741",
            employerLink: "/employers/bond-university/3785",
            applyNowLink: "https://bond.edu.au/jobs/7811/student-administration-and-compliance-officer"
        },
        {
            company_name: "Bond University",
            logo: "bond-logo.webp",
            title: "International Student Transition Project Officer",
            ranking: 5,
            location: "14 University Dr, Robina QLD 4226, Australia",
            jobPostLink: "/jobs/international-student-transition-project-officer/117740",
            employerLink: "/employers/bond-university/3785",
            applyNowLink: "https://bond.edu.au/jobs/8146/international-student-transition-project-officer"
        },    ];

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
                                                <h3 className="flex-1 text-2xl font-bold mb-2 text-black">{job.title}</h3>
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
                                            <Link href={job.applyNowLink} className="btn btn-aj">
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
    };export default JobOfTheWeek;
