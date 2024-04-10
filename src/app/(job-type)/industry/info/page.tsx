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
    'Industry Jobs in Academia Information', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced Academic Industry Jobs, you can find the best industry jobs for your needs today.',
  keywords:
    'Academic Industry Jobs Information',
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
          <div className=" text-white p-4">
           
              <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
              <span className="text-amber-500 md:text-7xl text-4xl"> Industry Jobs for Academics </span> <br/> "Fortune Favours the Brave."
              </h1>
              <Link className="btn btn-aj" href="/academic-talent-pool">
                  Join Talent Pool
                </Link>
            </div>
           
          </div>
        
          {/* <div className="order-none max-w-screen-sm mx-auto mt-12">
          <h2 className="underline-full">Earn More with Academic Jobs in Industry</h2>
          <p className="mt-4">
            Jump the queue and find industry jobs today. Join our
          our Talent Pool to get notified of positions immediately.
           
          </p>
        
        </div> */}

{/* testimonial */}
<ul className=" mb-8 text-left items-stretch grid grid-cols-1 md:grid-cols-4 gap-4  px-1  w-full mt-12 max-w-screen-xl mx-auto">
                
                  <div className=" w-50 rounded-3xl bg-pink-600 shadow-xl">
                    <div className="card-body">
                    <div className="qoute-image">
        <svg width="59" height="46" viewBox="0 0 59 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_2590)">
            <path d="M25.6 8.46208C21.2211 8.9792 17.8923 10.7748 15.6136 13.8344C13.335 16.8941 12.2056 20.4277 12.2056 24.4067C12.2056 24.7515 12.2056 25.0962 12.265 25.441C12.3245 25.7857 12.4037 26.1592 12.5622 26.5614H25.6V45.4651H0V28.0409C0 21.1891 1.98142 15.041 5.9839 9.63997C9.96656 4.2389 16.5053 1.1218 25.6 0.317383V8.46208Z" fill="white"></path>
            </g>
            <g clip-path="url(#clip1_233_2590)">
            <path d="M58.7294 8.46208C54.3504 8.9792 51.0217 10.7748 48.743 13.8344C46.4644 16.8941 45.335 20.4277 45.335 24.4067C45.335 24.7515 45.335 25.0962 45.3944 25.441C45.4539 25.7857 45.5331 26.1592 45.6916 26.5614H58.7294V45.4651H33.1294V28.0409C33.1294 21.1891 35.1108 15.041 39.1133 9.63997C43.096 4.2389 49.6347 1.1218 58.7294 0.317383V8.46208Z" fill="white"></path>
            </g>
            <defs>
            <clipPath id="clip0_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(0 0.317383)"></rect>
            </clipPath>
            <clipPath id="clip1_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(33.1294 0.317383)"></rect>
            </clipPath>
            </defs>
        </svg>
                    </div>
                      <a href="#" className="text-3xl font-bold text-white">
                      Prof Hayley
                      </a>
                      <a className=" text-base text-white pb-6">“It is a great honor to be part of the AcademicJobs. It has been an intense academic experience for me as a lecturer, AcademicJobs is attracting great and highly-motivated lecturers.” </a>
                    </div>
                  </div>
               
                  <div className=" w-50 rounded-3xl bg-pink-600 shadow-xl">
                    <div className="card-body">
                    <div className="qoute-image">
        <svg width="59" height="46" viewBox="0 0 59 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_2590)">
            <path d="M25.6 8.46208C21.2211 8.9792 17.8923 10.7748 15.6136 13.8344C13.335 16.8941 12.2056 20.4277 12.2056 24.4067C12.2056 24.7515 12.2056 25.0962 12.265 25.441C12.3245 25.7857 12.4037 26.1592 12.5622 26.5614H25.6V45.4651H0V28.0409C0 21.1891 1.98142 15.041 5.9839 9.63997C9.96656 4.2389 16.5053 1.1218 25.6 0.317383V8.46208Z" fill="white"></path>
            </g>
            <g clip-path="url(#clip1_233_2590)">
            <path d="M58.7294 8.46208C54.3504 8.9792 51.0217 10.7748 48.743 13.8344C46.4644 16.8941 45.335 20.4277 45.335 24.4067C45.335 24.7515 45.335 25.0962 45.3944 25.441C45.4539 25.7857 45.5331 26.1592 45.6916 26.5614H58.7294V45.4651H33.1294V28.0409C33.1294 21.1891 35.1108 15.041 39.1133 9.63997C43.096 4.2389 49.6347 1.1218 58.7294 0.317383V8.46208Z" fill="white"></path>
            </g>
            <defs>
            <clipPath id="clip0_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(0 0.317383)"></rect>
            </clipPath>
            <clipPath id="clip1_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(33.1294 0.317383)"></rect>
            </clipPath>
            </defs>
        </svg>
                    </div>
                      <a href="#" className="text-3xl font-bold text-white">
                      Senior Prof John
                      </a>
                      <a className=" text-base text-white pb-12 ">“I am very pleased to have been part of the AcademicJobs and I particularly enjoyed working with many reputable universities from many different countries.” </a>
                    </div>
                  </div>
              
                
                  <div className=" w-50 rounded-3xl bg-pink-600 shadow-xl">
                    <div className="card-body ">
                    <div className="qoute-image">
        <svg width="59" height="46" viewBox="0 0 59 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_2590)">
            <path d="M25.6 8.46208C21.2211 8.9792 17.8923 10.7748 15.6136 13.8344C13.335 16.8941 12.2056 20.4277 12.2056 24.4067C12.2056 24.7515 12.2056 25.0962 12.265 25.441C12.3245 25.7857 12.4037 26.1592 12.5622 26.5614H25.6V45.4651H0V28.0409C0 21.1891 1.98142 15.041 5.9839 9.63997C9.96656 4.2389 16.5053 1.1218 25.6 0.317383V8.46208Z" fill="white"></path>
            </g>
            <g clip-path="url(#clip1_233_2590)">
            <path d="M58.7294 8.46208C54.3504 8.9792 51.0217 10.7748 48.743 13.8344C46.4644 16.8941 45.335 20.4277 45.335 24.4067C45.335 24.7515 45.335 25.0962 45.3944 25.441C45.4539 25.7857 45.5331 26.1592 45.6916 26.5614H58.7294V45.4651H33.1294V28.0409C33.1294 21.1891 35.1108 15.041 39.1133 9.63997C43.096 4.2389 49.6347 1.1218 58.7294 0.317383V8.46208Z" fill="white"></path>
            </g>
            <defs>
            <clipPath id="clip0_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(0 0.317383)"></rect>
            </clipPath>
            <clipPath id="clip1_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(33.1294 0.317383)"></rect>
            </clipPath>
            </defs>
        </svg>
                    </div>
                      <a href="#" className="text-3xl font-bold text-white">
                      Dr Elisa
                      </a>
                      <a className=" text-base text-white ">
                      “It is a great honor to be part of the AcademicJobs. Interactive is what makes the difference and a lot of time is given for each issue. I feel privileged for the interactive experience I had with AcademicJobs. Thank you all!”{" "}
                      </a>
                    </div>
                  </div>
                
              
                  <div className=" w-50 rounded-3xl bg-pink-600 shadow-xl">
                    <div className="card-body">
                    <div className="qoute-image">
        <svg width="59" height="46" viewBox="0 0 59 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_233_2590)">
            <path d="M25.6 8.46208C21.2211 8.9792 17.8923 10.7748 15.6136 13.8344C13.335 16.8941 12.2056 20.4277 12.2056 24.4067C12.2056 24.7515 12.2056 25.0962 12.265 25.441C12.3245 25.7857 12.4037 26.1592 12.5622 26.5614H25.6V45.4651H0V28.0409C0 21.1891 1.98142 15.041 5.9839 9.63997C9.96656 4.2389 16.5053 1.1218 25.6 0.317383V8.46208Z" fill="white"></path>
            </g>
            <g clip-path="url(#clip1_233_2590)">
            <path d="M58.7294 8.46208C54.3504 8.9792 51.0217 10.7748 48.743 13.8344C46.4644 16.8941 45.335 20.4277 45.335 24.4067C45.335 24.7515 45.335 25.0962 45.3944 25.441C45.4539 25.7857 45.5331 26.1592 45.6916 26.5614H58.7294V45.4651H33.1294V28.0409C33.1294 21.1891 35.1108 15.041 39.1133 9.63997C43.096 4.2389 49.6347 1.1218 58.7294 0.317383V8.46208Z" fill="white"></path>
            </g>
            <defs>
            <clipPath id="clip0_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(0 0.317383)"></rect>
            </clipPath>
            <clipPath id="clip1_233_2590">
            <rect width="25.6" height="45.1765" fill="white" transform="translate(33.1294 0.317383)"></rect>
            </clipPath>
            </defs>
        </svg>
                    </div>
                      <a href="#" className="text-3xl font-bold text-white">
                      Assoc Prof Ben
                      </a>
                      <a className=" text-base text-white  ">“The AcademicJobs module on human cognition was an excellent opportunity for me to do my best to draw them to our wonderful subspeciality of human cognition. I strongly recommend it!”</a>
                    </div>
                  </div>
               
               
              </ul>


       
         
         
         
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
                <Link className="btn btn-aj" href="/industry">
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
        <Link href="/industry">Chief Technical Officier (From 250K){'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/industry/">Head of Innovation (From 300K){'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/industry/">Chief Data Scientist (From 180K){'  '}</Link>
      </li>
      </div>

              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/industry">
                  View Industry Categories
                </Link>
              </div>
            </div>
          </div>
   
        {/* Breakout Section */}

        <div className="bg-sky-100 mb-8 mt-16 py-8 px-4 full-width"><div className="container mx-auto"><h2 className="text-3xl text-center font-bold mb-8 text-sky-600">#1 Job Board for ALL University&nbsp;Positions</h2><p className="mb-4 text-center max-w-[500px] mx-auto">Academic Jobs doesn't just find academics, we specialize in finding the best in academia for Industry positions.</p></div></div>

      
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
