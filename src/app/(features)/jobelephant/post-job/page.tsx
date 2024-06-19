import JobPostJobElephantForm from '@/components/JobPostJobElephantForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  // title: 'Jobelephant post a job form', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'Jobelephant custom post job form.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Choose an other location to change the price. In USD, all prices are displayed. The live advertisements have the employer logo and ad success indicators, and they can run for a maximum of sixty days.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};

const PostJobPage = () => {
  return <JobPostJobElephantForm partner="JobElephant" region="JobElephant" />;
};
export default PostJobPage;
