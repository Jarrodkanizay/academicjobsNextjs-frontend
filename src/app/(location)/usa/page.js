//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import AmericaUniLogos from '@/components/AmericaUniLogos';
import USA from '@/components/topUnis/USA';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import { getContentRegion } from '@/actions/getContentRegion';
//import { useParams } from 'next/navigation'

export const metadata = {
  title: {
    absolute: ' USA Academic Jobs Online',
  },
  description:
    'Search for academic jobs in USA colleges and apply to the top universities and institutions at USA college jobs with faculty, postdoc or staff roles and more. ',
  keywords:
    'Academic Jobs Online. USA Academic Jobs Online, academic jobs in USA, USA college jobs',
};
export default async function myPage() {
  const size = 180;
  const items = [
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: '/usa/staff',
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: '/usa/executive',
    },
  
   
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: '/usa/hr-jobs',
    },
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: '/usa/faculty',
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: '/usa/phd',
    },
    {
      src: '/home/academic-graduate-positions.png',
      alt: 'Academic PhD Positions',
      label: 'Student',
      link: '/usa/student',
    },
    {
      src: '/home/academic-lecturer-positions.png',
      alt: 'Academic Graduate Positions',
      label: 'Collaborate',
      link: '/usa/graduate',
    },
 
 
  ];
  const contentRegion = await getContentRegion();


  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;


  return (

   






 


     

<main className="content-grid">
        <div className="full-width md:h-[400px] h-[229px] gradient-aj">
          <div className="hero-bg-usa md:bg-center">
            
            <section className="wrapper md:flex ">
              <h2 className="sentence mt-[6rem]">
              <h2 className="sentence-usa text-amber-500 md:mb-[-5rem] mb-[-10rem]">All Higher Ed Jobs in the usa</h2>
                <span className="mr-8">Find</span> <span className="md:hidden block my-[-1rem]"><br/></span>
                <div className="slidingVertical ">
                  <span>Opportunity</span>
                  <span>Connections</span>
                  <span>Happiness</span>
                  <span>Opportunity</span>
                  <span>Connections</span>
                </div>
              </h2>
            
            </section>


            <ul className="hero-icons md:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center md:mt-0 mt-[-11rem] hidden ">
              {items.map((item, index) => (
                <li  key={index}>
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

            <ul className="hero-icons flex flex-wrap gap-4 md:gap-8 mx-auto text-center items-center justify-center md:mt-0 mt-[-11rem] md:hidden ">
                            <li><a className="grayscale hover:grayscale-0" href="/usa/executive"><Image alt="Academic Executive Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-executive-positions.png&amp;w=384&amp;q=75"></Image></a>
            <a className="mb-4" href="/usa/executive"><p>Executive</p></a></li>
            <li><a className="grayscale hover:grayscale-0" href="/usa/faculty"><Image alt="Academic Faculty Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-human-resource-positions.png&amp;w=384&amp;q=75"></Image></a><a className="mb-4" href="/usa/faculty"><p>Faculty</p></a></li>
            <li><a className="grayscale hover:grayscale-0" href="/usa/staff"><Image alt="Academic Staff Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-staff-positions.png&amp;w=384&amp;q=75"></Image></a><a className="mb-4" href="/staff"><p>Staff/Admin</p></a></li></ul>


          </div>
        </div>


        <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24">
          <JobSearchBoxHome />
        </div>
  
      {/* <div className="pt-[8rem] flex flex-col items-center justify-center">
        <Image
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-us-min.png"
          alt="AcademicJobs USA Logo"
          className=" w-[20rem] mb-[1rem] "
          width={330}
          height={220}
        />
      </div>
      <JobSearchBox l="USA" /> */}

      {/* <h3 className="text-center">We Are USA's University Job Website</h3> */}

      <div className=" mt-[3rem] ">
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <li>
            <Link href="/boston/"> Boston </Link>
          </li>
          <li>
            <Link href="/new-york/"> New York</Link>
          </li>
          <li>
            <Link href="/philadelphia/">Philadelphia</Link>
          </li>
          <li>
            <Link href="/new-haven/"> New Haven</Link>
          </li>
          <li>
            <Link href="/los-angeles/">Los Angeles </Link>
          </li>
          <li>
            <Link href="/san-francisco/"> San Francisco</Link>
          </li>
          <li>
            <Link href="/chicago/"> Chicago</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-2">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li>
              <Link href="/USA/lecturer/"> Lecturer</Link>
            </li>
            <li>
              <Link href="/USA/research/"> Research </Link>
            </li>
            <li>
              <Link href="/USA/professor/"> Professor</Link>
            </li>
          </ul>
          <li>
            <Link href="/USA/executive/"> Executive</Link>
          </li>
          <li>
            <Link href="/USA/staff/">Staff</Link>
          </li>
          <li>
            <Link href="/USA/hr-jobs/"> HR</Link>
          </li>
          <li>
            <Link href="/USA/student/"> Student</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-2 ">
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
            <Link className="  hidden md:block" href="/casual"> Casual</Link>
          </li>
        </ul>
      </div>
      <a href="/jobelephant-recruitment">
        <Image
          width={180}
          height={170}
          src="https://academicjobs.s3.amazonaws.com/img/_misc/JobElephantClientCenter.jpg"
          className="rounded-3xl my-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto mt-8"
          alt="AcademicJobs USA logo"
        />{' '}
      </a>

      {/* <AmericaUniLogos /> */}

     
        <div
          id="section"
          className=" full-width py-4 full-width mb-[175px] bg-slate-200 mt-4"
        >
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS USA:
              </span>{' '}
              <br />
            </h1>
            <div>
              <p className="px-7 mb-4 mt-1">
                Explore what academic positions the United States has to offer
                through Academic Jobs! We value the importance of an easy to
                navigate website where your future academic career path is one
                click away. Academic Jobs provides an extensive list of
                opportunities for the future of your career in education,
                carefully sectioning the top Higher Ed jobs to curate the best
                fitting position for you.{' '}
              </p>
              <p className="px-7 md:flex hidden">
                The number 1 job board for academics can help you find your
                dream Higher Ed job through our services. At Academic Jobs, we
                value our customers interests by providing the best career
                choices possible, making us the best job board for higher
                education positions globally!
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
            <Link href="/USA/faq/"> USA FAQ</Link>
            {/* <Link href="/ivyleague/"> Ivy League</Link>{' '} */}
          </div>
          <p className="font-semibold"></p>
        </div>
     
      <USA heading="USA Academic Jobs Online: Academia Jobs by University" />
    </main>
  );
}
