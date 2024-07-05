//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import JobSearchBoxCountry from '@/components/JobSearchBoxCountry';
import { getContentRegion } from '@/actions/getContentRegion';
import JobOfTheWeek from '@/components/JobOfTheWeek';
import JobTypeFaces from '@/components/JobTypeFaces';

//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'University and Academic Jobs Australia',
  },
  description:
    'Australia’s no 1 university jobs website! Seek 1,251 jobs in research, lecturer, science and faculty positions from leading universities in Australia.',
  keywords:
    'Academic Jobs Australia. university jobs Australia, Uni jobs Australia',
};

const jobData = [
  {
    company_name: 'Australian National University (ANU)',
    title: 'Associate Research Fellow',
    ranking: 5,
    location: 'Canberra ACT 2601, Australia',
    jobPostLink: '/jobs/associate-research-fellow/123216',
    employerLink: '/employers/australian-national-university-anu-/3739',
    applyNowLink:
      'https://jobs.anu.edu.au/jobs/associate-research-fellow-canberra-act-act-australia',
  },
  {
    company_name: 'Queensland University of Technology (QUT)',
    title: 'Executive Dean, Faculty of Indigenous Knowledges and Culture',
    ranking: 5,
    location: 'Kelvin Grove QLD 4059, Australia',
    jobPostLink:
      '/jobs/executive-dean-faculty-of-indigenous-knowledges-and-culture/129914',
    employerLink: '/employers/queensland-university-of-technology-qut-/3786',
    applyNowLink:
      '/jobs/executive-dean-faculty-of-indigenous-knowledges-and-culture/129914',
  },
  {
    company_name: 'Queensland University of Technology (QUT)',
    title: 'Principal HR Partner',
    ranking: 5,
    location: 'Kelvin Grove QLD 4059, Australia',
    jobPostLink: '/jobs/principal-hr-partner/131056',
    employerLink: '/employers/queensland-university-of-technology-qut-/3786',
    applyNowLink:
      'https://qut.nga.net.au/cp/index.cfm?event=jobs.checkJobDetailsNewApplication&returnToEvent=jobs.listJobs&jobid=C63CB99A-2266-9C42-1B0D-DAD5A7949E07&CurATC=EXT&CurBID=1877E01E%2D78DD%2D4ED2%2D9D7A%2D9DB40135CFF4&JobListID=22fc4f47%2De994%2D46a3%2Db8c9%2D9bc901269f43&jobsListKey=88db6b26%2D44b9%2D4904%2D9ea3%2De03326670378&persistVariables=CurATC,CurBID,JobListID,jobsListKey,JobID&lid=64736390058&rmuh=3D3CDB0C501CD287054F6AE8883D5D502AF87D53',
  },
  {
    company_name: 'Queensland University of Technology (QUT)',
    title: 'Sessional Academic Pool (Law)',
    ranking: 5,
    location: 'Kelvin Grove QLD 4059, Australia',
    jobPostLink: '/jobs/sessional-academic-pool-law-/131064',
    employerLink: '/employers/queensland-university-of-technology-qut-/3786',
    applyNowLink:
      'https://qut.nga.net.au/cp/index.cfm?event=jobs.viewDisplayOnlyJobDetails&returnToEvent=jobs.listJobs&jobid=80E2854B-378B-4CCF-AD0F-B18B00EBABB5&CurATC=EXT&CurBID=1877E01E%2D78DD%2D4ED2%2D9D7A%2D9DB40135CFF4&JobListID=22fc4f47%2De994%2D46a3%2Db8c9%2D9bc901269f43&jobsListKey=88db6b26%2D44b9%2D4904%2D9ea3%2De03326670378&persistVariables=CurATC,CurBID,JobListID,jobsListKey&lid=64736390008&rmuh=18B96F13A08A836AB65C97B087F13A078C0C7823',
  },
];

