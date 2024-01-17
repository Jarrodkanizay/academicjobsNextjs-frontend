import type { Metadata } from 'next';
import Link from 'next/link';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Lecturer Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'To find out more about the academic lecturer jobs available in higher education, browse our list of current lecturer job vacancies on this page. ',
  keywords: 'Academic Lecturer Jobs. Lecturer positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <h1>Academic Research Jobs</h1>
      <div className="text-3-cols">
        <p>
          Explore all top Research positions at leading universities and
          colleges to find your dream job. Highly sought-after researchers find
          local and global opportunities through our platform, secure your new
          role today.
          {/* Browse all Research positions from well regarded universities right now
        on AcademicJobs. The top researchers are highly sought after by our
        universities, and academics may pursue fantastic global opportunities
        through our platform. */}
        </p>

        <p>
          Work on groundbreaking projects as an Academic Researcher. Foster
          original, innovative research in diverse fields with esteemed
          institutions. Collaborate with experts, and contribute to
          bleeding-edge studies. Are you ready to elevate your career by making
          impactful contributions to the forefront of knowledge?
          {/* Academic Researcher jobs allow for the creation of original and
        innovative research in their fields of interest, often as part of a
        larger project or team. Join esteemed institutions, collaborate with
        fellow academic researchers and leading experts, and contribute to
        groundbreaking studies in diverse fields. Elevate your career and make a
        lasting impact on the forefront of knowledge. */}
        </p>
      </div>

      <Link href="/research/faq" className="pt-4 text-sky-500">
        View Research Jobs FAQ
      </Link>

      <JobSearchBox />
      <SearchResults q={{ q: 'research' || 0 }} />
    </main>
  );
}
