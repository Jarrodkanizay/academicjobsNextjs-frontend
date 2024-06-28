import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/Card';
import SearchResults2 from '@/components/SearchResults3';
import DocumentCarousel from '@/components/blogs/DocumentCarousel';

export const metadata: Metadata = {
  title: {
    absolute: 'Academic CV: Tips to write and Free template',
  },
  description:
    'Generic resumes don’t cut in academia. Here are 8 game changing tips to write a winning academic CV and secure that dream academic job. Free template available!',
  keywords: 'Academic CV, How to write academic CV, Academic CV template',
};

const generateTableOfContents = (
  <>
    <h2 className="text-2xl mb-4">Table of Contents</h2>
    <ul className="list-none p-0">
      <li className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 hover:border-amber-500 hover:bg-amber-200 rounded-md px-3 py-2 w-full">
        <a href="#what-is-an-academic-cv">What is an academic CV?</a>
      </li>
      <li className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 hover:border-amber-500 hover:bg-amber-200 rounded-md px-3 py-2 w-full">
        <a href="#8-powerful-tips-for-your-academic-resume">
          8 Powerful Tips for Your Academic Resume
        </a>
      </li>
      <li className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 hover:border-amber-500 hover:bg-amber-200 rounded-md px-3 py-2 w-full">
        <a href="#conclusion">Conclusion</a>
      </li>
      <li className="bg-gray-100 flex-grow text-black border-l-8 border-green-500 hover:border-amber-500 hover:bg-amber-200 rounded-md px-3 py-2 w-full">
        <a href="#frequently-asked-questions">
          Frequently Asked Questions (FAQs)
        </a>
      </li>
    </ul>
  </>
);

