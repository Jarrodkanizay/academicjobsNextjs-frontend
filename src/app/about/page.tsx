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

export default function Home() {
  return (
    <>
      <Image
        src="/about-us/Academic-jobs-About-AJ.jpg"
        width={1280}
        height={380}
        alt="About us - AcademicJobs - Academic Jobs - About"
        className="w-full p-0 m-0"
      />
      <main className="content-grid">
        <div className="full-width"></div>

        <main className="container prose">
          <div className="prose mt-8 mb-8">
            {/* <SubHead>About Us</SubHead> */}
            <h1>All the Best University Jobs</h1>
            <h2 className="mb-8">
              Find the best academic positions in your city, country and
              worldwide.
            </h2>
          </div>
          <div className="prose text mt-8 ">
            <p>
              Also listing administrative, staff and support roles in higher ed.
              Search for academic jobs, college careers and faculty positions
              online with AcademicJobs.com.
            </p>
            <p>
              Welcome to AcademicJobs, the leading online platform for finding
              and applying for university and higher education jobs and
              positions. Whether you are looking for a faculty, research,
              administrative, or professional role, we have the right
              opportunity for you.
            </p>
            <p>
              Academic Jobs was founded by a team of higher ed professionals who
              were frustrated with the lack of transparency and efficiency in
              the academic job market. Put simply, they thought that the old job
              boards out there for academic positions did not work for clients,
              and they continued to operate on very old, outdated technology.
              They therefore have created the best academic job platform in the
              world today... making it easier for candidates to search for jobs,
              compare offers, and communicate with employers. They have also
              provided employers with a cost-effective and user-friendly way to
              advertise their vacancies, reach a global talent pool, and manage
              their applications.
            </p>
            <p>
              AcademicJobs has grown to become the most trusted and popular
              website for academic job seekers and employers worldwide. With
              over 5000 universities and their jobs, and over 1 million
              registered users from all over the world, 10,000 active job
              listings, and 500 partner institutions across 50 countries.
              AcademicJobs.com lists all disciplines and academic specialties in
              all levels of academia, from humanities and social sciences to
              STEM and health sciences, from PhD students and postdocs to
              professors, lecturers, researchers and deans.
            </p>
            <p>
              Our mission is to help you find your dream academic job or hire
              the best academic talent. We are committed to providing you with
              the most comprehensive and up-to-date information, the most
              advanced and user-friendly tools, and the most professional and
              personalized service. We are also passionate about supporting the
              academic community and promoting diversity, equity, and inclusion
              in higher education.
            </p>
            <p>
              We hope you enjoy using AcademicJobs and find it useful for your
              academic career or recruitment needs. If you have any questions,
              feedback, or suggestions, please feel free to{' '}
              <Link href="/contact-us/" className="link link-aj">
                contact us
              </Link>
              . We would love to hear from you!
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
        </main>
      </main>
    </>
  );
}
