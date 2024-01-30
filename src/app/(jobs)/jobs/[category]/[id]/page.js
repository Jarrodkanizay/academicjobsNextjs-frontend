import { notFound } from 'next/navigation';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import HeadlineUpgrade from '@/components/forms/HeadlineUpgrade';
import HeadlineLinks from '@/components/forms/HeadlineLinks';
import InputBlock from '@/components/forms/InputBlock';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';
import { CloudCog } from 'lucide-react';
import SubscribeForm from '@/components/forms/SubscribeForm';
import { useSearchParams } from 'next/navigation';
export async function generateMetadata({ params }) {
  const job = await getJob(params.id);
  if (!job) return { title: 'not found' };
  const { title, company_name, location } = job?.data;
  return {
    title: `${title} | ${company_name}`,
    description: `Explore our ${title} job opportunities available at ${company_name}! Apply to become a ${title} today. Apply for an academic job today!`,
    keywords: `${title} jobs| ${company_name} university jobs| ${location} university jobs`,
  };
}
async function getJob(id) {
  const response = await fetch(`https://api2.sciencejobs.com.au/api/job/${id}`);
  const res = await response.json();
  // console.log(res);
  return res;
}
const JobDetailPage = async ({ params, searchParams }) => {
  //const searchParams = useSearchParams();
  const active = searchParams['active'] || false;
  console.log("====444444433333333333333333333333active=====")
  console.log(searchParams)
  console.log("====active=====",active)
  const job = await getJob(params.id);
  console.log('job', job);
  if (!job) notFound();
  const {
    employer_id,
    id: jobId,
    company_name,
    logo,
    title,
    location,
    activation_date,
    expiration_date,
    description,
    how_to_apply,
    featured,
    clientType,
  } = job.data;
  return (
    <div className="bg-white relative content-grid mx-auto  ">
      <div className="bg-slate-200 full-width">
        <div className="flex items-center p-4 gap-8">
          <div className="md:w-1/4 md:pr-4 md:p-8">
            <Link
              href={`/employers/${company_name
                ?.replace(/\W+/g, '-')
                .toLowerCase()}/${employer_id}/`}
            >
              <div className="w-full rounded-xl p-4 bg-white">
                <Image
                  className="w-full rounded-xl"
                  src={
                    `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` ||
                    ''
                  }
                  alt={company_name}
                  width={300}
                  height={200}
                />
              </div>
            </Link>
          </div>
          <div className="w-3/4">
            <h1 className="text-2xl font-bold mb-2 text-black">{title}</h1>
            <div className="mb-4">
              {/* <Link href={`/employers/id/${id}`}>
                    {location}
                </Link> */}
            </div>
            <div className="flex items-center">
              <Button
                title={title}
                company_name={company_name}
                how_to_apply={how_to_apply}
              />
              <div className="ml-4">
                <div className="">
                  <div
                  // onClick={() => {
                  //     setIsOpen(true);
                  // }}
                  >
                    <BsFillShareFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-white p-4 mb-4">
        {/* ... (rest of the component remains unchanged) */}
        <div className="flex justify-between md:gap-16 items-center">
          <div className="text-sm text-gray-600">
            <div className="mb-1">{company_name}</div>
            <div className="text-gray-700 font-light">{location}</div>
          </div>
          <div className="applications-close border-4 rounded p-1 font-bold">
            <p className="text-gray-400 text-sm mb-1">Applications Close</p>
            <div className="text-sm">
              {expiration_date ? (
                <time>
                  {new Date(expiration_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              ) : (
                <p className="text-center">TBA</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 gap-8">
        <article
          className="md:w-2/3 wrapper media bg-white border-2 p-4 mb-4 rounded-lg shadow-lg"
          data-id={jobId}
        >
          {
            <div className="">
              <div
                className={`${(clientType !== 'HeadlineOnly' || active) ? 'block' : 'hidden'
                  }`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div
                className={`flex flex-col ${(clientType === 'HeadlineOnly' && !active) ? 'block' : 'hidden'
                  }`}
              >
                <div className="flex justify-center items-center flex-wrap">
                  <Image
                    src="/academic-jobs-heart.svg"
                    width={90}
                    height={90}
                    alt="Academic Jobs Heart"
                  />
                  <Image
                    src="/i-love-this-job.svg"
                    width={90}
                    height={90}
                    alt="Academic Jobs Heart"
                    className="mr-20"
                  />
                  <div className="grow">
                    <SubscribeForm
                      formName="Request Full Job Post"
                      buttonText="Please Email Full Job Post"
                      thankYouMessage="Done! You will receive the full job post shortly."
                      formType="job-request"
                      jobId={jobId}
                      employer={company_name}
                      jobTitle={title}
                    />
                  </div>
                </div>
                <details className="mt-[260px]">
                  <summary class="text-[16px] text-emerald-500 cursor-pointer px-4 py-2 rounded-md text-center">
                    Recruiter Information Only
                    <HeadlineLinks />
                  </summary>
                  <div class="px-4 py-2">
                    <HeadlineUpgrade
                      clientType={clientType}
                      jobId={jobId}
                      employer={company_name}
                      jobTitle={title}
                    />
                  </div>
                </details>
              </div>
              {/* </div> */}
            </div>
          }
          {/* <div className="mt-5 mb-0 text-right">Join Talent Pool</div> */}
        </article>
        <div className="max-h-screen overflow-y-scroll max-w-96 hidden md:block">
          <h3 className=" pl-4 text-lg text-gray-400">
            This might interest you...{' '}
          </h3>
          <JobSearchBox q={title} />
          <SearchResults q={title} filterOff={true} />
        </div>
      </div>
      {new Date(expiration_date) < new Date() && expiration_date && (
        <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
          Job Fulfilled By AcademicJobs.com
        </div>
      )}
    </div>
  );
};
export default JobDetailPage;
//  <p className='text-xl font-bold'>Headline only listing, to show full job content, click button below to:</p>
//               <Link href={`\headline_upgrade\${company_name}`}>Upgrade to Priority Listing</Link>
