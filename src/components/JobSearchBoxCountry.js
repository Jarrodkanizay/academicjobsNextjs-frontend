'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { toURLParams, loadFromURLParams } from '@/utils/urlParams';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import JobKeywordSearchBlock from '@/components/JobKeywordSearchBlock';
export default function JobSearchBoxCountry({ country }) {
  const router = useRouter();
  console.log(
    'loadFromURLParams(searchParams)',
    loadFromURLParams(useSearchParams())
  );
  const searchParams = loadFromURLParams(useSearchParams());
  console.log(
    'loadFromURLParams(searchParams)',
    loadFromURLParams(useSearchParams())
  );
  const countryMap = {
    UK: 'United Kingdom',
    Australia: 'Australia',
    Canada: 'Canada',
    USA: 'United States',
  };
  const { setQ, q, setRegion, setFilter1, reset } = useStore();
  useEffect(() => {
    setRegion(countryMap[country]);
  }, []);
  const keyWordRef = useRef(null);
  const cfRef = useRef(null);
  const onEditorStateSelect = (category, filter) => {
    if (filter == 'All Indigenous Jobs in Australia') {
      keyWordRef.current = 'Indigenous'
      return
    }
    cfRef.current = { category, filter };
    console.log(category, filter);
  };
  const onInputChange = (inputText) => {
    keyWordRef.current = inputText;
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // const a = {};
    // if (keyWordRef.current && keyWordRef.current.value.trim()) {
    //   a.q = keyWordRef.current.value.trim();
    // }
    // const params = new URLSearchParams({
    //   l: encodeURIComponent(country),
    //   q: encodeURIComponent(a.q || ''),
    // });
    // router.push(
    //   `/jobs-advanced-search?${toURLParams({
    //     ...searchParams,
    //     r: countryMap[country],
    //     q: keyWordRef.current.value.trim(),
    //   })}`,
    //   { scroll: false }
    // );
    //router.push(`/jobs-advanced-search?l=${country}`);
    let q3 = ""
    if (cfRef.current) {
      q3 = `&filter0=[{"category":"${cfRef.current.category}","filter":"${cfRef.current.filter}"}]`
    } else {
      if (keyWordRef?.current?.trim()) {
        q3 = `&q=${keyWordRef?.current?.trim()}`
      }
    }
    router.push(`/jobs-advanced-search?r=${country}&${q3}`);
  };
  return (
    <div className="flex flex-col gap-2">
      <form className="flex flex-col gap-1 items-center md:items-end w-full" onSubmit={handleFormSubmit}>
        <div className="relative flex flex-col md:flex-row md:gap-2 md:gap-0 mx-18 w-full mt-5 md:border rounded-t-lg md:rounded-lg p-2 md:shadow-md">
          <div className="relative z-50 flex-grow flex items-center"> {/* Ensure the container is flex and items-center */}
            <JobKeywordSearchBlock
              forceClass="mb-6"
              onSelect={onEditorStateSelect}
              onInputChange={onInputChange}
              className="w-full"
            />
          </div>
          <button
            className="h-[50px] ml-auto px-4 py-2 bg-[#f4a10c] w-full md:w-auto text-white rounded-md rounded-b-lg hover:bg-orange-600 animate-pulse font-bold shadow-md"
            type="submit"
          >
            Search In {country}
          </button>
        </div>
      </form>
      <button
        className=" self-end underline text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
        onClick={async (e) => {
          e.preventDefault();
          const params = new URLSearchParams({
            // lon: encodeURIComponent(lonlat.current?.lon),
            // lat: encodeURIComponent(lonlat.current?.lat),
            q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
          });
          setRegion('Global');
          reset();
          if (keyWordRef.current && keyWordRef.current.value.trim()) {
            setQ(keyWordRef.current.value.trim());
          } else {
            setQ('');
          }
          setFilter1([]);
          router.push(`/jobs-advanced-search`);
        }}
      >
        Or Search Globally
      </button>
    </div>
  );
}
