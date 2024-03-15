//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults from '@/components/SearchResults';
import AusUniLogos from '@/components/AusUniLogos';
import Australia from '@/components/topUnis/Australia';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import { getContentRegion } from '@/actions/getContentRegion';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: '  Academic Jobs Australia',
  },
  description:
    'Browse through hundreds of opportunities in higher education and research across various disciplines and institutions in Australia today. ',
  keywords:
    'Academic Jobs Australia. university jobs Australia, Uni jobs Australia',
};
export default async function myPage() {
  const size = 180;
  const items = [
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: '/australia/admin',
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: '/australia/executive',
    },
  
   
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: '/australia/hr-jobs',
    },
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: '/australia/faculty',
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: '/australia/phd',
    },
    {
      src: '/home/academic-graduate-positions.png',
      alt: 'Academic PhD Positions',
      label: 'Student',
      link: '/australia/student',
    },
    {
      src: '/home/academic-lecturer-positions.png',
      alt: 'Academic Graduate Positions',
      label: 'Collaborate',
      link: '/australia/graduate',
    },
 
 
  ];
  const contentRegion = await getContentRegion();


  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;


  return (

   






 


     

<main className="content-grid">
        <div className="full-width md:h-[400px] h-[229px] gradient-aj">
          <div className="hero-bg-aus md:bg-center">
            
            <section className="wrapper md:flex ">
              <h2 className="sentence mt-[6rem]">
              <h2 className="sentence-aus text-black md:mb-[-5rem] mb-[-10rem]">Australia's University Job Website</h2>
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
                            <li><a className="grayscale hover:grayscale-0" href="/australia/executive"><Image alt="Academic Executive Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-executive-positions.png&amp;w=384&amp;q=75"></Image></a>
            <a className="mb-4" href="/australia/executive"><p>Executive</p></a></li>
            <li><a className="grayscale hover:grayscale-0" href="/australia/faculty"><Image alt="Academic Faculty Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-human-resource-positions.png&amp;w=384&amp;q=75"></Image></a><a className="mb-4" href="/australia/faculty"><p>Faculty</p></a></li>
            <li><a className="grayscale hover:grayscale-0" href="/australia/admin"><Image alt="Academic Staff Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-staff-positions.png&amp;w=384&amp;q=75"></Image></a><a className="mb-4" href="/australia/admin"><p>Staff/Admin</p></a></li></ul>


          </div>
        </div>


        <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24">
          <JobSearchBoxHome />
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

      <div className=" mt-[3rem] ">
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li className="">
              <Link href="/Australia/lecturer"> Lecturer</Link>
            </li>
            <li className="">
              <Link href="/Australia/research"> Research </Link>
            </li>
            <li className=" ">
              <Link href="/Australia/professor"> Professor</Link>
            </li>
            {/* <li>
              <Link href="/Australia/faculty"> Faculty</Link>
            </li> */}
          </ul>
          {/* <li>
            <Link href="/Australia/executive"> Executive</Link>
          </li> */}
          {/* <li>
            <Link href="/Australia/admin">Admin</Link>
          </li> */}
          <li>
            <Link href="/Australia/hr-jobs"> HR</Link>
          </li>
          <li>
            <Link href="/Australia/student"> Student</Link>
          </li>
          <li>
            <Link href="/Australia/indigenous">Indigenous</Link>
          </li>
          <li>
            <Link href="/Australia/graduate">Graduate</Link>
          </li>
          <li>
            <Link href="/Australia/phd">PhD</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-4 ">
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <li>
            <Link href="/online"> Online </Link>
          </li>
          <li>
            <Link href="/jobs?l=&q=remote"> Remote</Link>
          </li>
          <li>
            <Link href="/jobs?l=&q=full-time">Full-Time</Link>
          </li>
          <li>
            <Link href="/jobs?l=&q=part-time"> Part-Time</Link>
          </li>
          <li>
            <Link href="/jobs?l=&q=casual"> Casual</Link>
          </li>
        </ul>
      </div>
      {/* <a href="/the-academic-rankings">
        <img
          width={200}
          height={200}
          src="https://academicjobs.s3.amazonaws.com/img/_misc/The+Academic+Rankings+Logo4+(002).JPG"
          className=" mt-4 bg-white border-2 border-[#265882] items-center justify-center mx-auto text-center"
          alt="AcademicJobs Job Elephant Client Center"
        />{' '}
      </a> */}
      {/* <div className="text-center items-center justify-center px-auto mx-auto text-sm text-gray-500 animate-pulse pb-12">
        View Your Ranking Here
      </div> */}
      {/* <AusUniLogos /> */}
      {/* <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6 ">
        <a href="#section" class="scroll-smooth md:scroll-auto">
          ▼
        </a>
      </div> */}

     
        <div id="section" className="bg-slate-200 py-4 full-width mt-8">
          <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
            <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
              <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">
                ACADEMIC&nbsp;JOBS Australia:
              </span>{' '}
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
                jobs requirements, from seeking to recruiting, look no further.
                In just a few simple steps you can be in the running for your
                dream uni job!
              </p>
              <p className="px-7">Find all the best jobs here…</p>
            </div>
          </div>

          <p className="font-semibold"></p>
          <ul className="flex flex-wrap text-justify space-between gap-6 px-7 pb-4  text-[#f4a10c] mx-auto">
            <li>
              <Link href="/melbourne"> Melboune </Link>
            </li>
            <li>
              <Link href="/sydney"> Sydney</Link>
            </li>
            <li>
              <Link href="/brisbane">Brisbane</Link>
            </li>
            <li>
              <Link href="/gold-coast"> Gold Coast</Link>
            </li>
            <li>
              <Link href="/canberra"> Canberra</Link>
            </li>
            <li>
              <Link href="/perth"> Perth</Link>
            </li>
            <li>
              <Link href="/adelaide"> Adelaide</Link>
            </li>
            <li>
              <Link href="/tasmania"> Tasmania</Link>
            </li>
            <li>
              <Link href="/hobart"> Hobart</Link>
            </li>
            {/* <li>
              <Link href="/adelaide"> Adelaide</Link>
            </li> */}
          </ul>
          <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400 mx-auto">
            <Link href="/Australia/faq"> Aus FAQ</Link>
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
                    <li className="mb-1 mt-4 mt-4 flex">
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
                    <ul className="innerUL pl-4 pt-2 text-gray-400">
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
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className=" rounded-3xl p-4 shadow-md">
                    <li className="mb-1 mt-4 mt-4 flex">
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
                    <ul className="innerUL pl-4 pt-2 text-gray-400">
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
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className=" rounded-3xl p-4 shadow-md">
                    <li className="mb-1 mt-4 mt-4 flex">
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
                    <ul className="innerUL pl-4 pt-2 text-gray-400">
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
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className=" rounded-3xl p-4 shadow-md">
                    <li className="mb-1 mt-4 mt-4 flex">
                      <Image 
                        width={100}
                        height={100}
                        src="https://dentalstudents.com.au/wp-content/uploads/2021/04/0001_UWA-logo.jpg"
                        alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                        className="rounded-3xl"
                      />
                      <Link
                        href="/employers/university-of-western-australia/3173"
                        className="text-[#192847] font-bold pl-2"
                      >
                        University of Western Australia
                      </Link>
                    </li>
                    <ul className="innerUL pl-4 pt-2 text-gray-400">
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
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <h2 className="underline-full"> Top University Employer Rankings</h2> */}
        <div className="bg-white flex flex-col mx-auto mb-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch  px-1 mb-8 text-left px-4">
            <div className="card bg-slate-300 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                      Top HR Professional of the Month{' '}
                    </h2>
              
                  </div>
                  <figure  >
                    <Image
                      width={200}
                      height={200}
                      src="https://academicjobs.s3.amazonaws.com/img/_misc/1694053173648.jpg"
                      alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                      className="rounded-full"
                    />
                  </figure>
                  {/* <ul className=" p-4 pl-12 list-disc text-gray-500" >
                    <li >University of Oxford</li>
                    <li>	Imperial College London</li>
                    <li> University of Cambridge</li>
                    <li> University of Edinburgh</li>
                    <li> King’s College London</li>
                    </ul> */}

              <ul className=" p-4 pl-12  text-gray-500 text-center font-bold">
                <li>Karen Lamont - Curtin University</li>
              </ul>

                  {/* <Link
                      href={'/academic-talent-pool'}
                      className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2 "
                    >
                   Nominate HR Award
                    </Link> */}
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
           
               
                         <div>
<a div className="card-title mx-8 mt-8 text-[#3b5683]"> Top HR jobs today</a>
                         <div className=" h-96 ml-8 overflow-y-scroll"> 
        
          <SearchResults q={{ q: "hr", l: "Australia" }} /> </div></div>

                       </ul>
          </div>
  
      




        <div id="myUniversity" class="myUniversity">
          <div class="widget__text-block1">
            <div>
              <h2 className="">
                Academic Jobs Australia: All University Jobs
              </h2>
              <Australia id="section1" heading="" />
            </div>
          </div>
        </div>
      
    </main>
  );
}
