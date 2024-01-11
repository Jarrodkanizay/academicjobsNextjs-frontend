import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import lecturer from '@/data/lecturer.json';
import Link from 'next/link';
export const metadata: Metadata = {
  title: {
    absolute: '  Academic Lecturer Jobs',
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function Page() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Academic Lecturer Jobs
          </h1>
          <div>
            <p className="px-7 mb-4 mt-1">
              Find all jobs for lecturers from top ranking universities on
              AcademicJobs today. Our universities are looking for the best
              lecturers, and our academic jobs platform allows lecturers to seek
              great careers in lecturing around the world.
            </p>
            <p className="px-7 md:flex hidden">
              Lecturers can find university jobs online, compare competitive
              salaries, generous benefits, and supportive work environments.
              Sign up as a ‘Global Academic’ to get an academic ranking, and to
              get the opportunity to collaborate with national and international
              partners, to work with some of the best minds in your discipline,
              and access world-class facilities and resources.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col  ">
        <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
          {lecturer.map(({ Title, Name }, key) => (
            <li
              className={`pb-2 flex ${' md:break'} ${' font-bold text-gray-400'}`}
              key={key}
            >
              <Link href={`/lecturer/${Name?.replace(/\s+/g, '-')}/`}>
                {Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <JobSearchBox q="lecturer" />
      <SearchResults q={{ q: 'lecturer' || 0 }} />
    </main>
  );
}
