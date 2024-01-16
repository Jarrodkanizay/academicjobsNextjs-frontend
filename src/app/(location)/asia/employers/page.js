// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';


export const metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: "Find Asia's Top University Employers", //Option 2 overrides the title in layout.tsx
  },
  description:
    'Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, Asia, or anywhere else, we have the information you need to make an informed decision.',
  keywords: 'Find Universities. Find employers, Find institutions',
};

const countryRegion = 'Asia';
function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}
export default function myPage() {
  return (
    <main className="">
 
     <div>
       {/* Hero banner */}
       <section>
         <div className="hero max-h-fit bg-slate-200 py-8 mx-auto">
           <div className="container mx-auto">
             <div className="hero-content flex-col xl:flex-row-reverse mx-auto max-w-full">
               <img
                 src="/academic-job-postings/Asian-University.jpg"
                 className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                 alt="The Top Academic Employers"
               />
               <div>
                 <h1 className="text-3xl font-bold text-aj">
                   Find {countryRegionPlural()} Top University Employers
                 </h1>
           
                 <p className="py-6">
                 Here you will find a variety of opportunities to join the faculty or staff of leading Asian institutions, such as Peking University, National University of Singapore, The University of Hong Kong, KAIST, and many more. Whether you are interested in teaching, research, administration, or service, you will find a role that suits your skills, interests, and values.
                 </p>
                 <div className="card-actions flex ">
               <Link href="/academic-talent-pool" className="btn btn-aj">
                 Join our Talent Pool
               </Link>
               <Link
                 href="https://postmyjob.online/"
                 className="btn btn-aj"
               >
                 Create Institutional Profile
               </Link>
             </div>
               
                
               </div>
             </div>
           </div>
         </div>
       </section>
      
      
       <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl max-w-screen-xl mx-auto">
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
             <ul>
               <li className='mb-1 text-[#f4a10c] font-bold'>Singapore</li>
               <li><Link href="/employers/nanyang-technological-university-singapore/3152/">Nanyang
                 Technological University</Link></li>
               <li><Link href="/employers/national-university-of-singapore/3137/">National University of Singapore</Link></li>
               <li className='mb-1 text-[#f4a10c] font-bold'>Malaysia</li>
               <li><Link href="/employers/universiti-ualaya/12499/">Universiti Malaya (UM)</Link></li>
             </ul>
             <ul>
               <li className='mb-1 text-[#f4a10c] font-bold'>China</li>
               <li><Link href="/employers/peking-university/3133/">Peking
                 University</Link></li>
               <li><Link href="/employers/tsinghua-university/3840/">Tsinghua University</Link></li>
               <li><Link href="/employers/fudan-university/7289/">Fudan University</Link></li>
               <li><Link href="/employers/shanghai-jiao-tong-university/6876/">Shanghai Jiao Tong University</Link></li>
             </ul>
             <ul>
               <li className='mb-1 text-[#f4a10c] font-bold'>Japan</li>
               <li><Link href="/employers/university-of-tokyo/3155/">University of Tokyo</Link></li>
               <li className='mb-1 text-[#f4a10c] font-bold'>Indonesia</li>
               <li><Link href="/employers/the-university-of-indonesia/12068/">The University of Indonesia</Link></li>
               <li className='mb-1 text-[#f4a10c] font-bold'>Thailand</li>
               <li><Link href="/employers/chulalongkorn-university/6615/">Chulalongkorn University</Link></li>
             </ul>
             <ul>
               <li className='mb-1 text-[#f4a10c] font-bold'>Hong Kong</li>
               <li><Link href="/employers/university-of-hong-kong/3148/">University of Hong Kong</Link>
               </li>
               <li><Link href="/employers/chinese-university-of-hong-kong/3161/">Chinese University of
                 Hong Kong</Link></li>
               <li><Link href="/employers/the-hong-kong-university-of-science-and-technology/3843/">The Hong Kong University of Science and Technology</Link></li>
               <li className='mb-1 text-[#f4a10c] font-bold'>South Korea</li>
               <li><Link href="/employers/seoul-national-university/10119/">Seoul National University</Link></li>
             </ul>
           </div>
         </div>
      
             <section>
         <h3 className="container mx-auto text-center py-8 px-4 items-end">
        {" "}
           <Link
             className="btn btn-aj"
             href="/employers/"
           >
             View All 
           </Link>
         </h3>
       </section>
       {/* Contact us CTA */}
       <section className="container mx-auto px-4 mt-12">
         <div className="alert mb-10">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             className="stroke-info shrink-0 w-6 h-6"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
             ></path>
           </svg>
           <span>
             ​​Try out Academic Jobs today, not because we are number 1 but for
             the best customer service and support you will ever experience.
           </span>
           <div>
             <Link href="/contact-us" className="btn btn-sm btn-aj">
               Experience the Difference
             </Link>
           </div>
         </div>
       </section>
   
       <section>
         <h3 className="container mx-auto text-center py-8 px-4 items-end">
           If you're interested in a great experience while saving time &
           money…{" "}
           <Link
             className="btn btn-aj"
             href="https://postmyjob.online/"
           >
             Post a Job Today
           </Link>
         </h3>
       </section>
     </div>
   </main>
  );
};