import type { Metadata } from 'next';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import category from '@/data/category.json';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
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
    <main className="">
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
            <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal">
              <span className="text-5xl font-bold text-amber-500">
                University Jobs for Academics{' '}
              </span>
              <br />
            </h1>
            <p className="px-7 font-bold">
              As the leading job board for academics, AcademicJobs carefully curates the top    faculty positions to advance your career. Find a wide range of faculty positions, including lecturers, postdoctoral and researcher jobs across diverse fields, such as science, health, arts, business and more.   
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

      {/* <div className="flex justify-center"> */}
      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'master_category_job_type',
              filter: 'Academic / Faculty',
            },
          ],
        }}
      />
      {/* </div> */}
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
