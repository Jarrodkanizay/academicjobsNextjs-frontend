import Link from 'next/link';
import Image from 'next/image';

type NavLinkProps = {
  url: string;
  icon: string;
  navLink: string;
};

export default function NavLink({ url, icon, navLink }: NavLinkProps) {
  return (
    <Link href={url} passHref>
      <div className="nav-link nav-link-ltr whitespace-nowrap text-gray-900">
        <span className="flex flex-row items-center justify-center gap-1 m-auto">
          <Image
            className="academic-award"
            src={icon}
            alt={navLink}
            width={22}
            height={22}
            style={{ height: '22px', marginLeft: '-8px' }}
          />
          <span className="flex flex-col">
            <span>{navLink}</span>
          </span>
        </span>
      </div>
    </Link>
  );
}
