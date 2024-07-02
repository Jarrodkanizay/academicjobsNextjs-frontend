import Link from 'next/link';
import Image from 'next/image';

type Props = {
  heading: string;
};

// const encodedString = encodeURIComponent(originalString);

const TopUnis = ({ heading }: Props) => {
  return (
    <>
      <div className="card card-side shadow-xl mb-16">
        <figure>
          <Image
            src={
              'https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs university of auckland logo.png'
            }
            width={200}
            height={200}
            alt={'University of Auckland'}
            className="p-10"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

      <h2 id="section" className="underline-full">
        {heading}
      </h2>
      <div className="gap-4">
        <h3 className="mb-4">North Island</h3>
        <div className="text-center grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-8">
          <Link href="/employers/the-university-of-auckland/3809/">
            <div>
              <img
                className="w-32 h-32 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs university of auckland logo.png"
                alt="The University of Auckland"
              />
            </div>
          </Link>

          <Link href="/employers/victoria-university-of-wellington/3807/">
            <div>
              <img
                className="w-33 h-32 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs victoria university of wellington logo.png"
                alt="Victoria University of Wellington"
              />
            </div>
          </Link>

          <Link href="/employers/waikato-university/3806/">
            <div>
              <img
                className="w-34 h-31 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs University of Waikato logo.jpeg"
                alt="Waikato University"
              />
            </div>
          </Link>

          <Link href="/employers/auckland-university-of-technology/3804/">
            <div>
              <img
                className="w-30 h-28 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/academic jobs Auckland University of Technology AUT logo.png"
                alt="Auckland University of Technology (AUT)"
              />
            </div>
          </Link>
        </div>
        <h3 className="mb-4">South Island</h3>

        <div className="text-center grid grid-cols-2 gap-y-8 md:grid-cols-4">
          <Link href="/employers/university-of-otago/3805/">
            <div>
              <img
                className="w-33 h-32 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/uni-of-otago.png"
                alt="University of Otago"
              />
            </div>
          </Link>

          <Link href="/employers/lincoln-university/3808/">
            <div>
              <img
                className="w-32 h-32 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/academicjob lincoln university.jfif"
                alt="Lincoln University"
              />
            </div>
          </Link>

          <Link href="/employers/massey-university/3810/">
            <div>
              <img
                className="w-32 h-32 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/Academic Jobs Massey University.png"
                alt="Massey University"
              />
            </div>
          </Link>

          <Link href="/employers/university-of-canterbury/3811/">
            <div>
              <img
                className="w-32 h-30 mx-auto"
                src="https://academicjobs.s3.amazonaws.com/img/university-logo/academic job university of canterbury logo.jfif"
                alt="University of Canterbury"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopUnis;
