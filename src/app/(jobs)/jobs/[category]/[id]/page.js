import { notFound } from 'next/navigation';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import HeadlineUpgrade from '@/components/forms/HeadlineUpgrade';
import HeadlineLinks from '@/components/HeadlineLinks';
import InputBlock from '@/components/forms/InputBlock';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillShareFill } from 'react-icons/bs';
import Button from './Button';
import { CloudCog } from 'lucide-react';
import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import FavoriteButton from '@/components/FavoriteButton';
import { StarRank } from '@/components/StarRank';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { baseURL } from '@/lib/store/Base';
import { BaseApi } from '@/lib/store/Base';
import JoinTalentPool from '@/components/JoinTalentPool';
import ShareButton from '@/components/ShareButton';
import AcademicConnections from '@/components/forms/AcademicConnectionForm';

export async function generateMetadata({ params }) {
  const session = await getServerSession(authOptions);
  const job = await getJob({ id: params.id, userId: session?.user.id });
  if (!job) return { title: 'not found' };
  if (job) { incrementJobViewCount(params) };
  const { title, company_name1, region } = job?.data;

  return {
    title: `${title} | ${company_name1}`,
    description: `Explore our ${title} job opportunities available at ${company_name1}! Apply to become a ${title} today. Apply for an academic job today!`,
    keywords: `${title} jobs, ${company_name1} university jobs, ${region} university jobs`,
    robots: {
      index: true,
    },
  };
}

async function incrementJobViewCount(data) {
  try {
    const response = await BaseApi.post(`/incrementJobViewCount/${data.id}`);
    console.log(response.message);
  } catch (error) {
    console.error("Error incrementing view count:", error);
  }
}

async function getJob(data) {
  const response = await fetch(
    `${baseURL}/getJobById1`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }
  );
  const res = await response.json();
  return res;
}

async function getAcademicConnectionCount(jobId) {
  const response = await BaseApi.post(`/getJobAcademicConnectionCount/${jobId}`);
  return response.data.count;
}

