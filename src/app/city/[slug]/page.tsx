import { cityData } from '@/data/cityData';
import { BlogPostTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';

type Params = {
  slug: string;
};

type BlogPostPageProps = {
  params: Params;
};

export async function generateMetadata({ params }: any) {
  const blog = await cityData.find((post) => post.slug === params.slug);

  if (!blog) {
    throw new Error(`No blog post found for slug: ${params.slug}`);
  }

  return {
    title: blog.title,
    description: blog.summary,
    keywords: blog.keywords,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = cityData.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="blog-post content-grid">
      <HeroBanner
        h1={post.title || ''}
        para1={post.description || ''}
        src={post.image_url || ''}
        alt={post.alt || ''}
        reorder={false}
        externalLink={true}
      />
      <h3>By {post.author}</h3>
      {/* <p>
        <time className="mr-4">{formatDate(post.published_at)}</time>
        {post.updated_at !== '' ? (
          <span className="text-slate-400">
            Updated: <time>{formatDate(post.updated_at)}</time>
          </span>
        ) : null}
      </p> */}
    </main>
  );
}
