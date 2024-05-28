import Image from 'next/image';
import SignUpForm from '../../../../components/SignUpForm';
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
    <main className="content-grid mt-16">
      <h1 className="text-center">Find your best</h1>
      <h2 className="text-center mb-12 text-slate-600">
        Exclusive access to the best communities,
        <br />
        opportunities and prospects in one spot.
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <SignUpForm />
        <div className="sign_up_benefits mt-8 md:mt-0">
          <section className="flex gap-8 mb-16">
            <div>
              <Image
                src="/sign-up/networking-collaborating.png"
                width={width}
                height={height}
                alt="Networking & Collaborating"
                className="sign_up_icons"
              />
            </div>
            <div className="grow">
              <h5>Collaborate globally with specialists</h5>
              <p>
                Network, meet and collaborate with the best academics from
                around the world in your specialty.
              </p>
            </div>
          </section>

          <section className="flex gap-8 mb-16">
            <div>
              <Image
                src="/sign-up/startup.png"
                width={width}
                height={height}
                alt="Launch your career."
                className="sign_up_icons"
              />
            </div>
            <div className="grow">
              <h5>Discover 100k jobs posted weekly</h5>
              <p>
                Get matched with roles that fit your skills and interests — then
                Easy Apply in just a few clicks.
              </p>
            </div>
          </section>

          <section className="flex gap-8 mb-16">
            <div>
              <Image
                src="/sign-up/email-marketing.png"
                width={width}
                height={height}
                alt="Find the right fit for you."
                className="sign_up_icons"
              />
            </div>
            <div className="grow">
              <h5>Find your ideal tech culture</h5>
              <p>
                Get a firsthand look at an institution's culture (and how you
                fit into it) before you ever apply.
              </p>
            </div>
          </section>

          <section className="flex gap-8 mb-16">
            <div>
              <Image
                src="/sign-up/career-advice.png"
                width={width}
                height={height}
                alt="Get the career advice your are looking for."
                className="sign_up_icons"
              />
            </div>
            <div className="grow">
              <h5>Get tech career advice</h5>
              <p>
                Level up with free industry insights and career tools to help
                you stand out and get hired.
              </p>
            </div>
          </section>
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
