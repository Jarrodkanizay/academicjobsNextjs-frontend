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
  const size = 180;
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
        h1={`America's Higher Ed & University Jobs Website`}
        h1_mobile={`US' Higher Ed & University Jobs Website`}
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
              Discover higher education employment opportunities across the
              United States. Our platform is your gateway to a vast array of
              higher ed jobs, from top-tier faculty positions and academic jobs
              to administrative roles at leading universities and colleges.
              Whether you're seeking university jobs, college faculty positions,
              or lecturer jobs, we provide multitude of opportunities to advance
              your career in academia.
            </p>
            <p className="px-7 md:flex hidden">
              Our job board is tailored for aspiring and established
              professionals in the higher education sector. Stay informed with
              the latest university job openings, including postdoctoral
              positions, research jobs, and senior academic roles. Join a
              collaborative academic environment dedicated to intellectual
              growth, professional development, and research excellence. Begin
              your search for higher ed careers today!
            </p>
          </div>
          {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}
          {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
          {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem]">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl ">USA Academic Jobs Online</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
          {/* </div> */}
          {/* <div className="newLine">
              <p className="px-7 pb-8">On Academic Jobs Online find all University Positions in the USA. We have all academic jobs online job for researchers, scientists, university staff, lecturers, professors, and researchers.
                Find academic jobs in USA colleges and apply to the top universities and institutions with faculty, postdoc or staff roles and more.</p> */}
        </div>
        <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400 mx-auto">
          {/* <Link className="btn btn-aj" href="/USA/faq/">
            FAQ
          </Link> */}
          {/* <Link href="/ivyleague/"> Ivy League</Link>{' '} */}
        </div>
        <p className="font-semibold"></p>
      </div>

      <USA heading="USA Academic Jobs Online: Academia Jobs by University" />
    </main>
  );
}
