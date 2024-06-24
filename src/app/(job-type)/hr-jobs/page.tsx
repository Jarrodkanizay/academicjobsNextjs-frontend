import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import hr from '@/data/hr.json';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Higher Ed HR jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Welcome to the top job board for Academic Jobs, listing higher education jobs available in international colleges and universities daily. Use filters such as city, employment type, and institution name to help your job search ',
  keywords: 'Find Academic Jobs, Seek Academic Jobs, Academic Jobs Search',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <HeroBanner
        //   bgColorClass?: string; //Optional Tailwind CSS background color class
        h1="Transform Your Hiring Strategy: Use Quick Post Technology to save time and money"
        h2="Job Seekers: Find the best University & College Staff Positions"
        para1="Discover your perfect human resource position through the world’s
        best job board! At Academic Jobs we offer the most renowned HR
        jobs at the top universities."
        btnPrimaryText="Post a Job Now"
        btnPrimaryURL="/post-a-job"
        btnSecondaryText="Join Our Talent Pool"
        btnSecondaryURL="/academic-talent-pool"
        src="/hr/what-does-human-resources-hr.jpg"
        alt="Academic and Higher Education Quick Job Post Technology"
        reorder={false}
      />


<AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'master_category_job_type',
              filter: 'Human Resources',
            },
          ],
        }}
      />
      <section className="jobs_grid job_post_search_container">
        
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <SearchResults3 />
          </div>
        </div>
      </section>
    </main>
  );
}
