import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '', //Option 2 overrides the title in layout.tsx
  },
  description: '',
  keywords: '',
};

export default function myPage() {
  const size = 180;
  const items = [
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: '/executive',
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic Lecturer Positions',
      label: 'Talent-Pool',
      link: '/lecturer',
    },
    
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR jobs',
      link: '/hr-jobs',
    },
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: '/faculty',
    },
    {
      src: '/home/academic-graduate-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD/Student',
      link: '/phd',
    },
    {
      src: '/home/academic-lecturer-positions.png',
      alt: 'Academic Graduate Positions',
      label: 'Collaborate',
      link: '/graduate',
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff',
      link: '/staff-jobs',
    },
 
  ];
  return (
    <>
      <main className="content-grid">
      

        <div className="full-width h-[400px] gradient-aj">
          <div className="hero-bg">
            <section className="wrapper">
              <h2 className="sentence">
                Find
                <div className="slidingVertical">
                  <span>Opportunity</span>
                  <span>Connections</span>
                  <span>Happiness</span>
                  <span>Opportunity</span>
                  <span>Connections</span>
                </div>
              </h2>
            </section>

            <ul className="hero-icons flex flex-wrap gap-8 mx-auto text-center items-center justify-center">
              {items.map((item, index) => (
                <li key={index}>
                  <Link className="grayscale hover:grayscale-0" href={item.link}>
                    <Image
                      src={item.src}
                      width={size}
                      height={size}
                      alt={item.alt}
                    />
                  </Link>
                  <Link href={item.link}>
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-28">
          <JobSearchBoxHome />
        </div>

<p className=" text-center mt-20 font-lg font-bold">Search By <span className="text-amber-500">REGION</span></p>


        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch mb-8 text-left mt-4 max-w-screen-lg mx-auto">
            
      
              <div className="card bg-slate-100  hover:grayscale">
              <figure className="">
                  <Image
                    width={1280}
                    height={380}
                    src="/home/statue-of-liberty-new-york-city-skyline.jpg"
                    alt="Happiness and Academics: Scott Galloway's Algebra of hub"
                    className="rounded-3xl grayscale-0"
                  />
                </figure>
                <div className="pt-2">
                  <h2 className="text-center text-sm text-gray-500"> United States</h2>
                             </div>
                               </div>
          
     
         
              <div className="card bg-slate-100  hover:grayscale">
              <figure>
                  <Image
                    width={1000}
                    height={1000}
                    src="/home/sydney-harbour.jpg"
                    alt="Top Academic Jobs Australia"
                    className="rounded-3xl"
                  />
                </figure>
                <div className="pt-2">
                  <h2 className="text-center text-sm text-gray-500">
                    {' '}
                    Australia{' '}
                  </h2>
                              </div>
              </div>
          
              <div className="card bg-slate-100  hover:grayscale">
              <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/home/london-phone.jpg"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                    className="rounded-3xl"
                  />
                </figure>
                <div className="pt-2">
                  <h2 className="text-center text-sm text-gray-500"> United Kingdom</h2>
                            </div>
                    </div>

 
              <div className="card bg-slate-100  hover:grayscale">
              <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/home/europe-flags.png"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                    className="rounded-3xl"
                  />
                </figure>
                <div className="pt-2">
                  <h2 className="text-center text-sm text-gray-500"> Europe </h2>
                            </div>
                    </div>

                   

                    <div className="card bg-slate-100  hover:grayscale">
              <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/home/beautiful-canada-flag-waving-front.png"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                    className="rounded-3xl"
                  />
                </figure>
                <div className="pt-2">
                  <h2 className="text-center text-sm text-gray-500"> Canada </h2>
                            </div>
                    </div>
           

          </ul>

        <div className="temp h-[800px] mt-[120px]">

      

        </div>
      </main>
    </>
  );
}
