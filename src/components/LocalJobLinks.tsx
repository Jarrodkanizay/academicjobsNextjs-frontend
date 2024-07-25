import Link from 'next/link';
import LinkIcon from '@/components/icons/LinkIcon';

type Props = {
  title?: string;
  heading: string;
  locations: any;
  region?: string;
  category: string;
  shortName?: string;
};

const LocalJobLinks = ({
  title = '',
  heading,
  locations,
  region = 'Global',
  category,
  shortName = category,
}: Props) => {
  // let queryString = `?r=${region}&l=${location}&q=&page=0&category=&currentMiddleCategory=&filter0=[{"category":"${category1}","filter":"${filter1}"},{"category":"${category2}","filter":"${filter2}"},{"category":"${category3}","filter":"${filter3}"}]&mode=default`;

  let queryString = '';
  return (
    <>
      {category.toLowerCase() === 'indigenous' ? null : (
        <div className="links_section mb-16">
          <p>{category}</p>
          <h2>{heading}</h2>
          <nav aria-label={heading}>
            <ul>
              {locations.map((location: any) => (
                <li key={location}>
                  <p>
                    <Link
                      href={`${category
                        .toLowerCase()
                        .replace(/\s+/g, '-')}-jobs-${location
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                    >
                      <LinkIcon forceClass="pink_icon" /> {shortName} Jobs 
                      {location}
                    </Link>
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
