import Image from 'next/image';

type Props = {
  children: any;
  iconPath?: string;
  heading: string;
  h2Class?: string;
};

const Card = ({
  children,
  iconPath = '/icons/heart.svg',
  heading,
  h2Class = '',
}: Props) => {
  return (
    <div className={`card bg-slate-100 shadow-xl`}>
      {iconPath == 'none' ? null : (
        <div className="icon-ai">
          <figure className="px-10 pt-10">
            <Image src={iconPath} alt={heading} width={100} height={100} />
          </figure>
        </div>
      )}
      <div className="card-body items-center text-center">
        <h2 className={`card-title ${h2Class}`}>{heading}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
