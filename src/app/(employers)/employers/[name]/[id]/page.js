import { notFound } from 'next/navigation';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
export async function generateMetadata({ params }) {
  const employer = await getEmployer(params.id);
  if (!employer) return { title: 'not found' };
  const { company_name } = employer?.data;
  return {
    title: `All jobs at ${company_name} | `,
    description: `All the university jobs at ${company_name} Academic and administration jobs.  Lecturer and research higher ed careers.`,
    keywords: `${company_name} jobs, ${company_name} careers, ${company_name} positions,  Work at ${company_name}`,
  };
}
async function getEmployer(id) {
  const response = await fetch(
    `https://api2.sciencejobs.com.au/api/employer/${id}`,
    { next: { revalidate: 1 } }
  );
  const res = await response.json();
  console.log('===========getEmployer===============', res);
  return res;
}
const Employer = async ({ params }) => {
  const employer = await getEmployer(params.id);
  if (!employer) notFound();
  let content;
  const {
    id,
    ranking,
    logo,
    company_name,
    website,
    company_description,
    location,
    Region,
    country,
  } = employer.data;
  console.log(company_description);
  let location1 = '',
    company_description1 = '';
  if (company_description) {
    company_description1 = company_description;
  } else {
    if (Region) location1 = Region;
    if (country) location1 = country;
    if (location1) {
      company_description1 = `${company_name} is located at ${location1}.`;
    } else {
      company_description1 = `Welcome to ${company_name}. `;
    }
    company_description1 = `${company_description1}<br><br>
      For more information, join our Talent Pool`;
    if (website)
      company_description1 = `${company_description1}, or visit our university website at <a href=${website} style="text-decoration: underline; color: blue" >${website}</a>`;
    company_description1 = `${company_description1}<br><br>
      To advertise a Job for ${company_name}, please <a href="/post-job/" style="text-decoration: underline; color: blue" >click here</a><br><br>
      To join the  ${company_name} Talent Pool, please <a href="#" style="text-decoration: underline; color: blue" >click here</a>
      `;
  }
  content = (
    <div className="flex-col gap-4  mx-auto">
      <article
        className={`media ${
          company_name == 'Queensland University of Technology (QUT)'
            ? 'bg-blue-950'
            : 'bg-slate-200 w-full'
        } p-8 mb-4  mx-auto`}
      >
        <div className="md:flex md:justify-start .col-auto mx-auto max-w-screen-xl gap-4">
          <div className="w-[15rem] h-[15rem] mr-4  ">
            <Image
              src={
                logo
                  ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
                  : '/favicon.png'
              }
              width={300}
              height={300}
              //fill={true}
              alt={`${company_name} Logo`}
              className="w-full h-full object-contain rounded-md bg-white "
            />
          </div>
          <div className="md:flex md:flex-col p-4">
            <h1 className="text-4xl leading-[2rem] font-bold text-gray-500 ">
              {company_name}
            </h1>
            <div className="flex gap-2">
              <p className="text-xl  leading-[.75rem]  font-bold text-yellow-500 ">
                Employer Ranking -
              </p>
              <p className="text-2xl  leading-[.75rem]  font-bold text-yellow-500 ">
                {' '}
                ★ {ranking}
              </p>
            </div>
            <div className="md:flex-col  md:gap-6 ml-[-3px] pt-6">
              <div className="text-gray-400 md:flex md:items-center md:justify-start md:gap-2 .col-auto">
                <MdLocationPin />
                {location}
              </div>
              {website && (
                <div className="text-gray-400 md:flex md:items-center md:justify-start md:gap-2">
                  <AiOutlineGlobal />
                  <a href={website} className="">
                    {website}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
      <div className="content-grid md:mx-auto md:flex">
        <div className="md:flex">
          {
            <div
              className={`max-h-50 overflow-y  p-4 mb-4 rounded-lg  md:w-1/2 ${
                company_name == 'Bond University' && 'bg-[#f1b821]'
              } ${
                company_name == 'Queensland University of Technology (QUT)' &&
                'bg-blue-950'
              }`}
            >
              <div
                className={`wrapper  ${
                  company_name == 'Queensland University of Technology (QUT)' &&
                  'text-white'
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: company_description1 }}
                />
                {company_name ===
                  'Queensland University of Technology (QUT)' && (
                  <style>
                    {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: yellow !important;
        }
      `}
                  </style>
                )}
                {company_name === 'Bond University' && (
                  <style>
                    {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: white !important;
        }
      `}
                  </style>
                )}
              </div>
            </div>
          }
          <div className="md:w-1/2 ">
            <JobSearchBox />
            <SearchResults q={{ employer_id: id || 0 }} filterOff={true} />
          </div>
        </div>
        <div className="hidden" id="my-target">
          <SearchResults id="about" q={{ employer_id: id || 0 }} />{' '}
        </div>
      </div>
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
};
export default Employer;
