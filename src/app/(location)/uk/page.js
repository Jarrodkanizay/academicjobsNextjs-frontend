//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import UK from '@/components/topUnis/UK';
import JobSearchBoxCountry from '@/components/JobSearchBoxCountry';
import { getContentRegion } from '@/actions/getContentRegion';
import HeroBannerPortrait from '@/components/HeroBannerPortrait';
//import { useParams } from 'next/navigation'

export const metadata = {
  title: {
    absolute: 'University and Academic Jobs UK',
  },
  description:
    'Find 1000 university and academic jobs in the UK. Apply for jobs in lecturer, research, science and postdoc jobs from UK top universities.',
  keywords: 'Academic Jobs UK. academicjobs, academia jobs',
};
export default async function myPage() {
  const size = 180;
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: `uk/faculty`,
    },

    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `uk/executive`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: `uk/hr-jobs`,
    },

    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: `uk/phd`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: `uk/admin`,
    },
  ];
  const contentRegion = await getContentRegion();

  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;

  return (
    <>
      <main className="content-grid">
        <HeroBannerPortrait
          h1={`United Kingdom's University Jobs Website`}
          h1_mobile={`UK's University Jobs Website`}
          country={'uk'}
          items={items}
        />

        <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24">
          <JobSearchBoxCountry country={'United Kingdom'} />
        </div>

        {/* <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-uk-min.png"

          alt="AcademicJobs UK Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        /></div> */}
        {/* <JobSearchBox l="United Kingdom"/>
     
      <h3 className="text-center ">We Are United Kingdom's University Job Website</h3> */}

        <div className=" mt-[5rem] ">
          <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
            <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
              <li>
                <Link href="uk/lecturer"> Lecturer</Link>
              </li>
              <li>
                <Link href="/uk/research"> Research </Link>
              </li>
              <li>
                <Link href="/uk/professor"> Professor</Link>
              </li>
            </ul>
            <li>
              <Link href="uk/executive"> Executive</Link>
            </li>
            <li>
              <Link href="uk/admin">Admin</Link>
            </li>
            <li>
              <Link href="uk/hr-jobs"> HR</Link>
            </li>
          </ul>
        </div>

        <div className=" mt-2 ">
          <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">
            <li>
              <Link href='/online?r=United Kingdom&filter0=[{"category":"remote","filter":"remote"}]'>
                {' '}
                Online{' '}
              </Link>
            </li>
            {/* <li><Link href='/remote?r=United Kingdom&filter0=[{"category":"remote","filter":"remote"}]' >	Remote</Link></li> */}

            <li>
              <Link href='/full-time?r=United Kingdom&filter0=[{"category":"job_type","filter":"Full Time"}]'>
                Full-Time
              </Link>
            </li>
            <li>
              <Link href='/part-time?r=United Kingdom&filter0=[{"category":"job_type","filter":"Part Time"}]'>
                {' '}
                Part-Time
              </Link>
            </li>
            <li>
              <Link
                className="hidden md:block"
                href='/casual?r=United Kingdom&filter0=[{"category":"job_type","filter":"Sessional"}]'
              >
                Casual
              </Link>
            </li>
          </ul>
        </div>

        <div
          id="section"
          className="full-width py-4 full-width bg-slate-200 my-16"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            {/* <div className="  flex-wrap text-center gap-6 px-7 pb-4  text-gray-400" >
            <Link href="/russelgroup/" >	Russel Group</Link> </div> */}
          </div>
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h2 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                University & Academic jobs in the UK
              </span>{' '}
              <br />
            </h2>

            <div>
              <p className="px-7 mb-4 mt-1">
                United Kingdom’s no 1 University Job Board Website! Seek top
                faculty and university staff positions from UK’s leading
                universities. Begin your search for academic jobs, senior
                academic positions, HR and admin roles from top universities
                both nationally and internationally.
              </p>
              <p className="px-7 mb-4 mt-1">
                Whether you're a professor, researcher, lecturer or postdocs,
                our online job board offers the most current opportunities in
                academia. Stay updated with the latest job vacancies by joining
                our talent pool. Find your next university jobs now and join a
                collaborative environment dedicated to intellectual growth and
                research excellence.
              </p>

              {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div> */}

              {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
              {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[10rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs UK</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p> */}
              {/* </div> */}
              {/* <div className="newLine">
              <p className="px-7 pb-8">To start your UK academic jobs search, you can browse through our listings of university jobs, research jobs, science jobs and managerial jobs in leading universities and top global employerss. You can also find PhDs, studentships, scholarships and fellowships to support your academic career. You can search by keywords, disciplines, locations, salary bands, contract types and more.
                Find your ideal academia jobs and join the vibrant academic community of university jobs uk. We have the perfect opportunity for you whatever the jobs in academia you are seeking.</p> */}
            </div>
          </div>
        </div>

        <div id="myUniversity" class="container myUniversity">
          <div class="widget__text-block1">
            <div>
              <h2 className="">
                Academic Jobs UK: Jobs in Academia by University{' '}
              </h2>
              <UK id="section2" heading="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
