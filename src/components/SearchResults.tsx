'use client';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import JobList from '@/components/JobList';
import axios from 'axios';
interface SearchResultsProps {
  q: {
    q?: string; 
    l?: string; 
  };
}
export default function SearchResults({ q }: SearchResultsProps) {
  console.log('==============SearchResults==================');
  console.log('q1', q);
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['jobsData', q],
    queryFn: async () => {
      const response = await axios.post(
        'https://api1.sciencejobs.com.au/api/jobs',
        q
      );
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: q && Object.keys(q).length > 0,
  });

  let content;
   function nextPage() {
     console.log('nextPage');
    
   }
  if (isLoading) {
    // Your loading UI
  } else if (isSuccess && data) {
    if (data.length > 0) {
console.log("data",data)
      content = (
        <div className="content-grid mx-auto w-2/5">
          <JobList data={data} nextPage={nextPage} />
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
