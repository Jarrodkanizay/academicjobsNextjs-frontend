export type BlogPostProps = {
  post: {
    status: string;
    title: string;
    slug?: string;
    author?: string;
    published_at?: string;
    updated_at?: string;
    image_url: string;
    alt: string;
    summary: string;
    tags?: string[];
    keywords: string;
    content: string;
  };
  columns?: number | 1 | 2 | 3;
};
