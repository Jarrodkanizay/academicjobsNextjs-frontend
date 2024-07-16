import Image from 'next/image';
import { categoriesAustralia } from '@/data/australiaPositions';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import SearchResults1 from '@/components/SearchResults1';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import Link from 'next/link';

export async function generateMetadata({ params, searchParams }) {
  let { category } = params;
  category = category?.replace(/-/g, ' ');

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    Image: imageSrc = '',
  } = categoriesAustralia.find((item) => item.Name === category) || {};

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

// Example usage
let title = toTitleCase('hello world');
console.log(title); // Output: Hello World
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
    category2 = '',
    filter2 = '',
    Image: imageSrc = '',
  } = categoriesAustralia.find((item) => item.Name === category) || {};

  let heading = Title;

  if (h1 && h1 !== '') {
    heading = h1;
  }

  const titleParts = splitTitle(heading);

  return (
    <div className="overflow-y w-full">
      <div className="flex flex-col md:flex-row items-center text-white px-6 md:px-12 lg:px-24 py-12 w-full custom-gradient-pages relative">
        <div className="ml-[15%] relative z-10 md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1
            className="text-4xl md:text-5xl font-medium mb-6 text-[#fcecab]"
            style={{ letterSpacing: '0.3em' }}
          >
            {titleParts.map((part, index) => (
              <span key={index} className="block">
                {part}
              </span>
            ))}
          </h1>
        </div>
        <div
          className="absolute inset-0 z-0 bottom-0 left-0 flex justify-center w-full h-full"
          style={{ transform: 'translateX(25%)' }}
        >
          <Image
            src={imageSrc}
            alt="Description of image"
            className="h-full object-cover"
            style={{ width: 'auto' }}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <AdvancedSearchBar
        p={{
          r: 'Australia',
          filter1: [
            {
              category: category2,
              filter: filter2,
            },
          ],
        }}
      />
      <section className="jobs_grid job_post_search_container uni_jobs_grid">
        <div className={`filters_panel mt-6`}>
          <div className={``}>
            <div>
              <div
              // dangerouslySetInnerHTML={{ __html: company_description1 }}
              />
              <h2 className="text-2xl text-gray-blue underline-full m-0 mb-6">
                {h2}
              </h2>
              <p>{content1}</p>
              {/* <div dangerouslySetInnerHTML={{ __html: footer_content }} /> */}
              {/* <Link href={cityOrUni.job_links} className="link link-aj">
                View all other academic Jobs Australia
              </Link> */}
              {/* <Link
                href="https://www.aheia.edu.au"
                className="link link-aj"
                target="_blank"
              >
                <Image
                  src={'/partners/aheia/aheia-logo-transparent.png'}
                  alt={'AHEIA Logo'}
                  width={300}
                  height={300}
                  className="max-w-[250px] mt-16"
                />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="listings_panel">
          <div className="relative pb-16">
            {/* <div className="search_panel">
              <AdvancedSearchBar
                sidebarView={true}
                p={{
                  filter1: [
                    {
                      category: 'InstitutionName',
                      filter: cityOrUni.uni_name,
                    },
                  ],
                }}
              />
            </div> */}
            {Name === 'indigenous' ? (
              <SearchResults1
                q={{
                  q: 'indigenous',
                  l: 'Australia',
                }}
              />
            ) : (
              <SearchResults3
                searchMessage={`${toTitleCase(Name)} Jobs in Australia`}
              />
            )}
          </div>
        </div>
      </section>

      {/* <div className="content-grid">
        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              <SearchResults3 />
            </div>
          </div>
        </section>
        <div>
          {footer_h2 !== undefined || footer_h2 !== '' ? (
            <h2>{footer_h2}</h2>
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: footer_content }} />
        </div>
      </div> */}
    </div>
  );
}
