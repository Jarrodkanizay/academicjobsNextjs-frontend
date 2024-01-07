import Image from 'next/image';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute:
      '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
  keywords:
    'Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs',
};

export default function myPage() {
  return (
    <main className="">
      <div className="h-[100vh]">
        <div className="flex flex-col items-center justify-center mb-32">
          <div className="h-[27vh] flex flex-col items-end justify-end">
            {/* <LogoAJ className="logo" width={290} height={200} /> */}
            {/* <Image
            src="/academicJobsLogo.png"
            alt="AcademicJobs Logo"
            width={1280}
            height={380}
            className="logo pl-4 w-[20rem] mb-[1rem]"
          /> */}
            <svg
              className="logo"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={250}
              height={160}
              viewBox="0 0 424.2 144.5"
              // style="enable-background:new 0 0 424.2 144.5;"
              // xml:space="preserve"
            >
              <g>
                <circle
                  className="logo-circle-fill "
                  cx="352"
                  cy="72.3"
                  r="72.3"
                />
                <g>
                  <path
                    d="M30.1,81.7h0.4c1.2,0,1.7-0.5,1.7-1.6c0-0.4-0.1-0.8-0.2-1.2l-6.6-17.7H12.7L6.3,78.5c-0.1,0.4-0.2,0.8-0.2,1.1
          c0,0.6,0.2,1.1,0.5,1.5c0.3,0.4,0.7,0.5,1.1,0.5h0.4v0.7H0v-0.7h0.4c0.6,0,1.2-0.4,1.9-1.1c0.6-0.8,1.1-1.6,1.5-2.7l16.7-44.4
          l16.3,44c0.3,1,0.8,1.9,1.4,2.8c0.6,0.9,1.4,1.4,2.4,1.4h0.4v0.7H30.1V81.7z M13.4,58.7h11.2L19,43.4L13.4,58.7z"
                  />
                  <path
                    d="M72.1,79.8c-0.4,0-0.8,0.1-1.1,0.3c-0.3,0.2-0.7,0.4-1.2,0.6c-0.8,0.5-1.9,1-3.1,1.5c-1.3,0.5-2.9,0.8-5,0.8
          c-2.5,0-4.8-0.4-6.9-1.2c-2.1-0.8-3.9-1.9-5.5-3.4s-2.7-3.1-3.6-5c-0.9-1.9-1.3-4-1.3-6.2c0-2.1,0.4-4.1,1.1-6
          c0.8-1.9,1.8-3.6,3.2-5c1.4-1.5,3.1-2.6,5.2-3.5c2.1-0.9,4.4-1.3,7-1.3c1.8,0,3.3,0.2,4.4,0.6c1.1,0.4,2.1,0.8,2.8,1.2
          c0.4,0.2,0.9,0.4,1.3,0.6c0.4,0.1,0.8,0.2,1.3,0.2v5.5h-0.7c-0.2-0.9-0.7-1.7-1.3-2.4c-0.6-0.7-1.4-1.3-2.2-1.8
          c-0.8-0.5-1.7-0.8-2.7-1.1c-1-0.2-1.9-0.4-2.8-0.4c-2,0-3.7,0.4-5.2,1.1c-1.5,0.7-2.7,1.6-3.7,2.8c-1,1.1-1.7,2.4-2.2,3.9
          c-0.5,1.5-0.7,3-0.7,4.5c0,1.8,0.3,3.6,0.9,5.3c0.6,1.7,1.4,3.3,2.5,4.6c1.1,1.4,2.4,2.5,4,3.3c1.6,0.8,3.3,1.2,5.2,1.2
          c1.4,0,2.6-0.2,3.8-0.6c1.1-0.4,2.1-0.9,2.9-1.5c0.8-0.6,1.4-1.3,1.9-2.1c0.5-0.8,0.8-1.5,0.9-2.1h0.7V79.8z"
                  />
                  <path
                    d="M96.2,82.4v-3.7l-0.4,0.4c-1.2,1.2-2.6,2.2-4.2,2.8c-1.6,0.7-3.5,1-5.7,1c-1.7,0-3.2-0.2-4.4-0.6c-1.2-0.4-2.2-0.9-3-1.6
          c-0.8-0.7-1.3-1.5-1.7-2.4c-0.4-0.9-0.5-1.9-0.5-2.9c0-1.7,0.4-3.1,1.3-4.4c0.9-1.3,2.2-2.4,3.9-3.4c1.7-1,3.8-1.9,6.2-2.7
          c2.5-0.8,5.3-1.6,8.4-2.4c-0.1-1.9-0.5-3.4-1.2-4.6c-0.7-1.2-1.5-2.1-2.4-2.7c-0.9-0.7-1.9-1.1-2.9-1.3c-1-0.2-1.9-0.3-2.6-0.3
          c-1.3,0-2.4,0.2-3.3,0.6c-0.9,0.4-1.8,0.9-2.5,1.5c-0.7,0.6-1.3,1.3-1.8,2c-0.5,0.7-0.9,1.4-1.2,2h-0.7v-5.3
          c0.4,0,0.8-0.2,1.1-0.4c0.3-0.2,0.8-0.4,1.2-0.6c0.7-0.3,1.7-0.7,3-1.3c1.3-0.6,3-0.8,5.3-0.8c2.7,0,4.8,0.3,6.5,1
          c1.7,0.7,2.9,1.6,3.8,2.7c0.9,1.1,1.5,2.4,1.8,3.8c0.3,1.4,0.4,2.9,0.4,4.4v14.4c0,1,0.2,1.9,0.7,2.7s1,1.3,1.7,1.3v0.7H96.2z
           M96.2,75.5V65.1l-0.7,0.1c-1.2,0.3-2.6,0.7-4.3,1.2c-1.7,0.5-3.3,1.1-4.8,1.9C85,69,83.7,70,82.6,71c-1.1,1.1-1.6,2.3-1.6,3.7
          c0,1.6,0.6,2.8,1.9,3.9c1.3,1,2.9,1.5,5,1.5c1.6,0,3-0.4,4.2-1.1c1.2-0.7,2.3-1.6,3.4-2.7L96.2,75.5z"
                  />
                  <path
                    d="M133.5,82.4v-3.2c-0.8,0.9-1.9,1.8-3.3,2.5s-3.1,1.2-5.2,1.2c-2.6,0-4.8-0.4-6.7-1.3c-1.9-0.9-3.5-2.1-4.8-3.5
          c-1.3-1.5-2.2-3.1-2.8-5c-0.6-1.9-0.9-3.8-0.9-5.8c0-1.9,0.3-3.9,0.9-5.8c0.6-1.9,1.6-3.6,2.8-5.1c1.3-1.5,2.8-2.7,4.7-3.6
          c1.9-0.9,4.1-1.4,6.6-1.4c1.7,0,3.3,0.3,4.9,0.9c1.6,0.6,2.9,1.4,3.8,2.4V40.4c0-0.8-0.1-1.6-0.4-2.3c-0.2-0.7-0.9-1.1-2.1-1.2
          v-0.7l7.3-2.3v43.8c0,0.4,0,0.8,0.1,1.3c0.1,0.5,0.2,0.9,0.4,1.3c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.6,0.4,1,0.4v0.7H133.5z
           M125.4,80.5c1,0,2-0.2,3-0.6c1-0.4,1.8-1,2.5-1.7s1.3-1.5,1.8-2.5c0.5-0.9,0.7-2,0.7-3.1v-10c0-1.4-0.3-2.6-0.9-3.7
          s-1.3-2-2.2-2.8c-0.9-0.8-1.8-1.4-2.9-1.8c-1-0.4-2.1-0.6-3-0.6c-1.6,0-3,0.4-4.3,1.1c-1.3,0.8-2.3,1.7-3.2,2.9
          c-0.9,1.2-1.5,2.5-2,4c-0.4,1.5-0.7,3-0.7,4.4c0,1.7,0.2,3.4,0.7,5.1c0.5,1.7,1.2,3.2,2.1,4.5c0.9,1.3,2.1,2.4,3.5,3.3
          C122.1,80,123.6,80.5,125.4,80.5z"
                  />
                  <path
                    d="M151.7,67.7c0.2,1.7,0.6,3.3,1.2,4.8c0.6,1.5,1.5,2.9,2.5,4c1,1.2,2.3,2.1,3.8,2.8c1.5,0.7,3.3,1.1,5.2,1.1
          c1.1,0,2.2-0.2,3.4-0.5c1.2-0.3,2.3-0.8,3.3-1.3c1-0.6,1.9-1.3,2.7-2.1c0.8-0.8,1.3-1.8,1.6-2.9h0.7v5.5c-0.3,0-0.6,0.1-1,0.3
          c-0.4,0.2-0.8,0.4-1.3,0.7c-1,0.6-2.3,1.2-3.9,1.9c-1.7,0.7-3.8,1-6.6,1c-2.2,0-4.3-0.3-6.2-0.9c-2-0.6-3.7-1.6-5.2-2.9
          c-1.5-1.3-2.7-3-3.6-5c-0.9-2-1.3-4.5-1.3-7.3c0-1.8,0.3-3.6,0.9-5.5c0.6-1.8,1.5-3.5,2.8-5c1.2-1.5,2.8-2.7,4.8-3.6
          c1.9-0.9,4.3-1.4,7-1.4c2.4,0,4.6,0.4,6.4,1.2c1.8,0.8,3.3,2,4.5,3.4c1.2,1.5,2.1,3.2,2.7,5.2c0.6,2,0.9,4.2,0.9,6.6H151.7z
           M162.2,53.7c-1.7,0-3.2,0.3-4.4,1c-1.2,0.7-2.3,1.6-3.2,2.6c-0.9,1.1-1.6,2.3-2,3.6c-0.5,1.4-0.8,2.7-0.9,4.1h20.8
          c0-1.4-0.3-2.8-0.8-4.2c-0.5-1.4-1.1-2.6-1.9-3.6c-0.8-1.1-1.9-1.9-3.1-2.6C165.3,54,163.9,53.7,162.2,53.7z"
                  />
                  <path
                    d="M229.6,77.7c0,0.4,0,0.8,0.1,1.3c0.1,0.5,0.2,0.9,0.4,1.3c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.6,0.4,1,0.4v0.7h-9.5v-0.7
          c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.4-0.8,0.5-1.3c0.1-0.5,0.1-0.9,0.1-1.3V61.9c0-1.1-0.2-2.2-0.5-3.2
          c-0.3-1-0.8-1.9-1.4-2.7c-0.6-0.8-1.4-1.4-2.3-1.8c-0.9-0.5-2-0.7-3.1-0.7c-1.3,0-2.4,0.3-3.4,0.9c-0.9,0.6-1.7,1.3-2.3,2.2
          c-0.6,0.9-1.1,1.8-1.3,2.7c-0.3,0.9-0.4,1.6-0.4,2.2v16.1c0,0.4,0,0.8,0.1,1.3c0.1,0.5,0.3,0.9,0.5,1.3c0.2,0.4,0.5,0.7,0.7,1
          c0.3,0.3,0.6,0.4,1,0.4v0.7h-9.4v-0.7c0.3,0,0.7-0.1,0.9-0.4c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.4-0.8,0.5-1.3
          c0.1-0.5,0.1-0.9,0.1-1.3V61.5c0-1.2-0.2-2.2-0.6-3.2c-0.4-1-1-1.8-1.7-2.5c-0.7-0.7-1.5-1.2-2.4-1.6c-0.9-0.4-1.8-0.6-2.7-0.6
          c-1.3,0-2.4,0.2-3.3,0.7c-0.9,0.5-1.7,1.1-2.3,1.8c-0.6,0.7-1.1,1.5-1.4,2.4c-0.3,0.9-0.5,1.7-0.5,2.4v16.8c0,0.4,0,0.8,0.1,1.3
          c0.1,0.5,0.3,0.9,0.5,1.3c0.2,0.4,0.5,0.7,0.7,1c0.3,0.3,0.6,0.4,1,0.4v0.7h-9.4v-0.7c0.3,0,0.7-0.1,0.9-0.4
          c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.4-0.8,0.5-1.3c0.1-0.5,0.1-0.9,0.1-1.3V58.2c0-0.4,0-0.8-0.1-1.3c0-0.5-0.1-0.9-0.3-1.4
          c-0.1-0.4-0.4-0.8-0.7-1.1c-0.3-0.3-0.8-0.4-1.4-0.4v-0.7l7.2-2.4v3.7c0.7-0.8,1.7-1.6,3-2.4c1.3-0.8,3-1.2,5.1-1.2
          c1.4,0,2.6,0.2,3.6,0.6c1.1,0.4,2,0.9,2.8,1.5c0.8,0.6,1.5,1.3,2.1,2.1c0.6,0.8,1.1,1.5,1.5,2.3c0.4-0.7,0.8-1.5,1.4-2.2
          c0.5-0.8,1.2-1.4,1.9-2.1c0.8-0.6,1.7-1.1,2.7-1.5c1-0.4,2.3-0.6,3.7-0.6c2.7,0,4.9,0.5,6.4,1.5c1.6,1,2.7,2.1,3.5,3.5
          c0.8,1.4,1.2,2.8,1.4,4.3c0.2,1.5,0.3,2.7,0.3,3.8V77.7z"
                  />
                  <path
                    d="M240.3,82.4v-0.7c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.5-0.6,0.7-1c0.2-0.4,0.3-0.8,0.4-1.3c0.1-0.5,0.1-0.9,0.1-1.3V57.5
          c0-0.8-0.1-1.6-0.4-2.4c-0.2-0.8-0.9-1.2-2.1-1.2v-0.7l7.3-2.3v26.7c0,0.4,0,0.8,0.1,1.3c0.1,0.5,0.2,0.9,0.4,1.3
          c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.6,0.4,1,0.4v0.7H240.3z M240.7,43.9c0-1,0.3-1.8,1-2.5c0.7-0.7,1.5-1,2.4-1c1,0,1.8,0.3,2.5,1
          c0.7,0.7,1,1.5,1,2.5c0,1-0.3,1.8-1,2.4c-0.7,0.6-1.5,0.9-2.5,0.9c-1,0-1.8-0.3-2.4-0.9C241,45.7,240.7,44.9,240.7,43.9z"
                  />
                  <path
                    d="M284.5,79.8c-0.4,0-0.8,0.1-1.1,0.3s-0.7,0.4-1.2,0.6c-0.8,0.5-1.9,1-3.1,1.5c-1.3,0.5-2.9,0.8-5,0.8
          c-2.5,0-4.8-0.4-6.9-1.2c-2.1-0.8-3.9-1.9-5.5-3.4c-1.5-1.4-2.7-3.1-3.6-5c-0.9-1.9-1.3-4-1.3-6.2c0-2.1,0.4-4.1,1.1-6
          c0.8-1.9,1.8-3.6,3.2-5c1.4-1.5,3.1-2.6,5.2-3.5c2.1-0.9,4.4-1.3,7-1.3c1.8,0,3.3,0.2,4.4,0.6c1.1,0.4,2.1,0.8,2.8,1.2
          c0.4,0.2,0.9,0.4,1.3,0.6c0.4,0.1,0.8,0.2,1.3,0.2v5.5h-0.7c-0.2-0.9-0.7-1.7-1.3-2.4c-0.6-0.7-1.4-1.3-2.2-1.8
          c-0.8-0.5-1.7-0.8-2.7-1.1c-1-0.2-1.9-0.4-2.8-0.4c-2,0-3.7,0.4-5.2,1.1c-1.5,0.7-2.7,1.6-3.7,2.8c-1,1.1-1.7,2.4-2.2,3.9
          c-0.5,1.5-0.7,3-0.7,4.5c0,1.8,0.3,3.6,0.9,5.3s1.4,3.3,2.5,4.6c1.1,1.4,2.4,2.5,4,3.3c1.6,0.8,3.3,1.2,5.2,1.2
          c1.4,0,2.6-0.2,3.8-0.6c1.1-0.4,2.1-0.9,2.9-1.5c0.8-0.6,1.4-1.3,1.9-2.1c0.5-0.8,0.8-1.5,0.9-2.1h0.7V79.8z"
                  />
                  <path
                    d="M291.5,34.3H302V35h-0.4c-0.4,0-0.7,0.1-1,0.4c-0.3,0.3-0.5,0.6-0.8,1c-0.2,0.4-0.4,0.8-0.5,1.3c-0.1,0.4-0.2,0.8-0.2,1.2
          v40.6c0,1.6-0.2,3-0.6,4.3c-0.4,1.3-0.9,2.5-1.6,3.7c-0.7,1.1-1.4,2.2-2.2,3.1c-0.8,0.9-1.6,1.8-2.5,2.6c-2,1.8-4.3,3.3-6.8,4.5
          l-0.4-0.6c1.7-1.2,3.2-2.6,4.5-4.3c1.1-1.4,2.2-3.1,3.1-5.2c1-2,1.5-4.4,1.5-7.1V38.9c0-0.3,0-0.7-0.1-1.2
          c-0.1-0.4-0.3-0.9-0.5-1.3c-0.2-0.4-0.5-0.8-0.8-1c-0.3-0.3-0.6-0.4-0.9-0.4h-0.4V34.3z"
                  />
                  <path
                    d="M319.7,82.9c-2.4,0-4.6-0.4-6.6-1.2c-1.9-0.8-3.6-1.9-5-3.3c-1.4-1.4-2.5-3-3.2-4.9c-0.8-1.9-1.1-4-1.1-6.2
          c0-2.4,0.4-4.6,1.2-6.5c0.8-2,2-3.7,3.4-5.1c1.5-1.4,3.2-2.5,5.2-3.3c2-0.8,4.2-1.2,6.5-1.2c2.3,0,4.5,0.4,6.4,1.1
          c1.9,0.8,3.6,1.8,5,3.2c1.4,1.4,2.5,3,3.3,4.8c0.8,1.9,1.2,3.9,1.2,6.2c0,2.1-0.4,4.1-1.1,6.1c-0.7,2-1.7,3.7-3.1,5.2
          c-1.4,1.5-3.1,2.7-5.1,3.6C324.8,82.5,322.4,82.9,319.7,82.9z M319.3,53.7c-1.7,0.1-3.3,0.5-4.6,1.3c-1.3,0.8-2.4,1.7-3.3,2.9
          c-0.9,1.2-1.6,2.5-2,4c-0.5,1.5-0.7,3-0.7,4.6c0,1.8,0.3,3.5,0.8,5.2s1.4,3.2,2.4,4.5s2.3,2.4,3.7,3.1c1.5,0.8,3.1,1.2,4.9,1.2
          s3.4-0.4,4.8-1.2c1.4-0.8,2.5-1.8,3.5-3c0.9-1.2,1.6-2.6,2.1-4.2c0.5-1.6,0.7-3.1,0.7-4.7c0-1.6-0.2-3.2-0.7-4.8
          c-0.5-1.6-1.2-3.1-2.3-4.4c-1-1.3-2.3-2.4-3.8-3.2C323.1,54.1,321.3,53.7,319.3,53.7z"
                  />
                  <path
                    d="M358.1,51.3c2.6,0,4.9,0.4,6.8,1.3c1.9,0.9,3.5,2,4.8,3.5c1.3,1.5,2.2,3.1,2.8,5c0.6,1.9,0.9,3.8,0.9,5.7
          c0,2-0.3,3.9-0.9,5.9c-0.6,1.9-1.6,3.6-2.9,5.2c-1.3,1.5-2.9,2.8-4.8,3.7c-1.9,0.9-4.1,1.4-6.6,1.4c-1.8,0-3.5-0.4-5-1.1
          c-1.5-0.8-2.7-1.7-3.6-2.7v3.4h-7.1v-0.7c0.3,0,0.7-0.1,0.9-0.4c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.4-0.8,0.5-1.3
          c0.1-0.5,0.1-0.9,0.1-1.3V40.5c0-0.8-0.1-1.6-0.4-2.3c-0.2-0.7-0.9-1.1-2.1-1.2v-0.7l7.3-2.3v20.8c1.1-1.1,2.4-2,4-2.6
          C355.3,51.6,356.7,51.3,358.1,51.3z M358.9,80.4c1.7-0.1,3.3-0.5,4.5-1.3c1.3-0.8,2.3-1.7,3.2-2.9c0.8-1.2,1.5-2.5,1.9-4
          c0.4-1.5,0.6-3,0.6-4.6c0-1.7-0.2-3.4-0.7-5.1c-0.5-1.7-1.2-3.1-2.1-4.4c-0.9-1.3-2.1-2.4-3.5-3.2c-1.4-0.8-3-1.2-4.8-1.2
          c-1,0-2,0.2-3,0.7c-1,0.5-1.8,1.1-2.6,1.8c-0.8,0.8-1.4,1.7-1.8,2.7c-0.5,1-0.7,2.1-0.7,3.3v9c0,1.4,0.3,2.7,0.8,3.8
          c0.5,1.1,1.2,2.1,2.1,2.8c0.9,0.8,1.9,1.4,3,1.8C356.7,80.2,357.8,80.4,358.9,80.4z"
                  />
                  <path
                    d="M403.7,74.1c0,1.3-0.3,2.4-0.9,3.5c-0.6,1.1-1.5,2-2.6,2.8c-1.1,0.8-2.4,1.4-3.8,1.9s-3,0.7-4.7,0.7
          c-2.1,0-3.8-0.3-5.1-0.8c-1.3-0.6-2.4-1.1-3.4-1.7c-0.6-0.4-1.2-0.7-1.7-1c-0.5-0.3-1.1-0.4-1.7-0.4v-5.5h0.7
          c0.1,0.7,0.6,1.4,1.3,2.2c0.7,0.8,1.6,1.5,2.5,2.2c1,0.7,2.1,1.3,3.3,1.7s2.4,0.7,3.6,0.7c0.9,0,1.8-0.1,2.7-0.3
          c0.9-0.2,1.8-0.5,2.5-0.9c0.8-0.4,1.4-1,1.9-1.6c0.5-0.7,0.8-1.4,0.8-2.4c0-0.9-0.3-1.7-0.8-2.4c-0.5-0.7-1.2-1.3-2-1.8
          c-0.8-0.5-1.8-1-2.8-1.3c-1.1-0.4-2.1-0.8-3.2-1.1c-1.3-0.4-2.5-0.8-3.8-1.3c-1.3-0.5-2.4-1.1-3.5-1.7c-1-0.7-1.8-1.5-2.5-2.4
          c-0.6-0.9-0.9-2.1-0.9-3.4c0-1.1,0.2-2.2,0.6-3.2c0.4-1,1.1-1.9,2-2.7c0.9-0.8,2.2-1.4,3.7-1.8c1.5-0.5,3.3-0.7,5.5-0.7
          c1.9,0,3.4,0.2,4.4,0.5c1,0.3,1.9,0.6,2.6,1c0.4,0.2,0.9,0.4,1.3,0.5c0.4,0.1,0.9,0.2,1.5,0.2v5.1h-0.6c-0.9-1.6-2.2-2.8-4-3.6
          c-1.8-0.8-3.6-1.2-5.5-1.2c-1.2,0-2.3,0.2-3.1,0.5c-0.9,0.3-1.6,0.7-2.1,1.2c-0.6,0.5-1,1-1.2,1.6c-0.3,0.6-0.4,1.2-0.4,1.7
          c0,0.8,0.2,1.5,0.7,2.1c0.5,0.6,1.1,1.1,1.9,1.5s1.7,0.9,2.7,1.2c1,0.4,2.1,0.8,3.2,1.1c1.4,0.4,2.7,0.9,4.1,1.4
          c1.4,0.5,2.6,1.1,3.6,1.9c1.1,0.7,1.9,1.6,2.6,2.6C403.3,71.5,403.7,72.7,403.7,74.1z"
                  />
                </g>
                <path
                  d="M28.7,108.9c-1.2,0-2.4-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.7-1.3v-1.3c0.6,0.5,1.5,1,2.6,1.4c1.1,0.4,2.3,0.6,3.5,0.6
        c1.5,0,2.7-0.3,3.6-1c1-0.6,1.4-1.5,1.4-2.6c0-0.9-0.3-1.6-1-2.2c-0.3-0.3-0.7-0.5-1.2-0.7c-0.4-0.2-0.9-0.4-1.4-0.5
        c-0.2-0.1-0.8-0.2-1.6-0.4l-1.8-0.5c-0.6-0.2-1.1-0.4-1.5-0.6c-0.8-0.4-1.3-0.8-1.7-1.3c-0.3-0.5-0.5-1.2-0.6-2.1
        c0-1.2,0.5-2.1,1.5-2.9c1-0.8,2.4-1.2,4.2-1.2c2,0,3.7,0.5,5.2,1.4v1.2c-1.5-1-3.3-1.5-5.1-1.5c-1.5,0-2.6,0.3-3.4,0.9
        c-0.8,0.6-1.2,1.3-1.2,2.2c-0.1,0.8,0.4,1.6,1.4,2.3c0.2,0.1,0.5,0.3,1,0.4c0.5,0.2,0.8,0.3,1.1,0.4l1.2,0.3l0.5,0.1l1.7,0.5
        c0.4,0.1,0.9,0.3,1.5,0.6c0.6,0.3,1,0.5,1.3,0.8c0.8,0.8,1.2,1.7,1.2,2.8c0,1.4-0.6,2.6-1.8,3.4C31.9,108.5,30.4,108.9,28.7,108.9z
        "
                />
                <path d="M51.2,108.6H50V92.1h1.1V108.6z" />
                <path d="M68.3,108.6h-1.1V92.1h1.2l6.7,15.4l6.7-15.4h1.1v16.5h-1.1V93.8l-6.3,14.9h-0.7l-6.3-14.9V108.6z" />
                <path
                  d="M99.8,108.6h-1.1V92.1h7.1c1.6,0,2.9,0.4,3.9,1.2c0.9,0.8,1.4,1.9,1.4,3.2c0,1.4-0.5,2.4-1.4,3.2c-0.9,0.8-2.2,1.2-3.9,1.2
        h-6V108.6z M99.8,93.1v6.9h5.9c1.4,0,2.4-0.3,3.1-0.9c0.7-0.6,1.1-1.4,1.1-2.6c0-1.1-0.4-1.9-1.1-2.5c-0.7-0.6-1.8-0.9-3.1-0.9
        H99.8z"
                />
                <path d="M136.8,108.6h-11.1V92.1h1.1v15.5h10V108.6z" />
                <path d="M154.8,108.6h-1.1V101l-6.7-8.9h1.4l5.9,7.8l5.9-7.8h1.3l-6.7,8.9V108.6z" />
                <path d="M197.1,108.6H196V93.1h-6.1v-1h13.4v1h-6.1V108.6z" />
                <path d="M218.6,108.6h-1.1V92.1h1.1v7.1h11.2v-7.1h1.1v16.5h-1.1v-8.4h-11.2V108.6z" />
                <path
                  className="logo-text-color"
                  d="M255.2,108.7c-2.6,0-4.8-0.8-6.5-2.3c-1.7-1.6-2.6-3.6-2.6-6c0-2.4,0.8-4.4,2.3-6c1.5-1.6,3.5-2.4,5.9-2.4
        c1.4,0,2.6,0.3,3.6,0.8c1,0.5,1.8,1.2,2.4,2.1c1.1,1.7,1.6,3.4,1.6,5.2v0.5h-14.3c0,2,0.8,3.7,2.2,4.9c1.4,1.3,3.3,1.9,5.5,1.9
        c2,0,3.8-0.5,5.3-1.5v1.5C259.5,108.2,257.6,108.7,255.2,108.7z M247.8,99.2h12.7c0-0.6-0.1-1.3-0.3-1.9c-0.2-0.6-0.6-1.3-1-1.9
        s-1.1-1.1-1.9-1.5c-0.8-0.4-1.8-0.6-2.8-0.6c-1.9,0-3.5,0.6-4.7,1.8C248.5,96.3,247.9,97.7,247.8,99.2z"
                />
                <path
                  d="M334.5,108.7c-2.6,0-4.8-0.8-6.5-2.3c-1.7-1.6-2.6-3.6-2.6-6c0-2.4,0.8-4.4,2.3-6c1.5-1.6,3.5-2.4,5.9-2.4
        c1.4,0,2.6,0.3,3.6,0.8c1,0.5,1.8,1.2,2.4,2.1c1.1,1.7,1.6,3.4,1.6,5.2v0.5h-14.3c0,2,0.8,3.7,2.2,4.9c1.4,1.3,3.3,1.9,5.5,1.9
        c2,0,3.8-0.5,5.3-1.5v1.5C338.8,108.2,336.9,108.7,334.5,108.7z M327.1,99.2h12.7c0-0.6-0.1-1.3-0.3-1.9c-0.2-0.6-0.6-1.3-1-1.9
        c-0.5-0.6-1.1-1.1-1.9-1.5c-0.8-0.4-1.8-0.6-2.8-0.6c-1.9,0-3.5,0.6-4.7,1.8C327.8,96.3,327.2,97.7,327.1,99.2z"
                />
                <path
                  d="M307.2,108.6h-8V92.1h7.2c1.5,0,2.7,0.4,3.5,1.1c0.8,0.7,1.3,1.7,1.3,2.9c0,1.8-0.8,3-2.4,3.5c1.2,0.2,2.2,0.7,2.9,1.4
        c0.7,0.8,1,1.8,1,3c0,1.4-0.5,2.5-1.5,3.3C310.2,108.2,308.9,108.6,307.2,108.6z M300.3,93.1v6.2h5.9c1.2,0,2.2-0.3,2.8-0.8
        c0.7-0.5,1-1.3,1-2.3c0-1-0.3-1.8-1-2.3s-1.6-0.8-2.8-0.8H300.3z M300.3,100.3v7.3h6.7c1.4,0,2.5-0.3,3.3-1
        c0.8-0.6,1.2-1.5,1.2-2.7s-0.4-2.1-1.2-2.7c-0.8-0.6-1.9-1-3.3-1H300.3z"
                />
                <path
                  d="M358.7,108.9c-1.2,0-2.4-0.2-3.5-0.5c-1.1-0.3-2-0.8-2.7-1.3v-1.3c0.6,0.5,1.5,1,2.6,1.4c1.1,0.4,2.3,0.6,3.5,0.6
        c1.5,0,2.7-0.3,3.6-1c1-0.6,1.4-1.5,1.4-2.6c0-0.9-0.3-1.6-1-2.2c-0.3-0.3-0.7-0.5-1.2-0.7c-0.4-0.2-0.9-0.4-1.4-0.5
        c-0.2-0.1-0.8-0.2-1.6-0.4l-1.8-0.5c-0.6-0.2-1.1-0.4-1.5-0.6c-0.8-0.4-1.3-0.8-1.7-1.3c-0.3-0.5-0.5-1.2-0.6-2.1
        c0-1.2,0.5-2.1,1.5-2.9c1-0.8,2.4-1.2,4.2-1.2c2,0,3.7,0.5,5.2,1.4v1.2c-1.5-1-3.3-1.5-5.1-1.5c-1.5,0-2.6,0.3-3.4,0.9
        c-0.8,0.6-1.2,1.3-1.2,2.2c-0.1,0.8,0.4,1.6,1.4,2.3c0.2,0.1,0.5,0.3,1,0.4c0.5,0.2,0.8,0.3,1.1,0.4l1.2,0.3l0.5,0.1l1.7,0.5
        c0.4,0.1,0.9,0.3,1.5,0.6c0.6,0.3,1,0.5,1.3,0.8c0.8,0.8,1.2,1.7,1.2,2.8c0,1.4-0.6,2.6-1.8,3.4
        C361.9,108.5,360.4,108.9,358.7,108.9z"
                />
                <path d="M385,108.6h-1.1V93.1h-6.1v-1h13.4v1H385V108.6z" />
              </g>
            </svg>
          </div>

          {/* Job Search Form */}
          <div className="w-full md:w-3/6 h-[6vh] flex flex-col items-top mt-[-1rem]">
            <JobSearchBoxHome />
          </div>
        </div>

        <div className="mt-[3rem] ">
          <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 px-2">
            <li className="hover:underline">
              <Link href="/lecturer">Lecturer{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/research/">Research{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/professor/">Professor{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/executive/">Executive{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/faculty/">Faculty{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/admin/">Admin{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/hr-jobs/">HR{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/student/">Student{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/graduate/"> Graduate{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/postdoc/"> Postdoc{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/phd/">PhD</Link>
            </li>
          </ul>
        </div>

        {/* Employment Type Container */}
        <div className="mt-7">
          <ul className="faculty-container flex gap-4 items-center justify-center text-[#f4a10c] px-2">
            <li className="hover:underline">
              <Link href="/online/">Online{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/remote/">Remote{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/full-time/">Full-Time{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/part-time/">Part-Time{'  '}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/casual/">Casual</Link>
            </li>
          </ul>
        </div>

        <div className="text-[#f4a10c] flex flex-col items-center justify-center text-2xl animate-bounce h-6 pt-12 mb-[16rem]">
          <a href="#section" className="scroll-smooth md:scroll-auto">
            ▼
          </a>
        </div>
      </div>

   

      {/* Main Content Panel */}
      <div
        id="section"
        className="mt-[-1rem] px-5"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="blurb text-left py-6 ">
            <h1 className="font-bold text-lg md:text-3xl py-4 px-6 bg-[#f4a10c] text-white rounded-full mb-6 shadow-xl border-4">
              ACADEMIC JOBS: Academic, research and science positions locally
              and globally
            </h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            {/* <p className="px-7 mb-4">
              Find the best academic positions and administrative jobs in higher
              ed. Search for academic jobs, college careers and faculty
              positions online. Seek and apply for lecturer, research, uni admin
              and senior academic jobs in every university in your country or
              globally.
            </p>
            <p className="px-7">
              Whether you are a professor, researcher, lecturer, or
              administrator, you can find the latest opportunities in higher
              education on academic jobs online.
            </p>
            <p className="px-7 mb-4"></p> */}
            <p className="px-7 mb-4">
              Discover top-tier faculty and administrative roles in the world of
              higher education. Begin your search for university academic jobs,
              college faculty positions, and administrative opportunities in
              higher ed. Explore and apply for a range of roles, including
              lecturer, researcher, university administrator, and senior
              academic positions, available nationally and internationally.
            </p>
            <p className="px-7">
              Whether you're an aspiring or established professor, researcher,
              lecturer, or higher education administrator, our platform offers
              the most current opportunities in academia globally. Connect with
              your next career move in the academic sector through our
              comprehensive online job board. Find your next academic job now!
            </p>
          </div>
          {/* <p className="px-7 text-center mt-5">
            <Link
              className="link  text-[#f4a10c] font-bold text-2xl hover:text-orange-500"
              href="/global-academic-awards-2023-nominations"
            >
              Do you know someone deserving, nominate them for the 'Global&nbsp;
              Academic&nbsp;Awards 2023'&nbsp;NOW
            </Link>
          </p> */}
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            Top Academic Jobs Today
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="/jobs/Assistant-Professor-in-Pasifika-Theater-and-Performance-Studies,-UCLA/76215/"
                        className="text-blue-500 font-bold"
                      >
                        Assistant Professor in Pasifika Theater and Performance
                        Studies, UCLA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link href="">Los Angeles, California,USA</Link>
                      </li>
                      <li>
                        <Link href="">5 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/assistant-associate-professor-of-environmental-toxicology-tenure-track-appointment/78925/"
                        className="text-blue-500 font-bold"
                      >
                       Assistant/Associate Professor of Environmental Toxicology (tenure track appointment)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of California Davis</Link>
                      </li>
                      <li>
                        <Link href="">Davis, CA, USA</Link>
                      </li>
                      <li>
                        <Link href="">16 Jan, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="/jobs/Project-Director-DHSI-Grant-Academic-Affairs/75567/"
                        className="text-blue-500 font-bold"
                      >
                        Project Director DHSI Grant - Academic Affairs
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Texas Permian Basin</Link>
                      </li>
                      <li>
                        <Link href="">Odessa, Texas,USA</Link>
                      </li>
                      <li>
                        <Link href="">1 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/immunogenetics-and-histocompatibility-laboratory-director-health-sciences-open-rank-clinical-professor/73108/"
                        className="text-blue-500 font-bold"
                      >
                        Immunogenetics and Histocompatibility Laboratory
                        Director/Health Sciences Open Rank Clinical Professor
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link href="">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link href=""> Aug 3, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/computer-science-engineering-lecturer/72982//"
                        className="text-blue-500 font-bold"
                      >
                        University of Minnesota Twin Cities
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Minnesota Twin Cities</Link>
                      </li>
                      <li>
                        <Link href="">Minneapolis, Minnesota, USA</Link>
                      </li>
                      <li>
                        <Link href="">Jan 1, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/clinical-instructor-clinical-professor/73147/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Instructor - Clinical Professor
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Michigan</Link>
                      </li>
                      <li>
                        <Link href="">Ann Arbor, MI, USA</Link>
                      </li>
                      <li>
                        <Link href="">Jan 17, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/research-specialist-b-c/78662/"
                        className="text-blue-500 font-bold"
                      >
                        Research Specialist B/C
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Pennsylvania</Link>
                      </li>
                      <li>
                        <Link href="">Philadelphia, PA, USA</Link>
                      </li>
                      <li>
                        <Link href="">Jan 17, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/clinical-associate-professor-of-leadership/78640/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Associate Professor of Leadership
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Chicago</Link>
                      </li>
                      <li>
                        <Link href="">Chicago, IL, USA</Link>
                      </li>
                      <li>
                        <Link href="">Jan 19, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/open-rank-in-school-counseling-psychology/64801"
                        className="text-blue-500 font-bold"
                      >
                        Research Fellow In Natural Language Processing
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Michigan</Link>
                      </li>
                      <li>
                        <Link href="">Ann Arbor, MI, USA</Link>
                      </li>
                      <li>
                        <Link href="">17 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/employers/johns-hopkins-university/3130/"
                        className="text-blue-500 font-bold"
                      >
                        Visiting Graduate Fellowship in the History of Science
                        and Technology
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">Johns Hopkins University</Link>
                      </li>
                      <li>
                        <Link href="">Baltimore, MD, USA</Link>
                      </li>
                      <li>
                        <Link href="">Jan 21, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/assistant-professor-or-associate-professor-complex-family-planning-division/44611/"
                        className="text-blue-500 font-bold"
                      >
                        Assistant Professor or Associate Professor - Complex
                        Family Planning Division
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">Yale University</Link>
                      </li>
                      <li>
                        <Link href="">New Haven, CT, USA</Link>
                      </li>
                      <li>
                        <Link href="">6 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/director-of-alumni-engagement/72223"
                        className="text-blue-500 font-bold"
                      >
                        Director of Alumni Engagement
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of Pennsylvania</Link>
                      </li>
                      <li>
                        <Link href="">Philadelphia, PA, USA</Link>
                      </li>
                      <li>
                        <Link href="">16 Jan, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249/"
                        className="text-blue-500 font-bold"
                      >
                        Executive Officer - Full time - Permanent - Robina -
                        Gold Coast
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">Bond University</Link>
                      </li>
                      <li>
                        <Link href="">Gold Coast QLD, Australia</Link>
                      </li>
                      <li>
                        <Link href="">26 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/client-services-officer/70860/"
                        className="text-blue-500 font-bold"
                      >
                        Client Services Officer
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">Queensland University of Technology</Link>
                      </li>
                      <li>
                        <Link href="">Kelvin Grove Brisbane, QLD</Link>
                      </li>
                      <li>
                        <Link href="">1 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/pediatrics-allergy-immunology-rheumatology-health-sciences-series/73113/"
                        className="text-blue-500 font-bold"
                      >
                        Pediatrics Allergy / Immunology / Rheumatology - Health
                        Sciences Series
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link href="">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link href=""> Jan 10, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        href="https://www.academicjobs.com/jobs/clinical-positions-in-cardiology-central-coast-2023-2024/73047/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Positions in Cardiology (Central Coast)
                        2023-2024 Apply Now
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link href="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link href="">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link href="">Jun 29, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link className="text-[#f4a10c] mt-4 mb-4 px-2 font-bold" href="/jobs/">
            view more top jobs →
          </Link>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            Top Cities for Uni Jobs
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link href="/USA/" className="text-[#f4a10c] font-bold">
                        USA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/boston/">Boston</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/new-york/">New York</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/los-angeles/">Los Angeles</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/san-francisco/">San Francisco</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/chicago/">Chicago</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/san-diego/">San Diego</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/washington-dc/">Washington DC</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/philadelphia/">Philadelphia</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/atlanta/">Atlanta</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/seattle/">Seattle</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/pittsburgh/">Pittsburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/new-haven/">New Haven</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/Australia/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Australia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/melbourne/">Melbourne</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/sydney/">Sydney</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/brisbane/">Brisbane</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/gold-coast/">Gold Coast</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/canberra/">Canberra</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/perth/">Perth</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/adelaide/">Adelaide</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link href="/UK/" className="text-[#f4a10c] font-bold">
                        UK
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/london/">London</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/edinburgh/">Edinburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/manchester/">Manchester</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link href="/Canada/" className="text-[#f4a10c] font-bold">
                        Canada
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/toronto/">Toronto</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/vancouver/">Vancouver</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/montreal/">Montreal</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link href="/Asia/" className="text-[#f4a10c] font-bold">
                        Asia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/hong-kong/">Hong Kong</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/beijing/">Beijing</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/tokyo/">Tokyo</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/singapore/">Singapore</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link href="/Europe/" className="text-[#f4a10c] font-bold">
                        Europe
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/paris/">Paris</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/zurich/">Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/munich/">Munich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/amsterdam/">Amsterdam</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/copenhagen/">Copenhagen</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/stockholm/">Stockholm</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            Top Universities To Work For
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="https://www.academicjobs.com/employers/queensland-university-of-technology/3786/"
                        className="text-[#003463] font-bold"
                      >
                        Queensland University of Technology (QUT)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-research/">QUT Research Jobs</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-professor/">
                          QUT Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-Executive/">QUT Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-Administration/">
                          QUT Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-Human-Resources/">
                          QUT Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/QUT-jobs/">QUT Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/employers/bond-university/3785/"
                        className="text-orange-500 font-bold"
                      >
                        Bond University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/jobs/bond-lecturer/">
                          Bond Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/bond-research/">
                          Bond Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/bond-professor/">
                          Bond Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/bond-Executive/">Bond Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/bond-Administration/">
                          Bond Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/bond-Human-Resources/">
                          Bond Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/bond-jobs/">Bond Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="/employers/harvard-university/3100/"
                        className="text-[#A51C30] font-bold"
                      >
                        Harvard University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-lecturer/">
                          Harvard Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-research/">
                          Harvard Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-professor/">
                          Harvard Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-Executive/">
                          Harvard Executive
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-Administration/">
                          Harvard Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-Human-Resources/">
                          Harvard Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/harvard-jobs/">Harvard Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        href="https://www.academicjobs.com/employers/university-of-california-san-diego/3149/"
                        className="text-[#192847] font-bold"
                      >
                        University of California Las Angeles (UCLA)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-lecturer/">
                          UCLA Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-research/">
                          UCLA Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-professor/">
                          UCLA Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-Executive/">UCLA Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-Administration/">
                          UCLA Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-Human-Resources/">
                          UCLA Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/jobs/UCLA-jobs/">UCLA Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            <Link href="/the-university-rankings/">
              The University Rankings/ Top Academic Careers
            </Link>
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
                <div className="column">
                  <ul className="">
                    <ul className="pb-4">
                      <li className="hover:underline">
                        <Link href="/employers/harvard-university/3100/">
                          {" "}
                          Harvard University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/stanford-university/3101/">
                          {" "}
                          Stanford University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-cambridge/12635/">
                          {" "}
                          University of Cambridge
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/massachusetts-institute-of-technology/3103/">
                          MIT
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-california-berkeley/3105/">
                          {" "}
                          University of California, Berkeley
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/employers/princeton-university/3104/">
                          {" "}
                          Princeton University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-oxford/3099/">
                          {" "}
                          University of Oxford
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/columbia-university/3127/">
                          {" "}
                          Columbia University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/caltech/3128/">Caltech</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/University-of-Chicago/3126/">
                          {" "}
                          University of Chicago
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/employers/yale-university/3125/">
                          {" "}
                          Yale University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/Cornell-University/3138/">
                          Cornell University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-california-los-angeles/3136/">
                          UCLA
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-pennsylvania/3131/">
                          UPenn
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/johns-hopkins-university/3130/">
                          Johns Hopkins University (JHU)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link href="/employers/university-college-london/12527/">
                          University College London (UCL)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/eth-zurich/3132/">ETH Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/university-of-tokyo/3155/">
                          The University of Tokyo (UTokyo)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/new-york-university-nyu/3144/">
                          New York University (NYU)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link href="/employers/duke-university/3139/">
                          {" "}
                          Duke University (Duke)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  ">
            <Link href="/job-type/">
              <h2 className=" py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-[7rem] hover:bg-orange-500 hover:text-white shadow-md">
                → Find Academic<span className="font-bold"> Job-Types</span> (
                i.e. Professor, Fellow )
              </h2>
            </Link>
          </div>
          <div className="flex flex-col  ">
            <Link href="/industry/">
              {" "}
              <h2 className="  py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-10 hover:bg-orange-500 hover:text-white shadow-md mb-12">
                → Find Academic Positions in
                <span className="font-bold"> Industry</span> ( i.e. laboratory
                technical services )
              </h2>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
