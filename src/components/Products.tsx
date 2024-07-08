import Image from 'next/image';
import { useState } from 'react';
import { productCards } from '@/data/products';

type ProductProps = {
  id: number;
  title: string;
  headline: string;
  description: string;
  benefits: {
    itemPrefix: string;
    item: string;
  }[];
  callToAction: string;
};

const ProductCards = () => {
  return (
    <section className="flex flex-col gap-1 my-24">
      <div className="container mb-16">
        <h2 className="text-gray-blue underline-full mt-0">
          Automate your sourcing efforts
        </h2>
        <p>
          In today's digital age, maximise your reach and enhance your
          visibility with our targeted advertising solutions. Whether it's a
          prominent banner ad on our website, Google programmatic advertising,
          or leveraging our employee referral program, we ensure your job
          postings stand out. Engage top talent where they are, whether they are
          checking emails or browsing job sites, and secure the best candidates
          for your critical positions.
        </p>
      </div>
      {productCards.map((product) => (
        <div
          key={product.id}
          className={`flex items-center p-0 py-36 product_card ${product.css}`}
        >
          <div
            className={`container md:flex m-0 mx-auto p-0 md:px-10 px-4 items-center justify-center min-w-96 ${
              product.id % 2 !== 0 ? '' : ' flex-row-reverse'
            }`}
          >
            <div className="max-w-[700px]">
              {/* <p>{product.title}</p> */}
              <h3 className="text-gray-blue mt-0">{product.headline}</h3>
              <p>{product.description}</p>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>
                    <strong>{benefit.itemPrefix}: </strong>
                    {benefit.item}
                  </li>
                ))}
              </ul>
              <p>{product.callToAction}</p>
            </div>
            <figure>
              <Image
                width={1000}
                height={600}
                src={product.src}
                alt={product.alt}
                className="min-w-[500px] p-8"
              />
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCards;
