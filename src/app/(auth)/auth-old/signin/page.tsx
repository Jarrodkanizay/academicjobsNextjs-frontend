// import Link from 'next/link';
// import SignInForm from './SignInForm';

import Link from 'next/link';
import SignInForm from './SignInForm';

// interface Props {
//   searchParams: {
//     callbackUrl?: string;
//   };
// }

// const SigninPage = ({ searchParams }: Props) => {
//   console.log({ searchParams });

//   return (
//     <div className="flex items-center justify-center flex-col ">
//       <SignInForm callbackUrl={searchParams.callbackUrl} />
//       <Link href={'/auth/forgotPassword'}>Forgot Your Password?</Link>
//     </div>
//   );
// };

// export default SigninPage;
interface Props {
  searchParams: {
    callbackUrl?: string;
  };
}

const page = ({ searchParams }: Props) => {
  console.log({ searchParams });
  return (
    // Rotating text
    <div className="w-full">
      <div className="full-width md:h-[120px] h-[120px] gradient-aj">
        <section className="wrapper md:flex">
          <h2 className="sentence ">
            <span className="mr-8">Find</span>{' '}
            <span className="md:hidden block">
              <br />
            </span>
            <div className="slidingVertical ">
              <span>Opportunity</span>
              <span>Connections</span>
              <span>Happiness</span>
              <span>Opportunity</span>
              <span>Connections</span>
            </div>
          </h2>
        </section>
      </div>
      <SignInForm callbackUrl={searchParams.callbackUrl} />
    </div>
  );
};

export default page;
