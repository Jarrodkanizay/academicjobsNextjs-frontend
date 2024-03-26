import SimpleCard from './SignUpType';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Academic Jobs Sign Up', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Sign up with Academic Jobs to easily browse and save our current job vacancies, or Sign up as an recruiter to purcahse and post your jobs. ',
  keywords: 'Academic Jobs Sign Up',
};

const page = () => {
  return (
    <section className="flex items-center justify-center gap-16 bg-slate-100 p-10">
      <SimpleCard btnText="Sign up as job seeker" />
      <SimpleCard
        title="Employers & Recruiters"
        description={`I'm looking for talent.`}
        src="/sign-up/employers-recruiters.png"
        btnText="Sign up as an employer"
        // btnLink="https://www.iloveacademicjobs.com/signup"
        btnLink="https://www.iloveacademicjobs.com/aj-signup"
        target="_blank"
        // btnSecondaryText="Source Talent"
        // btnSecondaryLink="/academic-talent-pool"
      />
    </section>
  );
};

export default page;
