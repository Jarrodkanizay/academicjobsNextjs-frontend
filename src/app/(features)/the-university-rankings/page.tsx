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
                width={1280}
                height={380}
                src="/job-ads/recruitment-post-a-job.jpg"
                className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
                alt="AI Powered Recruitment Platform"
              />
              <div>
                <h1 className="text-7xl font-bold text-aj text-right border-b-2 border-[#3b5683] pb-4 pr-6">
                  The Top University Employer Rankings
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
          <div className="bg-white flex flex-col">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch  px-1 mb-8 text-left px-4">
              <div className="/academic-hub/happiness-and-academics/">
                <div className="card bg-slate-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      {' '}
                     Top University Employers USA{' '}
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
                      Top University Employers Australia{' '}
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
                      Top University Employers UK{' '}
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
           
            </ul>
          </div>

   
        </div>
      </main>
    </>
  );
}
