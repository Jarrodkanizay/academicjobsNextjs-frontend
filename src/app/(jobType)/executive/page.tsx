import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import executive from "@/data/executive.json";
import Link from 'next/link';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Executive Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'As an academic executive, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission.  ',
  keywords: 'Academic Executive Jobs, Executive AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">

<div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4"> Academic Executive Jobs</h1> 
              
            <div>
            
            <p className="px-7 mb-4 mt-1">
            View all of the executive jobs that respectable universities now have available on AcademicJobs. Our academic institutions are constantly seeking the greatest executives, and academics may apply for fantastic global academic executive positions through our website.
            </p>
            <p className="px-7 md:flex hidden">
            Academic Executive Jobs contain leadership, management, and direction for a specific academic unit or function within a higher education institution. Academic Executive Jobs set the goals and objectives of the unit or function, overseeing the academic programs and activities, ensuring the quality and standards of teaching and research, supporting and developing the staff and students, and managing the financial and human resources.
            </p>
         
            </div>
          </div>
          </div>

      
           

              <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {executive.map(({ Title, Name, }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/executive/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div>

              <JobSearchBox q= "executive" />
              <SearchResults q={{ q: "executive" || 0 }} />
      </main>
   
  );
}
