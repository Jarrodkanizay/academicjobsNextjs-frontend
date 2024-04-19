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
import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import { useSearchParams } from 'next/navigation';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import FavoriteButton from '@/components/FavoriteButton';
import { StarRank } from '@/components/StarRank';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { baseURL } from '@/lib/store/Base';
export async function generateMetadata({ params }) {


  const session = await getServerSession(authOptions);
  const job = await getJob({ id: params.id, userId: session?.user.id });
  if (!job) return { title: 'not found' };
  const { title, company_name, location } = job?.data;
  return {
    title: `${title} | ${company_name}`,
    description: `Explore our ${title} job opportunities available at ${company_name}! Apply to become a ${title} today. Apply for an academic job today!`,
    keywords: `${title} jobs| ${company_name} university jobs| ${location} university jobs`,
    robots: {
      index: true,
    },
  };
}
//{ next: { revalidate: 0 } }
async function getJob(data) {
  console.log("0324========data", data)
  const response = await fetch(
    `${baseURL}/getJobById1`,
    {
      method: 'POST', // Change method to POST
      headers: {
        'Content-Type': 'application/json' // Specify content type
      },
      body: JSON.stringify(data), // Pass data as JSON string in the body
    }
  );
  const res = await response.json();
  // console.log(res);
  return res;
}
const JobDetailPage = async ({ params, searchParams }) => {
  //const searchParams = useSearchParams();
  const session = await getServerSession(authOptions);
  console.log("0324========session", session)
  const active = searchParams['active'] || false;
  console.log('====444444433333333333333333333333active=====');
  console.log(searchParams);
  console.log('====active=====', active);
  const job = await getJob({ id: params.id, userId: session?.user.id });
  console.log('job', job);
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
    employer: {
      company_name,
      logo,
      ranking,
    }
  } = job.data;
  console.log('ranking==============', ranking);
  const subject = encodeURIComponent('You might like this job posting!');
  const bccEmail = encodeURIComponent('post@academicjobs.com');
  const bodyEmail = encodeURIComponent(
    `I came across this job posting on AcademicJobs and thought you might be interested: https://www.academicjobs.com/jobs/myjob/${jobId}`
  );
  let bgColor = 'bg-white';
  if (company_name === 'Bond University') bgColor = 'bg-[#011a4d]';
  return (
    <>
      {/* {console.log('Top 20 ' + { topTwentyUnis })} */}
      <div className="bg-white relative content-grid mx-auto">
        <div className="border-b  full-width">
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
                    {/* <Image
                      src={`/icons/map-marker-icon.svg`}
                      alt="Map Marker Icon"
                      width={22}
                      height={22}
                      className="map_marker_icon"
                    /> */}
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
                  // buttonText="Apply Now /jobs/[category]/[id]/page.js"
                  />
                )}
                <a
                  className="icon_share items-center min-w-[32px]"
                  href={`mailto:?bcc=${bccEmail}&subject=${subject}&body=${bodyEmail}`}
                >
                  <BsFillShareFill size={20} color="#2867B2" />
                </a>
                <FavoriteButton jobId={params.id} favoriteJobYN={favoriteJobYN} />
                {/* <img
                  src="/icons/heart.svg"
                  width="44"
                  height="44"
                  alt="Add this Job Post to Favorites"
                  onClick={() => {
                    alert(params.id)
                  }}
                /> */}
                <a href="/academic-talent-pool" className="bg-[#d9d9d9] text-gray-700 rounded-full btn">
                  Join Talent Pool
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job post header: organization, location closing date of job post  */}
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
        <article className="post_panel mt-[26px]" data-id={jobId}>
          <div className="post_content bg-white border-2 rounded-lg">
            <div className="post" data-id={jobId}>
              {
                <>
                  <div
                    className={`${!headlineOnly || active ? 'job-content block' : 'hidden'
                      }`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <div
                    className={`flex flex-col ${headlineOnly && !active ? 'block' : 'hidden'
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
                        src="/love-messages/i-love-this-job.svg"
                        width={90}
                        height={90}
                        alt="Academic Jobs Heart"
                        className="mr-20"
                      />
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
                </>
              }
              {/* <div className="mt-5 mb-0 text-right">Join Talent Pool</div> */}
            </div>
          </div>
        </article>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 q={title} />
            </div>
            <SearchResults
              q={title}
              filterOff={true}
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
