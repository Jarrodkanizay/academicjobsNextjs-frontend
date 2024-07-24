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
        h1="University HR and Professional Staff"
        para1="As the leading job board for university human resource (HR) and professional staffs, Academicjobs carefully curates the top job opportunities in universities. Find top HR positions, recruitment partner, payroll officer and other university staff jobs here. Join the talent pool now and get updated with new university job openings. 
"
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
        <div className="side_panel">
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
