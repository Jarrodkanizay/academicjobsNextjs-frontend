import { GetServerSideProps } from 'next';

export default function PostJob() {
  // This component will never be rendered
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/job-ads', // the url you want to redirect to
      permanent: true, // 301 redirect
    },
  };
};
