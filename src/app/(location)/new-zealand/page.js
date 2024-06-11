//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import NZ from '@/components/topUnis/NZ';
import JobSearchBoxCountry from '@/components/JobSearchBoxCountry';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs New Zealand',
  },
  description:
    'Find your dream academic job in New Zealand and join the leading universities at New Zealand university jobs with professor, researcher or manager roles.',
  keywords:
    'Academic Jobs New Zealand. academic job in New Zealand, New Zealand university jobs',
};

const size = 180;

const items = [
  {
    src: '/home/academic-faculty-positions.png',
    alt: 'Academic Faculty Positions',
    label: 'Faculty',
    link: `new-zealand/faculty`,
  },

  {
    src: '/home/academic-executive-positions.png',
    alt: 'Academic Executive Positions',
    label: 'Executive',
    link: `new-zealand/executive`,
  },
  {
    src: '/home/academic-human-resource-positions.png',
    alt: 'Academic Human Resource Positions',
    label: 'HR Jobs',
    link: `new-zealand/hr-jobs`,
  },

  {
    src: '/home/academic-phd-positions.png',
    alt: 'Academic PhD Positions',
    label: 'PhD Jobs',
    link: `new-zealand/phd`,
  },
  {
    src: '/home/academic-staff-positions.png',
    alt: 'Academic Staff Positions',
    label: 'Staff/Admin',
    link: `/new-zealand/admin`,
  },
];

