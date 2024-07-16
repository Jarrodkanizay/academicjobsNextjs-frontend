import Image from 'next/image';
import Link from 'next/link';
// import cityAndUniversityData from '@/data/citiesAndUniversities.json';
import { cityAndUniversityData } from '@/data/citiesAndUniversities';

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
  } = cityAndUniversityData.find((item) => item.Name === category) || {};
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
  const cityOrUni = cityAndUniversityData.find(
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
      {cityOrUni.type === 'uni'
        ? null
        : ausCities.includes(Name)
        ? ausHeader
        : otherHeader}
      {cityOrUni.type === 'uni' ? (
        <>
          <div
            className="w-full p-8 flex flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                image
                  ? image
                  : 'https://img.daisyui.com/images/stock/photo-1481026469463-66327c86e544.jpg'
              })`,
              backgroundSize: `cover`,
            }}
          >
            <div
              className="container px-4 glass md:flex rounded-2xl"
              style={{ backgroundColor: 'transparent' }}
            >
              <figure className="flex items-center bg-white my-4 rounded-xl p-6">
                <Image
                  src={cityOrUni.logo_src}
                  alt={cityOrUni.logo_alt}
                  width={300}
                  height={300}
                  className="max-w-[250px]"
                />
              </figure>
              <div class="card-body bg-none">
                <h1 class="text-black">{h1 ? h1 : Title}</h1>{' '}
                <p className="leading-tight">{cityOrUni.content}</p>
                <div class="justify-end card-actions">
                  <Link class="btn btn-aj" href={`${cityOrUni.to_href}`}>
                    {cityOrUni.acronym || cityOrUni.acronym !== ''
                      ? `More about ${cityOrUni.acronym}`
                      : 'Learn More'}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="jobs_grid job_post_search_container uni_jobs_grid">
            <div className={`filters_panel mt-6`}>
              <div className={``}>
                <div>
                  <div
                  // dangerouslySetInnerHTML={{ __html: company_description1 }}
                  />
                  <h2 className="text-2xl text-gray-blue underline-full">
                    {footer_h2}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: footer_content }} />
                  <Link href={cityOrUni.job_links} className="link link-aj">
                    View all other academic Jobs Australia
                  </Link>
                  <Link
                    href="https://www.aheia.edu.au"
                    className="link link-aj"
                    target="_blank"
                  >
                    <Image
                      src={'/partners/aheia/aheia-logo-transparent.png'}
                      alt={'AHEIA Logo'}
                      width={300}
                      height={300}
                      className="max-w-[250px] mt-16"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="listings_panel">
              <div className="relative pb-16">
                <div className="search_panel">
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
                </div>
                <SearchResults3 searchMessage={`${cityOrUni.uni_name} Jobs`} />
              </div>
            </div>
          </section>
        </>
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
