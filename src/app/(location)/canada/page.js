//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Canada from '@/components/topUnis/Canada';
import JobSearchBoxCountry from '@/components/JobSearchBoxCountry';
import { getContentRegion } from '@/actions/getContentRegion';
import HeroBannerPortrait from '@/components/HeroBannerPortrait';

//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Canada',
  },
  description:
    'Explore academic jobs in Canada and discover a range of opportunities in Canada university jobs such as teaching, research or admin positions.',
  keywords: 'academic jobs in Canada, Canada university jobs',
};
export default async function myPage() {
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: `canada/faculty`,
    },

    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `canada/executive`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: `canada/hr-jobs`,
    },

    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: `canada/phd`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: `canada/admin`,
    },
    // {
    //   src: '/home/academic-graduate-positions.png',
    //   alt: 'Academic PhD Positions',
    //   label: 'Student',
    //   link: '/canada/student',
    // },
    // {
    //   src: '/home/academic-lecturer-positions.png',
    //   alt: 'Academic Graduate Positions',
    //   label: 'Collaborate',
    //   link: '/canada/graduate',
    // },
  ];
  const contentRegion = await getContentRegion();

  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;

  return (
    <main className="content-grid">
      <HeroBannerPortrait
        h1={`Canada’s University Jobs Website`}
        h1_mobile={`CA's University Jobs Website`}
        country={'ca'}
        items={items}
      />

      <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-32">
        <JobSearchBoxCountry country={'Canada'} />
      </div>

      <div className=" mt-[5rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-500 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/Canada/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/Canada/research/"> Research </Link>
            </li>
            <li>
              <Link href="/Canada/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/Canada/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/Canada/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/Canada/hr-jobs/"> HR</Link>
          </li>
        </ul>
      </div>

      <div className=" mt-2 ">
        <ul className="faculty-container flex  gap-4 items-center justify-center text-amber-500 ">
          <li>
            <Link href="/online/"> Online </Link>
          </li>
          <li>
            <Link href="/remote"> Remote</Link>
          </li>

          <li>
            <Link href="/full-time/">Full-Time</Link>
          </li>
          <li>
            <Link href="/part-time"> Part-Time</Link>
          </li>
          <li>
            <Link href="/casual"> Casual</Link>
          </li>
        </ul>
      </div>

      <a href="/jobelephant-recruitment">
        <Image
          width={180}
          height={170}
          src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
          className="rounded-3xl my-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto"
          alt="AcademicJobs Canada logo"
        />{' '}
      </a>

      <div
        id="section"
        className=" full-width py-4  full-width mb-[175px] bg-slate-200"
      >
        <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
          <h2 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
            <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
              ACADEMIC&nbsp;JOBS Canada:
            </span>{' '}
            <br />
          </h2>

          <div>
            <p className="px-7 mb-4 mt-1">
              Find Canada’s most rewarding academic jobs through the world’s
              leading job board. Academic Jobs provides an extensive list of
              opportunities for the future of your career in education,
              carefully sectioning the top Higher Ed jobs to curate the best
              fitting position for you. We value the fairness and unity of
              Canadian citizens, thus reflect these values into our goals as a
              company with our fair prices and unity of all academic
              professionals looking for a rewarding career.
            </p>
            <p className="px-7">
              Explore further into university Higher Ed jobs in Canada, with us
              providing university affairs to ensure you have access to support
              and guidance from the top job board globally. Whether you’re
              interested in research, teaching, or lecturing, Academic Jobs is
              the place to rely on when finding your dream academic job. Just a
              few simple steps are needed to set up a valuable position for
              yourself and your future!
            </p>
          </div>
        </div>
      </div>

      <h2 className="">ALL HIGHER ED JOBS IN CANADA BY UNIVERSITY </h2>
      <Canada id="section3" heading="" />
    </main>
  );
}
