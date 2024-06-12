// import Link from 'next/link';
import citiesData from '@/data/cities.json';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
// import type { Metadata } from 'next';

type MetadataTypes = {
  Name?: string | undefined;
  Title?: string | undefined;
  Description?: string | undefined;
  Keyword?: string | undefined;
  content?: any | undefined;
};

export async function generateMetadata({ params, searchParams }: any) {
  // console.log(params)
  let { category } = params;
  // console.log(citiesData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    image = ''
  } = citiesData.find((item) => item.Name === category) || {};

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
  };
}

//const Lecturer = () => {
export default function Page({ params, searchParams }: any) {
  // console.log("````````````````````params````````````````````")
  // console.log(params)
  let { category } = params
  // console.log(citiesData)
  // console.log(category);
  category = category?.replace(/-/g, " ");
  // console.log(category);   

  const city = citiesData.find((item) => item.Name === category);

  if (!city) {
    console.error('City not found');
    return null; // or return an error component, or handle this situation in another appropriate way
  }


  const {
    Name,
    Title: Title,
    Description,
    Keyword,
    content: content1,
    image: image,
    alt: alt
  } = city;

  let ausHeader, otherHeader, content;

  ausHeader =
    <div className="w-full relative">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover object-center absolute top-0 left-0"
      />
      <div className="hero-content mx-auto items-start justify-start py-12 relative z-10">
        <h1 className="md:text-5xl font-bold md:text-left text-white pb-4 m-0">
          {Title}
          <p className="mt-4 text-white rounded-lg">
            {content1}
          </p>
        </h1>
      </div>
    </div>


  otherHeader =
    <div className="content-grid flex-col md:gap-2">
      <div className="bg-slate-200 full-width">
        <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">
            {Name}
          </h1>
          <p className="px-7 mb-4 mt-1">{content1}</p>
        </div>
      </div>
    </div>

  const ausCities = ["melbourne", "sydney", "brisbane", "perth", "adelaide", "canberra", "gold coast", "hobart"]

  content = (
    <>{ausCities.includes(Name) ? ausHeader : otherHeader}
      <div className="content-grid flex-col md:gap-2">
        <JobSearchBox l={Name} />

        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              <SearchResults q={{ q: '', l: Name }} />
            </div>
          </div>
        </section>

      </div></>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
