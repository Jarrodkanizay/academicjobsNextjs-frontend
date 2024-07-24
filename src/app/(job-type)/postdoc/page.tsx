import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
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
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Postdoctoral Researcher & Research Fellow
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
            As the leading job board for academics, AcademicJobs carefully curates the top    postdoc jobs to advance your career. Find the best postdoctoral researcher jobs in diverse fields, such as engineering, science, medicine, and many more.  
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

      {/* <h1>
              Academic Postdoc Jobs
              </h1>
              <p>
              View all of the Post Doc jobs that respectable universities now have available on AcademicJobs. Our academic institutions are constantly seeking the greatest, you can apply for fantastic global academic Post Doc positions through our website.</p> */}
      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'PositionType',
              filter: 'Post-Doc',
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
