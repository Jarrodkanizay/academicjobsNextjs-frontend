import Image from 'next/image';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute:
      '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
  keywords:
    'Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs',
};
export default function myPage() {
  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  return (
    <main className="content-grid">
      <div className="flex flex-col items-center justify-center mb-32">
        <div className="h-[27vh] flex flex-col items-end justify-end">
          <LogoAJ forceClass="logo" width={310} height={210} />
        </div>
        {/* Job Search Form */}
        <div className="w-full md:w-3/6 h-[6vh] flex flex-col items-top mt-[-1rem]">
          <JobSearchBoxHome />
        </div>
      </div>
      <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 px-2">
        <li className="hover:underline">
          <Link href="/lecturer">Lecturer{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/research/">Research{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/professor/">Professor{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/executive/">Executive{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/faculty/">Faculty{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/admin/">Admin{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/hr-jobs/">HR{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/student/">Student{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/graduate/"> Graduate{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/postdoc/"> Postdoc{'  '}</Link>
        </li>
        <li className="hover:underline">
          <Link href="/phd/">PhD</Link>
        </li>
      </ul>
      {/* Employment Type Container */}
      <ul className="faculty-container flex gap-4 items-center justify-center text-[#f4a10c] px-2 mt-7">
        <li className="hover:underline whitespace-nowrap">
          <Link href="/online/">Online{'  '}</Link>
        </li>
        <li className="hover:underline whitespace-nowrap">
          <Link href="/remote/">Remote{'  '}</Link>
        </li>
        <li className="hover:underline whitespace-nowrap">
          <Link href="/full-time/">Full-Time{'  '}</Link>
        </li>
        <li className="hover:underline whitespace-nowrap">
          <Link href="/part-time/">Part-Time{'  '}</Link>
        </li>
        <li className="hover:underline whitespace-nowrap">
          <Link href="/casual/">Casual</Link>
        </li>
      </ul>
      <a
        href="#section"
        className="scroll-smooth md:scroll-auto text-[#f4a10c] flex flex-col items-center justify-center text-2xl animate-bounce h-6 pt-12 mb-[16rem]"
      >
        ▼
      </a>

      {/* Hero Panel */}
      <div
        id="section"
        className="hero-content flex-col lg:flex-row mx-auto items-start py-12 bg-slate-200 breakout full-width prose"
      >
        <h1 className="text-3xl md:text-6xl font-normal text-gray-500 mt-12">
          ACADEMIC JOBS:
        </h1>
        <h2 className="mt-0">
          Academic, research &&nbsp;science positions locally & globally
        </h2>
        <div className="text-col-2 mb-12">
          <p>
            Discover top-tier faculty and administrative roles in the world of
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
      </div>

      <div className="full-width">
        <div className=""></div>
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
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
        Top Academic Jobs Today
      </h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
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
                    <Link href="">Ecole Polytechnique</Link>
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
                    href="/jobs/assistant-associate-professor-of-environmental-toxicology-tenure-track-appointment/78925/"
                    className="text-blue-500 font-bold"
                  >
                    Assistant/Associate Professor of Environmental Toxicology
                    (tenure track appointment)
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of California Davis</Link>
                  </li>
                  <li>
                    <Link href="">Davis, CA, USA</Link>
                  </li>
                  <li>
                    <Link href="">Feb 14, 2024</Link>
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
                    <Link href=""> Aug 3, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
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
                    href="https://www.academicjobs.com/jobs/clinical-instructor-clinical-professor/73147/"
                    className="text-blue-500 font-bold"
                  >
                    Clinical Instructor - Clinical Professor
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Michigan</Link>
                  </li>
                  <li>
                    <Link href="">Ann Arbor, MI, USA</Link>
                  </li>
                  <li>
                    <Link href="">Jan 17, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/research-specialist-b-c/78662/"
                    className="text-blue-500 font-bold"
                  >
                    Research Specialist B/C
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Pennsylvania</Link>
                  </li>
                  <li>
                    <Link href="">Philadelphia, PA, USA</Link>
                  </li>
                  <li>
                    <Link href="">Jan 17, 2023</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/clinical-associate-professor-of-leadership/78640/"
                    className="text-blue-500 font-bold"
                  >
                    Clinical Associate Professor of Leadership
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Chicago</Link>
                  </li>
                  <li>
                    <Link href="">Chicago, IL, USA</Link>
                  </li>
                  <li>
                    <Link href="">Jan 19, 2023</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/open-rank-in-school-counseling-psychology/64801"
                    className="text-blue-500 font-bold"
                  >
                    Research Fellow In Natural Language Processing
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Michigan</Link>
                  </li>
                  <li>
                    <Link href="">Ann Arbor, MI, USA</Link>
                  </li>
                  <li>
                    <Link href="">17 Jan, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/employers/johns-hopkins-university/3130/"
                    className="text-blue-500 font-bold"
                  >
                    Visiting Graduate Fellowship in the History of Science and
                    Technology
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Johns Hopkins University</Link>
                  </li>
                  <li>
                    <Link href="">Baltimore, MD, USA</Link>
                  </li>
                  <li>
                    <Link href="">Jan 21, 2023</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/lecturer-chemical-and-environmental-engineering/80802"
                    className="text-blue-500 font-bold"
                  >
                    Lecturer, Chemical and Environmental Engineering
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Yale University</Link>
                  </li>
                  <li>
                    <Link href="">New Haven, CT, USA</Link>
                  </li>
                  <li>
                    <Link href="">May 31, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/director-of-alumni-engagement/72223"
                    className="text-blue-500 font-bold"
                  >
                    Director of Alumni Engagement
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Pennsylvania</Link>
                  </li>
                  <li>
                    <Link href="">Philadelphia, PA, USA</Link>
                  </li>
                  <li>
                    <Link href="">16 Jan, 2023</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/phd-students-call-for-expressions-of-interest-multiple-topics-faculty-of-law/78929"
                    className="text-blue-500 font-bold"
                  >
                    PhD Students- Call for Expressions of Interest - Multiple
                    Topics, Faculty of Law
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">Bond University</Link>
                  </li>
                  <li>
                    <Link href="">Robina QLD, Australia</Link>
                  </li>
                  <li>
                    <Link href="">Apr 1, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/lecturer-senior-lecturer-associate-professor-professor-of-structural-engineering-timber/78822"
                    className="text-blue-500 font-bold"
                  >
                    Lecturer/Senior Lecturer/Associate Professor/Professor of
                    Structural Engineering - Timber
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of Canterbury</Link>
                  </li>
                  <li>
                    <Link href="">Christchurch, New Zealand</Link>
                  </li>
                  <li>
                    <Link href="">Jan 28, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="/jobs/provost/79513"
                    className="text-blue-500 font-bold"
                  >
                    Provost
                  </Link>
                </li>
                <ul className="innerUL">
                  <li>
                    <Link href="">University of North Carolina Asheville</Link>
                  </li>
                  <li>
                    <Link href="">Asheville, NC, USA</Link>
                  </li>
                  <li>
                    <Link href=""> Feb 18, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className="mb-1 mt-4 hover:underline">
                  <Link
                    href="https://www.academicjobs.com/jobs/clinical-positions-in-cardiology-central-coast-2023-2024/73047/"
                    className="text-blue-500 font-bold"
                  >
                    Clinical Positions in Cardiology (Central Coast) 2023-2024
                    Apply Now
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
                    <Link href="">Jun 29, 2024</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link className="text-[#f4a10c] mt-4 mb-4 px-2 font-bold" href="/jobs/">
        view more top jobs →
      </Link>
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
        Top Cities for Uni Jobs
      </h2>
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
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
        Top Universities To Work For
      </h2>
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
      </div>
      <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
        <Link href="/the-university-rankings/">
          The University Rankings/ Top Academic Careers
        </Link>
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
      </div>
      <div className=" flex flex-col  ">
        <Link href="/job-type/">
          <h2 className=" py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-[7rem] hover:bg-orange-500 hover:text-white shadow-md">
            → Find Academic<span className="font-bold"> Job-Types</span> ( i.e.
            Professor, Fellow )
          </h2>
        </Link>
      </div>
      <div className="flex flex-col  ">
        <Link href="/industry/">
          {' '}
          <h2 className="  py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-10 hover:bg-orange-500 hover:text-white shadow-md mb-12">
            → Find Academic Positions in
            <span className="font-bold"> Industry</span> ( i.e. laboratory
            technical services )
          </h2>
        </Link>
      </div>
    </main>
  );
}
