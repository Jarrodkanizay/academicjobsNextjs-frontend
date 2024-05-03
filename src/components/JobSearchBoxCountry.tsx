'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
export default function JobSearchBoxCountry({country}) {
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
  );
}