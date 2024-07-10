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

  return (
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
          className="container px-4 glass flex rounded-2xl"
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
          {
            <div className={``}>
              <div>
                <div
                // dangerouslySetInnerHTML={{ __html: company_description1 }}
                />
                <h2 className="text-2xl text-gray-blue underline-full">
                  {footer_h2}
                </h2>
                <div dangerouslySetInnerHTML={{ __html: footer_content }} />
              </div>
            </div>
          }
        </div>
        <div className="listings_panel">
          <div className="relative pb-16">
            <div className="search_panel">
              <AdvancedSearchBar p={{ r: 'Australia' }} />
            </div>
            <SearchResults3
              searchMessage={`Jobs from ${cityOrUni.jobs_country}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
