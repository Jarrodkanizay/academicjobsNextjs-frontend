'use client';
import React from 'react';
import SearchResults3 from '@/components/SearchResults3';
import SearchResults from '@/components/SearchResults';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
import { useSearchParams } from 'next/navigation';

import JobTypeFaces from '@/components/JobTypeFaces';
export default function Page() {
  const searchParams = loadFromURLParams(useSearchParams());
  const size = 180;
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      //link: `/faculty`,
      link: `/faculty?r=Global&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`,
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
      // link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      //link: `/hr-jobs`,
      link: `/hr-jobs?r=Global&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]`,
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      //link: `/phd`,
      link: `/phd?r=Global&filter0=[{"category":"PositionType","filter":"Student / Phd Jobs"}]`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      //link: `/admin`,
      link: `/admin?r=Global&filter0=[{"category":"master_category_job_type","filter":"Staff / Administration"}]`,
    },
  ];
  return (
    <>
      <main>
        <div className="w-full gradient-aj py-4 mb-4 mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white">University & Higher Ed Jobs</h1>
            <p>
              Seek all university & higher ed jobs in prestigious universities
              around the world. You can find all university lecturer, professor,
              academic instructors, here…
            </p>
          </div>
        </div>
        <JobTypeFaces items={items} size={size} />
        <AdvancedSearchBar forceClass="block" type="advancedSearch" />
        <section class="jobs_grid job_post_search_container">
          <div class="filters_panel">
            <div class="filters_content">
              <div className="md:block hidden">
                <SearchResults
                  q={{
                    filter1: [
                      { category: 'postRegion', filter: searchParams.r },
                    ],
                  }}
                  filterOff={true}
                  lefthandView={true}
                />
              </div>
              <JobFilter />
            </div>
          </div>
          <div class="listings_panel">
            <div class="listings_content">
              <SearchResults3 />
              {/* <SearchResults1 q={{ q: q, l: l || '', lon, lat, filter1 }} /> */}
            </div>
            <div className="block md:hidden">
              <SearchResults
                q={{
                  filter1: [{ category: 'postRegion', filter: searchParams.r }],
                }}
                filterOff={true}
                lefthandView={true}
              />
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
