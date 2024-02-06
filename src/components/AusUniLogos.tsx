import Image from 'next/image';

const AusUniLogos = () => {
  const width = 378;
  const height = 216;

  const logos = [
    {
      uni: '/university-logos/bond-university.jpg',
      alt: 'Bond University Logo',
      url: 'https://bond.edu.au/',
    },
    {
      uni: '/university-logos/queensland-university-of-technology.jpg',
      alt: 'Queensland University of Technology (QUT) Logo',
      url: 'https://www.qut.edu.au/',
    },
    {
      uni: '/university-logos/university-of-melbourne.jpg',
      alt: 'University of Melbourne Logo',
      url: 'https://www.unimelb.edu.au/',
    },
    {
      uni: '/university-logos/monash-university.jpg',
      alt: 'Monash University Logo',
      url: 'https://www.monash.edu/',
    },
    {
      uni: '/university-logos/university-of-nsw-australia.jpg',
      alt: 'University of NSW Logo',
      url: 'https://www.unsw.edu.au/',
    },
    {
      uni: '/university-logos/university-of-queensland-australia.jpg',
      alt: 'University of Queensland Logo',
      url: 'https://www.uq.edu.au/',
    },
    {
      uni: '/university-logos/university-of-sydney.jpg',
      alt: 'University of Sydney Logo',
      url: 'https://www.sydney.edu.au/',
    },
    {
      uni: '/university-logos/university-of-western-australia.jpg',
      alt: 'University of Western Australia Logo',
      url: 'https://www.uwa.edu.au/',
    },
    {
      uni: '/university-logos/swinburne-university-of-technology.jpg',
      alt: 'Swinburne University of Technology Logo',
      url: 'https://www.swinburne.edu.au/',
    },
    {
      uni: '/university-logos/rmit-university.jpg',
      alt: 'RMIT University Logo',
      url: 'https://www.rmit.edu.au/',
    },
  ];
  return (
    <div className="container mb-[50px]">
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ gridColumn: index < 2 ? 'span 2' : 'span 1' }}
          >
            <Image
              src={logo.uni}
              alt={logo.alt}
              width={width}
              height={height}
            />
          </a>
        ))}
      </section>
    </div>
  );
};

export default AusUniLogos;
