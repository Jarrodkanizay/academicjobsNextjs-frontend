import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Academic hub and Career Advice', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Are you looking for hub in academia? Read our blog posts to discover the secrets of well-being, work-life balance, and career satisfaction for academics.Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision. ',
  keywords: 'academic hub, AcademicJobs hub',
};
export default function myPage() {
  return (
    <>
      {/* Hero banner */}
      <main>
        <div className="hero max-h-fit bg-slate-200 py-8">
          <div className="container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                width={300}
                height={300}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/Aca-rankings-logo.png"
                className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
                alt="AI Powered Recruitment Platform"
              />
              <div>
                <h1 className="text-7xl font-bold text-aj text-right border-b-2 border-[#3b5683] pb-4 pr-6">
                  The Top Academic Rankings
                </h1>
                <p className="text-right pr-6">
                 
                  Whether you are a PhD student, a postdoc, or a professor, you
                  will find valuable information and inspiration to advance your
                  academic career. 
                </p>
                {/* <a href="/academic-talent-pool" className="btn btn-aj">
                  Join our Talent Pool
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-8">
          <h2 className="underline-full"> Top Rankings Today</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
           
          <figure>
                  <Link href='/academic-hub/' >
                    <Image
                      src="/job-ads/recruitment-post-a-job.jpg"
                      alt="AI Powered Recruitment Platform"
                      width={800}
                      height={800}
                    />
                  </Link>
                </figure>
          <div className="card-body">
      
            <h2 className="card-title">
                              <a className="text-white hover:text-orange-500 text-lg" href="/academic-hub/the-highest-paid-academic-job-of-2023">The Highest Paid Academic Jobs Australia for 2023</a>
              </h2>
              <div className="card-actions justify-end mt-auto">
                <a className="btn btn-aj btn-sm" href="/academic-hub/the-highest-paid-academic-job-of-2023">Read more</a>
                </div>
                
                </div>
          </div>

          {/* <div className="bg-white flex flex-col">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch  px-1 mb-8 text-left px-4">
              <div className="/academic-hub/happiness-and-academics/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                     Top Academics USA{' '}
                    </h2>
                    <a className=" text-gray-400"> 10 Aug, 2023</a>
                  </div>
                  <figure>
                    <Image
                      width={1280}
                      height={380}
                      src="/academic-job-postings/harvard-university.jpg"
                      alt="Happiness and Academics: Scott Galloway's Algebra of hub"
                    />
                  </figure>

                  <ul className=" p-4 pl-12 list-disc text-gray-500" >
                    <li >Harvard University</li>
                    <li>	Massachusetts Institute of Technology (MIT)</li>
                    <li> Stanford University</li>
                    <li> University of California Berkeley (UCB)</li>
                    <li> California Institute of Technology (Caltech)</li>
                    </ul>

                  <Link
                      href={'/academic-hub/'}
                      className="btn btn-aj btn-sm w-1/4 mx-auto my-2"
                    >
                      View List
                    </Link>
                </div>
              </div>
              <div className="/academic-hub/top-academic-jobs-australia/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                      Top Academics Australia{' '}
                    </h2>
                    <a className=" text-gray-400"> 10 Aug, 2023</a>
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
                  <ul className=" p-4 pl-12 list-disc text-gray-500" >
                    <li >Queensland University of Technology (QUT)</li>
                    <li>	Bond University</li>
                    <li> The University of Sydney</li>
                    <li> Australian National University (ANU)</li>
                    <li> Monash University</li>
                    </ul>
                  <Link
                      href={'/academic-hub/'}
                      className="btn btn-aj btn-sm w-1/4 mx-auto my-2"
                    >
                      View List
                    </Link>
                </div>
              </div>
              <div className="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                      Top Academics UK{' '}
                    </h2>
                    <a className=" text-gray-400"> 06 Jul, 2023</a>
                  </div>
                  <figure  >
                    <Image
                      width={1280}
                      height={380}
                      src="/academic-job-postings/top-universities-worldwide.jpg"
                      alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                      className="h-[5rem]"
                    />
                  </figure>
                  <ul className=" p-4 pl-12 list-disc text-gray-500" >
                    <li >University of Oxford</li>
                    <li>	Imperial College London</li>
                    <li> University of Cambridge</li>
                    <li> University of Edinburgh</li>
                    <li> King’s College London</li>
                    </ul>
                  <Link
                      href={'/academic-hub/'}
                      className="btn btn-aj btn-sm w-1/4 mx-auto my-2"
                    >
                      View List
                    </Link>
                </div>
              </div>
              {/* <div className="/academic-hub/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                      Exploring the Benefits of Academic Jobs Online: Why
                      Virtual Hiring is on the Rise{' '}
                    </h2>
                    <a className=" text-gray-400"> 20 Jun, 2023</a>
                  </div>
                  <figure>
                    <Image
                      width={1280}
                      height={380}
                      src="https://academicjobs.s3.amazonaws.com/img/_misc/Virtual_Hiring.png"
                      alt="Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise"
                    />
                  </figure>
                </div>
              </div>
              <div className="/academic-hub/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                      Exploring the Global Landscape of Academic Jobs:
                      Opportunities and Challenges{' '}
                    </h2>
                    <a className=" text-gray-400"> 7 Jun, 2023</a>
                  </div>
                  <figure>
                    <Image
                      width={1280}
                      height={380}
                      src="https://academicjobs.s3.amazonaws.com/img/_misc/Global_Opportunities_2.png"
                      alt="Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges"
                    />
                  </figure>
                </div>
              </div>
              <div className="/academic-hub/the-evolution-of-university-recruitment/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                      The Evolution of University Recruitment: Embracing Digital
                      Platforms{' '}
                    </h2>
                    <a className=" text-gray-400"> 15 May, 2023</a>
                  </div>
                  <figure>
                    <Image
                      width={1280}
                      height={380}
                      src="https://academicjobs.s3.amazonaws.com/img/_misc/Recruitment_Evolution_2.png"
                      alt="The Evolution of University Recruitment: Embracing Digital Platforms"
                    />
                  </figure>
                </div>
              </div> */}
            {/* </ul>
          </div> */} 

          {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md ">
          Most Rewarding University Careers
        </h2>
        <div className="cate-group section23 ">
          <div className="widget__text-block">
            <div className="faculty-container grid-cols-1 grid md:grid-cols-5 md:gap-8 py-2 px-7 pb-16">

            <div className="column">
                <ul className="">
                <li className="mb-1 mt-4">
                    <div className="/academic-hub/find-student-jobs-on-your-university-campus/" className="text-[#f4a10c] ">
                    Find Student Jobs on your University Campus
                    </div>
                  </li>
                
                </ul>
              </div>

              <div className="column">
                <ul className="">
                
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-qut-university-careers-here/" className="text-[#f4a10c] ">
                    Seek all QUT University Careers Here
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-qut-university-jobs-here/" className="text-[#f4a10c] ">
                    Seek all QUT University Jobs Here
                    </div>
                  </li>
                  
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <div
                      className="/academic-hub/seek-all-bond-university-careers-here/"
                      className="text-[#f4a10c] "
                    >
                      Seek all Bond University Careers Here
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-bond-university-jobs-here/" className="text-[#f4a10c] ">
                    Seek all Bond University Jobs Here
                    </div>
                  </li>
              
                 
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/start-your-career-at-harvard-university/" className="text-[#f4a10c] ">
                    Start your Career at Harvard University 
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-harvard-university-jobs-here/" className="text-[#f4a10c] ">
                    Seek all Harvard University Jobs Here
                    </div>
                  </li>
             
                  
                </ul>
              </div>
              <div className="column">
                <ul className="">
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/seek-all-ucla-jobs-here/" className="text-[#f4a10c] ">
                    Seek all UCLA Jobs Here
                    </div>
                  </li>
                  <li className="mb-1 mt-4">
                    <div className="/academic-hub/start-you-career-at-ucla/" className="text-[#f4a10c]">
                    Start you Career at UCLA
                    </div>
                  </li>
                </ul>
              </div>

             


            </div>
          </div>
        </div> */}
        </div>
      </main>
    </>
  );
}
