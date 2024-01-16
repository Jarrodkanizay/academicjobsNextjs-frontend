import blogData from '@/data/blogData.ts';
import BlogPost from '@/components/blogs/BlogPost';

export default function BlogPostPage() {
  const post = blogData[2];

  return <BlogPost post={post} />;
}
