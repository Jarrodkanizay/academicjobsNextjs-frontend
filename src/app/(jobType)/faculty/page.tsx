import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import category from "@/data/category.json";
import Link from 'next/link';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Faculty Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'The leading job site for academic faculty jobs. Best list of college and university jobs by specialty in departments. ',
  keywords: 'academic faculty jobs, Academic Jobs, jobs by specialty',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
       


              <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="text-6xl font-bold m-0 text-right text-gray-500 pb-4">Search for a Faculty Position in Academia</h1> 
              
            <div>
            
            <p className="px-7 mb-4 mt-1">
            Find all academic positions by discipline, faculty and specialty.
            </p>
            <p className="px-7">
            All Lecturing, Research and Science jobs online today.
            </p>
         
            </div>
          </div>
          </div>


      <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {category.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/category/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div>


              <JobSearchBox q="faculty"/>
              <SearchResults q={{ q: "faculty" || 0 }} />
      </main>
   
  );
}
