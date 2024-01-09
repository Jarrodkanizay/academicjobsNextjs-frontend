import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import admin from "@/data/admin.json";
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Academic Admin and Support Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'As an academic admin and support job, you will have the opportunity to work with diverse and talented people, contribute to the academic excellence and innovation of your institution.  ',
  keywords: 'Academic Admin and Support Jobs, Admin and Support AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
           
              <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">University Admin & Support Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            We have posts of all admin positions from the best institutions. Our academic institutions are constantly seeking the greatest admin staff, so apply on our website for incredible admin positions across the world.
            </p>
            <p className="px-7 md:flex hidden">
            Academic Admin and support Jobs will need to have a diploma or higher qualification in business administration or a related field, as well as relevant work experience in academic administration and support. Academic Admin and support Jobs will also need to have excellent communication, interpersonal, organizational, and problem-solving skills. Academic Admin and support Jobs need to be familiar with the policies and procedures of the higher education sector, as well as the applicable laws and regulations.
            </p>
         
            </div>
          </div>
          </div>

          <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {admin.map(({ Title, Name, }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/admin/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div>



              <JobSearchBox q="admin"/>
              <SearchResults q={{ q: "admin" || 0 }} />
      </main>
   
  );
}
