import Link from 'next/link';
import { regionData } from '@/data/australiaPositions';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import TalentPool from '@/components/TalentPoolCTA';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
// import type { Metadata } from 'next';

const regionName = 'Australia';

const regionContent = {
  Name: 'indigenous',
  Title: 'Indigenous Australia Jobs',
  Description:
    'Do you want to work in a diverse and inclusive environment that supports Indigenous research, teaching and community engagement? If so, you have come to the right place!',
  Keyword: 'indigenous Academic Jobs Australia, indigenous AcademicJobs',
  content: `Seek all the best Indigenous Australian jobs at universities listed to advance your career in academics! At Academic Jobs we offer the most renowned uni jobs at the top Australian universities.
  Discover university jobs for First Nations peoples at the most renowned Australian universities. We are dedicated to ensuring that everyone is accepted and has equal opportunities to gain the best possible employment and job opportunities. Academic Jobs is committed to promoting First Nations people’s excellence in academia and fostering a culture of respect and recognition.
  The No.1 job board for Aboriginals and Torres Strait Islander academics in Australia. Academic Jobs provides an extensive list of opportunities for the future of your career, carefully sectioning the top Higher Ed jobs to find the best position for you.
  Find all the best jobs here…`,
  Image: "/banner-icons/indigenous-banner.png"
};

const paras = regionContent.content.split('\n');

export const metadata = {
  title: {
    absolute: regionContent.Title,
  },
  description: regionContent.Description,
  keywords: regionContent.Keyword,
};

const splitTitle = (title) => {
  const words = title.split(' ');
  const firstPart = words[0];
  const secondPart = words[1];
  const thirdPart = `${words[2]}`;
  const fourthPart = words.slice(3).join(' ');

  return [firstPart, secondPart, thirdPart, fourthPart];
};
// export async function generateMetadata({ params, searchParams }) {
//   // console.log(params)
//   let { category } = params;
//   // console.log(regionData)
//   // console.log(category);
//   category = category?.replace(/-/g, ' ');
//   // console.log(category);
//   const {
//     Name = '',
//     Title = '',
//     Description = '',
//     Keyword = '',
//     content: content1 = '',
//   } = regionData.find((item) => item.Name === category) || {};
//   return {
//     title: Title,
//     description: Description,
//     keywords: Keyword,
//   };
// }
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
  const titleParts = splitTitle(regionContent.Title);

  console.log(category2, filter2);
  console.log(Name, category);
  if (category2 && filter2) {
    Name = '';
  }
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
      {/* <div className=" relative z-10 md:w-1/2 text-center  text-black font-light">
      {paras.map((para, index) => (
            <p key={index} className="text-3xl ">
              {para}
            </p>
          ))}
    </div> */}
      <div className="absolute inset-0 z-0 bottom-0 left-0 flex justify-center w-full h-full" style={{ transform: 'translateX(25%)' }}>
        <img src={regionContent.Image} alt="Description of image" className="h-full object-cover" style={{ width: 'auto' }} />
      </div>
    </div>
    <main className="content-grid flex-col md:gap-2">
        {/* <Link className="text-[#f4a10c] " href="/canada-positions/">
      View all Lecturer Jobs →
    </Link> */}
        <JobSearchBox />

        <section className="jobs_grid job_post_search_container">
          <div className="filters_panel">
            <div className="filters_content">
              <JobFilter />
            </div>
          </div>
          <div className="listings_panel">
            <div className="listings_content">
              {/* <SearchResults q={{ q: Name, l: regionName }} /> */}
              <SearchResults1
                q={{
                  q: 'indigenous',
                  l: regionName,
                }} />
            </div>
          </div>
        </section>
      </main></>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
