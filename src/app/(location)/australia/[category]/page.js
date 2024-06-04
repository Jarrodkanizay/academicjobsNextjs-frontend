import Link from 'next/link';
import { regionData } from '@/data/australiaPositions';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import TalentPool from '@/components/TalentPoolCTA';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
const regionName = 'Australia';
export async function generateMetadata({ params, searchParams }) {
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

const splitTitle = (title) => {
  const words = title.split(' ');
  const firstPart = words[0];
  const secondPart = words[1];
  const thirdPart = `${words[2]}`;
  const fourthPart = words.slice(3).join(' ');

  return [firstPart, secondPart, thirdPart, fourthPart];
};
//const Lecturer = () => {
export default function Page({ params, searchParams }) {
  // console.log('````````````````````params````````````````````');
  // console.log(params);
  let { category } = params;
  // console.log(regionData);
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);
  let {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    category2 = '',
    filter2 = '',
  } = regionData.find((item) => item.Name === category) || {};
  console.log(
    '-------------------------------------------------------------------'
  );
  console.log(category2, filter2);
  console.log(Name, category);
  if (category2 && filter2) {
    Name = '';
  }
  const paras = content1.split('\n');
  let content;
  const titleParts = splitTitle(Title);
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <>
      <div className="flex flex-col md:flex-row items-center text-white px-6 md:px-12 lg:px-24 py-12 w-full custom-gradient-pages relative" >


        <div className="ml-[15%] relative z-10 md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-[#fcecab]" style={{ letterSpacing: '0.3em' }}>
            {titleParts.map((part, index) => (
              <span key={index} className="block">{part}</span>
            ))}
          </h1>
        </div>
        {/* <div className=" relative z-10 md:w-1/2 text-center  text-black font-light">
          {paras.map((para, index) => (
                <p key={index} className="text-3xl ">
                  {para}
                </p>
              ))}
        </div> */}
        <div className="absolute inset-0 z-0 bottom-0 left-0 flex justify-center w-full h-full" style={{ transform: 'translateX(25%)' }}>
          <img src="/hr-jobs-banner-image.png" alt="Description of image" className="h-full object-cover" style={{ width: 'auto' }} />
        </div>
      </div>


      <main className="content-grid flex-col md:gap-2">


        <AdvancedSearchBar
          p={{
            filter1: [
              {
                category: 'Country',
                filter: 'Australia',
              },
              {
                category: category2,
                filter: filter2,
              },
            ],
            q: Name,
            l: regionName,
          }} />
        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              <SearchResults3 />
              {/* <SearchResults1
    q={{
      filter1: [
        {
          category: category2,
          filter: filter2,
        },
      ],
      q: Name,
      l: regionName,
    }}
  /> */}
            </div>
          </div>
        </section>
      </main></>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
