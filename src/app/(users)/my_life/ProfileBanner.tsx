import WaveBackground from '@/components/WaveBackground';
import Image from 'next/image';

type SignUpTypeProps = {
  firstName: string;
  title?: string;
  description?: string;
  src?: string;
  btnText?: string;
  btnLink?: string;
  btnSecondaryText?: string;
  btnSecondaryLink?: string;
};

const SimpleCard = ({
  firstName = 'Jane',
  title = 'Academics Professionals',
  description = `I'm interested in an academic job.`,
  src = '/sign-up/academic-professionals.png',
  btnText = 'Create a free profile',
  btnLink = '/auth-dev/signup',
  btnSecondaryText = '',
  btnSecondaryLink = '',
}) => {
  return (
    <>
      <section className="custom-background full-width mb-16">
        <div className="container pt-0 pb-10 min-h-[380px]">
          <h1 className="text-center">My Life, My Profile</h1>
          <div className="flex gap-8">
            <div className="avatar">
              <div className="w-40 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
        <WaveBackground />
      </section>
      <section title="dashboard" className=" mt-[-96px]">
        <h2 className="profile">Hi {firstName}</h2>
      </section>
    </>
  );
};

export default SimpleCard;
