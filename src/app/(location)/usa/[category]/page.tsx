import Link from 'next/link';
import { regionData } from '@/data/usaPositions';
import SearchResults from '@/components/SearchResults';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import TalentPool from '@/components/TalentPoolCTA';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';

const regionName = 'United States';

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
    category2 = '',
    filter2 = '',
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
    category2 = '',
    filter2 = '',
  } = regionData.find((item) => item.Name === category) || {};

  const paras = content1.split('\n');

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <main className="content-grid flex-col md:gap-2">
      {/* <Link className="text-[#f4a10c] " href="/canada-positions/">
        View all Lecturer Jobs →
      </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold md:text-right text-gray-500 pb-4 capitalize m-0">
            {Title}
          </h1>
          <div className=" prose text-1-cols text-gray-700">
            {paras.map((para, index) => (
              <p key={index} className="">
                {para}
              </p>
            ))}
            <TalentPool />
          </div>
        </div>
      </div>

      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: category2,
              filter: filter2,
            },
          ],
          r: "United States",
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

            {/* <section className="jobs_grid job_post_search_container">
         <div className="filters_panel">
           <div className="filters_content">
             <JobFilter />
           </div>
         </div>
         <div className="listings_panel">
           <div className="listings_content">
        

             <SearchResults1
               q={{
                 filter1: [
                   { category: 'Country', filter: 'United States' },
                   { category: 'JobType', filter: 'Human Resources' },
                 ],
                 q: '',
                 l: '',
               }}
             />
    
           </div>
         </div>
    </section> */}
          </div>
        </div>
      </section>
    </main>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
