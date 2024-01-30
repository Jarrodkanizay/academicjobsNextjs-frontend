
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import admin from "@/data/admin.json";
import Link from 'next/link';
import type { Metadata } from 'next';

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
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">Admin Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            Seek your perfect admin position through the world’s best job board! At Academic Jobs we offer the most renowned Higher Ed jobs at the top universities. Positions in admin will provide you with the chance to engage with some of the brightest minds, and use top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board, Academic Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top admin jobs to find the best position for you!
            </p>
            <p className="px-7 md:flex hidden">
            Find all the best administrative jobs here…
            </p>
            <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-1/2 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link> 
         
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
