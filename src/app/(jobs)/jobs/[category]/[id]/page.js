import { notFound } from 'next/navigation';
import SearchResults from '@/components/SearchResults';
import JobSearchBox2 from '@/components/JobSearchBox2';
import HeadlineUpgrade from '@/components/forms/HeadlineUpgrade';
import HeadlineLinks from '@/components/HeadlineLinks';
import InputBlock from '@/components/forms/InputBlock';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';
import { CloudCog } from 'lucide-react';
import SubscribeForm from '@/components/forms/SubscribeForm';
import { useSearchParams } from 'next/navigation';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';

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
  const response = await fetch(
    `https://api2.sciencejobs.com.au/api/job/${id}`,
    { next: { revalidate: 0 } }
  );
  const res = await response.json();
  // console.log(res);
  return res;
}
const JobDetailPage = async ({ params, searchParams }) => {
  //const searchParams = useSearchParams();
  const active = searchParams['active'] || false;
  console.log('====444444433333333333333333333333active=====');
  console.log(searchParams);
  console.log('====active=====', active);
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
    headlineOnly,
  } = job.data;

  return (
    <>
      <div className="bg-white relative content-grid mx-auto  ">
        <div className="bg-slate-200 full-width">
          <div className="md:flex items-center p-4 gap-8">
            <div className="md:w-1/4 md:pr-4 md:p-8">
              <Link
                href={`/employers/${company_name
                  ?.replace(/\W+/g, '-')
                  .toLowerCase()}/${employer_id}/`}
              >
                <div className="w-full rounded-lg p-4 bg-white">
                  <Image
                    className="w-full "
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
                {headlineOnly ? (
                  <Link href="#request-job-post" className="btn btn-aj">
                    Apply Now
                  </Link>
                ) : (
                  <Button
                    title={title}
                    company_name={company_name}
                    how_to_apply={how_to_apply}
                    // buttonText="Apply Now /jobs/[category]/[id]/page.js"
                  />
                )}
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
      </div>
      {/* job post header: organization, location closing date of job post */}
      <section className="jobs_grid job_post_header_container">
        <div className="job_post_header_panel">
          <h3 className="company_name">{company_name}</h3>
          <h4 className="location">
            <Image
              src={`/icons/map-marker-icon.svg`}
              alt="Map Marker Icon"
              width={22}
              height={22}
              className="map_marker_icon"
            />
            {location}
          </h4>
        </div>
        <div className="applications_close_panel">
          <h6>Applications Close</h6>
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
      </section>

      {/* main body of job post */}
      <section className="jobs_grid job_post_panel_container">
        <article className="post_panel" data-id={jobId}>
          <div className="post_content">Job Post</div>
        </article>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">Search</div>
            <div className="listing">Job Listings</div>
            <div className="listing">Job Listings</div>
            <div className="listing">Job Listings</div>
          </div>
        </div>
      </section>

      <div className="md:flex p-4 gap-8 bg-sky-200">
        <article
          className="job-post wrapper media bg-white border-2 p-4 mb-4 rounded-lg shadow-lg md:w-2/3"
          data-id={jobId}
        >
          {
            <div className="">
              <div
                className={`${
                  !headlineOnly || active ? 'job-content block' : 'hidden'
                }`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div
                className={`flex flex-col ${
                  headlineOnly && !active ? 'block' : 'hidden'
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
                <details className="mt-[80px]">
                  <summary class="text-[16px] text-emerald-500 hover:text-sky-500 cursor-pointer px-4 py-2 rounded-md text-center">
                    <a href="#activate-quick-post ">
                      Recruiter Information Only
                    </a>
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
                </details>{' '}
              </div>
              {/* </div> */}
            </div>
          }
          {/* <div className="mt-5 mb-0 text-right">Join Talent Pool</div> */}
        </article>
        <div className="max-h-screen overflow-y-scroll max-w-96 hidden md:block md:w-1/3">
          <h3 className=" pl-4 text-lg text-gray-400">
            This might interest you...{' '}
          </h3>
          <div className="">
            <JobSearchBox2 q={title} />
          </div>
          <SearchResults q={title} filterOff={true} />
        </div>
      </div>
      {new Date(expiration_date) < new Date() && expiration_date && (
        <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
          Job Fulfilled By AcademicJobs.com
        </div>
      )}
    </>
  );
};
export default JobDetailPage;
//  <p className='text-xl font-bold'>Headline only listing, to show full job content, click button below to:</p>
//               <Link href={`\headline_upgrade\${company_name}`}>Upgrade to Priority Listing</Link>
