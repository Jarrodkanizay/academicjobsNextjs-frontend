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
          <h3 className="mt-0">
            {specialtyDetails.uniList.length > 1
              ? 'Top Universities & Colleges'
              : 'The following institution'}{' '}
            specializing in 
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

          <h3>
            Considering a career in {specialtyDetails.specialtyJob}? Here's a
            run down!
          </h3>
          {specialtyDetails.promo.map((promoPara, index) => (
            <p key={index}>{promoPara}</p>
          ))}
          <h3>Are you looking for…</h3>
          <ul>
            <li>
              <Link href={`/jobs?q=Research&l=${specialtyDetails.specialty}`}>
                Research jobs in {specialtyDetails.specialty}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=Lecturer&l=${specialtyDetails.specialty}`}>
                Lecturer jobs in {specialtyDetails.specialty}
              </Link>
            </li>
            <li>
              <Link href={`/jobs?q=University&l=${specialtyDetails.specialty}`}>
                University jobs in {specialtyDetails.specialty}
              </Link>
            </li>
            <li>
              <Link
                href={`/jobs?q=Higher%20Ed&l=${specialtyDetails.specialty}`}
              >
                Higher Ed jobs in {specialtyDetails.specialty}
              </Link>
            </li>
            <li>
              <Link
                href={`/jobs?q=Dream%20job&l=${specialtyDetails.specialty}`}
              >
                Dream job in {specialtyDetails.specialty}
              </Link>
            </li>
          </ul>

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
                filter1: [
                  {
                    category: specialtyDetails.jobCategory,
                    filter: '',
                  },
                ],
                q: '',
                l: '',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
