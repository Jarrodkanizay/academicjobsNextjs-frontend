import Image from 'next/image';
import Link from 'next/link';

type Props = { title: string; iconPath: string; href: string; forceClass?: string; onClick: () => void };

const DashboardCard = ({
  title = 'Applications',
  iconPath = '/icons/heart.svg',
  href = '/my_life',
  forceClass = '',
  onClick,
}: Props) => {
  return (
    <Link
      href={href}
      role="alert"
      className={`alert hover:bg-slate-100 border-solid border-1 border-slate-300 ${forceClass}`}
      onClick={onClick}
    >
      <Image src={iconPath} alt="icon" width={30} height={30} />
      <span className="md:block hidden">{title}</span>
    </Link>
  );
};

export default DashboardCard;