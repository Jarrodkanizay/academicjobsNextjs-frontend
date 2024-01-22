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
      <main>
        {/* Hero banner */}
        <div
          className="hero h-screen max-h-[480px] md:max-h-[400px]"
          style={{
            backgroundImage:
              'url(/student-jobs-on-campus/students-working-on-campus.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-white py-8">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-2xl md:text-4xl font-bold">
              WHY DO YOU NEED A RANKING?
              </h1>
              <p className="mb-5 text-sm md:text-lg">
              The academic field is one of the most competitive arenas to be involved in, both locally and globally. By establishing an individual rank for an academic, you can position yourself as a top professor in the field, or as an individual who can move up the ranks overtime. 
              </p>
              <p className="mb-5 text-sm md:text-lg">
              This helps academics further develop their career and/or legitimately establish themselves as a leader in academia through a globally recognised system.
              </p>
              <Link className="btn btn-aj" href="https://www.theacademicrankings.com/">
                The Academic Rankings
              </Link>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <section className="container mx-auto px-4 mt-12">
          {/* <h2 className="text-center mb-6">
            Need Cash? Fund your personal life with a Academicjob…
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <Link href={`/jobs/student-part-time`}>
              <div className="badge badge-outline p-3">
                Part-Time Academic Jobs
              </div>
            </Link>
            <Link href={`/jobs/student-casual`}>
              <div className="badge badge-outline p-3">Casual Academic Jobs</div>
            </Link>
            <Link href={`/jobs/student-full-time`}>
              <div className="badge badge-outline p-3">
                Full-Time Academic Jobs
              </div>
            </Link>
            <Link href={`/student`}>
              <div className="badge badge-outline p-3">
                Find All Academic Jobs
              </div>
            </Link>
          </div> */}
          {/* Diverse Roles Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/diverse-student-jobs.jpg"
                alt="Choose from diverse campus roles"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
              COLLABORATION OVER COMPETITION
              </h2>
              <p className="max-w-screen-sm">
              By providing a rank for you, we can set a benchmark that encourages collaboration. Having a number in the academic field allows you to find others with a similar rank, acknowledging a similar skill set, academic history, and research expertise. This knowledge can encourage collaborations on academic projects, expanding both members knowledge set and creativity.
              </p>
        
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Search Academic Rankings
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
                src="/student-jobs-on-campus/flexible-work-hours.jpg"
                alt="Work Part-Time with Flexible Opportunities for Academics"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
              ANALYSE YOUR ACADEMIC PROGRESS
              </h2>
              <p className="max-w-screen-sm">
              Academics are known to engage in large depths of analysis behind their journals, reports, and projects. A legitimate rank of the members of academia can allow for further analysis on the performance of modern-day academics and their improvement over the years. In turn, this analysis can describe positive trends on the future of academia and promote further success in the field.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/student">
                  Earn Extra Cash
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Breakout Section */}
        <div className="bg-sky-200 mb-8 mt-16 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-8 text-sky-700">
              {countryRegionPlural()} #1 Job Board for Academic Rankings{' '}
            </h2>
            <div className="text-col-2">
              <p className="mb-4">
                Academic Jobs stands out as the {countryRegionPlural()} premier
                platform for Academic Rankings, celebrated for linking
                students with valuable on-campus employment opportunities. Our
                platform is meticulously crafted to meet the specific needs of
                Academicemployment within academic settings.
              </p>
              <p className="mb-4">
                Facilitating ideal matches between students and various campus
                roles. Whether it's part-time positions or work-study
                opportunities, we connect you with roles that enhance your
                academic experience and provide practical work skills. Opt for
                Academic Jobs for unrivaled access to the{' '}
                {countryRegionPlural()} most sought-after Academicpositions in
                academia.
              </p>
            </div>
          </div>
        </div>
        <section className="container mx-auto px-4 mt-12">
          {/* Gain Real-World Experience in Academic Settings Card */}
          <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure>
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/real-world-experience.jpg"
                alt="Experience the Real-World in Academic Settings"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Gain Real-World Experience in Academic Settings
              </h2>
              <p className="max-w-screen-sm">
                Step into roles that provide real-world experience right on a
                college campus. Engage in jobs that enhance your academic
                knowledge, such as research assistants or departmental aides.
                These positions not only offer practical experience but also a
                deeper understanding of your field of study.
              </p>
              <div className="card-actions justify-center md:justify-end">
                <Link className="btn btn-aj" href="/student">
                  Gain Valuable Skills
                </Link>
              </div>
            </div>
          </div>

          {/* Build Your Network with On-Campus Employment Card */}
          <div className="card card-side bg-sky-50 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
            <figure className="lg:order-1">
              <Image
                width={2000}
                height={534}
                src="/student-jobs-on-campus/networking-with-campus-jobs.jpg"
                alt="Build Your Network with On-Campus Employment"
                className="w-full lg:max-w-lg rounded-xl m-6"
              />
            </figure>
            <div className="card-body w-full">
              <h2 className="card-title">
                Build Your Network with On-Campus Employment
              </h2>
              <p className="max-w-screen-sm">
                Working on campus is more than just a job; it's an opportunity
                to build your professional and academic network. Interact with
                faculty, staff, and fellow students in roles that expand your
                connections and open doors for future career opportunities.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <Link className="btn btn-aj" href="/student">
                  Develop Your Network
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-teal-100 mb-8 mt-16 py-8 px-4">
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
                Let us guide you to opportunities that enrich your academic
                journey and prepare you for your future career.
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
        </div>
        <section>
          <h3 className="container mx-auto text-center py-8 px-4">
            Want opportunities delivered to you?{' '}
            <Link href="/academic-talent-pool" className="btn btn-aj">
              Join our Talent Pool
            </Link>
          </h3>
        </section>
      </main>
    </>
  );
}
