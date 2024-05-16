import Image from 'next/image';

type SignUpTypeProps = {
  title?: string;
  description?: string;
  src?: string;
  btnText?: string;
  btnLink?: string;
  btnSecondaryText?: string;
  btnSecondaryLink?: string;
  target?: string;
};

const SimpleCard = ({
  title = 'Academics & Professionals',
  description = `I'm interested in an academic job.`,
  src = '/sign-up/academic-professionals.png',
  btnText = 'Create a free profile',
  btnLink = '/auth/signup',
  btnSecondaryText = '',
  btnSecondaryLink = '',
  target = '_self',
}) => {
  return (
    <div className="card max-w-96 bg-white shadow-xl">
      <div className="card-body items-center text-center">
        <h2>{title}</h2>
        <figure className="px-10 pt-10">
          <Image
            width={150}
            height={150}
            src={src}
            alt={title}
            className="rounded-xl mb-8"
          />
        </figure>
        <h4 className="md:block hidden">{description}</h4>
        <div className="card-actions flex gap-4">
          {btnSecondaryText !== '' ? (
            <a className="btn btn-outline rounded-full" href={btnSecondaryLink}>
              {btnSecondaryText}
            </a>
          ) : null}
          <a className="btn btn-aj" href={btnLink} target={target}>
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