const JobDetailPage = async ({ params, searchParams }) => {
  const academicConnectCount = await getAcademicConnectionCount(params.id);
  const session = await getServerSession(authOptions);
  const active = searchParams['active'] || '';
  const mode = searchParams['mode'] || 'default';
  const job = await getJob({ id: params.id, userId: session?.user.id });
  if (!job) notFound();

  const {
    employer_id,
    id: jobId,
    title,
    location,
    activation_date,
    expiration_date,
    description,
    how_to_apply,
    featured,
    clientType,
    headlineOnly,
    favoriteJobYN,
    talentPoolYN,
    employer: {
      company_name,
      logo,
      ranking,
    },
    master_category_job_type,
    thirdcategory,
    subcategory_administration_support,
    subcategory_academic_jobs,
  } = job.data;

  const subject = encodeURIComponent('You might like this job posting!');
  const bccEmail = encodeURIComponent('post@academicjobs.com');
  const bodyEmail = encodeURIComponent(
    `I came across this job posting on AcademicJobs and thought you might be interested: https://www.academicjobs.com/jobs/myjob/${jobId}`
  );

  let bgColor = 'bg-white';
  if (company_name === 'Bond University') bgColor = 'bg-[#011a4d]';

  return (
    <>
      <div className="bg-white relative content-grid mx-auto">
        <div className="border-b full-width">
          <div className="md:flex items-center p-4 gap-8">
            <div className="flex justify-center">
              <Link
                href={`/employers/${company_name
                  ?.replace(/\W+/g, '-')
                  .toLowerCase()}/${employer_id}/`}
              >
                <div
                  className={`rounded-lg p-4 ${bgColor}`}
                >
                  <Image
                    src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${logo || 'favicon.jpg'}`}
                    alt={company_name}
                    width={170}
                    height={170}
                  />
                </div>
              </Link>
            </div>
            <div className="w-[85%]">
              <div className="flex">
                <h1 className="flex-1 text-2xl font-bold mb-2 text-black">{title}</h1>
                <div className="applications_close_panel w-[13rem] h-[4rem] mt-3 hidden lg:block">
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
              </div>

              <div className="job_post_header_panel text-sm text-gray-600">
                <h3 className="company_name">{company_name}</h3>
                <section>
                  <h4 className="text-gray-700 font-light text-sm m-0">
                    {location}
                  </h4>
                </section>
                <section className="ranking flex flex-row pb-2">
                  <StarRank ranking={ranking} />
                </section>
              </div>

              <div className="flex items-center justify-start md:gap-[0.5rem] gap-2 max-[395px]:ml-[-17px]">
                {headlineOnly ? (
                  <Link href="#request-job-post" className="btn btn-aj">
                    Apply Now
                  </Link>
                ) : (
                  <Button
                    title={title}
                    company_name={company_name}
                    how_to_apply={how_to_apply}
                  />
                )}
                <ShareButton jobId={jobId} employerId={employer_id} title={title} company_name={company_name} />
                <FavoriteButton jobId={params.id} favoriteJobYN={favoriteJobYN} />
                <JoinTalentPool employerId={employer_id} talentPoolYN={talentPoolYN} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block flex justify-center">
        <section className="mt-4 gap-2 w-[20rem] h-[4rem]">
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
      </div>
      {/* main body of job post */}
      <section className="jobs_grid job_post_panel_container">
        {mode === 'share' ? (
          <><AcademicConnections jobId={jobId} title={title} company_name={company_name} employerId={employer_id} connectionCount={academicConnectCount} /></>
        ) : (
          <article className="post_panel mt-[26px]" data-id={jobId}>
            <div className="post_content bg-white border-2 rounded-lg">
              <div className="post" data-id={jobId}>
                <div
                  className={`${!headlineOnly || active ? 'job-content block' : 'hidden'
                    }`}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <div
                  className={`flex flex-col ${headlineOnly && !active ? 'block' : 'hidden'
                    }`}
                >
                  <span className="text-gray-700 text-[16px] m-0 mb-6">This job posting has not been sponsored, enter your email below to be sent the full post.</span>
                  <div className="flex justify-center items-center flex-wrap">
                    <div className="grow">
                      <RequestFullJobForm
                        formName="Request Full Job Post"
                        buttonText="Please Email Full Job Post"
                        thankYouMessage="Done! You will receive the full job post shortly."
                        formType="job-request"
                        jobId={jobId}
                        employer={company_name}
                        jobTitle={title}
                        placeholder="Enter email for full job post"
                      />
                    </div>
                  </div>
                  <details className="mt-[80px]">
                    <summary className="text-[16px] text-sky-500 hover:text-gray-600 cursor-pointer px-4 pb-2 rounded-md text-center">
                      <a href="#activate-quick-post ">
                        Recruiter Information Only
                      </a>
                    </summary>
                    <div className="px-4 py-2">
                      <HeadlineUpgrade
                        clientType={clientType}
                        jobId={jobId}
                        employer={company_name}
                        jobTitle={title}
                      />
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>
        )}
        <div className="listings_panel">
          <div className="relative pb-16">
            <div className="search_panel">
              <AdvancedSearchBar
                sidebarView={true}
                p={{
                  filter1: [
                    { category: "JobType", filter: master_category_job_type },
                    ...(subcategory_academic_jobs ? [{ category: "AcademicPositionType" , filter: subcategory_academic_jobs }] : []),
                    ...(subcategory_administration_support ? [{ category: "AdministrationSupportJobs" , filter: subcategory_administration_support }] : []),
                    ...(thirdcategory ? [{ category: "thirdcategory", filter: thirdcategory }] : [])
                  ]
                }}
              />

            </div>
            <SearchResults3
              searchMessage="Related Jobs Found"
            />
          </div>
        </div>
      </section>
      {new Date(expiration_date) < new Date() && expiration_date && (
        <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 translate-y-1/2 rotate-45 skew-y-0">
          Job Fulfilled By AcademicJobs.com
        </div>
      )}
    </>
  );
};
export default JobDetailPage;
