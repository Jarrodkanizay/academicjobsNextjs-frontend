//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import NZ from '@/components/topUnis/NZ';
import JobSearchBoxCountry from '@/components/JobSearchBoxCountry';
import JobOfTheWeek from '@/components/JobOfTheWeek';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'University & Academic Jobs NZ',
  },
  description:
    'Find 200 university jobs in NZ. Apply for jobs in lecturer, research, science and postdoc jobs from UK top universities, such as Massey, AUT, UOA.',
  keywords:
    'Academic Jobs New Zealand, University job New Zealand, New Zealand university jobs',
};

const size = 180;

const items = [
  {
    src: '/home/academic-faculty-positions.png',
    alt: 'Academic Faculty Positions',
    label: 'Faculty',
    link: `new-zealand/faculty?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`,
  },

  {
    src: '/home/academic-executive-positions.png',
    alt: 'Academic Executive Positions',
    label: 'Executive',
    link: `new-zealand/executive?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
  },
  {
    src: '/home/academic-human-resource-positions.png',
    alt: 'Academic Human Resource Positions',
    label: 'HR Jobs',
    link: `/new-zealand/hr-jobs?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]`,
  },

  {
    src: '/home/academic-phd-positions.png',
    alt: 'Academic PhD Positions',
    label: 'PhD Jobs',
    link: `new-zealand/phd?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Student / Phd Jobs"}]`,
  },
  {
    src: '/home/academic-staff-positions.png',
    alt: 'Academic Staff Positions',
    label: 'Staff/Admin',
    link: `/new-zealand/admin?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Staff / Administration"}]`,
  },
];

const jobData = [
  {
    company_name: 'Auckland University of Technology AUT',
    title: 'Professor and Deputy Head of School, Science',
    ranking: 5,
    location: 'Auckland CBD, New Zealand',
    jobPostLink: '/jobs/professor-and-deputy-head-of-school-science/132968',
    employerLink: '/employers/auckland-university-of-technology-aut/3804',
    applyNowLink:
      'https://email.talentappstore.com/?tenant=aut&principalType=candidate&entityId=aut-email-candidate-idp&state=90fa1cf9-392d-4b45-ae68-b878471d5e34,email&callback=http://is.talentappstore.com:9763/commonauth',
  },
  {
    company_name: 'The University of Auckland',
    title: 'Human Resources Manager',
    ranking: 5,
    location: 'Auckland, New Zealand',
    jobPostLink: '/jobs/human-resources-manager/133137',
    employerLink: '/employers/the-university-of-auckland/3809',
    applyNowLink:
      'https://jobs.smartrecruiters.com/TheUniversityOfAuckland/743999996263977-human-resources-manager',
  },
  // {
  //   company_name: 'Queensland University of Technology (QUT)',
  //   title: 'Principal HR Partner',
  //   ranking: 5,
  //   location: 'Kelvin Grove QLD 4059, Australia',
  //   jobPostLink: '/jobs/principal-hr-partner/131056',
  //   employerLink: '/employers/queensland-university-of-technology-qut-/3786',
  //   applyNowLink:
  //     'https://qut.nga.net.au/cp/index.cfm?event=jobs.checkJobDetailsNewApplication&returnToEvent=jobs.listJobs&jobid=C63CB99A-2266-9C42-1B0D-DAD5A7949E07&CurATC=EXT&CurBID=1877E01E%2D78DD%2D4ED2%2D9D7A%2D9DB40135CFF4&JobListID=22fc4f47%2De994%2D46a3%2Db8c9%2D9bc901269f43&jobsListKey=88db6b26%2D44b9%2D4904%2D9ea3%2De03326670378&persistVariables=CurATC,CurBID,JobListID,jobsListKey,JobID&lid=64736390058&rmuh=3D3CDB0C501CD287054F6AE8883D5D502AF87D53',
  // },
  // {
  //   company_name: 'Queensland University of Technology (QUT)',
  //   title: 'Sessional Academic Pool (Law)',
  //   ranking: 5,
  //   location: 'Kelvin Grove QLD 4059, Australia',
  //   jobPostLink: '/jobs/sessional-academic-pool-law-/131064',
  //   employerLink: '/employers/queensland-university-of-technology-qut-/3786',
  //   applyNowLink:
  //     'https://qut.nga.net.au/cp/index.cfm?event=jobs.viewDisplayOnlyJobDetails&returnToEvent=jobs.listJobs&jobid=80E2854B-378B-4CCF-AD0F-B18B00EBABB5&CurATC=EXT&CurBID=1877E01E%2D78DD%2D4ED2%2D9D7A%2D9DB40135CFF4&JobListID=22fc4f47%2De994%2D46a3%2Db8c9%2D9bc901269f43&jobsListKey=88db6b26%2D44b9%2D4904%2D9ea3%2De03326670378&persistVariables=CurATC,CurBID,JobListID,jobsListKey&lid=64736390008&rmuh=18B96F13A08A836AB65C97B087F13A078C0C7823',
  // },
];

