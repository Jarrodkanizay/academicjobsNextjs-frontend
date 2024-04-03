// src/app/city/page.tsx
import { useState, useEffect } from 'react';
import { specialtyJobsData } from '@/data/specialtyJobsData';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
// import { formatDate } from '@/utils/utilityScripts';
import PaginationControls from '@/components/PaginationControls';
import SearchFilter from '@/components/searchAndFilter/SearchAndFilter';

// import CityLogo from '@/components/CityLogo';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Unlock Your Potential: The World of Specialty Jobs Awaits You!`,
  description: `Discover exciting career opportunities and pathways in specialty jobs. Explore expert insights, education requirements, and career outlooks to kickstart your journey.`,
  keywords: `specialty jobs, career opportunities, specialty job education, career outlook, specialty job skills, specialty job market, job prospects, specialty job industries, specialty job sectors, career growth, professional development`,
};

export default function SpecialtyJobs({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const routeName = 'specialty-jobs';
  const routePath = `/${routeName}/`;
  const topListCount = 6; // Number of items to show in the top list

  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredData, setFilteredData] = useState(specialtyJobsData);

  // Pagination setting
  const page = searchParams['page'] ?? '1';
  const per_page = 12;
  const offset = page === '1' ? topListCount : 0;
  // const start = (Number(page) - 1) * Number(per_page) + offset; // 5, 12, 24 ...
  const start = (Number(page) - 1) * Number(per_page); // 5, 12, 24 ...
  const end = start + Number(per_page);
  const entries = specialtyJobsData.slice(start, end);

  //   const page = parseInt(searchParams['page'] as string) || 1;
  // const per_page = 12;
  // const offset = page === 1 ? 6 : 0; // Adjust if needed
  // const start = (page - 1) * per_page + offset;
  // const end = start + per_page;
  // const paginatedEntries = filteredData.slice(start, end);

  return (
    <main className="content-grid">
      <HeroBanner
        h1="Discover Your Potential with Specialty Careers: Where Expertise Thrives"
        h2="Learn about the wide range of Specialty Careers you could dive into."
        para1="Uncover the boundless opportunities awaiting you in the realm of specialty careers. From emerging fields to established niches, there's a diverse array of paths where expertise flourishes and passions ignite. Explore the dynamic landscape of specialty careers and embark on a journey of discovery."
        para2="Delve into the expansive world of specialty careers and broaden your horizons. With a myriad of options spanning various industries and disciplines, there's something for everyone seeking to carve out a unique niche in their professional journey. Explore, learn, and envision the possibilities that await in specialty careers."
        src="/specialty-jobs/marine-biology-program.jpg"
        alt="The World's Leading Cities for Academic Excellence and Innovation"
        btnPrimaryText="Find Jobs in Your City"
        btnPrimaryURL="/jobs"
        reorder={false}
      />
      {/* <CityLogo /> */}
      {/* <Image
        src={getCityLogo('Melbourne', 'Australia')}
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        width={800}
        height={800}
      /> */}
      <h2 className="underline-full mb-8 text-2xl sm:text-3xl">
        Top Specialty Jobs and Disciplines
      </h2>

      {specialtyJobsData ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {specialtyJobsData.slice(0, topListCount).map((post, index) => (
              <article
                key={index}
                className="card card-side bg-slate-100 shadow-xl flex flex-col lg:flex-row"
              >
                <figure className="rounded-b-none rounded-t-lg lg:rounded-l-lg lg:rounded-r-none overflow-hidden">
                  <Link href={routePath + post.slug}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image_url}
                      alt={post.alt}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </figure>
                <div className="card-body lg:max-w-[380px]">
                  <h2 className="card-title grow line-clamp-3 m-0 mb-8">
                    <Link
                      href={routePath + post.slug}
                      className="hover:text-orange-500 text-xl"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="h-[100px] relative line-clamp-3 m-0">
                    {post.description}
                    <div className="blog-gradient"> </div>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={routePath + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      More about {post.city}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 mt-10">
            <iframe
              className=" aspect-video  rounded-3xl"
              src="https://www.youtube.com/embed/bEEmo_KhOOk?si=yiNtzXaYyASiWU8W"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/hSbjVkmSIrc?si=qeq_VAZ3ZEQpWhjh"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/yn-ctFDfI60?si=REwYQIJFPBm6NnXm"
              title="YouTube video player"
            ></iframe>
          </div> */}

          {specialtyJobsData.length > topListCount ? (
            <>
              <h2
                id="pagination"
                className="underline-full mt-16 mb-8 text-2xl sm:text-3xl"
              >
                More Amazing Specialties: Learn about unique, unusual and common
                disciplines
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
                {/* {specialtyJobsData.slice(topListCount).map((post, index) => ( */}
                {entries.map((post, index) => (
                  <article
                    key={index}
                    className={`filter-item card bg-slate-100 shadow-xl image-full items-stretch relative`}
                    style={{
                      backgroundImage: `url(${post.image_url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    data-city={post.city}
                    // data-categories={post.categories}
                    data-region={post.region}
                    data-country={post.country}
                    data-universities={post.uniList}
                    data-nobel-laureates={post.nobelList}
                  >
                    <figure className="aspect-w-16 aspect-h-9">
                      <Link href={routePath + post.slug}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image_url}
                          alt={post.alt}
                          // width={1600}
                          // height={900}
                        />
                      </Link>
                    </figure>
                    <div className="card-body p-6">
                      <h2 className="card-title line-clamp-3 leading-tight">
                        <Link
                          href={routePath + post.slug}
                          className="text-white hover:text-orange-500 text-lg"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="card-actions justify-end mt-auto">
                        <Link
                          href={routePath + post.slug}
                          className="btn btn-aj btn-sm"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <PaginationControls
                hasNextPage={end < specialtyJobsData.length}
                hasPrevPage={start > topListCount}
                pagePath={routeName}
                itemCount={specialtyJobsData.length}
                limitPerPage={per_page}
              />
            </>
          ) : null}
          {/* <SearchFilter /> */}
        </>
      ) : (
        <div>
          Something went wrong loading our Specialty content. Please try
          reloading?
        </div>
      )}
    </main>
  );
}
