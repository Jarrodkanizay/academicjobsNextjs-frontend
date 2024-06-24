import Image from 'next/image';
import Link from 'next/link';

type Props = { items: any[]; size: number };

const JobTypeFaces = ({ items, size }: Props) => {
  return (
    <ul className="hero-icons lg:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center md:mt-[-2rem] mt-[-11rem] hidden">
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
  );
};

export default JobTypeFaces;