export default function Page() {
  return (
    <>
      <div className="full-width md:h-[400px] h-[229px] gradient-aj">
        <div className="hero-bg-nz h-full md:bg-center mb-4">
          <section className="wrapper flex flex-col items-center justify-center">
            <h1 className="sentence text-center m-0 p-0">
              University and Academic Jobs NZ
            </h1>
            {/* <h2 className="sentence m-0 p-0">Kia ora</h2> */}
            <h3 className="sentence-aus m-0 p-0">
              New Zealand's University Jobs Website
            </h3>
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
        <JobSearchBoxCountry country={'New Zealand'} />
      </div>
      <div className="my-4">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link
                href={`/New-Zealand/lecturer?r=New Zealand&filter0=[{"category":"PositionType","filter":"Lecturer/Instructor"}]`}
              >
                {' '}
                Lecturer
              </Link>
            </li>
            <li>
              <Link
                href={`/New-Zealand/research?r=New Zealand&filter0=[{"category":"PositionType","filter":"Research"}]`}
              >
                {' '}
                Research{' '}
              </Link>
            </li>
            <li>
              <Link
                href={`/New-Zealand/professor?r=New Zealand&filter0=[{"category":"PositionType","filter":"Professor"}]`}
              >
                {' '}
                Professor
              </Link>
            </li>
          </ul>
          <li>
            <Link
              href={`/New-Zealand/executive?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`}
            >
              {' '}
              Executive
            </Link>
          </li>
          <li>
            <Link
              href={`/new-zealand/admin?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Staff / Administration"}]`}
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              href={`/new-zealand/hr-jobs?r=New Zealand&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]`}
            >
              {' '}
              HR
            </Link>
          </li>
          <li>
            <Link
              href={`/New-Zealand/student?r=New Zealand&filter0=[{"category":"PositionType","filter":"Graduate"}]`}
            >
              {' '}
              Student
            </Link>
          </li>
        </ul>
      </div>
      <div className=" mt-2 mb-4">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/employers/massey-university/3810">Massey</Link>
            </li>
            <li>
              <Link href="/employers/auckland-university-of-technology/3804">
                AUT
              </Link>
            </li>
            <li>
              <Link href="/employers/the-university-of-auckland/3809">
                Auckland
              </Link>
            </li>
            <li>
              <Link href="/employers/waikato-university/3806">Waikato</Link>
            </li>
          </ul>
          <li>
            <Link href="/employers/victoria-university-of-wellington/3807">
              VUW
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-otago/3805">Otago</Link>
          </li>
          <li>
            <Link href="/employers/lincoln-university/3808">Lincoln</Link>
          </li>
          <li>
            <Link href="/employers/university-of-canterbury/3811">
              Canterbury
            </Link>
          </li>
        </ul>
      </div>
      <div className="content-grid mx-auto ">
        <div
          id="section"
          className=" full-width py-4 full-width mb-4 bg-slate-200"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h2 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS New Zealand:
              </span>{' '}
            </h2>

            <div>
              <p className="px-7 mb-4 mt-1">
                Discover top university employment opportunities across New
                Zealand. Our platform is your gateway to a wide range of
                university jobs, from top-tier faculty positions and academic
                jobs to administrative roles at leading universities and
                colleges. Whether you're seeking lecturer jobs, research jobs,
                or senior academic positions, we provide a comprehensive listing
                of opportunities to advance your career in higher education.
                Explore postdoctoral jobs, professor roles, and university
                vacancies to find the perfect fit for your professional journey.
              </p>
              <p className="px-7 md:flex hidden">
                Our job board is tailored for aspiring and established
                professionals in the academic sector. Stay informed with the
                latest university job openings, including academic careers,
                student support jobs, and university staff positions. Join a
                collaborative academic environment dedicated to intellectual
                growth, professional development, and research excellence. Begin
                your search for university jobs search in NZ top universities
                today!
              </p>
              <p className="px-7 md:flex hidden">
                Find all the best jobs here…
              </p>
            </div>
          </div>
        </div>
        <h2 className="underline-full">University Jobs of the week</h2>
        <JobOfTheWeek jobData={jobData} />

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
          <h2 className="">New Zealand: All University Jobs by Region</h2>
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
      </div>
    </>
  );
}
