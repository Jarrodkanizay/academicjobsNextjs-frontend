'use client'
//import JobsForm from '@/components/JobsForm';
import SearchResults from '@/components/SearchResults';
import { useSearchParams } from 'next/navigation'
import JobSearchBox from '@/components/JobSearchBox';
//import { useRouter } from 'next/router';
//import { useRouter } from 'next/navigation';
// export const metadata = {
//   title: 'find-jobs',
//   description:
//     'Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily.',
//   keywords: [
//     'Academic Jobs',
//     'Higher Ed Jobs',
//     'Academic positions',
//     'University Jobs',
//     'College Jobs',
//   ],
// };
export default function Page() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const l = searchParams.get('l')
  //const router = useRouter();
  console.log("router.query", searchParams)
  //const { q, l } = router.query;
  return (
    <div className="overflow-y w-full">
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <JobSearchBox />
          </div>
        </div>
      </div>
      <SearchResults q={{ q, l }} />
    </div>
  );
}
