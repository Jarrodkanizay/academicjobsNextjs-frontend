import { blogData } from '@/data/blogData';
import BlogPost from '@/components/blogs/BlogPost';

export default function BlogPostPage() {
  const post = blogData[0];

  return <BlogPost post={post} />;
}
