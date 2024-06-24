import Link from 'next/link';
import { regionData } from '@/data/newzealandPositions';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import TalentPool from '@/components/TalentPoolCTA';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import SearchResults3 from '@/components/SearchResults3';

// import type { Metadata } from 'next';

const regionName = 'New Zealand';

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
  // console.log(regionData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = regionData.find((item) => item.Name === category) || {};

  return {
    title: Title,
    description: Description,
    keywords: Keyword,
  };
}

//const Lecturer = () => {
export default function Page({ params, searchParams }: any) {
  // console.log('````````````````````params````````````````````');
  // console.log(params);
  let { category } = params;
  // console.log(regionData);
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
  } = regionData.find((item) => item.Name === category) || {};



  const splitTitle = (title) => {
    const words = title.split(' ');
    const firstPart = words[0];
    const secondPart = words[1];
    const thirdPart = `${words[2]}`;
    const fourthPart = words.slice(3).join(' ');

    return [firstPart, secondPart, thirdPart, fourthPart];
  };

  const paras = content1.split('\n');
  const titleParts = splitTitle(Title);

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (

    <><div className="flex flex-col md:flex-row items-center text-white px-6 md:px-12 lg:px-24 py-12 w-full custom-gradient-pages relative">


      <div className="ml-[15%] relative z-10 md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-medium mb-6 text-[#fcecab]" style={{ letterSpacing: '0.3em' }}>
          {titleParts.map((part, index) => (
            <span key={index} className="block">{part}</span>
          ))}
        </h1>

      </div>
      <div className="absolute inset-0 z-0 bottom-0 left-0 flex justify-center w-full h-full" style={{ transform: 'translateX(25%)' }}>
        <img src={image} alt="Description of image" className="h-full object-cover" style={{ width: 'auto' }} />
      </div>
    </div><main className="content-grid flex-col md:gap-2">
        {/* <Link className="text-[#f4a10c] " href="/canada-positions/">
      View all Lecturer Jobs →
    </Link> */}

        <AdvancedSearchBar />

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
      </main></>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
