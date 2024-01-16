import blogData from '@/data/blogData.json';
import BlogPost from '@/components/blogs/BlogPost';
// import Image from 'next/image';

export default function BlogPost() {
  const post = blogData[0];
  // const content = post.content.split('«r»');

  return (
    <BlogPost post={post} />
    // <main className="blog-post content-grid">
    //   <div className="hero max-h-fit full-width bg-slate-200 py-8 mb-16">
    //     <div className="container mx-auto">
    //       <div className="hero-content flex-col lg:flex-row-reverse">
    //         <Image
    //           src={post.image_url}
    //           alt={post.alt}
    //           width={1200}
    //           height={534}
    //           className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
    //         />
    //         <div>
    //           <h1 className="text-4xl font-bold text-aj">{post.title}</h1>
    //           <p className="py-6">{post.summary}</p>
    //           {/* <a href="/academic-talent-pool" className="btn btn-aj">
    //             Join our Talent Pool
    //           </a> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <h3>By {post.author}</h3>
    //   <time className="mb-8">{post.published_at}</time>
    //   <div className="text-3-cols">
    //     {content.map((content, index) => (
    //       <p key={index}>{content}</p>
    //     ))}
    //   </div>
    // </main>
  );
}
