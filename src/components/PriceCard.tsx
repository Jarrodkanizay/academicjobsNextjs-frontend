import Image from 'next/image';
type Props = { product: any };

function formatNumberWithCommas(number: number) {
  return number.toLocaleString();
}

const PriceCard = ({ product }: Props) => {
  return (
    <div className="card flex flex-col justify-between">
      <h3 className="card-title flex justify-between">
        {product.name}
        {product.badge === '' ? null : (
          <span className="badge py-4 bg-[#b3aaff] text-white font-normal border-none">
            {product.badge}
          </span>
        )}
      </h3>
      <h4 className="card-price">
        <span className="symbol">{product.currencySymbol}&thinsp;</span>
        <span className="">{formatNumberWithCommas(product.price)}</span>
      </h4>
      <p>
        {product.currency} / {product.interval}
      </p>
      <div className="special flex flex-row items-center">
        {product.special ? (
          <>
            <Image
              className="mr-2"
              width="46"
              height="46"
              alt=""
              src="/icons/gold-star-highlighted.svg"
            />
            <span className="text-xl font-normal">{product.special}</span>
          </>
        ) : null}
      </div>
      <ul className="p-0 grow mb-8">
        {product.features.map((item: string, index: number) => (
          <li key={index} className="flex text-lg mb-2">
            <Image
              className="mr-2"
              width="20"
              height="20"
              alt=""
              src="/icons/check-white.svg"
            />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={`/purchase/${product.slug}`}
        className="p-1.5 flex justify-between items-center bg-white hover:bg-amber-300 rounded-full text-black text-xl leading-tight"
      >
        <span className="grow px-4 text-center ">
          {product.name.toLowerCase() === 'unlimited'
            ? `Subscribe to ${product.name}`
            : `Buy ${product.name}`}
        </span>
        <Image
          className="ml-2"
          width="50"
          height="50"
          alt=""
          src="/icons/buy-now-arrow-icon.svg"
        />
      </a>
    </div>
  );
};

export default PriceCard;
