import Link from 'next/link';
import LinkIcon from '@/components/icons/LinkIcon';

type Props = {
  heading: string;
  locations: any;
  region?: string;
  category: string;
  shortName?: string;
};

const LocalJobLinks = ({
  heading,
  locations,
  region = 'Global',
  category,
  shortName = category,
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
                        )}?r=${region}&l=${location}&q=&page=0&category=&currentMiddleCategory=&filter0=[{"category":"Position Type","filter":"${category}"}]&mode=default`}
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
