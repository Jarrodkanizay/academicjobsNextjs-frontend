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
              <h2 className="text-gray-blue mt-0">{product.headline}</h2>
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
