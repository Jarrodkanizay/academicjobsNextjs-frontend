'use client';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
interface MyComponentProps {
  q?: string;
  l?: string;
}
export default function JobSearchBox({ q, l }: MyComponentProps) {
  const searchParams = useSearchParams();
  const keyWordRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (keyWordRef.current && searchParams.has('q')) {
      keyWordRef.current.value = searchParams.get('q') || '';
    }
    if (locationRef.current && searchParams.has('l')) {
      locationRef.current.value = searchParams.get('l') || '';
    }
    if (keyWordRef.current && q) keyWordRef.current.value = q;
    if (locationRef.current && l) locationRef.current.value = l;
  }, []);
  const router = useRouter();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams({
      l: encodeURIComponent(locationRef.current?.value.trim() || ''),
      q: encodeURIComponent(keyWordRef.current?.value.trim() || ''),
    });
    router.push(`/jobs?${params.toString()}`);
  };
  return (
    <div className="search-panel py-4">
      <div className="container lg:max-w-screen-lg px-4 mx-auto ">
        <form onSubmit={handleFormSubmit}>
          <div className="join mx-auto w-full border border-gray-200 shadow-md flex flex-col">
            <input
              type="text"
              className="input input-bordered join-item w-full  text-center"
              placeholder="Keywords"
              ref={keyWordRef}
            />
            <input
              type="text"
              className="input input-bordered join-item w-full  text-center"
              placeholder="Location"
              ref={locationRef}
            />
            <button type="submit" className="btn indicator border-0 w-full bg-amber-500  justify-center items-center animate-pulse">
              <div
               
                className=" join-item   border-0 text-white animate-pulse "
              >
                Search
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
