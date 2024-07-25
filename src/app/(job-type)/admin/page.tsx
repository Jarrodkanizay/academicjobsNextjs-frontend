import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import admin from '@/data/admin.json';
import Link from 'next/link';
import type { Metadata } from 'next';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'University Admin and Staff Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'As an University admin and staff workers will have the opportunity to work with diverse and talented people, contribute to the academic excellence and innovation of your institution.  ',
  keywords:
    'University Admin and Staff Jobs, Admin and Support Academic Jobs, Academic Staff Jobs, University Admin Jobs',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            University Admin and Support Assistant jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Find all university admin staff and support roles at the best universities. Positions in admin will provide you with the chance to engage with some of the brightest minds, and use top-notch facilities and resources.
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
              filter: 'Staff / Administration',
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
