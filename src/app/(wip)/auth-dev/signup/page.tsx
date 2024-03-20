import SignUpForm from './SignUpForm';

const page = () => {
  return (
    <main className="content-grid mt-16">
      <h1 className="text-center">Find your best</h1>
      <h2 className="text-center mb-12 text-slate-600">
        Exclusive access to the best communities,
        <br />
        opportunities and prospects in one spot.
      </h2>
      <section className="grid grid-cols-2">
        <SignUpForm />
        <div>Test</div>
      </section>
    </main>
  );
};

export default page;
