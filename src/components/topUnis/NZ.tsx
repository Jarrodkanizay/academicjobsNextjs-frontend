import Link from 'next/link';
import Image from 'next/image';

type Props = {
  heading: string;
};

const uniList = [
  {
    name: 'Massey University',
    description:
      'Massey University is a public research university that offers a wide range of degrees including Aviation, veterinary medicine and nano science.',
    href: '/employers/massey-university/3810/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/Academic Jobs Massey University.png',
    alt: 'Massey University',
  },
  {
    name: 'AUT University',
    description:
      'Auckland University of Technology is the second largest university in New Zealand with over 115 undergraduate programs.',
    href: '/employers/auckland-university-of-technology/3804/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs Auckland University of Technology AUT logo.png',
    alt: 'AUT University',
  },
  {
    name: 'University of Auckland',
    description:
      'The University of Auckland is the highest ranked university in NZ, known for its excellence in research, teaching and global engagement.',
    href: '/employers/the-university-of-auckland/3809/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs university of auckland logo.png',
    alt: 'University of Auckland',
  },
  {
    name: 'University of Waikato',
    description:
      'Waikato University is a public research university in Hamilton, with degree programs across 100 subjects and ranked #1 for research impact in NZ.',
    href: '/employers/waikato-university/3806/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs University of Waikato logo.jpeg',
    alt: 'University of Waikato',
  },
  {
    name: 'Victoria University of Wellington',
    description:
      "Victoria University of Wellington is NZ's oldest and most prestigious tertiary institutions with a proud tradition of academic excellence.",
    href: '/employers/victoria-university-of-wellington/3807/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs victoria university of wellington logo.png',
    alt: 'Victoria University of Wellington',
  },
  {
    name: 'University of Otago',
    description:
      'The University of Otago, is one of NZ’s oldest universities. It provides a research-led learning environment with a richly deserved reputation for excellence.',
    href: '/employers/university-of-otago/3805/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/uni-of-otago.png',
    alt: 'University of Otago',
  },
  {
    name: 'Lincoln University',
    description:
      'Lincoln University is a uniquely specialised land-based university. The low student to lecturer ratio means personalised attention for students and support for applied learning.',
    href: '/employers/lincoln-university/3808/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/academicjob lincoln university.jfif',
    alt: 'Lincoln University',
  },
  {
    name: 'University of Canterbury',
    description:
      'University of Canterbury is a public research university based in Christchurch, New Zealand. It offers over 150 programmes in diverse disciplines.',
    href: '/employers/university-of-canterbury/3811/',
    src: 'https://academicjobs.s3.amazonaws.com/img/university-logo/academic job university of canterbury logo.jfif',
    alt: 'University of Canterbury',
  },
];

const TopUnis = ({ heading }: Props) => {
  return (
    <>
      <h2 id="section" className="underline-full mb-10">
        New Zealand: All Universities
      </h2>

      {uniList.map((uni) => (
        <Link key={uni.name} href={uni.href}>
          <div className="card card-side shadow-xl mb-10 border-t-2 border-pink-500 hover:border-amber-500">
            <figure className="w-[200px]">
              <Image
                src={uni.src}
                width={200}
                height={200}
                alt={uni.alt}
                className="p-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{uni.name}</h2>
              <p>{uni.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-aj">Profile</button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TopUnis;
