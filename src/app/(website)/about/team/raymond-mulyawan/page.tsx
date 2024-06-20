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
        <h1 className="underline-full text-gray-blue">Raymond Mulyawan</h1>
        <div className="hero bg-slate-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <figure>
              <Image
                src="/about-us/team/raymond-mulyawan-main.png"
                alt="Raymond Mulyawan"
                className="min-w-[266px]"
                width={266}
                height={386}
              />
            </figure>
            <div>
              <h1 className="text-5xl font-bold">SEO Specialist</h1>
              <p className="py-6">
                As an SEO specialist and content writer at Academicjobs.com,
                Raymond excels in creating engaging blog articles that rank high
                on Google. With a strong foundation in marketing, editorial work
                and copywriting, he blends creativity and strategy to produce
                content that captivates readers and drives traffic. His work is
                fueled by a passion for education, recruitment, and career
                development, ensuring each article is informative, fresh and
                highly relevant to the target audience.
              </p>
            </div>
          </div>
        </div>
        <Link href="/about/team" className="btn btn-aj w-52 mx-auto mt-16">
          Team Members
        </Link>
      </main>
    </>
  );
}
