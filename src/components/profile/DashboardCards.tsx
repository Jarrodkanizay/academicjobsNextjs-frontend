import Image from 'next/image';
import Link from 'next/link';

type Props = { title: string; iconPath: string; href: string };

const DashboardCard = ({
  title = 'Applications',
  iconPath = '/icons/heart.svg',
  href = '/my_life',
}: Props) => {
  return (
    <Link
      href={href}
      role="alert"
      className="alert bg-white hover:bg-slate-100 border-solid border-1 border-slate-300"
    >
      <Image src={iconPath} alt="icon" width={30} height={30} />
      <span>{title}</span>
    </Link>
  );
};

export default DashboardCard;
