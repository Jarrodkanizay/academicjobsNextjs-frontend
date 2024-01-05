'use client';
import { useEffect, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import JobList from '@/components/JobList';
import BaseApi from '@/lib/store/Base';
interface SearchResultsProps {
  q: {
    q?: string;
    l?: string;
  };
}
export default function SearchResults({ q }: SearchResultsProps) {
  console.log('==============SearchResults==================');

  const [page, setPage] = useState(0);
    console.log('q1', q, page);
  const {
    isPending,
    isError,
    isSuccess,
    error,
    data,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['jobs', page],
    queryFn: async () => {
      const response = await BaseApi.post('/jobs', { ...q, page });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: q && Object.keys(q).length > 0,
    placeholderData: keepPreviousData,
  });
  // const { status, error, data, isPreviousData } = useQuery({
  //   queryKey: ['jobs', { page }],
  //   keepPreviousData: true,
  //   queryFn: async (page) => {
  //     const response = await axios.post(
  //       'https://api1.sciencejobs.com.au/api/jobs',
  //       q
  //     );
  //     console.log(response.data);
  //     console.log('response.data.data', response.data.data);
  //     return response.data.data;
  //   },
  //   enabled: q && Object.keys(q).length > 0,
  // });
  let content;
  const handlePageChange = (direction: any) => {
    if (direction === 'prev') {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    } else if (direction === 'next') {
      setPage((prevPage) => prevPage + 1);
    }
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };
  if (isFetching) {
    // Your loading UI
  } else if (isSuccess && data) {
    if (data.length > 0) {
      console.log('data', data);
      content = (
        <div className="mx-auto overflow-y-auto md:w-[40%] h-screen">
          <JobList
            data={data}
            handlePageChange={handlePageChange}
            page={page}
          />
        </div>
      );
    } else {
      content = (
        <p className="text-center text-2xl font-bold py-10">
          Found No Job, Pls use other keywords.
        </p>
      );
    }
  }
  return <div>{content}</div>;
}
