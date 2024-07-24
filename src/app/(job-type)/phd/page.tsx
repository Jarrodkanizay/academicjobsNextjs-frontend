import type { Metadata } from 'next';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'PHD Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover flexible and fulfilling on-campus employment opportunities for Ph.D. candidates. Explore a myriad of PhD positions across diverse departments at your university. Take the next step in your career, apply today, and cultivate valuable work experience and skills.  ',
  keywords: 'PhD Jobs , PhD academic Jobs',
};
export default function myPage() {
  return (
    <main className="PHD Jobs">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-left text-gray-500 pb-4">
            PhD scholarships & PhD Positions
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              As the leading job board for academics, AcademicJobs carefully curates the top opportunities in PhD positions, scholarships and programmes to advance your career in Higher Education. Find a wide range of PhD positions in various fields, such as science, health, maths, business and more. Join the talent pool now and stay updated with the latest university job openings. 
            </p>
            <Link
              href={'/academic-talent-pool'}
              className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
            >
              Join Our Talent Pool
            </Link>
          </div>
        </div>
      </div>

      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'master_category_job_type',
              filter: 'Student / Phd Jobs',
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
