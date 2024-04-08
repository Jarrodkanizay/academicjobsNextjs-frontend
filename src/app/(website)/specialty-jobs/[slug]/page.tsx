import { specialtyJobsData } from '@/data/specialtyJobsData';

import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';
import SearchResults from '@/components/SearchResults';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox2 from '@/components/JobSearchBox2';
import JobFilter from '@/components/JobFilter';
import TalentPool from '@/components/TalentPoolCTA';
import Link from 'next/link';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: any) {
  const specialtyDetails = await specialtyJobsData.find(
    (specialty) => specialty.slug === params.slug
  );

  if (!specialtyDetails) {
    throw new Error(`No specialty article was found for slug: ${params.slug}`);
  }

  return {
    title: specialtyDetails.title,
    description: specialtyDetails.description,
    keywords: specialtyDetails.keywords,
  };
}

export default function BlogPostPage({ params }: Props) {
  const specialtyDetails = specialtyJobsData.find(
    (specialty) => specialty.slug === params.slug
  );

  if (!specialtyDetails) {
    return <div>Specialty was not found!</div>;
  }

  const learnOptions = [
    'Find out about',
    'Learn about',
    'Discover more about',
    'Explore',
  ];
  const randomLearnIndex = Math.floor(Math.random() * learnOptions.length);
  const learnWord = learnOptions[randomLearnIndex];

  return (
    <main className="blog-post cities content-grid">
      <HeroBanner
        h1={specialtyDetails.h1 || ''}
        para1={specialtyDetails.description || ''}
        src={specialtyDetails.image_url || ''}
        alt={specialtyDetails.alt || ''}
        reorder={false}
        externalLink={true}
        imageShadow={false}
      />
      <h2 className="underline-full">
        {learnWord} the specialty of {specialtyDetails.specialtyJob}!
      </h2>
      <p className="">
        Are you interested in {specialtyDetails.jobCategory} jobs? Then
        specializing in a career in {specialtyDetails.specialtyJob} might
        interest you.
      </p>
      <section className="jobs_grid job_post_panel_container">
        <div className={`post_panel employer_panel aj text-2-cols mt-6 `}>
          {specialtyDetails.city.length > 0 ? (
            <p>
              <span className="font-bold">Cities: </span>
              {specialtyDetails.city.join(', ')}
            </p>
          ) : null}
          {specialtyDetails.region.length > 0 ? (
            <p>
              <span className="font-bold">Country Regions: </span>
              {specialtyDetails.region.join(', ')}
            </p>
          ) : null}
          {specialtyDetails.country.length > 0 ? (
            <p>
              <span className="font-bold">Country: </span>
              {specialtyDetails.country.join(', ')}
            </p>
          ) : null}
          {specialtyDetails.geographicLocation.length > 0 ? (
            <p>
              <span className="font-bold">World Region: </span>
              {specialtyDetails.geographicLocation.join(', ')}
            </p>
          ) : null}
          {specialtyDetails.locationInfo.length > 0 ? (
            <>
              <h3>About the location</h3>
              {Array.isArray(specialtyDetails.locationInfo) ? (
                specialtyDetails.locationInfo.map((paraData, index) => (
                  <p key={index}>{paraData}</p>
                ))
              ) : (
                <p>{specialtyDetails.locationInfo}</p>
              )}
            </>
          ) : null}
          {specialtyDetails.educationRequired.length > 0 ? (
            <>
              <h3>What it takes to work in </h3>
              {Array.isArray(specialtyDetails.educationRequired) ? (
                specialtyDetails.educationRequired.map((paraData, index) => (
                  <p key={index}>{paraData}</p>
                ))
              ) : (
                <p>{specialtyDetails.educationRequired}</p>
              )}
            </>
          ) : null}
          {specialtyDetails.languageRequirement.length > 0 ? (
            <>
              <h3>
                Language requirements for the {specialtyDetails.specialtyJob}{' '}
                domain
              </h3>
              {Array.isArray(specialtyDetails.languageRequirement) ? (
                specialtyDetails.languageRequirement.map((paraData, index) => (
                  <p key={index}>{paraData}</p>
                ))
              ) : (
                <p>{specialtyDetails.languageRequirement}</p>
              )}
            </>
          ) : null}
          {specialtyDetails.skillSet.length > 0 ? (
            <>
              <h3>
                Skills required to work in {specialtyDetails.specialtyJob}
              </h3>
              <ul>
                {Array.isArray(specialtyDetails.skillSet) ? (
                  specialtyDetails.skillSet.map((paraData, index) => (
                    <li key={index}>{paraData}</li>
                  ))
                ) : (
                  <p>{specialtyDetails.skillSet}</p>
                )}
              </ul>
            </>
          ) : null}
          {specialtyDetails.careerOutlook.length > 0 ? (
            <>
              <h3>Career Path</h3>
              {Array.isArray(specialtyDetails.careerOutlook) ? (
                specialtyDetails.careerOutlook.map((paraData, index) => (
                  <p key={index}>{paraData}</p>
                ))
              ) : (
                <p>{specialtyDetails.careerOutlook}</p>
              )}
            </>
          ) : null}

          {specialtyDetails.workEnvironment.length > 0 ? (
            <>
              <h3>Work Environment</h3>
              {Array.isArray(specialtyDetails.workEnvironment) ? (
                specialtyDetails.workEnvironment.map((paraData, index) => (
                  <p key={index}>{paraData}</p>
                ))
              ) : (
                <p>{specialtyDetails.workEnvironment}</p>
              )}
            </>
          ) : null}

          <h3 className="mt-0">
            {specialtyDetails.uniList.length > 1
              ? 'Top Universities & Colleges specializing in'
              : 'The following institution specializes in'}{' '}
            {specialtyDetails.specialtyJob}
          </h3>
          {/* {specialtyDetails.specialtyInfo.map((specialtyPara, index) => (
            <p key={index}>{specialtyPara}</p>
          ))} */}
          {specialtyDetails.uniList.length > 0 && (
            <>
              <ul>
                {specialtyDetails.uniList.map((uni, index) => (
                  <li key={index}>{uni}</li>
                ))}
              </ul>
            </>
          )}
          {specialtyDetails.nobelList.length > 0 &&
            specialtyDetails.nobelInfo.length > 0 && (
              <>
                <h3>Nobel Laureates in {specialtyDetails.specialtyJob} </h3>
                {Array.isArray(specialtyDetails.nobelInfo) ? (
                  specialtyDetails.nobelInfo.map((nobelPara, index) => (
                    <p key={index}>{nobelPara}</p>
                  ))
                ) : (
                  <p>{specialtyDetails.nobelInfo}</p>
                )}

                {specialtyDetails.uniList.length > 0 && (
                  <>
                    <ul>
                      {specialtyDetails.nobelList.map((laureate, index) => (
                        <li key={index}>
                          <strong>{laureate.split(': ')[0]}</strong>
                          <br />
                          {laureate.split(': ')[1]}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}

          {specialtyDetails.academicList.length > 0 && (
            <>
              <h3>
                Notable Academics specializing in{' '}
                {specialtyDetails.specialtyJob}
              </h3>
              {specialtyDetails.academicInfo.map((academicPara, index) => (
                <p key={index}>{academicPara}</p>
              ))}
              {specialtyDetails.academicList.length > 0 && (
                <>
                  <ul>
                    {specialtyDetails.academicList.map((academic, index) => (
                      <li key={index}>
                        <strong>{academic.split(': ')[0]}</strong>
                        <br />
                        {academic.split(': ')[1]}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
          {specialtyDetails.salaryExpectations.length > 0 ? (
            <>
              <h3>Salary Expectations</h3>
              {Array.isArray(specialtyDetails.salaryExpectations) ? (
                specialtyDetails.salaryExpectations.map((paraData, index) => (
                  <p key={index}>{paraData}</p>
                ))
              ) : (
                <p>{specialtyDetails.salaryExpectations}</p>
              )}
            </>
          ) : null}
          {specialtyDetails.industryAssociations.length > 0 && (
            <>
              <h3>{specialtyDetails.specialtyJob} Industry Associations</h3>
              {specialtyDetails.academicInfo.map((paraData, index) => (
                <p key={index}>{paraData}</p>
              ))}
              {specialtyDetails.industryAssociations.length > 0 && (
                <>
                  <ul>
                    {specialtyDetails.industryAssociations.map(
                      (data, index) => (
                        <li key={index}>
                          <strong>{data.split(': ')[0]}</strong>
                          <br />
                          <a
                            href={data.split(': ')[1]}
                            target="_blank"
                            className="link link-aj"
                          >
                            {data.split(': ')[1]}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </>
          )}

          <h3>
            Considering a career in {specialtyDetails.specialtyJob}? Here's a
            run down!
          </h3>
          {specialtyDetails.promo.map((promoPara, index) => (
            <p key={index}>{promoPara}</p>
          ))}
          {/* <ul>
            <li>
              <Link
                href={`/jobs?q=${encodeURIComponent(
                  specialtyDetails.specialtyJob
                )}%20Research`}
              >
                Research jobs in {specialtyDetails.specialtyJob}
              </Link>
            </li>
            <li>
              <Link
                href={`/jobs?q=${specialtyDetails.specialtyJob}%20Lecturer`}
              >
                Lecturer jobs in {specialtyDetails.specialtyJob}
              </Link>
            </li>
            <li>
              <Link
                href={`/jobs?q=${specialtyDetails.specialtyJob}%20University`}
              >
                University jobs in {specialtyDetails.specialtyJob}
              </Link>
            </li>
            <li>
              <Link
                href={`/jobs?q=${specialtyDetails.specialtyJob}%20Higher%20Ed`}
              >
                Higher Ed jobs in {specialtyDetails.specialtyJob}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=${specialtyDetails.specialtyJob}%20jobs`}>
                {specialtyDetails.specialtyJob} Jobs
              </Link>
            </li>
          </ul> */}

          <TalentPool
            cta={`Join the ${specialtyDetails.specialtyJob} Academic Talent Pool`}
          />
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 q={specialtyDetails.specialtyJob} l="" />
            </div>
            {/* <SearchResults
              q={{ q: '', l: specialtyDetails.specialty }}
              filterOff={true}
            /> */}
            <SearchResults1
              q={{
                // filter1: [
                //   {
                //     category: specialtyDetails.jobCategory,
                //     filter: '',
                //   },
                // ],
                q: specialtyDetails.specialtyJob,
                l: '',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
