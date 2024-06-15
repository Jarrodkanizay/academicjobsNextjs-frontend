import Image from 'next/image';
import SignUpForm from '@/components/SignUpForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'AcademicJobs SignUp', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Sign up with Academic Jobs to seek and save our current job vacancies today. ',
  keywords: 'AcademicJobs SignUp',
};

const page = () => {
  const scale = 1.1;
  const width = 176 / scale;
  const height = 138 / scale;
  return (
    <main className="content-grid mt-0">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {/* TODO See Dan: Take in details from the page that was used to sign up and store them in the database. 
        For example if the user was on a QUT job then pass the details about the job and use them in the sign up process */}
        <SignUpForm />
        <div className="sign_up_benefits mt-8 md:mt-0">
          <h1 className="text-center">Best Talent Pool Connections</h1>
          <h2 className="text-center mb-16 text-slate-600">
            Exclusive access to the best communities,
            <br />
            opportunities and prospects in one spot.
          </h2>
          <div className="sign_up_benefits mt-8 md:mt-0">
            <section className="flex gap-8 mb-4 items-start">
              <div className="image-container" style={{ flexShrink: 0 }}>
                <Image
                  src="/collaboration.png"
                  width={width}
                  height={height}
                  alt="Networking & Collaborating"
                  className="responsive-img"
                />
              </div>
              <div className="grow">
                <h5>Dive into a World of Opportunities</h5>
                <p>
                  Sign up today and connect with prestigious academic institutions
                  worldwide. Explore cutting-edge job openings and collaborate
                  with world-renowned academics.
                </p>
              </div>
            </section>

            <section className="flex gap-8 mb-4 items-start">
              <div className="image-container" style={{ flexShrink: 0 }}>
                <Image
                  src="/opportunities.png"
                  width={width}
                  height={height}
                  alt="Launch your career."
                  className="responsive-img"
                />
              </div>
              <div className="grow">
                <h5>Elevate Your Career</h5>
                <p>
                  Whether you're seeking groundbreaking research projects or
                  looking to shape the minds of the next generation, our platform
                  is your gateway to extraordinary possibilities.
                </p>
              </div>
            </section>

            <section className="flex gap-8 mb-4 items-start">
              <div className="image-container" style={{ flexShrink: 0 }}>
                <Image
                  src="/culture.png"
                  width={width}
                  height={height}
                  alt="Find the right fit for you."
                  className="responsive-img"
                />
              </div>
              <div className="grow">
                <h5>Expand Your Network</h5>
                <p>
                  Collaborate, innovate, and grow with the best in academia. Be
                  part of a vibrant community where ideas flourish and careers
                  soar.
                </p>
              </div>
            </section>

            <section className="flex gap-8 mb-4 items-start">
              <div className="image-container" style={{ flexShrink: 0 }}>
                <Image
                  src="/market-comparison.png"
                  width={width}
                  height={height}
                  alt="Get the career advice your are looking for."
                  className="responsive-img"
                />
              </div>
              <div className="grow">
                <h5>Find Your Perfect Match</h5>
                <p>
                  Our tailored job matching system brings you opportunities that
                  align perfectly with your expertise and aspirations.
                </p>
              </div>
            </section>
          </div>
        </div>

      </div>
      <section
        title="Customer Logos"
        className="container mx-auto flex flex-col mt-16"
      >
        <h3 className="text-slate-600 text-center">
          Thousands of top universities hire on Academic Jobs, including...
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center items-center">
          <div>
            <Image
              src="/university-logos/usa/harvard-university.png"
              width={300}
              height={50}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/usa/california-institute-of-technology-caltech.jpg"
              width={300}
              height={50}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/usa/stanford-university.png"
              width={300}
              height={50}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/usa/massachusetts-institute-of-technology-mit.png"
              width={300}
              height={50}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/misc/oxford-university.webp"
              width={200}
              height={40}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/misc/cambridge_at_academicjobs_logo.webp"
              width={130}
              height={50}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/misc/nus_academic_jobs_logo.webp"
              width={300}
              height={50}
              alt="University Logo"
            />
          </div>
          <div>
            <Image
              src="/university-logos/misc/eth-zurich-academic-jobs-logo.webp"
              width={300}
              height={50}
              alt="University Logo"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
