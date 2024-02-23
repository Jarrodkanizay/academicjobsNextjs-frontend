import { cityData } from '@/data/cityData';
import { CityDataTypes } from '@/types/types';
import HeroBanner from '@/components/HeroBanner';
import { formatDate } from '@/utils/utilityScripts';
import SearchResults from '@/components/SearchResults';

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: any) {
  const cityDetails = await cityData.find((city) => city.slug === params.slug);

  if (!cityDetails) {
    throw new Error(`No blog post found for slug: ${params.slug}`);
  }

  return {
    title: cityDetails.title,
    description: cityDetails.description,
    keywords: cityDetails.keywords,
  };
}

export default function BlogPostPage({ params }: Props) {
  const cityDetails = cityData.find((city) => city.slug === params.slug);

  if (!cityDetails) {
    return <div>City was not found!</div>;
  }

  return (
    <main className="blog-post cities content-grid">
      <HeroBanner
        h1={cityDetails.h1 || ''}
        para1={cityDetails.description || ''}
        src={cityDetails.image_url || ''}
        alt={cityDetails.alt || ''}
        reorder={false}
        externalLink={true}
        imageShadow={false}
      />
      <h2 className="underline-full">
        Learn about Universities, Colleges & Academic in the City of{' '}
        {cityDetails.city}
      </h2>
      <section className="text-2-cols">
        <h3 className="mt-0">
          About the Colleges & Universities in {cityDetails.city}
        </h3>
        {cityDetails.cityInfo.map((cityPara, index) => (
          <p key={index}>{cityPara}</p>
        ))}

        {cityDetails.uniList.length > 0 && (
          <>
            <ul>
              {cityDetails.uniList.map((uni, index) => (
                <li key={index}>{uni}</li>
              ))}
            </ul>
          </>
        )}

        <h3>Nobel Laureates from {cityDetails.city}</h3>
        {cityDetails.nobelInfo.map((nobelPara, index) => (
          <p key={index}>{nobelPara}</p>
        ))}

        {cityDetails.uniList.length > 0 && (
          <>
            <ul>
              {cityDetails.nobelList.map((laureate, index) => (
                <li key={index}>{laureate}</li>
              ))}
            </ul>
          </>
        )}

        <h3>Notable Academics Practicing in {cityDetails.city}</h3>
        {cityDetails.academicInfo.map((academicPara, index) => (
          <p key={index}>{academicPara}</p>
        ))}

        {cityDetails.academicList.length > 0 && (
          <>
            <ul>
              {cityDetails.academicList.map((academic, index) => (
                <li key={index}>{academic}</li>
              ))}
            </ul>
          </>
        )}

        <h3>Considering moving to {cityDetails.city}? Here's a run down!</h3>
        {cityDetails.promo.map((promoPara, index) => (
          <p key={index}>{promoPara}</p>
        ))}
      </section>
      <SearchResults q="" l={cityDetails.city} />
    </main>
  );
}
