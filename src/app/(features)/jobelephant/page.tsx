import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Post a job - Recruit Academics', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};

type PricingTypes = {
  cta: string,
  currencySymbol: string,
  basic: string,
  basicPrice: number,
  business: string,
  businessPrice: number,
  enterprise: string,
  enterprisePrice: number,
};




export default function Page() {


    const pricing: PricingTypes  = {
      cta: "Buy",
      currencySymbol: "$",
      basic: "Single Job Post",
      basicPrice: 315,
      business: "5 Job Pack",
      businessPrice: 1418,
      enterprise: "10 Job Pack",
      enterprisePrice: 2520,
    };
  
    const emailAJ = "advertise@academicjobs.com";
  
    const subjectBasic = `I would like to buy a ${pricing.basic}`;
    const subjectBusiness = `I would like to buy a ${pricing.business}`;
    const subjectEnterprise = `I would like to buy a ${pricing.enterprise}`;
  
    function formatNumberWithCommas(number: number) {
      return number.toLocaleString();
    }
  
    function createMessage(productName: string, price: number) {
      return encodeURIComponent(`Hi Academic Jobs,
  
  I would like to purchase the ${productName}. Please send me an
  invoice for $${formatNumberWithCommas(price)}.
            
  ---Please Post the following for me…
            
  
            `);
    }
  
  return (
    <>
      <main className="">
        <div className="blurb text-left pb-4">
          {/* Hero banner */}
          <div className="hero max-h-fit bg-slate-200 py-8">
            <div className="container mx-auto">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                  width={300}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant.gif"
                  className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0 bg-white"
                  alt="AI Powered Recruitment Platform"
                />
                <div>
                  <h1 className="text-xl font-normal">
                  <span className="text-7xl font-bold text-right pb-4">Welcome!&nbsp;</span> <br/>you've landed on the new AcademicJobs JobElephant portal 
                  </h1>
                  <p className="pt-6">
                    We've just made it easier for you to post a job for all your clients 
                  </p>
                  <p className="pb-6 font-bold">
                    Simply email all your jobs through the link bellow 
                  </p>
                  <a href="#pricing-table-cards" className="btn btn-aj">
                    Post a Job
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Banner */}
         
          <div className="mt-8">&nbsp;</div>

          

                  {/* Pricing Card 1 */}
        <div  id="pricing-table-cards" className="w-full flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <Image  width="150"
            height="150"
            alt=""
              src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
             
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">
                {pricing.basic}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                  {formatNumberWithCommas(pricing.basicPrice)}
                </span>{" "}
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                30 day single<span className="text-black"> job listing</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                <span className="text-black">Free </span>employer account
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Ad<span className="text-black"> performance metrics</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image  width="20"
            height="20"
            alt="" src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li>
          </ul>

          <a
            href={`mailto:${emailAJ}?subject=${subjectBasic}&body=${createMessage(
              pricing.basic,
              pricing.basicPrice
            )}`}
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white text-xl"
          >
            {pricing.cta} {pricing.basic}
          </a>
        </div>


        
        </div>

     
     
     

        <section className="w-full mx-auto text-center">
          <picture className="bg-white min-w-full max-w-2xl mx-auto">
            <Image
              width={1280}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/proudly-working-with.png"
              alt="job elephant logo"
              className="mx-auto"
            />
          </picture>

          <div className="rounded-3xl">
            <Image
              width={1280}
              height={380}
              src="https://academicjobs.s3.amazonaws.com/img/_misc/academicjobs-university-logos-min.png"
              alt="academicjobs university logos"
              className="rounded-3xl shadow-xl hidden mx-auto"
            />
          </div>
        </section>
      </main>
    </>
  );
}

