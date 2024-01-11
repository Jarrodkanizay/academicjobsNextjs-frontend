import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Post Doc Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'In Post Doc, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission.  ',
  keywords: 'Academic Postdoc Jobs, Postdoc AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">

<div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4"> Academic Postdoc Jobs</h1> 
              
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


              <h1>
              Academic Postdoc Jobs
              </h1>
              <p>
              View all of the Post Doc jobs that respectable universities now have available on AcademicJobs. Our academic institutions are constantly seeking the greatest, you can apply for fantastic global academic Post Doc positions through our website.</p>

              
              <JobSearchBox q= "postdoc"/>
              <SearchResults q={{ q: "postdoc" || 0 }} />
      </main>
   
  );
}
