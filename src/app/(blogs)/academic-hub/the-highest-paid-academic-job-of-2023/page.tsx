import blogData from '@/data/blogData.json';
import BlogPost from '@/components/blogs/BlogPost';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  return <BlogPost post={blogData[0]} columns={3} />;
}
