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
    alt = '',
  } = categoriesAustralia.find((item) => item.Name === category) || {};

  let heading = Title;

  if (h1 && h1 !== '') {
    heading = h1;
  }

  const titleParts = splitTitle(heading);

  return (
    <div className="overflow-y w-full">
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
      <section className="jobs_grid job_post_search_container">
        <div className={`side_panel mt-6`}>
          <h2>Hi</h2>
          <JobFilter />
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
          <div className="side_panel">
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
