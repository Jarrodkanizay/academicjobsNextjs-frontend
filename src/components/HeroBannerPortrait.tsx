import Image from 'next/image';
import Link from 'next/link';

type Props = {
  h1: string;
  h1_mobile: string;
  country?: string;
  items: any;
  size?: number;
};

const HeroBannerPortrait = ({
  h1,
  h1_mobile,
  country = '',
  items,
  size = 180,
}: Props) => {
  return (
    <div className={`full-width h-[260px] md:h-[340px] gradient-aj`}>
      <div className={`hero-bg ${country} h-full md:bg-center mb-4`}>
        <section className="wrapper flex flex-col items-center justify-center">
          <h1 className="sentence text-white text-center m-0 p-0">{h1}</h1>
          {/* <h1 className="sentence text-white text-center m-0 p-0 md:hidden">
            {h1_mobile}
          </h1> */}
        </section>

        {/* Desktop Version */}
        <ul className="hero-icons hide flex flex-wrap gap-4 mx-auto text-center items-center justify-center mt-[-2rem] p-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link className="grayscale hover:grayscale-0" href={item.link}>
                <Image
                  src={item.src}
                  width={size}
                  height={size}
                  alt={item.alt}
                />
              </Link>
              <Link className="mb-4" href={item.link}>
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroBannerPortrait;
