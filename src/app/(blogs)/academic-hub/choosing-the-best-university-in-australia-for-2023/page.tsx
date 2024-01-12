import blogData from '@/data/blogData.json';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPosts() {
  const post = blogData[2];
  const content = post.content.split('«r»');
  return (
    <main className="content-grid">
      <div className="hero max-h-fit full-width bg-slate-200 py-8 mb-16">
        <div className="container mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src={post.image_url}
              alt={post.alt}
              width={1200}
              height={534}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
            />
            <div>
              <h1 className="text-4xl font-bold text-aj">{post.title}</h1>
              <p className="py-6">{post.summary}</p>
              {/* <a href="/academic-talent-pool" className="btn btn-aj">
                Join our Talent Pool
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <h3>By {post.author}</h3>
      <time className="mb-8">{post.published_at}</time>
      {content.map((content, index) => (
        <p key={index} className="mb-4">
          {content}
        </p>
      ))}
    </main>
  );
}
