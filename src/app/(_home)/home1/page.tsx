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
      src: '/home/academic-lecturer-positions.png',
      alt: 'Academic Lecturer Positions',
      label: 'Lecturer',
      link: '/lecturer',
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff',
      link: '/staff-jobs',
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR',
      link: '/hr-jobs',
    },
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: '/faculty',
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD',
      link: '/phd',
    },
    {
      src: '/home/academic-graduate-positions.png',
      alt: 'Academic Graduate Positions',
      label: 'Graduate',
      link: '/graduate',
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: '/executive',
    },
  ];
  return (
    <>
      <main className="content-grid">
        <div className="w-full h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto">
          <JobSearchBoxHome />
        </div>

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

            <ul className="hero-icons flex gap-8 mx-auto text-center items-center justify-center">
              {items.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
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
        <div className="temp h-[800px] mt-[120px]">Rest of content…</div>
      </main>
    </>
  );
}
