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
    
      <main className="">

{/* <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4"> Executive Jobs</h1> 
              
            <div>
            
            <p className="px-7 mb-4 mt-1">
            Find your perfect executive position through the world’s best job board! At Academic Jobs we offer the most renowned High Ed jobs at the top universities. Positions in executive roles will provide you with the chance to engage with partners domestically and internationally, work with some of the brightest minds, and use top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
            The No.1 job board for academics, Academic Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top executive jobs to find the best position for you!
            </p>
            <p className="px-7 md:flex hidden">
            Find all the best executive jobs here…
            </p>
            <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-1/2 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link>
         
            </div>
          </div>
          </div> */}

          <div
          className="hero h-screen max-h-[480px] md:max-h-[400px] mx-auto"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/doubilet-Circling-Barracuda.jpg)',
            backgroundSize: '',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70 "></div>
          <div className="hero-content text-white ">
            <div className="max-w-2xl mx-auto">
              <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal"><span className="text-5xl font-bold text-amber-500">Faculty Jobs </span>
              <br/>
              </h1>
         
         
            <p className="px-7 font-bold">
            The No.1 job board for Faculty Jobs, Academic Jobs, provides an extensive list of opportunities for the future of your career, carefully sectioning the top faculty jobs to find the best position for you!
            </p>
            <p className="px-7 font-bold">
            Find all the best academic faculty jobs here…
            </p>
           
              <Link href="/academic-talent-pool" className="btn ml-2 btn-aj text-lg font-bold item-center justify-center text-center">
               Join Talent Pool
              </Link>
             
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
