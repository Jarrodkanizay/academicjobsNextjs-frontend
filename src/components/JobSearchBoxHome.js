'use client';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
import { countryMappings, countryMappings1 } from '@/lib/data/data';
import useURLParams from '@/utils/urlParams';
import JobKeywordSearchBlock from '@/components/JobKeywordSearchBlock';
export default function JobSearchBox() {
  const countryMap = {
    UK: 'United Kingdom',
    Australia: 'Australia',
    Canada: 'Canada',
    USA: 'United States',
  };
  const keyWordRef = useRef(null);
  const cfRef = useRef(null);
  const linkRef = useRef(null);
  const router = useRouter();
  let region = 'Australia';
  const { r = 'Global' } = useURLParams();
  const onEditorStateSelect = (category, filter,link) => {
    if (link) {
      linkRef.current = link;
      return
    }
    linkRef.current = null;
    cfRef.current = { category, filter }
    console.log(category, filter)
  };
  const onInputChange = (inputText) => {
    keyWordRef.current = inputText
   
  };

  const handleFormSubmit = async () => {
    event.preventDefault();
    const a = {};
    // alert('1' + r);
    // alert('21' + r);
    // if (  r == "") { alert('3' + r);}
    if (r !== 'Global' && r !== "") {
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
        // let q3
        // if (cfRef.current) {
        //   q3 = `filter0=[{"category":"${cfRef.current.category}","filter":"${cfRef.current.filter}"}]`
        // }
        // router.push(`/jobs-advanced-search?r=${country}&${q3}`
        //alert(country)
        if (linkRef.current) {
          const url = linkRef.current;
          //alert(url); // Just for debugging purposes
          window.open(url, '_blank');
          return
        }
        let q3 = ""
        if (cfRef.current) {
          q3 = `&filter0=[{"category":"${cfRef.current.category}","filter":"${cfRef.current.filter}"}]`
        } else {
          if (keyWordRef?.current?.trim()) {
            q3 = `&q=${keyWordRef?.current?.trim()}`
          }
        }
        router.push(`/jobs-advanced-search?r=${country}&${q3}`);
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };
  return (
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
          Search In Your Country
        </button>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="text-gray-400 text-base md:pr-6 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-400 via-green-400 to-sky-300"
          onClick={(e) => {
            e.preventDefault();
            //alert(keyWordRef.current)
            let q3 = ""
            if (cfRef.current) {
              q3 = `&filter0=[{"category":"${cfRef.current.category}","filter":"${cfRef.current.filter}"}]`
            } else {
              if (keyWordRef?.current) {
                q3 = `&q=${keyWordRef?.current}`
              }
            }
            router.push(`/jobs-advanced-search?r=Global&${q3}`);
            //alert(`/jobs-advanced-search?r=Global&${q3}`)
          }}
        >
          Or Search Globally
        </button>
      </div>
    </form>
  );
}
