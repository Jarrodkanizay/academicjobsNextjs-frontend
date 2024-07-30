import Image from 'next/image';
import Link from 'next/link';
import WordSwitcher from '@/components/WordSwitcher';

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
    <>
      <div className={`full-width h-[260px] md:h-[340px] gradient-aj`}>
        <div
          className={`hero-bg ${country} h-full md:bg-center mb-4 flex items-center justify-center z-0`}
        >
          <section className="wrapper flex flex-col items-center justify-center mt-[0.25rem] md:mt-[-5rem]">
            <h1 className="sentence text-white text-center m-0 p-0">{h1}</h1>
            <WordSwitcher />
          </section>
        </div>
      </div>
      <ul className="hero-icons hide flex gap-1 md:gap-4 mx-auto text-center items-center justify-between md:justify-center mt-[-5rem] p-4 z-10">
        {items.map((item, index) => (
          <li key={index}>
            <Link className="grayscale hover:grayscale-0" href={item.link}>
              <Image src={item.src} width={size} height={size} alt={item.alt} />
            </Link>
            <Link className="mb-4" href={item.link}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroBannerPortrait;
