import Image from 'next/image';
import Link from 'next/link';

const JobTypeFaces = () => {
  const size = 180;
  const items = [
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      //link: `/faculty`,
      link: `/faculty?r=Global&filter0=[{"category":"master_category_job_type","filter":"Academic / Faculty"}]`,
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
      // link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      //link: `/hr-jobs`,
      link: `/hr-jobs?r=Global&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]`,
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      //link: `/phd`,
      link: `/phd?r=Global&filter0=[{"category":"PositionType","filter":"Student / Phd Jobs"}]`,
    },
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      //link: `/admin`,
      link: `/admin?r=Global&filter0=[{"category":"master_category_job_type","filter":"Staff / Administration"}]`,
    },
  ];

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
