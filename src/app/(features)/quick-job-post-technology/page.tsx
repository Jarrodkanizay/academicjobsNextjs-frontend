import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeroBanner from '@/components/HeroBanner';
import TalentPoolForm from '@/components/forms/TalentPoolForm';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import InputBlock2 from '@/components/forms/InputBlock2';
export const metadata: Metadata = {
  title: 'Academic Talent Pool', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Join our exclusive Talent Pool to connect and collaborate with top employers and academics worldwide. Sign up today to explore exciting job opportunities, gain industry exposure, and fast-track your career. Perfect for academics seeking to elevate their career paths.',
  keywords:
    'talent pool, career opportunities, job seekers, find academic networking, academic exposure, professional networking, industry exposure, employment, career growth, job application, talent database, professional development, sign up, global job market',
};
//WIP
export default function Page() {
  const cardIconSize = 90;

  return (
    <main className="content-grid">
      <HeroBanner
        //   bgColorClass?: string; //Optional Tailwind CSS background color class
        h1="Quick Job Post Technology: The Future of Academic Recruitment is upon us!"
        h2="Saving Time & Revolutionizing the Way Universities & Colleges Post Job Vacancies"
        para1="Post a job in 32 seconds! In an era where efficiency underpins success, the recruitment landscape within academic institutions is undergoing a significant transformation."
        btnPrimaryText="Post a Job Now"
        btnPrimaryURL="/post-a-job"
        btnSecondaryText="Learn More"
        btnSecondaryURL="/career-help/higher-ed-quick-job-post-technology"
        src="/quick-job-post/higher-education-quick-job-post.jpg"
        alt="Academic and Higher Education Quick Job Post Technology"
        reorder={false}
      />
      {/* Main Content */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-center">The End of Traditional Job Posting</h2>
        <div className="text-2-cols">
          <p>
            The introduction of Quick Job Post Technology marks a departure from
            traditional, time-consuming job posting processes, heralding a new
            era of streamlined recruitment for universities and colleges. Stop
            wasting your valuable time!
          </p>
          <p>
            Gone are the days of spending upwards of 9 minutes just to get your
            academic vacancy on a job board. The cumbersome process of
            categorizing, and promoting job listings on various platforms such
            as Seek, Indeed, and <span className="uni-jobs">Uni</span>Jobs has
            been dramatically simplified by AcademicJobs.
          </p>
          <p>
            Higher Ed Quick Job Post Technology addresses these inefficiencies
            head-on, offering a seamless, user-friendly solution that
            drastically reduces the time and effort required by HR personnel and
            recruiters.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="-1 -2 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.815 3.094a3.467 3.467 0 0 1-2.78-1.09l-.084-.001a3.467 3.467 0 0 1-2.781 1.09a3.477 3.477 0 0 1-1.727 2.51a3.471 3.471 0 0 1 0 2.794a3.477 3.477 0 0 1 1.727 2.51a3.467 3.467 0 0 1 2.78 1.09h.084a3.467 3.467 0 0 1 2.78-1.09a3.477 3.477 0 0 1 1.727-2.51a3.471 3.471 0 0 1 0-2.794a3.477 3.477 0 0 1-1.726-2.51zM14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14zm-5.812 9.198a7.943 7.943 0 0 0 2.342-.73a3.468 3.468 0 0 1-.087.215a3.477 3.477 0 0 1 1.727 2.51a3.467 3.467 0 0 1 2.78 1.09h.084a3.467 3.467 0 0 1 2.78-1.09a3.477 3.477 0 0 1 1.727-2.51a3.471 3.471 0 0 1 0-2.794a3.477 3.477 0 0 1-1.726-2.51a3.467 3.467 0 0 1-2.78-1.09h-.084l-.015.016a8.077 8.077 0 0 0 .002-2.016L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13zM7 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  />
                </svg>{' '}
              </div>
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">How Quick Job Post Works</h2>
              <ul>
                <li>
                  <strong>Instant Activation:</strong> Find and activate your
                  headline listing on the Academic Jobs Website in seconds.
                </li>
                <li>
                  <strong>Effortless Uploading:</strong> Upload your job listing
                  directly from a Word document.
                </li>
                <li>
                  <strong>Simplified Posting:</strong> Copy and paste your job
                  description into a single field on our platform. Our
                  technology takes care of the rest.
                </li>
                <li>
                  <strong>Automated Categorization and Promotion:</strong>{' '}
                  Automatically categorize the job and promote it to relevant
                  candidates, enhancing visibility and applicant fit.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                >
                  <mask id="lineMdSpeedometerLoop0">
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-dasharray="46"
                      stroke-dashoffset="46"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22"
                      transform="rotate(45 12 13)"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="46;92"
                      />
                    </path>
                    <g fill-opacity="0" transform="rotate(-100 12 13)">
                      <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          begin="0.4s"
                          dur="0.2s"
                          values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 12 -2 12 -2C12 -2 17 10.2386 17 13Z"
                        />
                      </path>
                      <path
                        fill="#fff"
                        d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="d"
                          begin="0.4s"
                          dur="0.2s"
                          values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M15 13C15 14.6568 13.6569 16 12 16C10.3431 16 9 14.6568 9 13C9 11.3431 12 2 12 2C12 2 15 11.3431 15 13Z"
                        />
                      </path>
                      <set attributeName="fill-opacity" begin="0.4s" to="1" />
                      <animateTransform
                        attributeName="transform"
                        begin="0.6s"
                        dur="6s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="-100 12 13;65 12 13;65 12 13;65 12 13;30 12 13;10 12 13;0 12 13;35 12 13;55 12 13;65 12 13;75 12 13;15 12 13;-20 12 13;-100 12 13"
                      />
                    </g>
                  </mask>
                  <rect
                    width="24"
                    height="24"
                    fill="currentColor"
                    mask="url(#lineMdSpeedometerLoop0)"
                  />
                </svg>{' '}
              </div>
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">Beyond Time-Saving</h2>
              <ul>
                <li>
                  <strong>Consistency and Professionalism:</strong> Ensure your
                  job posts are uniform in format and appearance, reinforcing
                  your institution's brand.
                </li>
                <li>
                  <strong>Minimized Human Error:</strong> Automate the posting
                  process to accurately capture and display all relevant
                  details.
                </li>
                <li>
                  <strong>Powerful Marketing Tool:</strong> The "headline job
                  post" feature acts as a magnet for potential applicants,
                  encapsulating the essence of each vacancy in a compelling and
                  succinct manner.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-slate-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="icon-ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#FFE46A"
                    d="M411.111 183.926c0-87.791-68.91-158.959-153.914-158.959S103.283 96.136 103.283 183.926c0 39.7 14.093 75.999 37.392 103.856h-.001l33.666 61.027c8.793 16.28 12.057 26.792 26.792 26.792h109.774c14.736 0 19.071-11.07 26.792-26.792l36.022-61.027h-.002c23.299-27.857 37.393-64.156 37.393-103.856"
                  />
                  <path
                    fill="#FFF0B7"
                    d="M112.805 203.285c0-90.721 68.378-165.701 157.146-177.719a150.851 150.851 0 0 0-13.319-.599c-85.004 0-153.914 71.169-153.914 158.959c0 28.89 7.469 55.974 20.512 79.319c-6.75-18.749-10.425-38.932-10.425-59.96"
                  />
                  <path
                    fill="#FFDA00"
                    d="M411.111 184.266c0-31.445-8.843-60.755-24.097-85.428a160.416 160.416 0 0 1 4.917 39.416c0 104.454-101.138 189.522-227.481 192.967l9.89 17.929c8.793 16.28 12.057 26.792 26.792 26.792h109.774c14.736 0 19.071-11.07 26.792-26.792l36.022-61.027h-.002c23.299-27.858 37.393-64.157 37.393-103.857"
                  />
                  <path
                    fill="#FAAF63"
                    d="M321.905 211.203c.149-.131.297-.251.447-.395c2.787-2.667 5.082-6.921 3.161-10.867c-7.879-16.176-31.97-21.308-49.524-15.951c-.889.271-1.751.566-2.588.885c-9.562-5.583-21.434-6.925-32.001-3.569a35.399 35.399 0 0 0-3.678 1.394c-5.785-3.38-12.552-5.066-19.294-4.414c-14.112 1.365-26.375 12.81-28.805 26.752l-1.112.688c9.617 15.541 34.93 60.071 36.552 79.233c2.045 24.174.002 89.793-.019 90.453l11.994.379c.086-2.723 2.086-66.978-.019-91.844c-.938-11.087-7.722-28.758-20.164-52.521c-5.807-11.092-11.445-20.83-14.858-26.576c2.36-7.646 9.61-13.848 17.586-14.619c2.429-.235 4.893.037 7.251.729a22.68 22.68 0 0 0-2.32 3.638c-4.047 7.935-2.356 17.898 3.933 23.176c3.725 3.125 9.137 4.276 14.127 3c4.647-1.188 8.239-4.242 9.854-8.379c1.451-3.718 1.328-8.01-.367-12.756a30.665 30.665 0 0 0-4.05-7.655a28.134 28.134 0 0 1 13.61.744c-1.715 1.975-3.027 4.173-3.89 6.556c-1.844 5.101-1.029 11.163 2.128 15.822c2.721 4.016 6.856 6.403 11.348 6.551c.15.005.301.008.45.008c3.935 0 7.67-1.692 10.562-4.797c3.397-3.647 5.126-8.71 4.624-13.544c-.319-3.073-1.412-6.079-3.172-8.867c12.236-2.223 24.205 1.911 29.383 8.186c-3.125 5.2-9.542 16.11-16.178 28.785c-12.441 23.764-19.227 41.435-20.164 52.521c-2.104 24.866-.104 89.121-.019 91.844l11.994-.379c-.021-.66-2.064-66.275-.019-90.453c1.459-17.251 22.113-55.046 33.237-73.758m-80.657-3.171c-.279.716-1.331 1.035-1.647 1.116c-1.25.319-2.665.086-3.442-.565c-2.015-1.691-2.453-5.599-.957-8.532a11.21 11.21 0 0 1 1.85-2.583c1.611 1.828 2.892 3.926 3.707 6.208c.665 1.86.843 3.449.489 4.356m32.19.654c-.351.375-1.065.992-1.839.976c-.831-.027-1.489-.819-1.808-1.289c-.993-1.467-1.312-3.527-.776-5.009c.618-1.71 1.811-3.109 3.203-4.235c1.55 1.751 2.501 3.634 2.688 5.434c.144 1.371-.447 3.027-1.468 4.123"
                  />
                  <path
                    fill="#6B83A5"
                    d="M315.932 402.701H197.897c-6.6 0-12 5.4-12 12v6.957c0 6.6 5.4 12 12 12h38.122c-11.367 4.229-23.369 14.285-23.369 25.946v4.68c9.123 10.254 17.619 28.081 33.802 28.081h21.89c12.748 0 21.804-13.762 32.836-28.081v-4.68c0-11.661-11.451-21.717-22.548-25.946h37.302c6.6 0 12-5.4 12-12v-6.957c0-6.6-5.4-12-12-12"
                  />
                  <path
                    fill="#ABBDDB"
                    d="M324.406 402.701H189.423c-6.6 0-12-5.4-12-12v-6.957c0-6.6 5.4-12 12-12h134.983c6.6 0 12 5.4 12 12v6.957c0 6.6-5.4 12-12 12m-7.007 49.915v-6.957c0-6.6-5.4-12-12-12H208.43c-6.6 0-12 5.4-12 12v6.957c0 6.6 5.4 12 12 12h96.969c6.6 0 12-5.4 12-12"
                  />
                </svg>{' '}
              </div>
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title">The Revolution</h2>
              <ul>
                <li>
                  <strong>Dramatic Time Reduction:</strong> Quick Job Post
                  technology cuts down the job posting process from over 9
                  minutes to an astonishing average of 32 seconds.
                </li>
                <li>
                  <strong>Streamlined Process:</strong> By automating the
                  preparation and posting of job listings, this technology
                  eliminates traditional inefficiencies.
                </li>
                <li>
                  <strong>Enhanced Accuracy and Reach:</strong> The technology
                  ensures job posts are consistent and professional in
                  appearance with an accurate targeted reach.
                </li>
              </ul>
            </div>
          </div>
          {/* End Cards */}
        </div>

        {/* Revolutionize Your Recruitment Card */}
        <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
          <figure>
            <Image
              src="/ai-recruitment/ai-driven-job-optimization.jpg"
              width={1280}
              height={380}
              alt="AI Optimized Job Postings"
              className="w-full lg:max-w-lg rounded-xl m-6"
            />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">
              AI-Enhanced Job Listings for Maximum&nbsp;Impact
            </h2>
            <p className="max-w-screen-sm">
              Our AI-driven system elevates your job postings by analyzing
              successful listings across various industries. We provide tailored
              suggestions for keywords, job titles, and descriptions. This
              data-driven approach ensures that your listings are not just seen
              but are compelling to the right candidates. It also saves you time
              and increases your chances of finding the right candidate for the
              job.
            </p>
            <div className="card-actions justify-end">
              <Link
                href="/ai-recruitment/ai-job-posting-optimization"
                className="btn btn-aj"
              >
                Learn about AI Optimization
              </Link>
            </div>
          </div>
        </div>

        {/* Enhance Job Listings Card */}
        <div className="card card-side bg-slate-100 shadow-xl my-16 px-6 grid sm:grid-cols-1 md:grid-cols-2">
          <figure className="lg:order-1">
            <Image
              src="/ai-recruitment/ai-enhanced-job-listing.jpg"
              width={1280}
              height={380}
              alt="AI Enhanced Job Listings"
              className="w-full lg:max-w-lg rounded-xl m-6"
            />
          </figure>
          <div className="card-body w-full">
            <h2 className="card-title">
              Revolutionize Your Recruitment with AI-Driven Job Posting
              Optimization
            </h2>
            <p className="max-w-screen-sm">
              In the dynamic landscape of today’s job market, securing top
              talent demands more than just a standard job posting. Academic
              Jobs introduces a groundbreaking AI solution – Automated Job
              Posting Optimization. This innovative tool is transforming the way
              employers approach job listings, ensuring your vacancies not only
              reach but resonate with the most qualified candidates.
            </p>
            <div className="card-actions justify-end">
              <Link
                href="/ai-recruitment/ai-job-application-sentiment-analysis"
                className="btn btn-aj"
              >
                Learn about AI Job Postings
              </Link>
            </div>
          </div>
        </div>

        <div className="alert mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            Resume extraction and parsing provides candidates with the ability
            to create structured data from their uploaded resume (Supports MS
            Word, PDF & JPEG). Coming soon!
          </span>
          <div>
            <Link
              href="/ai-recruitment/ai-resume-extraction"
              className="btn btn-sm btn-aj"
            >
              More about Resume Parsing
            </Link>
          </div>
        </div>

        <div className="mb-16 max-w-lg mx-auto">
          <h3 className="mb-4">
            Choose Academic Jobs and Gain the Superpowers that AI-Enhanced
            Recruitment&nbsp;Delivers
          </h3>
          <li>
            Tailored AI Solutions: Customized AI recommendations specific to
            your industry and company needs.
          </li>
          <li>
            Advanced Candidate Matching: Cutting-edge technology to match the
            right talent with your job requirements.
          </li>
          <li>
            Efficient Recruitment Process: Save time and resources with
            automated, AI-driven job posting optimization.
          </li>
        </div>
      </section>
      <div className="hero min-h-fit bg-orange-100 mb-8">
        <div className="container mx-auto text-center py-8 px-4">
          <h2 className="text-5xl font-bold">Why Choose Academic Jobs?</h2>
          <p className="py-6 max-w-2xl mx-auto">
            Elevate your job postings with our intelligent analytics. Our
            platform transforms listings into data-rich resources, offering
            continuous performance monitoring and actionable insights to
            optimize your recruitment strategy.
          </p>
          <p className="max-w-2xl mx-auto">
            Harness AI power for precision-targeted job listings. Our system not
            only broadcasts but smartly targets your ideal demographic, from
            specific groups like US citizens to a broader audience. Enhanced
            with selective visibility, we streamline your recruitment for
            maximum efficiency. Contact us to discover more.
          </p>
        </div>
      </div>
      <section>
        <h3 className="container mx-auto text-center py-8 px-4">
          To learn more about this time saving opportunity{' '}
          <Link href="/contact-us" className="btn btn-aj">
            Contact us Today
          </Link>
        </h3>
        <p className="text-center p-4">
          <Link
            href="/ai-recruitment/ai-job-posting-optimization"
            className="link link-warning hover:text-orange-500"
          >
            AI&nbsp;Job&nbsp;Listings
          </Link>{' '}
          <Link
            href="/ai-recruitment/ai-job-application-sentiment-analysis"
            className="link link-warning hover:text-orange-500 mx-4"
          >
            AI&nbsp;Sentiment&nbsp;Analysis
          </Link>{' '}
          <Link
            href="/ai-recruitment/ai-resume-extraction"
            className="link link-warning hover:text-orange-500"
          >
            AI&nbsp;Resume&nbsp;Extraction
          </Link>
        </p>
      </section>
    </main>
  );
}
