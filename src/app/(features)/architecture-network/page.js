//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Asia',
  },
  description:
    'Looking for academic jobs in Asia? Browse our listings of Asia university jobs and find your next career opportunity in this diverse and dynamic region.',
  keywords: 'Academic Jobs Asia. Asia university jobs, academic jobs in Asia, AcademicJobs',
};
export default function Page() {
  return (
   
   
   
   
   
   
   <div>

    
<div className="content-grid mx-auto">
           
           <div id="section" className=" full-width py-4 mt-[30rem] full-width mb bg-slate-200">
     <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
     <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
             <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS Architecture Network:</span> < br /> Academic, research &&nbsp;science positions locally  & globally</h1>
             
           <div>
           
           <p className="px-7 mb-4 mt-1">
           Academic Jobs Asia has jobs from the best universities, colleges, research institutes, and organizations in Asia. You can browse through hundreds of listings from different countries and regions, such as China, Japan, Korea, India, Singapore, Malaysia, Thailand, Vietnam, Indonesia, and more. You can also filter your search by discipline, level, type, and duration of the position.
           </p>
         
           </div>
         </div>
         </div>
             </div>
    <div className="pt-[10rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-asia-min.png"

          alt="AcademicJobs Logo"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <JobSearchBox q="Architecture"/>

      <div className=" mt-[13rem] " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
          <li><Link href="/architecture/lecturer/" >	Lecturer</Link></li>
          <li><Link href="/architecture/research/" >	Research </Link></li>
          <li><Link href="/architecture/professor/" >	Professor</Link></li>
          <li><Link href="/architecture/executive/" >	Executive</Link></li>
          <li><Link href="/architecture/admin/" >Admin</Link></li>
          <li><Link href="/architecture/hr-jobs/" >	HR</Link></li>
          <li><Link href="/architecture/student/" >	Student</Link></li>
        </ul>
      </div>


      <div className=" mt-2 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">

          <li><Link href="/online/" >	Online </Link></li>
          <li><Link href="/jobs/remote/" >	Remote</Link></li>

          <li><Link href="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link href="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link href="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>

      <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6 ">
        <a href="#section" class="scroll-smooth md:scroll-auto">
          ▼
        </a>
      </div>

          </div>
     
  )
}
