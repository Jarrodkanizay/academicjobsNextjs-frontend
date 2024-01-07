//import type { Metadata } from 'next';
import citiesData from '@/data/cities.json'
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: '  Academic Lecturer Jobs', 
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function Page({ params, searchParams }) {
  console.log("````````````````````params````````````````````")
  console.log(params)
  console.log(searchParams)
  const { category } = params
  const {
    
    Title,
  

    content: content1,
  } = citiesData.find((item) => item.Name === category);
  return (
    <main className="flex flex-col gap-2">
      <h1 className="max-h-50 overflow-y  border  text-[#f4a10c] text-2xl font-bold p-4 mb-4 rounded-lg shadow-lg">
        {Title}
      </h1>
      <div className="max-h-50 overflow-y  border  text-gray-500 p-4 mb-4 rounded-lg shadow-lg">
        {content1}
      </div>
      <JobSearchBox q={category} />
      <SearchResults q={{ q: category || 0 }} />
    </main>
  );
}
