import Image from 'next/image';
import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Link from 'next/link';

const countryRegion = 'World';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export const metadata: Metadata = {
  title: {
    absolute: 'Academic Guest Lecturer Jobs',
  },
  description:
    'The Best Academic Guest lecturer jobs are all available on AcademicJos, View our open positions on this page. ',
  keywords: 'Academic Guest Lecturer Jobs. Guest Lecturer positions',
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
          <div className="hero-overlay bg-opacity-70 p-4"></div>
          <div className=" text-white p-4">
           
              <h1 className="mb-5 text-2xl text-white md:text-4xl font-bold">
              <span className="text-amber-500 md:text-7xl text-4xl"> Guest Lecturing Jobs</span> <br/> 
              </h1>
              <p className="max-w-screen-md font-bold px-4">
            Discover your perfect guest lecturing position through the world’s best job board! 
            </p>
            <p className="max-w-screen-sm font-bold px-4">
            A career as an academic guest lecturer will provide you with the chance to engage with partners domestically and internationally, work with some of the brightest minds, and use top-notch facilities and resources.

            </p>
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


<JobSearchBox q="" />
      <SearchResults q={{ q: 'guest lecturer' || 0 }} />


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
