import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'About Academic Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'The Number 1 job board for Academic Jobs.  Listing higher ed jobs for faculty at colleges and universities in the United States and around the world.',
  keywords: 'About Academicjobs, About Academic Jobs, Academicjobs About',
};

export default function myPage() {
  return (
    <main>
      <div className="hero max-h-fit bg-slate-200 py-8">
        <div className="">
          <div className="hero-content flex-col lg:flex-row gap-8 ">
            <Image
              src="/about-us/harvard-university-main.jpg"
              width={1280}
              height={380}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="About us"
            />
            <div>
              <h1 className="text-4xl">
                AcademicJobs is your #1 Destination for all your Academic
                Recruitment needs, Career Advancement and Networking
              </h1>
              <h2 className="py-6 leading-tight">
                Quick Job Post Technology reduces the time to post a job by 90%
                and cost by 25%
              </h2>
              {/* <h2 className="py-6">
                Find the best academic positions in your city,
                country and worldwide.
              </h2> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-16">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="red"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Recruiters & Institutions Helped</div>
            <div className="stat-value text-blue-700">1.3K</div>
            <div className="stat-desc">
              Saved Recruiters & Institutions 8 minutes per post
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="pink"
                  opacity="1"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Academic Positions Filled</div>
            <div className="stat-value text-pink-500">8.6K</div>
            <div className="stat-desc">
              Provided Job Seekers with more opportunities than any other Job
              Board
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <Image
                    width={150}
                    height={150}
                    src="/about-us/ai-fast-job-posting.jpg"
                    alt="Fast Job Posting with Exclusive AI assistant"
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">900%</div>
            <div className="stat-title">Faster Job Posting</div>
            <div className="stat-desc">With our Quick Job Post Technology</div>
          </div>
        </div>
      </div>

      <div className="container my-16 grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-20 px-8 sm:px-32">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              width={800}
              height={534}
              src="/ai-jop-posting/ai-job-listing-automation.jpg"
              alt="Let us help you find your next crazy SMART academic employee"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Let us help you find your next crazy SMART academic employee!
            </h2>
            <p>
              Post a job now and see how easy it is, we do all the heavy lifting
              for you and save you at least 25% on your recruitment budget.
            </p>
            <div className="card-actions justify-end">
              <Link href="/post-a-job" className="btn btn-accent">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              width={800}
              height={534}
              src="/ai-resume-extraction/ai-resume-extraction.jpg"
              alt="Find your Dream Job Today"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Find your Dream Job Today!</h2>
            <p>
              Are you looking for your dream role? Then search all academic jobs
              now.
            </p>
            <div className="card-actions justify-end">
              <Link href="/jobs" className="btn btn-info">
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-grid p-8">
        {/* <div className="full-width"></div> */}
        <div className="container prose">
          <h2 className="underline-full">Learn more about Academic Jobs</h2>
          <div className="prose text mt-8 ">
            <h4>Our Mission: Empowering Academics, Connecting Institutions</h4>
            <p>
              Help you find and fill the best academic positions in your city,
              country and worldwide. At AcademicJobs, we are more than just a
              job board; we are a dedicated platform committed to shaping the
              future of higher education by facilitating seamless connections
              between academic talent and leading institutions worldwide.
            </p>
            <h4>Who We Are</h4>
            <p>
              Founded by a team of seasoned professionals with over 30 years of
              expertise in academic job recruitment advertising, AcademicJobs
              was born out of a collective frustration with the inefficiencies
              and lack of transparency in the traditional academic job market.
            </p>
            <blockquote>
              "We refuse to settle for mediocrity, unlike others who may have
              grown complacent in the market."
            </blockquote>

            <h4>The AcademicJobs Advantage</h4>
            <h5>For Job Seekers</h5>
            <p>
              Embarking on a journey to find your dream academic job? Look no
              further. AcademicJobs is your trusted companion, offering an
              extensive range of opportunities in{' '}
              <span className="uni-jobs">uni</span>jobs, University Jobs,
              College Jobs, faculty, research, administrative (staff), and
              professional roles.
            </p>
            <p>
              With a user-friendly interface and cutting-edge technology, we've
              revolutionized the job search experience. Discover, compare, and
              communicate effortlessly with employers, making your academic
              career aspirations a reality.
            </p>
            <h5>For Employers</h5>
            <p>
              Are you an institution seeking top-tier academic talent?
              AcademicJobs provides you with a cost-effective, user-friendly
              platform to showcase your <span className="uni-jobs">uni</span>
              jobs, University Jobs, and College Jobs to a global talent pool.
              With over 10,000 active job listings and a network of 500 partner
              institutions across 50 countries, we connect you with the
              brightest minds in academia.
            </p>

            <h4>Why AcademicJobs?</h4>
            <ul>
              <li>
                <strong>Innovation: </strong>We have redefined academic job
                platforms, making it easy for you to seek positions for{' '}
                <span className="uni-jobs">uni</span>jobs and institution Jobs
                more efficiently and transparently.
              </li>
              <li>
                <strong>Global Reach: </strong>With over 1 million registered
                users and partnerships with thousands of universities worldwide,
                our platform spans across disciplines and academic specialties.
              </li>
              <li>
                <strong>Diversity and Inclusion: </strong>We are passionate
                about fostering diversity, equity, and inclusion in higher
                education. AcademicJobs is committed to supporting the academic
                community at all levels.
              </li>
            </ul>
            <h4>Our Commitment</h4>
            <p>
              <strong>Our mission is clear: </strong>to empower you to find your
              dream academic job or hire the best academic talent. We are
              dedicated to providing the most comprehensive and up-to-date
              information, advanced and user-friendly tools, and professional,
              personalized service.
            </p>
            <h4>Join the AcademicJobs Community</h4>
            <p>
              Whether you're a job seeker or an employer, AcademicJobs invites
              you to join our vibrant community. Explore the possibilities,
              discover opportunities for student jobs on campus, university
              jobs, and college jobs, and contribute to the advancement of
              academia.
            </p>
            <p>
              We hope your experience with AcademicJobs is productive and
              inspiring. Your academic journey begins here.
            </p>
            <p>
              Indeed, jobs can be found everywhere, but our commitment to
              academic excellence and staff positions, along with our unbeatable
              customer service, will provide you with an experience that simply
              is not available anywhere else. If you want to seek jobs in higher
              ed we are the number one place online. Try us today.
            </p>
            <p>
              {' '}
              <Link href="/contact-us/" className="link link-aj">
                Contact us
              </Link>{' '}
              for any inquiries, feedback, or suggestions. We're here for you!
            </p>
            <p>
              <Link href="/about/terms-of-use/" className="link link-aj">
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link href="/about/diversity-statement/" className="link link-aj">
                Diversity Statement
              </Link>
            </p>
            {/* <p>
            <Link
              to="https://iloveacademicjobs.com/university-partners/"
              className="link link-aj"
            >
              Our Partners
            </Link>
          </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
