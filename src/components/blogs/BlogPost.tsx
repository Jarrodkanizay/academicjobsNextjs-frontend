import HeroBanner from '@/components/HeroBanner';
type BlogProps = { post: any; columns?: 1 | 2 | 3 | 4 };

const BlogPost = ({ post, columns = 3 }: BlogProps) => {
  const content = post.content.split('«r»');

  return (
    <main className="blog-post content-grid">
      <HeroBanner
        h1={post.title}
        para1={post.summary}
        src={post.image_url}
        alt={post.alt}
        width={1200}
        height={534}
        imgRight={true}
      />
      <div className="hero max-h-fit full-width bg-slate-200 py-8 mb-16"></div>
      <h3>By {post.author}</h3>
      <time className="mb-8">{post.published_at}</time>
      <div className={`text-${columns.toString()}-cols`}>
        {content.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </main>
  );
};

export default BlogPost;
