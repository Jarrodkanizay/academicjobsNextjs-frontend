import SimpleCard from './SignUpType';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    absolute: 'Academic Jobs Sign Up',
  },
  description:
    'Sign up with Academic Jobs to easily browse and save our current job vacancies, or Sign up as an recruiter to purcahse and post your jobs. ',
  keywords: 'Academic Jobs Sign Up',
};

const page = () => {
  return (
    <section className="flex items-center justify-center bg-slate-100 p-10">
      <div className="flex flex-col md:gap-16 gap-8 md:flex-row">
        <SimpleCard btnText="Sign up as job seeker" />
        <SimpleCard
          title="Employers & Recruiters"
          description={`I'm looking for talent.`}
          src="/sign-up/employers-recruiters.png"
          btnText="Sign up as an employer"
          btnLink="https://www.iloveacademicjobs.com/aj-signup"
          target="_blank"
        />
      </div>
    </section>
  );
};

export default page;
