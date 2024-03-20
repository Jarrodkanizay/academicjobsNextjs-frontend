import SimpleCard from './SignUpType';

const page = () => {
  return (
    <section className="flex items-center justify-center gap-16">
      <SimpleCard />
      <SimpleCard
        title="Employers & Recruiters"
        description={`I'm looking for talent.`}
        src="/sign-up/employers-recruiters.png"
        btnText="Post a Job"
        btnLink="/post-a-job"
        btnSecondaryText="Source Talent"
        btnSecondaryLink="/academic-talent-pool"
      />
    </section>
  );
};

export default page;
