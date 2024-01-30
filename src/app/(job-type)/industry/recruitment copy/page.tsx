import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title:
    'Fastest growing Academic Job Board with the best customer service & support', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Academic Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords:
    'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
export default function myPage() {
  return (
    <>
      <main className="">
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/close-up-of-scientist-looking-at-blood-sample.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70 "></div>
          <div className=" text-white">
           
              <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
              <span className="text-amber-500 text-7xl"> Industry Jobs for Academics </span> <br/> "Fortune Favours the Brave."
              </h1>
              <Link className="btn btn-aj" href="/academic-talent-pool">
                  Join Talent Pool
                </Link>
            </div>
           
          </div>
        
          <div className="order-none max-w-screen-sm mx-auto mt-12">
          <h2 className="underline-full">Earn More with Academic Jobs in Industry</h2>
          <p className="mt-4">
            Jump the queue and find industry jobs today. Join our
          our Talent Pool to get notified of positions immediately.
           
          </p>
          {/* <Link
              href="/student/income-booster"
              className="btn btn-aj  mt-4"
            >
              Join Income Booster
            </Link> */}
        </div>
       
         
         
         
        <div className="content-grid">
         
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/are+academics+on+facebook.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
           
            </figure>
            
            
            
            
            <div className="card-body w-full">
              <h2 className="card-title uppercase">
           Make more money than you ever imagined. 
              </h2>
              <p className="max-w-screen-sm">
              Connect with the Global top academic talent on the No. 1 Academic Job Board. Posting jobs is simple and affordable, targeting both local and global candidates.
              Access thousands of top academics without the high costs. We offer the most affordable job listing fees, paired with a comprehensive talent pool. Meaning better results with an exceptional recruiter experience.
              </p>
        
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/recruitment">
                  Top Industry Positions
                </Link>
              </div>
            </div>
          </div>
          {/* Flexible Part-Time Opportunities for Academics Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/snow-sampling-DMC%5B73%5D_0.jpeg"
                alt="Work Part-Time with Flexible Opportunities for Academics"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title uppercase">
             Check out our Industry Positions Today.
              </h2>
              <p className="max-w-screen-sm">
              With the most comprehensive Academic Talent Pool, you can identify the most sought-after candidates and make informed decisions about who will join your organization.
              </p>

<div className="mb-12 text-sky-600">
              <li className="hover:underline">
        <Link href="/industry">Cheif Technical Officier (From 250K){'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/industry/">Head of Innovation (From 300K){'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/industry/">Chief Data Scientist (From 180K){'  '}</Link>
      </li>
      </div>

              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/recruitment">
                  View Industry Categories
                </Link>
              </div>
            </div>
          </div>
   
        {/* Breakout Section */}

        <div className="bg-sky-100 mb-8 mt-16 py-8 px-4 full-width"><div className="container mx-auto"><h2 className="text-3xl text-center font-bold mb-8 text-sky-600">#1 Job Board for for ALL University&nbsp;Positions</h2><p className="mb-4 text-center max-w-[500px] mx-auto">Academic Jobs doesn't just find academics, we specialize in finding the best in academia for Industry positions.</p></div></div>

      
        {/* <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-sky-600">
              Let Academic Jobs buy your next beer or help fund your
              higher&nbsp;education…
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Unlock Your Potential with Campus Employment Opportunities from
                Academic Jobs. Our platform is tailored to help students like
                you find the ideal on-campus job that complements your academic
                schedule. Academic Rankings can provide the cash you need
                to go out, buy a new gadget or pay eduction expenses?
              </p>
              <p className="mb-4">
                With Academic Jobs, you get access to a wide array of
                student-focused positions that not only provide a source of
                income but also enhance your university experience. From library
                aides to research assistants, we connect you to roles that align
                with your study goals and personal interests.
              </p>
              <blockquote>
               The best thing a human being can do is to help another human being know more.
              </blockquote>
              <p className="mb-4">
                Maximize Your College Experience with Academic Jobs. We
                understand the unique needs of Academiclife, and our service is
                designed to simplify your job search on campus. Whether you're
                looking to develop professional skills, build your network, or
                manage your educational expenses, Academic Jobs is your go-to
                resource.
              </p>
            </div>
          </div>
        </div> */}
        </div>

  <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link href="/post-a-job" className="btn btn-aj">
             Join Talent Pool
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
