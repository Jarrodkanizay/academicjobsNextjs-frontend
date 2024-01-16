import type { Metadata } from 'next';
import Link from 'next/link';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import research from "@/data/research.json";


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
     

      <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">Academic Research Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            Explore all top Research positions at leading universities and
          colleges to find your dream job. Highly sought-after researchers find
          local and global opportunities through our platform, secure your new
          role today.
            </p>
            <p className="px-7 md:flex hidden">
            Work on groundbreaking projects as an Academic Researcher. Foster
          original, innovative research in diverse fields with esteemed
          institutions. Collaborate with experts, and contribute to
          bleeding-edge studies. Are you ready to elevate your career by making
          impactful contributions to the forefront of knowledge?
            </p>
         
            </div>
          </div>
          </div>

          <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {research.map(({ Title, Name, }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/research/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div>


      <Link href="/research/faq" className="pt-4 text-sky-500">
        View Research Jobs FAQ
      </Link>

      <JobSearchBox q= 'research' />
      <SearchResults q={{ q: 'research' || 0 }} />
    </main>
  );
}
