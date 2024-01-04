import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Faculty Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'The leading job site for academic faculty jobs. Best list of college and university jobs by specialty in departments. ',
  keywords: 'academic faculty jobs, Academic Jobs, jobs by specialty',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Search for a Faculty Position in Academia
              </h1>
              <p>
              Find all academic positions by discipline, faculty and specialty.</p>

              <p className='pt-4'>All Lecturing, Research and Science jobs online today.</p>

             
      </main>
   
  );
}
