import Link from 'next/link';
import LinkIcon from '@/components/icons/LinkIcon';

type Props = {
  title?: string;
  heading: string;
  localObj: any;
  locations: any;
  region?: string;
  category: string;
  shortName?: string;
};

const LocalJobLinks = ({
  title = '',
  heading,
  localObj,
  locations,
  region = 'Global',
  category,
  shortName = category,
}: Props) => {
  // let queryString = `?r=${region}&l=${location}&q=&page=0&category=&currentMiddleCategory=&filter0=[{"category":"${category1}","filter":"${filter1}"},{"category":"${category2}","filter":"${filter2}"},{"category":"${category3}","filter":"${filter3}"}]&mode=default`;

  let {
    Name = '',
    Title = '',
    h1 = '',
    h2 = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
    Image: imageSrc = '',
    category1 = '',
    filter1 = '',
    category2 = '',
    filter2 = '',
    category3 = '',
    filter3 = '',
    alt = '',
    type = '',
  } = localObj; // This is not being used at the moment but once search query string is fixed to work with all levels then we can add the additional features (categories, filters, etc)

  const urlPrefix = `?r=${region}&`;
  const urlLocation = `l=${locations[0]}&`; //Not used just a visual for more poor brain
  const urlCategory = `filter0=[{"category":"Position Type",`;
  const urlFilter = `"filter":"Research"}]&`;
  const urlSuffix = `mode=default`;

  return (
    <>
      {category.toLowerCase() === 'indigenous' ? null : (
        <div className="links_section mb-16">
          {/* <p>{category}</p> */}
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
                        .replace(
                          /\s+/g,
                          '-'
                        )}${urlPrefix}l=${location}&${urlCategory}${urlFilter}${urlSuffix}`}
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
