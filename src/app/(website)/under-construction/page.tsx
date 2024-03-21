import Image from 'next/image';

export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="prose bg-slate-200 rounded-3xl mt-12">
          <h2 className="underline-full mt-16">
            We are doing some maintenance.
          </h2>
          <p>This feature will be back on line soon!</p>
          <Image
            src={'/under-construction-sign.png'}
            alt="Under construction"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </main>
    </>
  );
}
