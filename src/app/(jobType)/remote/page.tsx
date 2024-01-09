import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Remote Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field.   ',
  keywords: 'Academic Jobs Online. online positions',
};
export default function myPage() {
  return (
    
      <main className="content-grid">

              <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">Academic Remote Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
             Discover flexibility to align your professional pursuits with your lifestyle choices. Find the ideal remote job transcending geographical boundaries. Join us in embracing a future where your workspace is as flexible as your ambitions. Redefine your career through our comprehensive remote job platform, unleashing boundless possibilities wherever you choose your path to be.
            </p>
         
            </div>
          </div>
          </div>

              <JobSearchBox q= "remote"/>
              <SearchResults q={{ q: "remote" || 0 }} />
      </main>
   
  );
}