export default function myPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.academicjobs.com/how-to-write-a-winning-academic-cv',
    },
    headline: 'How to Write a Winning Academic CV',
    description: 'Abstract resume with a magnifying glass',
    image:
      'https://www.academicjobs.com/blogs/how-to-write-a-winning-academic-cv/cv-banner-image.png',
    author: {
      '@type': 'Person',
      name: 'Raymond Mulyawan',
      url: 'https://www.academicjobs.com/about/team/raymond-mulyawan',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Academic Jobs',
      logo: {
        '@type': 'ImageObject',
        url: '',
      },
    },
    datePublished: '2024-06-20',
    dateModified: '2024-06-28',
  };

  return (
    <>
      <main className="content-grid">
        {/* Main Content */}
        {/* Hero */}
        <div className="custom-background full-width mb-16">
          <div className="container py-16 flex flex-col lg:flex-row gap-2">
            <div className="flex flex-col justify-center">
              <h1>How to Write a Winning Academic CV</h1>
              <p>
                Don’t let your academic resume fall to the bottom of the stack.
                Whether you're aiming for a research position or a teaching
                role, having the right academic resume can make all the
                difference. Here’s how to make sure your resume stands out for
                you to land that perfect academic job.
              </p>
              <a href="/about/team/raymond-mulyawan">
                <h3 className="m-0 mb-10 text-pink-600">By Raymond Mulyawan</h3>
              </a>
            </div>
            <div className="flex-shrink-0 pb-8">
              <a
                href="https://www.vecteezy.com/free-png/resume"
                target="_blank"
              >
                <Image
                  width={300}
                  height={300}
                  alt="Academic-CV"
                  src="/blogs/how-to-write-a-winning-academic-cv/cv-banner-image.png"
                />
              </a>
            </div>
          </div>
          {/* Waves Design */}
          <div className="custom-shape-divider-bottom full-width">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        {/* Intro */}
        <section>
          <div className="content-layout">
            <nav className="sticky_list">{generateTableOfContents}</nav>
            <div className="content lg:flex gap-10">
              <div className="grow mb-16">
                <section>
                  <h2
                    id="what-is-an-academic-cv"
                    className="gray-blue underline-full"
                  >
                    What is an academic CV?
                  </h2>
                  <div className="card bg-white p-6 rounded-lg shadow-lg relative mb-6">
                    <div className="card-content">
                      <p>
                        An academic CV (curriculum vitae) is a specialised
                        document that highlights your academic achievements.
                        Unlike a standard CV, it focuses entirely on your
                        educational and academic background, qualifications,
                        research, teaching experience, and awards.
                      </p>
                      <p>
                        For instance, if you're applying for a lectureship, the
                        hiring committee will be interested in your grades,
                        research experience, and teaching background. An
                        effective academic CV showcases these elements, offering
                        a comprehensive view of your academic journey.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2
                    id="8-powerful-tips-for-your-academic-resume"
                    className="gray-blue underline-full"
                  >
                    8 powerful tips for your academic resume
                  </h2>
                  <section>
                    {/* Add DocumentCarousel here */}
                    <DocumentCarousel />
                  </section>
                  <p className="mb-6 mt-4">
                    Download your{' '}
                    <a
                      className="underline text-blue-500"
                      href="/blogs/how-to-write-a-winning-academic-cv/academic-cv-download.pdf"
                      download
                    >
                      free sample academic CV template.
                    </a>
                  </p>
                  <div
                    id="polish-your-linkedin-profile"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        1. Polish Your LinkedIn Profile
                      </h3>
                      <p>
                        In today’s digital age, your LinkedIn profile is almost
                        as important as your academic resume itself. Include
                        your LinkedIn URL in your contact information, but make
                        sure your profile is optimised first. Update your
                        profile picture, ensure your headline and summary
                        reflect your academic expertise, and fill out your
                        experience and skills sections.
                      </p>
                    </div>
                  </div>

                  <div
                    id="start-with-your-education-section"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        2. Start with your education section
                      </h3>
                      <p>
                        This is where your PHD should appear at the top of this
                        section. Unlike professional CVs, Academic CVs will
                        generally start with an education section before
                        mentioning professional experience and accomplishment.
                        It is important to list your academic achievement in
                        reverse chronological order, starting from the most
                        recent education qualification.
                      </p>
                    </div>
                  </div>

                  <div
                    id="tailor-your-resume-for-each-application"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        3. Tailor Your Resume for Each Application
                      </h3>
                      <p>
                        Generic resumes don’t cut it in academia. Customize your
                        academic resume for each position by aligning your
                        experiences and skills with the job description. Use
                        specific keywords from the job posting to highlight
                        relevant research and teaching experience. This will
                        helps your resume get past any applicant tracking
                        systems (ATS) that might be in use.
                      </p>
                    </div>
                  </div>

                  <div
                    id="organize-your-work-history-by-relevance"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        4. Organize Your Work History by Relevance
                      </h3>
                      <p>
                        If you have diverse experiences, such as research and
                        teaching, consider breaking them into separate sections.
                        Label them clearly, such as 'Research Experience',
                        'Teaching Experience' and 'Industry Experience', be sure
                        to list your positions in reverse chronological order.
                        This helps hiring committees easily find the information
                        most relevant to the position they’re filling.
                      </p>
                    </div>
                  </div>

                  <div
                    id="focus-on-relevant-contributions"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        5. Focus on Relevant Contributions
                      </h3>
                      <p>
                        While it’s important to list all significant
                        publications, presentations, and grants, emphasise on
                        your most recent and relevant work. If your career spans
                        many years, avoid listing every single accomplishment
                        instead, focus on those from the last decade or so. This
                        keeps your resume current and relevant, avoiding the
                        appearance of being outdated.
                      </p>
                    </div>
                  </div>

                  <div
                    id="quantify-your-achievements"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        6. Quantify Your Achievements
                      </h3>
                      <p>
                        Numbers speak volumes. Whenever possible, quantify your
                        achievements to add context to your accomplishments. For
                        example, instead of saying "published several articles,"
                        say "published 10 peer-reviewed articles in top-tier
                        journals." This specificity helps hiring committees
                        understand the impact of your work.
                      </p>
                    </div>
                  </div>

                  <div
                    id="simplify-and-streamline-your-contributions"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        7. Simplify and Streamline Your Contributions
                      </h3>
                      <p>
                        Your contributions to academia—like certifications,
                        training, publications, presentations, and grants—should
                        be organized and easy to navigate. Use bullet points and
                        consistent formatting, and list items in reverse
                        chronological order. This makes your resume easier to
                        read and ensures that your most recent and impressive
                        work is seen first.
                      </p>
                    </div>
                  </div>

                  <div
                    id="references"
                    className="card bg-white p-6 rounded-lg shadow-lg relative mb-6"
                  >
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2">
                        8. References
                      </h3>
                      <p>
                        References are taken seriously in academia. It is usual
                        to include your PHD supervisor and atleast one other
                        academic, such as a collaborator and thesis examiner.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 id="conclusion" className="gray-blue underline-full">
                    Conclusion
                  </h2>
                  <p>
                    Crafting a standout academic resume involves more than just
                    listing your qualifications. It’s about showcasing your
                    academic journey and demonstrating your unique contributions
                    to the field. By following these tips, you’ll be well on
                    your way to creating a resume that captures the attention of
                    hiring committees and lands you your dream job.
                  </p>
                </section>

                <div role="alert" className="alert shadow-lg mt-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <ul className="mb-4">
                      <li>
                        <span className="text-green-600 text-lg">✓</span> Ready
                        to apply for an{' '}
                        <a className="link-aj" href="/" target="_blank">
                          academic job
                        </a>{' '}
                        with your new resume? Check out for the latest openings
                        in academia. It’s a fantastic resource for finding
                        faculty and research positions that match your skills
                        and career goals.
                      </li>
                    </ul>
                  </div>
                </div>

                <section>
                  <h2
                    id="frequently-asked-questions"
                    className="gray-blue underline-full"
                  >
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                      <h2 className="text-xl font-semibold mb-2">
                        How long should an academic resume be?
                      </h2>
                      <p>
                        Your academic resume should be thorough but concise.
                        Typically, 2-5 pages depending on your experience.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                      <h2 className="text-xl font-semibold mb-2">
                        Should I include a photo on my academic resume?
                      </h2>
                      <p>
                        No, including a photo is not standard practice for
                        academic resumes.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                      <h2 className="text-xl font-semibold mb-2">
                        How do I address career gaps in my academic resume?
                      </h2>
                      <p>
                        Briefly address career gaps in your cover letter or an
                        explanatory note, focusing on what you did during that
                        time.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                      <h2 className="text-xl font-semibold mb-2">
                        Can I include non-academic work experience?
                      </h2>
                      <p>
                        Yes, include it if it’s relevant or demonstrates
                        transferable skills beneficial for the academic role.
                      </p>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="gray-blue underline-full mt-16">
                    Other related articles
                  </h2>
                  <a
                    className="link-aj"
                    href="/become-a-university-lecturer-earn-115k"
                  >
                    How to become a university lecturer in Australia
                  </a>
                </section>
              </div>
            </div>
            <div className="lg:min-w-[400px]">
              {/* @ts-ignore */}
              <SearchResults2 q={{ q: 'research', l: 'Australia' }} />
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
