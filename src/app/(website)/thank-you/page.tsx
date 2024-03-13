// import Image from 'next/image';
// import Link from 'next/link';
import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'FAQ Academic Jobs Online', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Find out about academic positions at all universities right now! Visit our FAQ Academic Jobs Online page to find if your next question has already been answered.',
  keywords: 'FAQ academicjobs, academicjobs FAQ, Frequently Asked Questions',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="prose bg-slate-200 rounded-3xl mt-12">
          <h2 className="underline-full mt-16">
            WOO HOO, Thank you for your Job Post
          </h2>
          <h3>The AcademicJobs team</h3>
          <p>Have any questions? </p>
          <p className="font-bold">
            Email our team at support@academicjobs.com to get in touch.{' '}
          </p>
        </div>
      </main>
    </>
  );
}
