import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { teamData } from '@/data/team';

// Function to generate metadata
export async function generateMetadata({ params }) {
  const member = teamData.find((member) => member.slug === params.slug);

  if (!member) {
    return {
      title: 'Member not found',
    };
  }

  return {
    title: member.name,
    description: member.bio,
    keywords: member.position,
  };
}

// Function to fetch data
export async function generateStaticParams() {
  return teamData.map((member) => ({
    slug: member.slug,
  }));
}

export default function TeamMemberPage({ params }) {
  const member = teamData.find((member) => member.slug === params.slug);

  if (!member) {
    notFound();
  }

  // Split bio by new lines and map to <p> tags
  const bioParagraphs = member.bio
    .split('\n')
    .map((line, index) => <p key={index}>{line.trim()}</p>);

  return (
    <main className="content-grid">
      <h1 className="underline-full text-gray-blue">{member.name}</h1>
      <div className="hero bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <figure>
            <Image
              src={`/about-us/team/${member.mainImage}`}
              alt={member.name}
              className="min-w-[266px]"
              width={266}
              height={386}
            />
          </figure>
          <div>
            <h1 className="text-5xl font-bold">{member.position}</h1>
            <div className="py-6 pr-16 max-w-[700px]">{bioParagraphs}</div>
          </div>
        </div>
      </div>
      <Link href="/about/team" className="btn btn-aj w-52 mx-auto mt-16">
        Team Members
      </Link>
    </main>
  );
}
