import Image from 'next/image';
import citiesData from '@/data/cities.json';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import SearchResults3 from '@/components/SearchResults3';
// import type { Metadata } from 'next';

export async function generateMetadata({ params, searchParams }) {
  let { category } = params;
  category = category?.replace(/-/g, ' ');
  //let category = 'tasmania';
  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    image = '',
  } = citiesData.find((item) => item.Name === category) || {};
  return {
    title: Title,
    description: Description,
    keywords: Keyword,
  };
}
//const Lecturer = () => {
export default function Page({ params, searchParams }) {
  // console.log("````````````````````params````````````````````")
  // console.log(params)
  let { category } = params;
  category = category?.replace(/-/g, ' ');
  // console.log(category);
  const city = citiesData.find((item) => item.Name === category);
  console.log(city);
  if (!city) {
    console.error('City not found');
    return null; // or return an error component, or handle this situation in another appropriate way
  }
  const {
    Name = '',
    h1 = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1,
    image = '',
    alt: alt,
    filter = '',
  } = city;
  let ausHeader, otherHeader, content;
  ausHeader = (
    <div className="w-full relative">
      <Image
        src={image}
        alt={alt}
        className="w-full h-full object-cover object-center absolute top-0 left-0"
        width={2000}
        height={1000}
      />
      <div className="hero-content mx-auto items-start justify-start py-12 relative z-10">
        <h1 className="md:text-5xl font-bold md:text-left text-white pb-4 m-0">
          {h1 ? h1 : Title}
          <p className="mt-4 text-white rounded-lg">{content1}</p>
        </h1>
      </div>
    </div>
  );
  otherHeader = (
    <div className="w-full relative">
      {image ? (
        <Image
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center absolute top-0 left-0"
          width={2000}
          height={1000}
        />
      ) : null}
      <div className="hero-content mx-auto items-start justify-start py-12 relative z-10">
        <h1 className="md:text-5xl font-bold md:text-left text-white pb-4 m-0">
          {h1 ? h1 : Title}
          <p className="mt-4 text-white rounded-lg leading-6">{content1}</p>
        </h1>
      </div>
    </div>
  );
  const ausCities = [
    'melbourne',
    'sydney',
    'brisbane',
    'perth',
    'adelaide',
    'canberra',
    'gold coast',
    'tasmania',
  ];
  content = (
    <>
      {ausCities.includes(Name) ? ausHeader : otherHeader}
      <div className="content-grid flex-col md:gap-2">
        <AdvancedSearchBar p={filter} />
        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              <SearchResults3 p={filter} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
