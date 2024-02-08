import { blogData } from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';
// import { BlogPostTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helpful Career Advice, Blogs and Collaboration Tools', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: 'Helpful Career Advice, Blogs and Collaboration Tools', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Unlock your academic career potential with our expertly curated career advice, insightful blogs, and innovative collaboration tools. Dive into a world of opportunities and guidance tailored for academics seeking to advance their careers. Explore now and take the next step in your academic journey!',
  keywords: 'About Academicjobs, About Academic Jobs, Academicjobs About',
};

export default function BlogPosts() {
  // function formatDate(input: string) {
  //   const date = new Date(input);
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return date.toLocaleDateString('en-US', options);
  // }

  const blogPath = '/career-help/';

  console.log(blogData);
  return (
    <main className="content-grid">
      <HeroBanner
        h1="Empowering Your Academic Career: Networking, Collaboration, and Expert Advice"
        para1="Your ultimate academic career awaits, let us supercharge your academic journey. In today's fast-paced academic world, advancing your career goes beyond just landing the next job; it's about building meaningful connections, engaging in collaborative projects, and gaining insights that pave the way for success."
        para2="Whether you're embarking on your PhD journey, navigating the postdoctoral landscape, or shaping the minds of the future as a professor, our curated career advice, tips, and insights from seasoned academics and researchers are designed to guide you every step of the way."
        src="/blogs/career-assistance-networking-and-collaboration.jpg"
        alt="People immersed in academic blogs at our vibrant Academic Hub"
        btnPrimaryText="Join our Talent Pool"
        btnPrimaryURL="/talent-pool"
        reorder={false}
      />

      <h2 className="underline-full mb-8"> Top Academic Career Help</h2>

      {blogData ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.slice(0, 6).map((post, index) => (
              <article key={index} className="card bg-slate-100 shadow-xl">
                <figure>
                  <Link href={blogPath + post.slug}>
                    <Image
                      src={post.image_url}
                      alt={post.alt}
                      width={800}
                      height={800}
                    />
                  </Link>
                </figure>

                <div className="card-body">
                  <h2 className="card-title grow">
                    <Link
                      href={blogPath + post.slug}
                      className="hover:text-orange-500 text-2xl"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <h3>By {post.author}</h3>
                  <p>
                    <time className="mr-4">
                      {formatDate(post.published_at)}
                    </time>
                    {post.updated_at !== '' ? (
                      <span className="text-slate-400">
                        Updated: <time>{formatDate(post.updated_at)}</time>
                      </span>
                    ) : null}
                  </p>
                  <p className="h-[130px] relative">
                    {post.summary}
                    <div className="blog-gradient"> </div>
                  </p>
                  <div className="card-actions justify-end">
                    <Link
                      href={blogPath + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 mt-10">
            <iframe
              className=" aspect-video  rounded-3xl"
              src="https://www.youtube.com/embed/bEEmo_KhOOk?si=yiNtzXaYyASiWU8W"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/hSbjVkmSIrc?si=qeq_VAZ3ZEQpWhjh"
              title="YouTube video player"
            ></iframe>

            <iframe
              className=" aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/yn-ctFDfI60?si=REwYQIJFPBm6NnXm"
              title="YouTube video player"
            ></iframe>
          </div>

          <h2 className="underline-full mt-16 mb-8">
            Academic Recruitment & Career Blog Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {blogData.slice(6).map((post, index) => (
              <article
                key={index}
                className="card bg-slate-100 shadow-xl image-full items-stretch"
              >
                <figure>
                  <Link href={blogPath + post.slug}>
                    <Image
                      src={post.image_url}
                      alt={post.alt}
                      width={800}
                      height={800}
                    />
                  </Link>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    <Link
                      href={blogPath + post.slug}
                      className="text-white hover:text-orange-500 text-lg"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="card-actions justify-end mt-auto">
                    <Link
                      href={blogPath + post.slug}
                      className="btn btn-aj btn-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div>Something went wrong loading the Blogs.</div>
      )}
    </main>
  );
}
