import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'this is the job elephant post a job form', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};

const PostJobPage = () => {
  return <JobPostForm partner="JobElephant" region="JobElephant" />;
};
export default PostJobPage;
