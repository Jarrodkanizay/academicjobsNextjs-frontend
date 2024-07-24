import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import lecturer from '@/data/lecturer.json';
import Link from 'next/link';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
export const metadata: Metadata = {
  title: {
    absolute: 'Lecturer Jobs',
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function Page() {
  return (
    <main className="">
      <div
        className="hero h-screen max-h-[480px] md:max-h-[400px] mx-auto"
        style={{
          backgroundImage:
            'url(/student-jobs-on-campus/female-scientist_place-her-to-the-right.jpeg)',
          backgroundSize: '',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="hero-content text-white ">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5  text-white md:text-2xl text-2xl font-normal">
              <span className="text-5xl font-bold text-amber-500">
                Lecturer Jobs{' '}
              </span>
              <br />
            </h1>
            <p className="font-bold">
            As the leading job board for academics, AcademicJobs carefully curates the top higher ed lecturer jobs to advance your career. Find the best lecturer jobs in diverse fields, including business, health science, medicine, fine arts, legal studies and many more.
            </p>
            <p className="font-bold">Find all the best lecturing jobs here…</p>
            <Link
              href="/lecturer/guest-lecturing"
              className="btn  btn-aj text-lg font-bold item-center justify-center text-center md:mb-0 mb-2"
            >
              Guest Lecturing Jobs
            </Link>
            <Link
              href="/academic-talent-pool"
              className="btn ml-2 btn-aj text-lg font-bold item-center justify-center text-center"
            >
              Join Talent Pool
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col  content-grid rounded">
        {/* <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {lecturer.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-500'}`}
              key={key}
            >
              <Link href={`/lecturer/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="flex justify-center">
        <AdvancedSearchBar
          p={{
            filter1: [
              {
                category: 'PositionType',
                filter: 'Lecturer/Instructor',
              },
            ],
          }}
        />
      </div>
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
