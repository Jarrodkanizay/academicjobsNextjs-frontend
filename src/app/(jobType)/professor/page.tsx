import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'
import professor from "@/data/professor.json";
import Link from 'next/link';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Professor Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Academic professor jobs can cover a wide range of topics and disciplines, depending on the field of specialization and the institution. ',
  keywords: 'Academic professor Jobs. professor positions',
};
export default function myPage() {
  return (
    <main className="content-grid">
     


      <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">Academic Professor Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            See all available professor job opportunities on AcademicJobs right now
        from reputable colleges. Our institutions are always looking for the
        best professors, and through our academic platform, academics may apply
        for amazing worldwide academic professor jobs.
            </p>
            <p className="px-7 md:flex hidden">
            Our Academic professor jobs are professor of law, professor of computer
        science, professor of practice, professor of chemistry, professor of
        engineering, and other professor jobs. Academic professor jobs deliver
        courses, supervising students and staff, conducting original and
        impactful research, publishing in academic journals and books, applying
        for grants and funding, collaborating with other researchers and
        institutions, engaging with industry and community partners, and
        contributing to the academic governance and administration.
            </p>
         
            </div>
          </div>
          </div>

          <div className="bg-white flex flex-col  ">
               <ul className=" text-left columns-1 md:columns-4 pt-4 pl-8 md:gap-2  h-auto w-full text-transform: capitalize">
              {professor.map(({ Title, Name, }, key) => (
                <li className={`pb-2 flex ${' md:break' } ${ ' font-bold text-gray-400' }`} key={key}>
                  <Link href={`/professor/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
          </div>

      <JobSearchBox q="professor" />
      <SearchResults q={{ q: 'professor' || 0 }} />
    </main>
  );
}
