import Image from 'next/image';
import citiesAndUniversitiesData from '@/data/citiesAndUniversities.json';
// import SearchResults from '@/components/SearchResults';
// import JobSearchBox from '@/components/JobSearchBox';
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
  } = citiesAndUniversitiesData.find((item) => item.Name === category) || {};
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
  const cityOrUni = citiesAndUniversitiesData.find(
    (item) => item.Name === category
  );
  console.log(cityOrUni);
  if (!cityOrUni) {
    console.error('City or University not found');
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
    filter: filter6 = '',
    footer_h2 = '',
    footer_content = '',
    country = '',
  } = cityOrUni;
  let ausHeader, otherHeader, content;

  // FIXME: Convert this to a component
  ausHeader = (
    <div className="w-full relative mb-8">
      <Image
        src={image || image !== '' ? image : '/banner-icons/global.png'}
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
    <div className="w-full relative mb-8">
      <Image
        src={image || image !== '' ? image : '/banner-icons/global.png'}
        alt={alt}
        className="w-full h-full object-cover object-center absolute top-0 left-0"
        width={2000}
        height={1000}
      />
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
      {cityOrUni.type === 'uni' ? (
        <section className="jobs_grid job_post_search_container uni_jobs_grid">
          <div className={`filters_panel mt-6`}>
            {
              <div className={``}>
                <div>
                  <div
                  // dangerouslySetInnerHTML={{ __html: company_description1 }}
                  />
                  <p className="bg-slate-400">Left Panel</p>
                </div>
              </div>
            }
          </div>
          <div className="listings_panel">
            <div className="relative pb-16">
              <div className="search_panel">
                {/* <AdvancedSearchBar
                sidebarView={true}
                p={{
                  filter1: [
                    { category: 'InstitutionName', filter: company_name },
                  ],
                }}
              /> */}
              </div>
              <SearchResults3 searchMessage="Related Jobs Found" />
            </div>
          </div>
        </section>
      ) : (
        <>
          <AdvancedSearchBar p={{ r: country }} />
          <div className="content-grid">
            <section className="jobs_grid job_post_search_container">
              <div className="filters_panel">
                <div className="filters_content">
                  <JobFilter />
                </div>
              </div>
              <div className="listings_panel">
                <div className="listings_content">
                  <SearchResults3 p={filter6} />
                </div>
              </div>
            </section>
            <div>
              <h2>{footer_h2}</h2>
              <div dangerouslySetInnerHTML={{ __html: footer_content }} />
            </div>
          </div>
        </>
      )}
    </>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
