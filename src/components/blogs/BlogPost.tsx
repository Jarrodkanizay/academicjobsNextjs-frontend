'use client';
import HeroBanner from '@/components/HeroBanner';

type BlogPostProps = {
  post: any;
};

const BlogPost = ({ post }: BlogPostProps) => {
  const content = post.content.split('«r»');

  return (
    <main className="blog-post content-grid">
      <HeroBanner
        h1={post.title}
        para1={post.summary}
        src={post.image_url}
        alt={post.alt}
      />
      <div className="hero max-h-fit full-width bg-slate-200 py-8 mb-16"></div>
      <h3>By {post.author}</h3>
      <time className="mb-8">{post.published_at}</time>
      {/* <div className={`text-${columns.toString()}-cols`}> */}
      <div className={`text-3-cols`}>
        {content.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </main>
  );
};

export default BlogPost;
