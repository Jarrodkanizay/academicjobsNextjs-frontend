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
    Title,
    Description,
    Keyword,
    content: content1,
  } = city;

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="content-grid flex-col md:gap-2">
      {/* <Link className="text-[#f4a10c] " href="/cities/">
        View all Lecturer Jobs →
      </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">
            {Name}
          </h1>
          <p className="px-7 mb-4 mt-1">{content1}</p>
        </div>
      </div>

      <JobSearchBox q={Name} />
      <SearchResults q={{ q: Name }} />
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
