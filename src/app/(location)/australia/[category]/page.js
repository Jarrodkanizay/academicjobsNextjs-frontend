import Image from 'next/image';
import { regionData } from '@/data/australiaPositions';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';

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
  } = regionData.find((item) => item.Name === category) || {};

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
    image: imageSrc,
  };
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
    Description = '',
    Keyword = '',
    content: content1 = '',
    category2 = '',
    filter2 = '',
    Image: imageSrc = '',
  } = regionData.find((item) => item.Name === category) || {};

  const titleParts = splitTitle(Title);

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

      <main className="content-grid flex-col md:gap-2">
        <AdvancedSearchBar
          p={{
            r: "Australia",
            filter1: [
              {
                category: category2,
                filter: filter2,
              },
            ],
          }}
        />
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
      </main>
    </div>
  );
}