export default function Page() {
  return (
    <><div className="full-width md:h-[400px] h-[229px] gradient-aj">
      <div className="hero-bg-aus h-full md:bg-center mb-4">
        <section className="wrapper flex">
          <h2 className="sentence ">
            <h3 className="sentence-aus md:mb-[-5rem] mb-[-10rem] p-2">
              New Zealand's University Job Website
            </h3>
            <span className="mr-8 p-2">Find</span>{' '}
            <span className="md:hidden block my-[-1rem]">
              <br />
            </span>
            <div className="slidingVertical p-2">
              <span>Opportunity</span>
              <span>Connections</span>
              <span>Happiness</span>
              <span>Opportunity</span>
              <span>Connections</span>
            </div>
          </h2>
        </section>
        <ul className="hero-icons md:hidden flex-wrap md:gap-8 mx-auto text-center items-center justify-center mt-[-5rem] flex">
          {items.slice(0, 3).map((item, index) => (
            <li key={index}>
              <Link className="grayscale hover:grayscale-0" href={item.link}>
                <Image
                  src={item.src}
                  width={size}
                  height={size}
                  alt={item.alt}
                />
              </Link>
              <Link className="mb-4" href={item.link}>
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hero-icons md:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center mt-[-2rem] hidden">
          {items.map((item, index) => (
            <li key={index}>
              <Link className="grayscale hover:grayscale-0" href={item.link}>
                <Image
                  src={item.src}
                  width={size}
                  height={size}
                  alt={item.alt}
                />
              </Link>
              <Link className="mb-4" href={item.link}>
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>

      </div>

    </div>

      <div className="w-full  max-w-[700px] flex flex-col p-2 items-top my-4 mx-auto mt-20">
        <JobSearchBoxCountry country={"New Zealand"} />
      </div>
      <div className="my-4">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/New-Zealand/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/New-Zealand/research/"> Research </Link>
            </li>
            <li>
              <Link href="/New-Zealand/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/New-Zealand/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/New-Zealand/admin/">Admin</Link>
          </li>
          <li>
            <Link href="/New-Zealand/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/New-Zealand/student/"> Student</Link>
          </li>
        </ul>
      </div><div className=" mt-2 mb-4">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/employers/massey-university/3810"> Massey </Link>
            </li>
            <li>
              <Link href="/employers/auckland-university-of-technology/3804"> AUT</Link>
            </li>
            <li>
              <Link href="/employers/the-university-of-auckland/3809">UOA</Link>
            </li>
            <li>
              <Link href="/employers/waikato-university/3806"> UOW</Link>
            </li>
          </ul>
          <li>
            <Link href="/employers/victoria-university-of-wellington/3807"> VUW </Link>
          </li>
          <li>
            <Link href="/employers/university-of-otago/3805"> UOO</Link>
          </li>
          <li>
            <Link href="/employers/lincoln-university/3808">LU</Link>
          </li>
          <li>
            <Link href="/employers/university-of-canterbury/3811"> UOC</Link>
          </li>
        </ul>
      </div>
      <div className="content-grid mx-auto ">
        <div
          id="section"
          className=" full-width py-4 full-width mb-4 bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS New Zealand:
              </span>{' '}
              <br />{' '}
            </h1>

            <div>
              <p className="px-7 mb-4 mt-1">
                Seek university jobs in New Zealand at Academic Jobs, where we
                list all the best jobs for academics globally! We value the
                importance of an easy to navigate website where your future
                academic career path is one click away. Academic Jobs provides
                an extensive list of opportunities for the future of your career
                in education, carefully sectioning the top Higher Ed jobs to
                curate the best fitting position for you.
              </p>
              <p className="px-7 md:flex hidden">
                The number 1 job board for academics can help you find your
                dream Higher Ed job through our services. At Academic Jobs, we
                value our customers interests by providing the best career
                choices possible, making us the best job board for higher
                education positions globally!
              </p>
              <p className="px-7 md:flex hidden">
                Find all the best jobs here…
              </p>
            </div>
          </div>
        </div>

        {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
    <a>▼</a></div> */}
        {/* <div className="bg-gradient-to-b to-white from-gray-300 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
      <div className="blurb text-left py-8 mt-[30rem] ">
        <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs New Zealand</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p> */}
        {/* </div> */}
        {/* <div className="newLine">
        <p className="newLine px-7 pb-2">On Academic Jobs New Zealand, you will find all  the best academic positions at highly regarded New Zealand universities. Our academic employment platform enables academics to pursue excellent careers in New Zealand, and our universities are always on the lookout for the greatest New Zealand Academics.</p>
          <p className="px-7 pb-8">New Zealand is a beautiful and diverse country that offers a high quality of life and a supportive academic environment. Whether you are looking for teaching, research, or leadership positions, you can find a range of academic jobs in New Zealand that match your skills and interests. You can browse through hundreds of academic jobs in New Zealand on this page, covering various fields and disciplines such as education, science, arts, business, and more.</p>
          <p className="font-semibold"></p>
        </div>
      </div>
      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1"> */}
        <div>
          <h2 className="">
            New Zealand: All University Jobs by Region
          </h2>
          <NZ heading="" />
        </div>

        {/* <h2 className="underline-full">The University of Auckland Jobs</h2>
    <div className="cate-group section23 ">
      <div className="widget__text-block">
        <div className="faculty-container  flex flex-wrap px-7 md:gap-2 py-2  pb-16 text-black">
          <ul className=" flex flex-wrap gap-8">
            <li className="mb-1 mt-4 mt-4 ">
              <a
                href="/jobs/auckland-lecturer/"
                class="scroll-smooth md:scroll-auto "
              >
                {' '}
                UOA Lecturing Jobs
              </a>
            </li>
            <li className="mb-1 mt-4 mt-4 ">
              <a
                href="/jobs/auckland-research/"
                class="scroll-smooth md:scroll-auto"
              >
                {' '}
                UOA Research Jobs
              </a>
            </li>

            <li className="mb-1 mt-4 mt-4">
              <a
                href="/jobs/auckland-professor/"
                class="scroll-smooth md:scroll-auto"
              >
                {' '}
                UOA Professorial Jobs
              </a>
            </li>
            <li className="mb-1 mt-4 mt-4">
              <a
                href="/jobs/auckland-executive/"
                class="scroll-smooth md:scroll-auto"
              >
                {' '}
                UOA Executive
              </a>
            </li>

            <li className="mb-1 mt-4 mt-4">
              {' '}
              <a
                href="/jobs/auckland-admin/"
                class="scroll-smooth md:scroll-auto"
              >
                {' '}
                UOA Administration{' '}
              </a>
            </li>
            <li className="mb-1 mt-4 mt-4">
              <a
                href="/jobs/auckland-hr/"
                class="scroll-smooth md:scroll-auto"
              >
                {' '}
                UOA Human Resources Jobs{' '}
              </a>
            </li>

            <li className="mb-1 mt-4 mt-4">
              <a
                href="/jobs/auckland/"
                class="scroll-smooth md:scroll-auto"
              >
                {' '}
                All UOA Jobs{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
      </div></>
  );
}
