import type { Metadata } from 'next';
import { productData } from '@/data/productData';
import PostAndPay from '@/components/PostAndPay';

export const metadata: Metadata = {
  title: {
    absolute: 'Academic Jobs Purchase', //Option 2 overrides the title in layout.tsx
  },
  description: '',
  keywords: '',
};

const PostJobPage = ({ params }) => {
  const currency = params.slug.split('-').pop().toUpperCase();
  const products = productData[currency];
  const product = products.find((product) => product.slug === params.slug);
  // const product = productData.find((product) => product.slug === params.slug);
  // const product = params.slug;

  if (!product) {
    return (
      <main className="content-grid">
        <h1 className="text-gray-blue underline-full">Product not found</h1>
      </main>
    );
  }

  return (
    <main className="content-grid">
      <h1 className="text-gray-blue underline-full">Purchase {product.name}</h1>
      <PostAndPay product={product} />
    </main>
  );
};
export default PostJobPage;
