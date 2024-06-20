'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { countryMappings, countryMappings1 } from '@/lib/data/data';
import useURLParams from '@/utils/urlParams';
export default function JobSearchBox() {
  const countryMap = {
    UK: 'United Kingdom',
    Australia: 'Australia',
    Canada: 'Canada',
    USA: 'United States',
  };
  const keyWordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  let region = 'Australia';
  const { r = 'Global' } = useURLParams();
  
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const a: { q?: string; l?: string } = {};
    // alert('1' + r);
    // alert('21' + r);
    // if (  r == "") { alert('3' + r);}
    if (r !== 'Global' && r!=="" ) {
      //alert(r)
      // const location = (countryMappings1 as any)[region]?.searchLocation || 'Global';
      // const params = new URLSearchParams({
      //   l: encodeURIComponent(location),
      //   q: encodeURIComponent(a.q || ''),
      // });
      // router.push(`/jobs?${params.toString()}`);
      // const country = region;
      // setRegion(country);
      // reset();
      // //alert(1);
      // if (keyWordRef.current && keyWordRef.current.value.trim()) {
      //   a.q = keyWordRef.current.value.trim();
      //   setQ(keyWordRef.current.value.trim());
      // } else {
      //   setQ('');
      // }
      // setFilter1([{ category: 'Country', filter: countryMap[country] }]);
      // router.push(`/jobs-advanced-search?l=${country}`);
      router.push(`/jobs-advanced-search?r=${r}`);
    } else {
      try {
        const response = await fetch(
          'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
        );
        const result = await response.json();
        const country = result.country.name;
        // setRegion((countryMappings1 as any)[country.toLowerCase()] || 'Global');
        // const qValue = a.q || '';
        // const lValue = (countryMappings1 as any)[
        //   (countryMappings as any)[country.toLowerCase()]
        // ]?.searchLocation;
        // //router.push(`/jobs?q=${qValue}&l=${lValue}`);
        // reset();
        // if (keyWordRef.current && keyWordRef.current.value.trim()) {
        //   a.q = keyWordRef.current.value.trim();
        //   setQ(keyWordRef.current.value.trim());
        // } else {
        //   setQ('');
        // }
        // setFilter1([{ category: 'Country', filter: countryMap[country] }]);
        //alert(country);
        router.push(
          `/jobs-advanced-search?r=${country}&q=${keyWordRef.current.value.trim()}`
        );
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  return (
    <form
      className="flex flex-col gap-1 items-center md:items-end w-full"
      onSubmit={handleFormSubmit}
    >
      <div className="flex flex-col md:gap-2 md:flex-row md:gap-0 mx-18 w-full mt-5 md:border rounded-t-lg md:rounded-lg p-2 md:shadow-md">
        <input
          type="text"
          className="flex-grow px-4 py-2 focus:outline-none border rounded-t-lg md:rounded-lg shadow-md md:border-none md:shadow-none text-base bg-white animate-pulse text-center md:text-left"
          placeholder="Type Keywords"
          ref={keyWordRef}
        />
        <button
          className="px-4 py-2 bg-[#f4a10c] text-white md:rounded-md rounded-b-lg hover:bg-orange-600 animate-pulse font-bold shadow-md"
          type="submit"
        >
          Search In Your Country
        </button>
      </div>
      <div className="w-full flex justify-end">
        {/* <button
          className=" underline text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
          onClick={async (event: React.FormEvent) => {
            event.preventDefault();
            const a: { q?: string; l?: string } = {};
            if (keyWordRef.current && keyWordRef.current.value.trim()) {
              a.q = keyWordRef.current.value.trim();
            }
            setRegion('Global');
            const params = new URLSearchParams({
              l: '',
              q: encodeURIComponent(a.q || ''),
            });
            router.push(`/jobs-advanced-search?${params.toString()}`);
          }}
        >
          Advanced Search
        </button> */}
        <button
          className=" text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
          onClick={async (event: React.FormEvent) => {
            event.preventDefault();
            // const a: { q?: string; l?: string } = {};
            // if (keyWordRef.current && keyWordRef.current.value.trim()) {
            //   a.q = keyWordRef.current.value.trim();
            // }
            // setRegion('Global');
            // setFilter1([]);
            // const params = new URLSearchParams({
            //   l: '',
            //   q: encodeURIComponent(a.q || ''),
            // });
            // setRegion('Global');
            // reset();
            // if (keyWordRef.current && keyWordRef.current.value.trim()) {
            //   a.q = keyWordRef.current.value.trim();
            //   setQ(keyWordRef.current.value.trim());
            // } else {
            //   setQ('');
            // }
            // setFilter1([]);
            //router.push(`/jobs-advanced-search`);
            router.push(
              `/jobs-advanced-search?r=Global&q=${keyWordRef.current.value.trim()}`
            );
          }}
        >
          Or Search Globally
        </button>
      </div>
    </form>
  );
}
