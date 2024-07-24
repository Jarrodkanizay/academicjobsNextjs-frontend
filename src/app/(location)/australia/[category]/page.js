import Image from 'next/image';
import { categoriesAustralia } from '@/data/australiaPositions';
import { australiaLocations } from '@/data/australiaLocations';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import SearchResults1 from '@/components/SearchResults1';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import LocalJobLinks from '@/components/LocalJobLinks';
import LinkIcon from '@/components/icons/LinkIcon';
import Link from 'next/link';

const genericCity = {
  Name: `generic`,
  Title: `University Jobs`,
  h1: `University Jobs `,
  h2: ``,
  content: `Find all research fellow, research assistant and research associate positions across various fields, including science, medicine, engineering and mathematics from top universities.`,
  Description: `Find more than 50 research assistant, research fellow and research associate jobs at top Universities. Join the talent pool now. New jobs added daily`,
  Keyword: `University Jobs`,
  category2: `master_category_job_type`,
  filter2: ``,
  Image: ``,
  type: `city`,
};

export async function generateMetadata({ params, searchParams }) {
  let { category } = params;
  category = category?.replace(/-/g, ' ');

  // const {
  //   Name = '',
  //   Title = '',
  //   Description = '',
  //   Keyword = '',
  //   content: content1 = '',
  //   Image: imageSrc = '',
  // } = categoriesAustralia.find((item) => item.Name === category) || {};

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    Image: imageSrc = '',
  } = categoriesAustralia.find((item) => item.Name === category) || genericCity;

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
    image: imageSrc,
  };
}

function toTitleCase(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
}

const splitTitle = (title) => {
  const words = title.split(' ');
  const firstPart = words[0];
  const secondPart = words[1];
  const thirdPart = `${words[2]}`;
  const fourthPart = words.slice(3).join(' ');

  return [firstPart, secondPart, thirdPart, fourthPart];
};

export default function Page({ params }) {
  let { category, location } = params;
  category = category?.replace(/-/g, ' ');
  location = location?.replace(/-/g, ' ');

  const {
    Name = '',
    Title = '',
    h1 = '',
    h2 = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    category1 = '',
    filter1 = '',
    category2 = ``,
    filter2 = '',
    category3 = ``,
    filter3 = ``,
    Image: imageSrc = '',
    alt = '',
    type = '',
  } = categoriesAustralia.find((item) => item.Name === category) || genericCity;

  if (Name === 'generic') {
  }

  const region = 'Australia';
  const regionLinks = [
    {
      name: `University Jobs`,
      url: `/${region.toLowerCase()}`,
    },
    {
      name: `Lecturer jobs`,
      url: `/${region.toLowerCase()}/lecturer`,
    },
    {
      name: `Professor jobs`,
      url: `/${region.toLowerCase()}/professor`,
    },
    {
      name: `Postdoc jobs`,
      url: `/${region.toLowerCase()}/phd`,
    },
    {
      name: `University HR jobs`,
      url: `/${region.toLowerCase()}/hr-jobs`,
    },
  ];

  let heading = Title;

  let categoryProperCase = toTitleCase(category).trim();
  let shortName = categoryProperCase;

  if (categoryProperCase.toLowerCase().startsWith('hr')) {
    categoryProperCase = 'HR';
    shortName = categoryProperCase;
  }

  if (categoryProperCase.toLowerCase().startsWith('phd')) {
    categoryProperCase = 'PhD';
    shortName = 'PhD';
  }

  if (categoryProperCase.toLowerCase().startsWith('research'))
    categoryProperCase = `${categoryProperCase} Assistant`;

  if (h1 && h1 !== '') {
    heading = h1;
  }

  const titleParts = splitTitle(heading);

  return (
    <div className="overflow-y w-full">
      {type === 'city' ? (
        <div
          className="w-full p-8 flex flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              imageSrc ? imageSrc : '/uni-campuses/generic-glass-building.jpg'
            })`,

            backgroundSize: `cover`,
          }}
        >
          <div
            className="container max-w-[1200px] px-4 glass md:flex rounded-2xl"
            style={{ backgroundColor: 'transparent' }}
          >
            <div class="card-body bg-none">
              <h1 class="text-black p-0 m-0">{h1 ? h1 : Title}</h1>
              <p className="leading-tight">{content1}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full relative bg-amber-400">
          <Image
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-center absolute top-0 left-0"
            width={1920}
            height={1080}
          />
          <div className="hero-content mx-auto items-start justify-start py-12 relative z-10">
            <h1 className="md:text-5xl font-bold md:text-left text-white pb-4 m-0">
              {h1 ? h1 : Title}
              <p className="mt-4 text-white rounded-lg">{content1}</p>
            </h1>
          </div>
        </div>
      )}
      <AdvancedSearchBar
        p={{
          r: region,
          filter1: [
            {
              category: category2,
              filter: filter2,
            },
          ],
        }}
      />
      <section className="jobs_grid job_post_search_container">
        <div className={`side_panel`}>
          {type === 'city' ? (
            <div className="links_section mb-16">
              <h2>Other related jobs</h2>
              <nav aria-label="Other related jobs">
                <ul>
                  {regionLinks.map((link, index) => (
                    <li key={index}>
                      <p>
                        <Link href={link.url}>
                          <LinkIcon forceClass="pink_icon" /> {link.name}
                        </Link>
                      </p>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : (
            <LocalJobLinks
              heading="Browse by City"
              locations={australiaLocations.cities}
              region={region}
              category={categoryProperCase}
              shortName={shortName}
              category1={category1}
              filter1={filter1}
              category2={category2}
              filter2={filter2}
              category3={category3}
              filter3={filter3}
            />
          )}
          <JobFilter />
        </div>
        <div className="listings_panel">
          <div className="relative pb-16">
            {Name === 'indigenous' ? (
              <SearchResults1
                q={{
                  q: 'indigenous',
                  l: 'Australia',
                }}
              />
            ) : (
              <SearchResults3
                searchMessage={`${toTitleCase(Name)} ${
                  type !== 'city' ? 'Jobs in ' + region : ''
                }`}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
