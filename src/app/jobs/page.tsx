import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Diversity Statement Academic Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover a diverse and inclusive academic job board site committed to equity and accessibility. Explore opportunities that value and embrace diversity.',
  keywords: 'Diversity Statement Academic Jobs, AcademicJobs Diversity Statement',
};
export default function myPage() {
  return (
    
      <main className="content-grid">

<div className="flex  w-full gap-8  justify-between">
            <div className="overflow-y-auto md:w-[30%] mt-4">
            <div className="flex gap-4 flex-wrap"><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Country</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">State</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">City</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Institution Name</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Job Type</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Faculty/Department</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Academic Position Type</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Executive Jobs</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Employment Type</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Salary Range in USD</button><button className="px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold bg-white border-gray-500">Onsite/Remote</button></div>
   </div>
   <div className="hidden md:block overflow-y-auto w-[70%]  top-0 h-screen sticky">   
   

   
   </div>
   </div>
         

          </main>
   
  );
}
