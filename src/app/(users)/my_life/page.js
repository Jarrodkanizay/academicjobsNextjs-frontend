'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SearchResults1 from '@/components/SearchResults1';
import { useSearchParams } from 'next/navigation';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import JobSearchBox2 from '@/components/JobSearchBox2';
import JobSearchBox3 from '@/components/JobSearchBox3';
import { filterType } from '@/utils/data';
import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import { useSession } from 'next-auth/react';
export default function Page() {
  const { data: session} = useSession();
  console.log("userId", session.user.id)
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: favorites,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteJobs', {
        userId: session.user.id,
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    // enabled: category !== '',
  });
  return (
    <main>
      <div className="full-width md:h-[120px] h-[120px] gradient-aj">
        <section className="wrapper md:flex">
          <h2 className="sentence ">
            <span className="mr-8">Find</span>{' '}
            <span className="md:hidden block">
              <br />
            </span>
            <div className="slidingVertical ">
              <span>Opportunity</span>
              <span>Connections</span>
              <span>Happiness</span>
              <span>Opportunity</span>
              <span>Connections</span>
            </div>
          </h2>
        </section>
      </div>
      <h1 className="max-w-5xl mx-auto text-center">My Life, My Profile</h1>
      <div className=" mx-auto max-w-5xl  flex flex-col  ">
        {
          favorites?.length > 0 && (
            <div className="md:flex md:gap-4 md:flex-wrap pb-2">
              {favorites.map(({  jobId }, i) => (
                <p
                  key={i}
                  className="btn  btn-xs bg-blue-900 text-white "
           
                >
                  {`${jobId}`}
                </p>
              ))}
            </div>
          )
        }
      </div>
    </main>
  );
}
