//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import AmericaUniLogos from '@/components/AmericaUniLogos';
import USA from '@/components/topUnis/USA';
import JobSearchBoxCountry from '@/components/JobSearchBoxCountry';
import { getContentRegion } from '@/actions/getContentRegion';
import HeroBannerPortrait from '@/components/HeroBannerPortrait';
//import { useParams } from 'next/navigation'

export const metadata = {
  title: {
    absolute: 'Higher Ed & University jobs USA',
  },
  description:
    'Search 10200 Higher Ed jobs in the United States. Apply to top colleges and universities for faculty, administrative, postdoc, professor positions today.',
  keywords:
    'Academic Jobs Online. USA Academic Jobs Online, academic jobs in USA, USA college jobs, Higher Ed Jobs USA',
};
export default async function myPage() {
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: `usa/faculty`,
    },

    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `usa/executive`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: `usa/hr-jobs`,
    },

    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: `usa/phd`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: `usa/admin`,
    },
    // {
    //   src: '/home/academic-graduate-positions.png',
    //   alt: 'Academic PhD Positions',
    //   label: 'Student',
    //   link: '/usa/student',
    // },
    // {
    //   src: '/home/academic-lecturer-positions.png',
    //   alt: 'Academic Graduate Positions',
    //   label: 'Collaborate',
    //   link: '/usa/graduate',
    // },
  ];
  const contentRegion = await getContentRegion();

  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;

  return (
    <main className="content-grid">
      <HeroBannerPortrait
        h1={`Higher Ed jobs in the USA`}
        h1_mobile={`Higher Ed jobs in the USA`}
        country={'us'}
        items={items}
      />

      <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24">
        <JobSearchBoxCountry country={'United States'} />
      </div>

      <div className=" mt-[3rem] ">
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <li>
            <Link href="/boston"> Boston </Link>
          </li>
          <li>
            <Link href="/new-york"> New York</Link>
          </li>
          <li>
            <Link href="/philadelphia">Philadelphia</Link>
          </li>
          <li>
            <Link href="/new-haven">New Haven</Link>
          </li>
          <li>
            <Link href="/los-angeles">Los Angeles </Link>
          </li>
          <li>
            <Link href="/san-francisco"> San Francisco</Link>
          </li>
          <li>
            <Link href="/chicago"> Chicago</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-2">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href={`usa/lecturer`}> Lecturer</Link>
            </li>
            <li>
              <Link href={`usa/research`}> Research </Link>
            </li>
            <li>
              <Link href={`usa/professor`}> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href={`usa/executive`}> Executive</Link>
          </li>
          <li>
            <Link href={`usa/staff`}>Staff</Link>
          </li>
          <li>
            <Link href={`usa/hr-jobs`}> HR</Link>
          </li>
        </ul>
      </div>
      {/*<div className=" mt-2 ">
         <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
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
            <Link className="  hidden md:block" href="/casual">
              {' '}
              Casual
            </Link>
          </li>
        </ul> 
      </div>*/}
      <a href="/jobelephant-recruitment">
        <Image
          width={180}
          height={170}
          src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
          className="rounded-3xl my-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto mt-8"
          alt="AcademicJobs USA logo"
        />
      </a>

      {/* <AmericaUniLogos /> */}

      <div
        id="section"
        className=" full-width py-4 full-width mb-[175px] bg-slate-200 mt-4"
      >
        <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
          <h2 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
            <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
              Higher Ed jobs in the USA
            </span>
          </h2>
          <div>
            <p className="px-7 mb-4 mt-1">
              Seek higher education employment opportunities across the United
              States. Begin your search for academic jobs, senior academic
              positions, HR and admin roles from top universities both
              nationally and internationally.
            </p>
            <p className="px-7 md:flex hidden">
              Whether you're a professor, researcher, lecturer or postdocs, our
              online job board offers the most current opportunities in
              academia. Stay updated with the latest job vacancies by joining
              our talent pool. Find your next higher ed jobs now and join a
              collaborative environment dedicated to intellectual growth and
              research excellence.
            </p>
          </div>
        </div>
        <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400 mx-auto"></div>
        <p className="font-semibold"></p>
      </div>

      <USA heading="USA Academic Jobs Online: Academia Jobs by University" />
    </main>
  );
}