export default async function myPage() {
  const size = 180;
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: `/australia/faculty?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`,
    },

    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `/australia/executive?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: `/australia/hr-jobs?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Human%20Resources"}]`,
    },

    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: `/australia/phd?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Student / Phd Jobs"}]`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: `/australia/admin?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Staff / Administration"}]`,
    },
  ];

  const contentRegion = await getContentRegion();

  return (
    <main className="content-grid">
      <div className="full-width md:h-[400px] h-[229px] gradient-aj">
        <div className="hero-bg-aus md:bg-center">
          <section className="wrapper md:flex ">
            <h2 className="sentence mt-[6rem]">
              <h2 className="sentence-aus md:mb-[-5rem] mb-[-10rem]">
                Australia's University Job Website
              </h2>
              <span className="mr-8">Find</span>{' '}
              <span className="md:hidden block my-[-1rem]">
                <br />
              </span>
              <div className="slidingVertical ">
                <span>Opportunity</span>
                <span>Connections</span>
                <span>Happiness</span>
                <span>Opportunity</span>
                <span>Connections</span>
              </div>
            </h2>
          </section>

          <JobTypeFaces items={items} size={size} />

          <ul className="hero-icons flex gap-4 md:gap-8 mx-auto text-center items-center justify-center md:mt-[-75px] mt-[-11rem] lg:hidden ">
            <li>
              <a
                className="grayscale hover:grayscale-0"
                href={`australia/faculty?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`}
              >
                <Image
                  alt="Academic Faculty Positions"
                  loading="lazy"
                  width="180"
                  height="180"
                  decoding="async"
                  data-nimg="1"
                  src="/home/academic-faculty-positions.png"
                ></Image>
              </a>
              <a
                className="mb-4"
                href={`australia/faculty?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`}
              >
                <p>Faculty</p>
              </a>
            </li>
            <li>
              <a
                className="grayscale hover:grayscale-0"
                href={`australia/executive?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`}
              >
                <Image
                  alt="Academic Executive Positions"
                  loading="lazy"
                  width="180"
                  height="180"
                  decoding="async"
                  data-nimg="1"
                  src="/_next/image?url=%2Fhome%2Facademic-executive-positions.png&amp;w=384&amp;q=75"
                ></Image>
              </a>
              <a
                className="mb-4"
                href={`australia/executive?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`}
              >
                <p>Executive</p>
              </a>
            </li>
            <li>
              <a
                className="grayscale hover:grayscale-0"
                href={`australia/hr-jobs?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Human%20Resources"}]`}
              >
                <Image
                  alt="Academic HR Positions"
                  loading="lazy"
                  width="180"
                  height="180"
                  decoding="async"
                  data-nimg="1"
                  src="/home/academic-human-resource-positions.png"
                ></Image>
              </a>
              <a
                className="mb-4"
                href={`australia/hr-jobs?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Human%20Resources"}]`}
              >
                <p>HR Jobs</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24 mb-24">
        <JobSearchBoxCountry country={'Australia'} />
      </div>

      {/* <div className="pt-[4rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-australia-min.png"
          alt="AcademicJobs Australia Logo"
          className="  mb-[1rem] "
          width={330}
          height={220}
        />
     
      </div>
      <div className="max-w-screen-md mx-auto">
        <JobSearchBox l="Australia" />
      </div> */}

      {/* <h3 className="text-center ">
        We Are Australia's University Job Website
      </h3> */}

      {/* <div className=" mt-[3rem] "> */}
      <ul className="position_type_links faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 mb-2 w-full  md:w-auto">
        <li>
          <Link
            href={`/australia/lecturer?r=Australia&filter0=[{"category":"PositionType","filter":"Lecturer/Instructor"}]`}
          >
            Lecturer
          </Link>
        </li>
        <li>
          <Link
            href={`/australia/research?r=Australia&filter0=[{"category":"PositionType","filter":"Research"}]`}
          >
            Researcher
          </Link>
        </li>
        <li>
          <Link
            href={`/australia/professor?r=Australia&filter0=[{"category":"PositionType","filter":"Professor"}]`}
          >
            Professor
          </Link>
        </li>
        <li>
          <Link
            href={`/australia/hr-jobs?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]`}
          >
            HR
          </Link>
        </li>
        <li>
          <Link
            href={`/australia/phd?r=Australia&filter0=[{"category":"master_category_job_type","filter":"Student / Phd Jobs"}]`}
          >
            PhD
          </Link>
        </li>
        <li>
          <Link
            href={`/australia/indigenous?r=Australia&q=indigenous`}
            className="flex gap-2 items-center"
          >
            Indigenous
            <figure>
              <Image
                src={'/flags/australian-aboriginal-flag.png'}
                alt="Indigenous Australian Flag"
                width={1000}
                height={600}
                className="max-w-7"
              />
            </figure>
          </Link>
        </li>
      </ul>

      <ul className="city_links flex flex-wrap justify-center items-center md:gap-6 gap-3 px-7 pb-4 text-[#f4a10c] mx-auto">
        <li>
          <Link className="text-center" href="/melbourne">
            Melbourne
          </Link>
        </li>
        <li>
          <Link className="text-center" href="/sydney">
            Sydney
          </Link>
        </li>
        <li>
          <Link className="text-center" href="/brisbane">
            Brisbane
          </Link>
        </li>
        <li>
          <Link className="text-center" href="/perth">
            Perth
          </Link>
        </li>
        <li>
          <Link className="text-center" href="/adelaide">
            Adelaide
          </Link>
        </li>
        <li>
          <Link className="text-center" href="/canberra">
            Canberra
          </Link>
        </li>
        <li>
          <Link className="text-center" href="/gold-coast">
            Gold Coast
          </Link>
        </li>
        <li>
          <Link
            className="text-center"
            href={`/tasmania?r=Australia&filter0=[{"category":"State","filter":"Tasmania"}]`}
          >
            Tasmania
          </Link>
        </li>
      </ul>

      <div id="section" className="bg-slate-200 py-4 full-width mt-8">
        <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
          <h1 className="text-3xl md:text-6xl font-bold md:text-right text-gray-500 m-0 pb-8 px-7 md:px-0 ">
            Academic & University Jobs&nbsp;Australia
          </h1>

          <div>
            <p className="px-7 mb-4 mt-1">
              Australia’s No.1 university job website! Seek uni jobs in
              Australia at Academic Jobs, where we list all the best jobs for
              academics globally! Academic Jobs provides an extensive list of
              opportunities for the future of your career in education,
              carefully sectioning the top Higher Ed jobs to curate the best
              fitting position for you.
            </p>
            <p className="px-7">
              The No.1 job board for academics in Australia for all your uni
              jobs requirements, from seeking to recruiting, look no further. In
              just a few simple steps you can be in the running for your dream
              uni job!
            </p>
            <p className="px-7">Find all the best jobs here…</p>
          </div>
        </div>

        <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400 mx-auto">
          <Link href="/australia/faq"> Aus FAQ</Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-4">
        <h2 className="underline-full">
          Top Australian Universities To Work For
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-6 py-2 px-7 pb-8">
              <div className="column">
                <ul className="  rounded-3xl p-4 shadow-md">
                  <li className="mb-1 mt-4 flex">
                    <Image
                      width={100}
                      height={100}
                      src="https://www.qut.edu.au/__data/assets/image/0007/909781/qut-logo-og-1200.jpg"
                      alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                      className="rounded-3xl"
                    />
                    <Link
                      href="/employers/queensland-university-of-technology-qut-/3786"
                      className="text-[#003463] font-bold pl-2"
                    >
                      Queensland University of Technology (QUT)
                    </Link>
                  </li>
                  {/* <ul className="innerUL pl-4 pt-2 text-gray-400">
                      <li>
                        <Link href="/jobs?l=&q=QUT-lecturer">
                          QUT Lecturing Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=QUT-research">
                          QUT Research Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=QUT-professor">
                          QUT Professorial Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=QUT-Executive">
                          QUT Executive
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=QUT-Administration">
                          QUT Administration
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=QUT-Human-Resources">
                          QUT Human Resources
                        </Link>
                      </li>
                    </ul> */}
                </ul>
              </div>
              <div className="column">
                <ul className=" rounded-3xl p-4 shadow-md">
                  <li className="mb-1 mt-4 flex">
                    <Image
                      width={100}
                      height={100}
                      src="https://www.academicjobs.com/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2FBondTwitterIcon_400x400.jpg&w=384&q=75"
                      alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                      className="rounded-3xl"
                    />
                    <Link
                      href="/employers/bond-university/3785"
                      className="text-[#f1b821] font-bold pl-2 pt-6"
                    >
                      Bond University
                    </Link>
                  </li>
                  {/* <ul className="innerUL pl-4 pt-2 text-gray-400">
                      <li>
                        <Link href="/jobs?l=&q=bond-lecturer">
                          Bond Lecturing Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=bond-research">
                          Bond Research Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=bond-professor">
                          Bond Professorial Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=bond-Executive">
                          Bond Executive
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=bond-Administration">
                          Bond Administration
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=bond-Human-Resources">
                          Bond Human Resources
                        </Link>
                      </li>
                    </ul> */}
                </ul>
              </div>
              <div className="column">
                <ul className=" rounded-3xl p-4 shadow-md">
                  <li className="mb-1 mt-4 flex">
                    <Image
                      width={100}
                      height={100}
                      src="https://images.all-free-download.com/images/graphiclarge/the_university_of_adelaide_1_111801.jpg"
                      alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                      className="rounded-3xl"
                    />
                    <Link
                      href="/employers/the-university-of-adelaide/3737"
                      className="text-[#A51C30] font-bold pl-2"
                    >
                      University of Adelaide
                    </Link>
                  </li>
                  {/* <ul className="innerUL pl-4 pt-2 text-gray-400">
                      <li>
                        <Link href="/jobs?l=&q=Adelaide">
                          Adelaide Lecturing Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=Adelaide">
                          Adelaide Research Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=Adelaide">
                          Adelaide Professorial Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=Adelaide">
                          Adelaide Executive
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=Adelaide">
                          Adelaide Administration
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=Adelaide">
                          Adelaide Human Resources
                        </Link>
                      </li>
                    </ul> */}
                </ul>
              </div>
              <div className="column">
                <ul className=" rounded-3xl p-4 shadow-md">
                  <li className="mb-1 mt-4 flex">
                    <Image
                      width={100}
                      height={100}
                      src="https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20University%20of%20canberra.png"
                      alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                      className="rounded-3xl"
                    />
                    <Link
                      href="/employers/university-of-canberra-uc-/3821"
                      className="text-[#192847] font-bold pl-2"
                    >
                      University of Canberra (UC)
                    </Link>
                  </li>
                  {/* <ul className="innerUL pl-4 pt-2 text-gray-400">
                      <li>
                        <Link href="/jobs?l=&q=western">
                          UWA Lecturing Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=western">UWA Research Jobs</Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=western">
                          UWA Professorial Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=western">UWA Executive</Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=western">
                          UWA Administration
                        </Link>
                      </li>
                      <li>
                        <Link href="/jobs?l=&q=western">
                          UWA Human Resources
                        </Link>
                      </li>
                    </ul> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <h2 className="underline-full"> Top University Employer Rankings</h2> */}
        <div className="bg-white flex flex-col md:flex-row mx-auto mb-4">
          {/* <div className="card bg-slate-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {' '}
                Job Of The Week{' '}
              </h2>

            </div>    
          </div> */}

          {/* /top-10-australian-universities */}
          <div className="md:w-1/3 w-full">
            <div className="card bg-slate-100 shadow-xl border">
              <div className="card-body">
                <h2 className="card-title m-0 underline-full">
                  Job of the Week
                </h2>
                <div className="flex">
                  <div>
                    <Image
                      src="https://www.academicjobs.com/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2FAcademic%20Jobs%20Southern%20Cross%20University.png&w=256&q=75"
                      width={120}
                      height={120}
                      alt="University of New England (UNE) Logo"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="m-0 text-[22px]">
                      Workplace Relations Specialist
                    </h3>
                  </div>
                </div>
                <h4 className="m-0 text-sm">
                  Southern Cross University (SCU){' '}
                  {/* <span className="font-normal">
                  </span> */}
                </h4>
                <p className="text-sm m-0 text-gray-400">
                  Closes 07 July, 2024
                </p>

                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <li className="text-sm">
                    Great salary with outstanding additional employment benefits
                    and entitlements
                  </li>
                  <li className="text-sm">
                    Full-time or part-time twelve (12) month opportunity
                  </li>
                  <li className="text-sm">
                    17% superannuation, 17.5% leave loading, flexible work
                    arrangements
                  </li>
                  {/* <li>Salary packaging options are available</li>
                  <li className='text-sm'>
                    4 weeks annual leave plus Christmas week shutdown, per annum
                  </li>
                  <li className='text-sm'>Relocation assistance provided</li> */}
                </ul>
                <p className="text-sm"></p>
                <Link
                  className="btn btn-aj btn-sm ml-auto"
                  href="/jobs/workplace-relations-specialist/129758"
                >
                  Learn more
                </Link>
              </div>
              {/* <figure>
              <Image
                width={1280}
                height={380}
                src="/academic-job-postings/university-of-sydney.jpg"
                alt="Top Academic Jobs Australia"
                className="h-[5rem]"
              />
            </figure> */}
              {/* <Link
                  href={'/top-10-australian-universities'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
            </div>
          </div>

          <div className="md:w-2/3 w-full">
            <a className="card-title md:ml-4 mt-8 text-[#3b5683]">
              {' '}
              Top HR jobs today
            </a>
            <div className=" h-96 md:ml-4 overflow-y-scroll custom-scrollbar">
              <SearchResults q={{ q: 'hr', l: 'Australia' }} />{' '}
            </div>
          </div>
        </div>
      </div>

      <h2 className="underline-full mt-16">Jobs of the week for Australia</h2>
      <JobOfTheWeek jobData={jobData} />

      <div id="myUniversity" class="myUniversity">
        <div class="widget__text-block1">
          <div>
            <h2 className="">Academic Jobs Australia: All University Jobs</h2>
            <Australia id="section1" heading="" />
          </div>
        </div>
      </div>
      {/* /top-10-australian-universities */}
      <div className="w-full">
        <div className="card bg-slate-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title m-0 text-4xl">
              {' '}
              Top University Employers Australia{' '}
            </h2>
          </div>
          <figure>
            <Image
              width={2560}
              height={760}
              src="/academic-job-postings/university-of-sydney.jpg"
              alt="Top Academic Jobs Australia"
              className=""
            />
          </figure>
          <ul className="p-8 text-gray-500 flex justify-between px-16">
            <li>
              <Link
                className="flex flex-col items-center"
                href="https://www.academicjobs.com/employers/queensland-university-of-technology-qut-/3786"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://www.qut.edu.au/__data/assets/image/0007/909781/qut-logo-og-1200.jpg"
                  alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                  className="rounded-3xl mb-4"
                />
                Queensland University
                <br />
                of Technology (QUT)
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col items-center"
                href="https://www.academicjobs.com/employers/bond-university/3785/"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://www.academicjobs.com/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2FBondTwitterIcon_400x400.jpg&w=384&q=75"
                  alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                  className="rounded-3xl mb-4"
                />
                Bond University
                <br />
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-col items-center"
                href="/employers/university-of-canberra/3821"
              >
                <Image
                  width={100}
                  height={100}
                  src="https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20University%20of%20canberra.png"
                  alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                  className="rounded-3xl mb-4"
                />
                University of Canberra (UC)
                <br />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
