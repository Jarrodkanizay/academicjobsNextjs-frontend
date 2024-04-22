import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import Top7JobTypes from '@/components/Top7JobTypes';
import JobCategoryAndLocationLinks from '@/components/links/JobCategoryAndLocationLinks';
import AusUniLogos from '@/components/AusUniLogos';
import AmericaUniLogos from '@/components/AmericaUniLogos';
import { getContentRegion } from '@/actions/getContentRegion';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Jobs: All Higher Ed Positions Locally and Globally.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Search for academic positions, research, science and university staff jobs here. Find higher ed jobs at all universities today!',
  keywords:
    'Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs',
};
export default async function myPage() {


  const contentRegion = await getContentRegion();
  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;
  return (
    <main className="content-grid">
      {/* <div className="flex flex-col items-center justify-center mb-32"> */}
      {/* <div className="h-[15vh] flex flex-col items-end justify-end">
          <LogoAJ forceClass="logo" width={310} height={210} />
        </div>
        <div className="w-full md:w-3/6 h-[6vh] flex flex-col items-top mt-[-1rem]">
          <JobSearchBoxHome />
        </div>
      </div> */}
      <div className="full-width md:h-[400px] h-[229px] gradient-aj">
        <Top7JobTypes />
      </div>
      <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24">
        <JobSearchBoxHome />
      </div>
      <div className="md:mt-12 mt-4">
        <JobCategoryAndLocationLinks />
      </div>
      <div className="flex mx-auto gap-6">
        <a href="/academic-talent-pool">
          <Image
            width={100}
            height={100}
            src="https://academicjobs.s3.amazonaws.com/img/_misc/aca-talent-pool.png"
            className=" mt-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto"
            alt="AcademicJobs Job Elephant Client Center"
          />
        </a>
        <a href="/jobelephant-recruitment">
          <Image
            width={180}
            height={170}
            src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
            className="rounded-3xl mt-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto"
            alt="AcademicJobs Job Elephant Client Center"
          />
        </a>
      </div>
      {/* <p className=" text-center mt-20 font-lg font-bold">Search By <span className="text-amber-500">REGION</span></p> */}
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch mb-8 text-left mt-6 max-w-screen-lg mx-auto">
        <Link
          href="/australia"
          className="card bg-slate-100  hover:grayscale hover:underline"
        >
          <h2 className="text-center  text-gray-500 font-normal mb-0 text-[16px]">
            {' '}
            Australia
          </h2>
          <figure>
            <Image
              width={1000}
              height={1000}
              src="/home/sydney-harbour.jpg"
              alt="Top Academic Jobs Australia"
              className="rounded-3xl"
            />
          </figure>
        </Link>
        <Link
          href="/uk"
          className="card bg-slate-100  hover:grayscale hover:underline"
        >
          <h2 className="text-center text-gray-500 font-normal mb-0 text-[16px]">
            {' '}
            United Kingdom
          </h2>
          <figure>
            <Image
              width={1280}
              height={380}
              src="/home/london-phone.jpg"
              alt="How to Land Your Dream College Job: A Step-by-Step Guide"
              className="rounded-3xl"
            />
          </figure>
        </Link>
        <Link
          href="/usa"
          className="card bg-slate-100  hover:grayscale hover:underline "
        >
          <h2 className="text-center text-gray-500 font-normal mb-0 text-[16px]">
            {' '}
            United States
          </h2>
          <figure className="">
            <Image
              width={1280}
              height={380}
              src="/home/statue-of-liberty-new-york-city-skyline.jpg"
              alt="Happiness and Academics: Scott Galloway's Algebra of hub"
              className="rounded-3xl grayscale-0"
            />
          </figure>
        </Link>
        <Link
          href="/europe"
          className="card bg-slate-100  hover:grayscale hover:underline"
        >
          <h2 className="text-center  text-[16px] text-gray-500 font-normal mb-0">
            {' '}
            Europe
          </h2>
          <figure>
            <Image
              width={1280}
              height={380}
              src="/home/europe-flags.png"
              alt="How to Land Your Dream College Job: A Step-by-Step Guide"
              className="rounded-3xl"
            />
          </figure>
        </Link>
        <Link
          href="/canada"
          className="card bg-slate-100  hover:grayscale hover:underline"
        >
          <h2 className="text-center text-[16px] text-gray-500 font-normal mb-0">
            {' '}
            Canada
          </h2>
          <figure>
            <Image
              width={1280}
              height={380}
              src="/home/beautiful-canada-flag-waving-front.png"
              alt="How to Land Your Dream College Job: A Step-by-Step Guide"
              className="rounded-3xl"
            />
          </figure>
        </Link>
      </ul>
      {/* Set this to false to show uni logo and welcome to message */}
      {/* {contentRegion === 'USA' ? (
        <>
          <div className="mb-16">
            <a href="/jobelephant-recruitment">
              <Image
                width={180}
                height={170}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
                className="rounded-3xl mt-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto"
                alt="AcademicJobs Job Elephant Client Center"
              />
            </a>
          </div>
          <AmericaUniLogos />
 */}
      {/* <a
            href="#section"
            className="scroll-smooth md:scroll-auto text-[#f4a10c] flex flex-col items-center justify-center text-2xl animate-bounce h-6 pt-12 mb-[16px]"
          >
            ▼
          </a> */}
      {/* </>
      ) : (
        <>
          <div className="md:flex gap-4">
            <article
              className="listing bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg md:w-1/2 font-bold"
              data-id="59973"
            >
              <div className="badge badge-sm badge-featured bg-[#f4a10c] text-white absolute top-[-0.3rem] right-[-0.3rem] border-transparent items-end pt-4 shadow-md">
                Featured
              </div>
              <div className="flex items-center mb-2">
                <div className="w-20 h-20 mr-4">
                  <a href="/employers/bond-university/3785">
                    <Image
                      alt="Bond University"
                      width={100}
                      height={100}
                      src="/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2FBondTwitterIcon_400x400.jpg&amp;w=256&amp;q=75"
                    ></Image>
                  </a>
                </div>
                <a
                  className="flex-1 block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer"
                  href="/jobs/professor-associate-professor-implementation-science-and-healthcare-innovations/87939"
                >
                  Professor/Associate Professor, Implementation Science and
                  Healthcare Innovations
                </a>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <div className="mb-1">Bond University</div>
                  <div className="text-gray-700 font-light text-sm">
                    Robina Gold Coast, QLD
                  </div>
                </div>
                <div className="applications-close border-2 rounded px-2 mt-1 ml-2">
                  <p className="text-center text-gray-400 text-sm mb-0">
                    Closes
                  </p>
                  <div className="text-sm">
                    <time>Mar 24, 2024</time>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="listing bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg md:w-1/2 font-bold"
              data-id="59973"
            >
              <div className="badge badge-sm badge-featured bg-[#f4a10c] text-white absolute top-[-0.3rem] right-[-0.3rem] border-transparent items-end pt-4 shadow-md">
                Featured
              </div>
              <div className="flex items-center mb-2">
                <div className="w-20 h-20 mr-4">
                  <a href="/employers/queensland-university-of-technology-qut-/3786">
                    <Image
                      alt="Queensland University of Technology (QUT)"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain rounded-lg"
                      src="/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2FQueensland-Univ-Tech-Logo.jpg&amp;w=256&amp;q=75"
                    ></Image>{' '}
                  </a>
                </div>
                <a
                  className="flex-1 block text-blue-500 text-xl font-bold leading-tight hover:underline  cursor-pointer"
                  href="/jobs/professor-in-artificial-intelligence/90020"
                >
                  Professor in Artificial Intelligence
                </a>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <div className="mb-1">
                    Queensland University of Technology (QUT)
                  </div>
                  <div className="text-gray-700 font-light text-sm">
                    Brisbane QLD, Australia
                  </div>
                </div>
                <div className="applications-close border-2 rounded px-2 mt-1 ml-2">
                  <p className="text-center text-gray-400 text-sm mb-0">
                    Closes
                  </p>
                  <div className="text-sm">
                    <time>Apr 1, 2024</time>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <AusUniLogos />
        </>
      )} */}
      {/* Hero Panel */}
      {/* <div
        id="section"
        className="hero-content flex-col lg:flex-row mx-auto items-start py-12 bg-slate-200 breakout full-width prose w-fit"
      ><div>
        <h1 className="text-3xl md:text-6xl font-normal text-gray-500 mt-12 text-right">
          ACADEMIC JOBS: Academic, research &&nbsp;science positions locally & globally
        </h1>
        <h2 className="mt-0 text-right">
          Academic, research &&nbsp;science positions locally & globally
        </h2>
        </div>
        <div className="text-col-2 mb-12">
          <p>
            Discover top-tier faculty and staff roles in the world of
            higher education. Begin your search for university academic jobs,
            college faculty positions, and administrative opportunities in
            higher ed. Explore and apply for a range of roles, including
            lecturer, researcher, university administrator, and senior academic
            positions, available nationally and internationally.
          </p>
          <p>
            Whether you&apos;re an aspiring or established professor,
            researcher, lecturer, or higher education administrator, our
            platform offers the most current opportunities in academia globally.
            Connect with your next career move in the academic sector through
            our comprehensive online job board. Find your next academic job now!
          </p>
        </div>
      </div> */}
      <div id="section" className="bg-slate-200 full-width py-4 mb-16">
        <div className="md:hero-content flex flex-col lg:flex-row mx-auto md:items-start py-12">
          <h1 className="text-2xl font-normal sm:text-right text-gray-400 m-0 pb-8  md:px-0">
            <span className="md:text-6xl font-bold text-gray-500 pb-4 ">
              ACADEMIC JOBS: <br />
            </span>{' '}
            Academic, research & science positions locally & globally
          </h1>
          <div>
            <p className="md:px-7 mb-4 mt-1">
              Discover top-tier faculty and staff roles in the world of higher
              education. Begin your search for university academic jobs, college
              faculty positions, and administrative opportunities in higher ed.
              Explore and apply for a range of roles, including lecturer,
              researcher, university administrator, and senior academic
              positions, available nationally and internationally.
            </p>
            <p className="md:px-7">
              Whether you&apos;re an aspiring or established professor,
              researcher, lecturer, or higher education administrator, our
              platform offers the most current opportunities in academia
              globally. Connect with your next career move in the academic
              sector through our comprehensive online job board. Find your next
              academic job now!
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto mt-8 mb-8">
        <h2 className="underline-full"> Top University Employer Rankings</h2>
        <div className="bg-white flex flex-col">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-8 text-left">
            <div className="/academic-hub/happiness-and-academics/">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Top University Employers USA </h2>
                  <a className=" text-gray-400"> 10 Dec, 2023</a>
                </div>
                <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/academic-job-postings/harvard-university.jpg"
                    alt="Happiness and Academics: Scott Galloway's Algebra of hub"
                  />
                </figure>
                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <a href="https://www.academicjobs.com/employers/harvard-university/3100">
                    Harvard University
                  </a>
                  <a href="https://www.academicjobs.com/employers/massachusetts-institute-of-technology/3103">
                    {' '}
                    <br /> Massachusetts Institute of Technology (MIT)
                  </a>
                  <a href="https://www.academicjobs.com/employers/stanford-university/3101">
                    {' '}
                    Stanford University
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/university-of-california-berkeley/3105">
                    {' '}
                    University of California Berkeley (UCB)
                  </a>
                  <a href="https://www.academicjobs.com/employers/caltech/3128">
                    {' '}
                    California Institute of Technology (Caltech)
                  </a>
                </ul>
                {/* <Link
                  href={'/academic-hub/'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
            {/* /top-10-australian-universities */}
            <div className="">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {' '}
                    Top University Employers Australia{' '}
                  </h2>
                  <a className=" text-gray-400"> 10 Dec, 2023</a>
                </div>
                <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/academic-job-postings/university-of-sydney.jpg"
                    alt="Top Academic Jobs Australia"
                    className="h-[5rem]"
                  />
                </figure>
                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <a href="https://www.academicjobs.com/employers/queensland-university-of-technology-qut-/3786">
                    Queensland University of Technology (QUT)
                  </a>
                  <a href="https://www.academicjobs.com/employers/bond-university/3785/">
                    {' '}
                    Bond University
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/the-university-of-sydney/3171">
                    {' '}
                    The University of Sydney
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/australian-national-university/3739">
                    {' '}
                    Australian National University (ANU)
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/monash-university/3182/">
                    {' '}
                    Monash University
                  </a>
                </ul>
                {/* <Link
                  href={'/top-10-australian-universities'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
            <div className="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Top University Employers UK </h2>
                  <a className=" text-gray-400"> 06 Dec, 2023</a>
                </div>
                <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/academic-job-postings/top-universities-worldwide.jpg"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                    className="h-[5rem]"
                  />
                </figure>
                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <a href="https://www.academicjobs.com/employers/university-of-oxford/3099">
                    University of Oxford
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/imperial-college-london/3129">
                    {' '}
                    Imperial College London
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/university-of-cambridge/12635">
                    {' '}
                    University of Cambridge
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/university-of-edinburgh/12681">
                    {' '}
                    University of Edinburgh
                    <br />
                  </a>
                  <a href=""> King’s College London</a>
                </ul>
                {/* <Link
                  href={'/academic-hub/'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* <p className="px-7 text-center mt-5">
            <Link
              className="link  text-[#f4a10c] font-bold text-2xl hover:text-orange-500"
              href="/global-academic-awards-2023-nominations"
            >
              Do you know someone deserving, nominate them for the 'Global&nbsp;
              Academic&nbsp;Awards 2023'&nbsp;NOW
            </Link>
          </p> */}
      <h2 className="underline-full">Top Academic Jobs Today</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          {/* <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/postdoctoral-position-in-multiplexed-single-cell-rnaseq-based-antibody-discovery/81986"
                    className="text-blue-500 font-bold"
                  >
                    Postdoctoral position in multiplexed single-cell
                    RNAseq-based antibody discovery
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">École Polytechnique</Link>
                  </li>
                  <li>
                    <Link href="">Lausanne, Switzerland</Link>
                  </li>
                  <li>
                    <Link href="">Feb 5, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/assistant-professor-associate-professor-of-economics/81980/"
                    className="text-blue-500 font-bold"
                  >
                    Assistant Professor/Associate Professor of Economics
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of North Carolina Wilmington</Link>
                  </li>
                  <li>
                    <Link href="">Wilmington, North Carolina, USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 5, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/tenured-professor-epidemiology/81981"
                    className="text-blue-500 font-bold"
                  >
                    Tenured Professor - Epidemiology
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">
                      Rutgers, The State University of New Jersey
                    </Link>
                  </li>
                  <li>
                    <Link href="">New Brunswick, New Jersey, USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 5, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/immunogenetics-and-histocompatibility-laboratory-director-health-sciences-open-rank-clinical-professor/73108/"
                    className="text-blue-500 font-bold"
                  >
                    Immunogenetics and Histocompatibility Laboratory
                    Director/Health Sciences Open Rank Clinical Professor
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of California, Los Angeles</Link>
                  </li>
                  <li>
                    <Link href="">Los Angeles, CA, USA</Link>
                  </li>
                  <li>
                    <Link href=""> Dec 3, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div> */}
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/vice-president-for-mission-ministry/105455"
                    className="text-blue-500 font-bold"
                  >

                    Vice President for Mission & Ministry
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">
                      Santa Clara University
                    </Link>
                  </li>
                  <li>
                    <Link href="">Santa Clara, CA 95053, USA</Link>
                  </li>
                  <li>
                    <Link href="">May 3, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5152108"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            {/* <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/postdoctoral-fellow-in-comparative-radiobiology-translational-radiopharmaceutical-development-and-boron-neutron-capture-therapy-bnct-/82181"
                    className="text-blue-500 font-bold"
                  >
                    Postdoctoral Fellow in Comparative Radiobiology,
                    Translational Radiopharmaceutical Development, and Boron
                    Neutron Capture Therapy (BNCT)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Missouri System</Link>
                  </li>
                  <li>
                    <Link href="">Columbia, Missouri, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 11, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=4922759"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div> */}
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/assistant-to-associate-dean-of-undergrad-programs/82206"
                    className="text-blue-500 font-bold"
                  >
                    Assistant to Associate Dean of Undergrad Programs
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Oregon State University</Link>
                  </li>
                  <li>
                    <Link href="">Corvallis, OR, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 16, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=4929143"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>

            {/* </div> */}
            {/* <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/career-advisor-senior-career-advisor/82180"
                    className="text-blue-500 font-bold"
                  >
                    Career Advisor/Senior Career Advisor
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of the Pacific</Link>
                  </li>
                  <li>
                    <Link href="">Stockton, CA, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 11, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=4921373"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/information-technology-faculty/82182"
                    className="text-blue-500 font-bold"
                  >
                    Information Technology Faculty
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">North Central State College</Link>
                  </li>
                  <li>
                    <Link href="">2441 Kenwood Circle, Mansfield, OH, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 15, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=4931492"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/student-counsellor/93780"
                    className="text-blue-500 font-bold"
                  >
                    Executive Director of System Information Technology
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Eastern New Mexico University</Link>
                  </li>
                  <li>
                    <Link href="">Portales, NM, USA</Link>
                  </li>
                  <li>
                    <Link href=""> Mar 29, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5064812"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/vice-president-for-finance-strategy/98391"
                    className="text-blue-500 font-bold"
                  >
                    Vice President of Finance and Operations
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">South Central College</Link>
                  </li>
                  <li>
                    <Link href="">North Mankato, MN 56003, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 2, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5102550"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div> */}
            {/* <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/student-counsellor/93743"
                    className="text-blue-500 font-bold"
                  >
                    Director - UTeach Permian Basin
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Texas Permian Basin</Link>
                  </li>
                  <li>
                    <Link href="">Odessa, TX, USA</Link>
                  </li>
                  <li>
                    <Link href="">Mar 31, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5066019"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div> */}

            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/indigenous-research-officer/101449"
                    className="text-blue-500 font-bold"
                  >
                    Director - Continuing Education
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Texas Permian Basin</Link>
                  </li>
                  <li>
                    <Link href="">Odessa, TX 79762, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 20, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5119689"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/indigenous-research-officer/101433"
                    className="text-blue-500 font-bold"
                  >
                    Dean - College of Education
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Texas Permian Basin</Link>
                  </li>
                  <li>
                    <Link href="">Odessa, TX 79762, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 20, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5119737"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/company_name/108701"
                    className="text-blue-500 font-bold"
                  >
                    Dean - College of Arts & Humanities
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Texas Permian Basin</Link>
                  </li>
                  <li>
                    <Link href="">Odessa, TX, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 22, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/get_redirect.php?id=5176084"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/company_name/108717"
                    className="text-blue-500 font-bold"
                  >
                    Vice President of Academic Affairs
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Nicolet College</Link>
                  </li>
                  <li>
                    <Link href="">5364 College Dr, Rhinelander, WI 54501, USA</Link>
                  </li>
                  <li>
                    <Link href="">Apr 22, 2024</Link>
                  </li>
                  <Link
                    href="https://apptrkr.com/5145101"
                    className="btn btn-sm btn-aj mt-4"
                  >
                    More Info
                  </Link>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link className="text-[#f4a10c] mt-4 mb-4 px-2 font-bold" href="/jobs/">
        view more top jobs →
      </Link>
      {/* <div className="ml-2">
      {/* <Link                 href="https://cportal.jobelephant.com/login"
                 className="btn text-white mt-8 bg-[#265882] px-4"
               >
                  Post Your JobElephant Now
               </Link></div> */}
      <h2 className="underline-full mt-20">Top Cities for Uni Jobs</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/USA/" className="text-[#f4a10c] font-bold">
                    USA
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/boston/">Boston</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-york/">New York</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/los-angeles/">Los Angeles</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-francisco/">San Francisco</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/chicago/">Chicago</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/san-diego/">San Diego</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/washington-dc/">Washington DC</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/philadelphia/">Philadelphia</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/atlanta/">Atlanta</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/seattle/">Seattle</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/pittsburgh/">Pittsburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/new-haven/">New Haven</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Australia/" className="text-[#f4a10c] font-bold">
                    Australia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/melbourne/">Melbourne</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/sydney/">Sydney</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/brisbane/">Brisbane</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/gold-coast/">Gold Coast</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/canberra/">Canberra</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/perth/">Perth</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/adelaide/">Adelaide</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/UK/" className="text-[#f4a10c] font-bold">
                    UK
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/london/">London</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/edinburgh/">Edinburgh</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/manchester/">Manchester</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Canada/" className="text-[#f4a10c] font-bold">
                    Canada
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/toronto/">Toronto</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/vancouver/">Vancouver</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/montreal/">Montreal</Link>
                  </li>
                </ul>
                <li className="mb-1 mt-4">
                  <Link href="/Asia/" className="text-[#f4a10c] font-bold">
                    Asia
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/hong-kong/">Hong Kong</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/beijing/">Beijing</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/tokyo/">Tokyo</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/singapore/">Singapore</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link href="/Europe/" className="text-[#f4a10c] font-bold">
                    Europe
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/paris/">Paris</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/zurich/">Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/munich/">Munich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/amsterdam/">Amsterdam</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/copenhagen/">Copenhagen</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/stockholm/">Stockholm</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* WIP */}
      {/* <h2 className="underline-full mt-20">Top Universities To Work For</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="https://www.academicjobs.com/employers/queensland-university-of-technology/3786/"
                    className="text-[#003463] font-bold"
                  >
                    Queensland University of Technology (QUT)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-research/">QUT Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-professor/">
                      QUT Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Executive/">QUT Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Administration/">
                      QUT Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-Human-Resources/">
                      QUT Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/QUT-jobs/">QUT Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/employers/bond-university/3785/"
                    className="text-orange-500 font-bold"
                  >
                    Bond University
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/bond-lecturer/">Bond Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-research/">Bond Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-professor/">
                      Bond Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Executive/">Bond Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Administration/">
                      Bond Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-Human-Resources/">
                      Bond Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/bond-jobs/">Bond Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="/employers/harvard-university/3100/"
                    className="text-[#A51C30] font-bold"
                  >
                    Harvard University
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-lecturer/">
                      Harvard Lecturing Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-research/">
                      Harvard Research Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-professor/">
                      Harvard Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Executive/">
                      Harvard Executive
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Administration/">
                      Harvard Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-Human-Resources/">
                      Harvard Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/harvard-jobs/">Harvard Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4">
                  <Link
                    href="https://www.academicjobs.com/employers/university-of-california-san-diego/3149/"
                    className="text-[#192847] font-bold"
                  >
                    University of California Las Angeles (UCLA)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-lecturer/">UCLA Lecturing Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-research/">UCLA Research Jobs</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-professor/">
                      UCLA Professorial Jobs
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Executive/">UCLA Executive</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Administration/">
                      UCLA Administration
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-Human-Resources/">
                      UCLA Human Resources
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/jobs/UCLA-jobs/">UCLA Jobs</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <h2 className="underline-full mt-20">
        The University Rankings/ Top Academic Careers
      </h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
            <div className="column">
              <ul className="">
                <ul className="pb-4">
                  <li className="hover:underline">
                    <Link href="/employers/harvard-university/3100/">
                      {' '}
                      Harvard University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/stanford-university/3101/">
                      {' '}
                      Stanford University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-cambridge/12635/">
                      {' '}
                      University of Cambridge
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/massachusetts-institute-of-technology/3103/">
                      MIT
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-berkeley/3105/">
                      {' '}
                      University of California, Berkeley
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/princeton-university/3104/">
                      {' '}
                      Princeton University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-oxford/3099/">
                      {' '}
                      University of Oxford
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/columbia-university/3127/">
                      {' '}
                      Columbia University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/caltech/3128/">Caltech</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/University-of-Chicago/3126/">
                      {' '}
                      University of Chicago
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/yale-university/3125/">
                      {' '}
                      Yale University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/Cornell-University/3138/">
                      Cornell University
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-california-los-angeles/3136/">
                      UCLA
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-pennsylvania/3131/">
                      UPenn
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/johns-hopkins-university/3130/">
                      Johns Hopkins University (JHU)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <ul className="innerUL">
                  <li className="hover:underline">
                    <Link href="/employers/university-college-london/12527/">
                      University College London (UCL)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/university-of-tokyo/3155/">
                      The University of Tokyo (UTokyo)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/new-york-university-nyu/3144/">
                      New York University (NYU)
                    </Link>
                  </li>
                  <li className="hover:underline">
                    <Link href="/employers/duke-university/3139/">
                      {' '}
                      Duke University (Duke)
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* These are broken */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Link
          href="/job-type/"
          className="btn btn-white border-4 shadow-md leading-none"
        >
          → Find Academic<span className="font-bold"> Job-Types</span>{' '}
          <span className="hide-mobile">(i.e. Professor, Fellow)</span>
        </Link>
        <Link
          href="/industry/"
          className="btn btn-white border-4 shadow-md leading-none"
        >
          → Find Academic Positions in
          <span className="font-bold"> Industry</span>
          <span className="hide-mobile">
            (i.e. laboratory technical services)
          </span>
        </Link>
      </div> */}
      <div className="card-actions flex mt-4 mx-auto">
        <Link href="/academic-talent-pool" className="btn btn-aj">
          Join our Talent Pool
        </Link>
      </div>
    </main>
  );
}
