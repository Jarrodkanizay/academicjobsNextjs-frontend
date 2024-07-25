import type { Metadata } from 'next';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import executive from '@/data/executive.json';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
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
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
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
            <h1 className="md:text-6xl font-bold m-0  pb-4">University Dean and Executive Jobs</h1>

            <p className="px-7 mb-4 mt-1 font-bold">

              As the leading job board for academic and professional staff, AcademicJobs carefully curates the top university dean, executive and senior management positions available. Find a wide range of senior and management positions, including executive deans and directors.   

            </p>

            <Link
              href="/academic-talent-pool"
              className="btn ml-2 btn-aj text-lg font-bold item-center justify-center text-center"
            >
              Join Talent Pool
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col ">
        {/* <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize max-w-screen-2xl ml-auto">
          {executive.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/executive/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'master_category_job_type',
              filter: 'Executive',
            },
          ],
        }}
      />

      <section className="jobs_grid job_post_search_container">
        <div className="side_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <SearchResults3 />
          </div>
        </div>
      </section>
    </main>
  );
}
