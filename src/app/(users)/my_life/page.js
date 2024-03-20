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
import {  useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

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
      const response = await BaseApi.post('/filters', {
        category,
        filter1,
        q,
        l,
        mode: 'normal',
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: category !== '',
  });


  return (
   
      <main>
      <div className=" mx-auto max-w-5xl  flex flex-col  ">
        {/* {
         
          filter1.length > 0 && (
            <div className="md:flex md:gap-4 md:flex-wrap pb-2">
              {filter1.map(({ category, filter }, i) => (
                <button
                  key={i}
                  className="btn  btn-xs bg-blue-900 text-white "
                  onClick={() => {
                    const updatedFilter = filter1.filter(
                      (_, index) => index !== i
                    );
                    setPage(0);

                    setfilter(updatedFilter);
                    setCategory("")
                    //dispatch(setfilter(updatedFilter));
                  }}
                >
                  {`${filter} X`}
                </button>
              ))}
            </div>
          )
        } */}
      </div>
      </main>
   
  );
}
