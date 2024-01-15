import blogData from '@/data/blogData.json';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPosts() {
  function formatDate(input) {
    const date = new Date(input);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  console.log(formatDate('2023-05-15')); // Outputs: May 15, 2023
  return (
    <main className="content-grid">
      <div className="hero max-h-fit full-width bg-slate-200 py-8 mb-16">
        <div className="container mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              width={1280}
              height={380}
              src="/job-ads/recruitment-post-a-job.jpg"
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="AI Powered Recruitment Platform"
            />
            <div>
              <h1 className="text-4xl font-bold text-aj">
                Academic Hub & Top Career Advice Today
              </h1>
              <p className="py-6">
                Are you looking for an academic hub, career advice, tips, and
                insights from academics and researchers? Check out these
                academic jobs blogs and learn from the experts in your field.
                Whether you are a PhD student, a postdoc, or a professor, you
                will find valuable information and inspiration to advance your
                academic career. Read these blogs now and discover the best
                opportunities and practices for academic hub.
              </p>
              <a href="/academic-talent-pool" className="btn btn-aj">
                Join our Talent Pool
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2 className="underline-full mb-8"> Top Academic Hub Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.slice(0, 6).map((post, index) => (
          <article key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <Image
                src={post.image_url}
                alt={post.alt}
                width={800}
                height={800}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title grow">
                <Link
                  href={'/academic-hub/' + post.slug}
                  className="hover:text-orange-500 text-2xl"
                >
                  {post.title}
                </Link>
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <h3>By {post.author}</h3>
              <time>{formatDate(post.published_at)}</time>
              <p className="h-[130px] relative">
                {post.summary}
                <div className="blog-gradient"> </div>
              </p>
              <div className="card-actions justify-end">
                {/* <div className="badge badge-outline">Fashion</div>  */}
                <Link
                  href={'/academic-hub/' + post.slug}
                  className="btn btn-aj btn-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <h2 className="underline-full mt-16 mb-8">Academic Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {blogData.slice(6).map((post, index) => (
          <article
            key={index}
            className="card bg-base-100 shadow-xl image-full"
          >
            <figure>
              <Image
                src={post.image_url}
                alt={post.alt}
                width={800}
                height={800}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <Link
                  href={'/academic-hub/' + post.slug}
                  className="text-white hover:text-orange-500 text-lg"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="card-actions justify-end">
                <Link
                  href={'/academic-hub/' + post.slug}
                  className="btn btn-aj btn-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
