import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox2 from '@/components/JobSearchBox2';
import SearchResults2 from '@/components/SearchResults2';

const SavedItems = ({ favorites, favoriteEmployers }) => {
  return (
    <div>
      <section className="flex">
        {/* <aside className="side_nav hidden">
          <ProfileSideNav />
        </aside> */}
        <div className="w-2/3">
          
          {favorites?.length > 0 &&
            favorites.map(
              (
                {
                  jobId,
                  job: {
                    title,
                    employer: { company_name, logo },
                  },
                },
                i
              ) => (
                <><h2>Jobs</h2>
                <div key={i} className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                        <figure className="mr-2">
                            <Image
                                width={100}
                                height={100}
                                src={logo
                                    ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
                                    : '/favicon.png'}
                                alt="" />
                        </figure>
                        <div className="flex flex-col justify-center">
                            <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">
                                {title}
                            </h3>
                            <p className="font-bold">{company_name}</p>
                            <p className="flex flex-row items-center gap-6">
                                <span className="flex flex-row items-center gap-1">
                                    <Image
                                        src={'/icons/map-marker-icon.svg'}
                                        width={24}
                                        height={24}
                                        alt="" />
                                    Location
                                </span>
                                <span className="flex flex-row items-center gap-1">
                                    <Image
                                        src={'/icons/dollar-bills.svg'}
                                        width={24}
                                        height={24}
                                        alt="" />
                                    Salary
                                </span>
                                <span className="flex flex-row items-center gap-1">
                                    <Image
                                        src={'/icons/clock.svg'}
                                        width={24}
                                        height={24}
                                        alt="" />
                                    14 April 2024
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center ml-auto gap-2">
                            <button className="btn btn-error">Remove</button>
                            <Link
                                className="btn btn-accent"
                                href={`/jobs/${title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-')}/${jobId}`}
                            >
                                Job Post
                            </Link>
                        </div>
                    </div></>
              )
            )}
          {favoriteEmployers?.length > 0 &&
            favoriteEmployers.map(
              (
                {
                  employerId,
                  company_name,
                  logo
                },
                i
              ) => (
                <><h2>Employers</h2><div key={i} className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                        <figure className="mr-2">
                            <Image
                                width={100}
                                height={100}
                                src={logo
                                    ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
                                    : '/favicon.png'}
                                alt="" />
                        </figure>
                        <div className="flex flex-col justify-center">
                            <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">
                                {company_name}
                            </h3>
                            <p className="font-bold">{company_name}</p>
                            <p className="flex flex-row items-center gap-6">
                                <span className="flex flex-row items-center gap-1">
                                    <Image
                                        src={'/icons/map-marker-icon.svg'}
                                        width={24}
                                        height={24}
                                        alt="" />
                                    Location
                                </span>
                                <span className="flex flex-row items-center gap-1">
                                    <Image
                                        src={'/icons/dollar-bills.svg'}
                                        width={24}
                                        height={24}
                                        alt="" />
                                    Salary
                                </span>
                                <span className="flex flex-row items-center gap-1">
                                    <Image
                                        src={'/icons/clock.svg'}
                                        width={24}
                                        height={24}
                                        alt="" />
                                    14 April 2024
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col justify-center ml-auto gap-2">
                            {/* <button className="btn btn-error">Remove</button> */}
                            <Link
                                className="btn btn-accent"
                                href={`/employer/${employerId}`}
                            >
                                Job Post
                            </Link>
                        </div>
                    </div></>
              )
            )}
        </div>
        <div className="w-1/3 m-4 p-2">
          <div className="listings_content">
            <div className="search_panel">
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
