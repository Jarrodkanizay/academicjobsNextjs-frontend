import SimpleCard from './SignUpType';

const page = () => {
  return (
    <section className="flex items-center justify-center gap-16 bg-slate-100 p-10">
      <SimpleCard btnText="Sign up as job seeker" />
      <SimpleCard
        title="Employers & Recruiters"
        description={`I'm looking for talent.`}
        src="/sign-up/employers-recruiters.png"
        btnText="Sign up as an employer"
        btnLink="/post-a-job"
        // btnSecondaryText="Source Talent"
        // btnSecondaryLink="/academic-talent-pool"
      />
    </section>
  );
};

export default page;
