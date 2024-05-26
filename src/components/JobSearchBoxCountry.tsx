'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useStore } from '@/lib/store/store';
export default function JobSearchBoxCountry({ country }) {
  const countryMap = {
    UK: 'United Kingdom',
    Australia: 'Australia',
    Canada: 'Canada',
    USA: 'United States',
  };
  const { setRegion,setFilter1,reset } = useStore();
  const keyWordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const a: { q?: string; l?: string } = {};
    if (keyWordRef.current && keyWordRef.current.value.trim()) {
      a.q = keyWordRef.current.value.trim();
    }
    const params = new URLSearchParams({
      l: encodeURIComponent(country),
      q: encodeURIComponent(a.q || ''),
    });
    router.push(`/jobs?${params.toString()}`);
  };
  return (
    <div className="flex flex-col gap-2">
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
          setRegion(country);
          reset()
          setFilter1([{ category: 'Country', filter: countryMap[country] }]);
          router.push(`/jobs-advanced-search?l=${country}`);
        }}
      >
        Advanced Search
      </button>
    </div>
  );
}
