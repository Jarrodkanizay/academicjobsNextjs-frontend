'use client';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { StarRank } from '@/components/StarRank';

const JobOfTheWeek = () => {

    const company_name = "Bond University"
    const logo = "bond-logo.webp"
    const title = "Professor / Associate Professor of Genetics (Level E / Level D)"
    const ranking = 5
    const location = "14 University Dr, Robina QLD 4226, Australia"
    const jobPostLink = "/jobs/professor-associate-professor-of-genetics-level-e-level-d-/115945"
    const employerLink = "/employers/bond-university/3785"
    const applyNowLink = "https://bond.edu.au/jobs/8139/professor-associate-professor-of-genetics-level-e-level-d"

    return (
        <div className="w-full mx-auto mb-8">
            <div className="bg-white relative content-grid mx-auto">
                <div className=" full-width">
                    <div className="md:flex p-4 gap-8">
                        <div className="flex justify-center">
                            <Link
                                href={employerLink}
                            >
                                <div
                                    className={`rounded-lg p-4`}
                                >
                                    <img
                                        src={logo}
                                        alt={company_name}
                                        width={170}
                                        height={170}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="w-[85%]">
                            <a href={jobPostLink} className="flex">
                                <h1 className="flex-1 text-2xl font-bold mb-2 text-black">{title}</h1>
                            </a>

                            <div className="job_post_header_panel text-sm text-gray-600">
                                <h3 className="company_name">{company_name}</h3>
                                <section>
                                    <h4 className="text-gray-700 font-light text-sm m-0">
                                        {location}
                                    </h4>
                                </section>
                                <section className="ranking flex flex-row pb-2">
                                    <StarRank ranking={ranking} />

                                </section>

                            </div>

                            <div className="flex items-center justify-start md:gap-[0.5rem] gap-2 max-[395px]:ml-[-17px]">
                                    <Link href={applyNowLink} className="btn btn-aj">
                                        Apply Now
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobOfTheWeek;
