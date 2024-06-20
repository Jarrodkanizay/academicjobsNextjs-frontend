import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '', //Option 2 overrides the title in layout.tsx
  },
  description: '',
  keywords: '',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid ">
        <h1 className="underline-full text-gray-blue">
          Academic and University Jobs Team
        </h1>

        <div className="flex flex-wrap gap-16">
          {/* Card 1 */}
          <Link href="/about/team/jarrod-kanizay">
            <div className="card w-64 shadow-xl">
              <figure>
                <Image
                  src="/about-us/team/team-placeholder.jpg"
                  alt="Jarrod Kanizay"
                  className="h-64"
                  width={256}
                  height={256}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[18px] m-0">Jarrod Kanizay</h2>
                <p className="text-[12px] m-0">Founder & CEO</p>
              </div>
            </div>
          </Link>

          {/* Card 1 */}
          <Link href="/about/team/raymond-mulyawan">
            <div className="card w-64 shadow-xl hover:bg-slate-200">
              <figure>
                <Image
                  src="/about-us/team/raymond-mulyawan.jpg"
                  alt="Raymond Mulyawan"
                  className="h-64"
                  width={256}
                  height={256}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[18px] m-0">Raymond Mulyawan</h2>
                <p className="text-[12px] m-0">SEO specialist</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
