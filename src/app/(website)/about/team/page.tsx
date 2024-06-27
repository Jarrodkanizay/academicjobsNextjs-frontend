import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '@/data/team';
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
          {teamData.map((member) => (
            <Link key={member.slug} href={`/about/team/${member.slug}`}>
              <div className="card w-64 shadow-xl hover:bg-slate-200">
                <figure>
                  <Image
                    src={`/about-us/team/${member.headshot}`} // Adjust the path as needed
                    alt={member.name}
                    className="h-64"
                    width={256}
                    height={256}
                  />
                </figure>
                <div className="card-body p-5">
                  <h2 className="card-title text-[18px] m-0 underline-full">
                    {member.name}
                  </h2>
                  <p className="text-[12px] m-0">{member.position}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
