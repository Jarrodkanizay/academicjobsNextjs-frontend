import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import industry from '@/data/industry.json';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title:
    'Industry Jobs in Academia', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Academic Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords:
    'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <>
      <main>
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/close-up-of-scientist-looking-at-blood-sample.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-white">
            <div className="max-w-2xl">
              <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal"><span className="text-5xl font-bold text-amber-500">Academic Jobs in Industry </span>
              <br/>The World’s #1 Job Board for connecting the brightest minds to cutting-edge institutions.
              </h1>
              <Link href="/industry/info" className="btn  btn-aj text-lg font-bold item-center justify-center text-center">
               Learn about Industry 
              </Link>
              <Link href="/academic-talent-pool" className="btn ml-2 btn-aj text-lg font-bold item-center justify-center text-center">
               Join Talent Pool
              </Link>
             
            </div>
          </div>
        </div>
       
        <div className="flex bg-base-200 shadow-xl rounded-2xl mb-4 max-w-screen-xl mx-auto mt-4 p-4 gap-8 ">
        <Image
          className="mx-auto rounded-xl w-2/3 h-56 "
          width={880}
          height={380}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/img/_misc/maxresdefault.png"
        />

<div className="w-1/3">
<div className="grid    text-gray-200 mt-3">
           

            {/* Card 2 */}
            <div className="flex  ">
           
            <div className="icon-ai ">
           <p className="text-purple-500 font-bold px-2">
           ✓
           </p>
           </div>
           
              <div className="items-center text-center">
                <p className="text-md font-bold  ">
                No. 1 Job Board
                </p>
             
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex ">
          
            <div className="icon-ai ">
           <p className="text-purple-500 font-bold px-2">
           ✓
           </p>
           </div>
               
         
              <div className=" items-center text-center ">
                <p className="text-md font-bold ">
                The World's Largest Talent Pool
                </p>
            
              </div>
            </div>

 {/* Card 1 */}
 <div className=" flex ">
           
           <div className="icon-ai ">
           <p className="text-purple-500 font-bold px-2">
           ✓
           </p>
           </div>
      
         <div className=" items-center text-center">
           <p className="text-md font-bold ">
           A.I. Powered Academic Rankings
           </p>
                       </div>
       </div>

       <Link href="/industry/recruitment"  className="text-md font-bold underline text-sky-500 mb-4 ">
         See All Advertising Options
           </Link>


            {/* End Cards */}
          </div>
         
              <Link href="/recruitment" className="btn  btn-aj ml-4 text-lg font-bold">
               Post A Job
              </Link>
            </div>
          </div>

          <JobSearchBox q="Industry" />

          <div className="bg-white flex flex-col  max-w-screen-2xl mx-auto">
        <ul className=" text-left columns-1 md:columns-4 pt-2 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {industry.map(({ Title, Name }, key) => (
            <li
              className={`pb-4 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/industry/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

         
        <SearchResults q={{ q: 'industry' || 0 }} />
        
      </main>
    </>
  );
}
