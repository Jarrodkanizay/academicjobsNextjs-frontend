import Link from 'next/link';
import Image from 'next/image';

type NavLinkProps = {
  url: string;
  icon?: string;
  navLink: string;
  forceLinkClass: string;
  forceButtonClass?: string;
  forceImageClass?: string;
  onClick: () => void;
};

export default function NavLink({
  url,
  icon,
  navLink,
  forceLinkClass,
  forceButtonClass,
  forceImageClass,
  onClick,
}: NavLinkProps) {
  const iconWidth = 22;
  const iconHeight = iconWidth;
  return (
    <Link href={url} passHref className={`${forceLinkClass}`} onClick={onClick}>
      <div
        className={`nav-link nav-link-ltr whitespace-nowrap text-gray-900 ${forceButtonClass}`}
      >
        <span className="flex flex-row items-center justify-center">
          {icon && (
            <div className="text-amber-500 hidden md:block">
              <Image
                className={`nav-icon text-amber-500 ${forceImageClass}`}
                src={icon ? icon : '#'}
                alt={navLink}
                width={iconWidth}
                height={iconHeight}
                style={{ height: `${iconHeight}px`, marginLeft: '-12px' }}
              />
            </div>
          )}
          <span className="flex flex-col">
            <span>{navLink}</span>
          </span>
        </span>
      </div>
    </Link>
  );
}
