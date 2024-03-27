// import Link from 'next/link';
// import SignInForm from './SignInForm';

import Link from 'next/link';
import SignInForm from './SignInForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Academic Jobs Sign In', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Sign In to Academic Jobs with your existing account to easily browse and save our current job vacancies, or Sign in as an recruiter to purcahse and post your jobs. ',
  keywords: 'Academic Jobs Sign Up',
};

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
    <div className="w-full">
      <SignInForm callbackUrl={searchParams.callbackUrl} />
    </div>
  );
};

export default page;
