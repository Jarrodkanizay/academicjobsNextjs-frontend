import Link from 'next/link';
import LinkIcon from '@/components/icons/LinkIcon';

type Props = {
  heading: string;
  locations: any;
  region?: string;
  category: string;
  shortName?: string;
  category1?: string;
  filter1?: string;
  category2?: string;
  filter2?: string;
  category3?: string;
  filter3?: string;
};

const LocalJobLinks = ({
  heading,
  locations,
  region = 'Global',
  category,
  shortName = category,
  category1 = '',
  filter1 = '',
  category2 = '',
  filter2 = '',
  category3 = '',
  filter3 = '',
}: Props) => {
  return (
    <>
      {category.toLowerCase() === 'indigenous' ? null : (
        <div className="links_section mb-16">
          <h2>{heading}</h2>
          <nav aria-label={heading}>
            <ul>
              {locations.map((location) => (
                <li key={location}>
                  <p>
                    <Link
                      href={`${category
                        .toLowerCase()
                        .replace(/\s+/g, '-')}-jobs-${location
                        .toLowerCase()
                        .replace(
                          /\s+/g,
                          '-'
                        )}r=${region}&l=${location}&q=&page=0&category=&currentMiddleCategory=&filter0=[{"category":${category1},"filter":${filter1}},{"category":${category2},"filter":${filter2}},{"category":${category3},"filter":${filter3}}]&mode=default`}
                    >
                      <LinkIcon forceClass="pink_icon" /> {shortName} Jobs 
                      {location}
                    </Link>{' '}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default LocalJobLinks;
// research assistant jobs perth
//${category}-jobs-${location}?r=${region}&l=${location}&q=&page=0&category=&currentMiddleCategory=&filter0=[{"category":"Position Type","filter":"${category}"}]&mode=default
