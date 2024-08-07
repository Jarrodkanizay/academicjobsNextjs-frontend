import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Academic part-time Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Our job board could be able to assist you in locating the most recent openings in this adaptable and fulfilling industry if you are searching for work in academia online.  ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      {/* <h1>Academic part-time Jobs</h1>
      <p>
      Seek all part-time uni jobs through Australia’s best job board. Discover flexibility to align your professional pursuits with your lifestyle choices. Join us in embracing a future where your workspace is as adaptable as your ambitions. From part-time positions to vibrant on-site roles, we've curated diverse part-time opportunities just for you.</p>
      <p className="px-7 md:flex hidden">
      All of the best professional casual jobs in Australia. Through higher ed jobs part-time, individuals can actively contribute to the advancement of knowledge, the cultivation of learning environments, and the overall growth of the academic landscape while simultaneously expanding their professional horizons.</p>
      <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
                    >
                     Join Our Talent Pool
                    </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Academic part-time Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Seek all part-time uni jobs through Australia’s best job board.
              Discover flexibility to align your professional pursuits with your
              lifestyle choices. Join us in embracing a future where your
              workspace is as adaptable as your ambitions. From part-time
              positions to vibrant on-site roles, we've curated diverse
              part-time opportunities just for you.
            </p>
            <p className="px-7 md:flex hidden">
              All of the best professional casual jobs in Australia. Through
              higher ed jobs part-time, individuals can actively contribute to
              the advancement of knowledge, the cultivation of learning
              environments, and the overall growth of the academic landscape
              while simultaneously expanding their professional horizons.
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
              category: 'job_type',
              filter: 'Part time',
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
