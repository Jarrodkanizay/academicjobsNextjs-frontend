
import Link from 'next/link';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import research from '@/data/research.json';
import type { Metadata } from 'next';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Research Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'To find out more about the academic Research jobs available in higher education, browse our list of current Research job vacancies on this page. ',
  keywords: 'Academic Research Jobs. Research positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Research Jobs
          </h1>

          <div className="">
            <p className="px-7 mb-4 mt-1">
              Find your perfect research position through the world’s best job
              board! At Academic Jobs we offer the most renowned research jobs
              at the top universities. A career as an academic researcher will
              provide you with the chance to engage with partners domestically
              and internationally, work with some of the brightest minds, and
              use top-notch facilities and resources.
            </p>
            <p className="px-7 md:flex hidden">
              The No.1 job board for researchers, Academic Job, provides an
              extensive list of opportunities for the future of your career,
              carefully sectioning the top research jobs to find the best
              position for you!
            </p>
            <p className="px-7 md:flex hidden">
              Find all the best research jobs here…
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

      <div className="bg-white flex flex-col  ">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {research.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/research/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/research/faq" className="pt-4 text-sky-500">
        View Research Jobs FAQ
      </Link>

      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'PositionType',
              filter: 'Research',
            },
          ],
        }}
      />

      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
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
