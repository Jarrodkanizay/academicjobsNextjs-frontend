import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'this is the job elephant post a job form', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'To alter pricing, select a different area. All prices are shown in USD. The employer logo and ad success indicators are included in the live ads, which run for up to 60 days.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};

const PostJobPage = () => {
  return <JobPostForm partner="JobElephant" region="JobElephant" />;
};
export default PostJobPage;
