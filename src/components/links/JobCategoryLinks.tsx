import Link from 'next/link';

type JobCategoryLinksProps = {
  nativeOn?: boolean;
};

const JobCategoryLinks = ({ nativeOn }: JobCategoryLinksProps) => {
  return (
    <ul className="faculty-container flex flex-wrap gap-3 md:gap-4 items-center justify-center text-[#f4a10c] px-2 mb-2">
      <li className="hover:underline">
        {/* <Link href='/lecturer'>Lecturer{'  '}</Link> */}
        <Link href='/lecturer?r=Global&filter0=[{"category":"PositionType","filter":"Lecturer/Instructor"}]'>
          Lecturer{'  '}
        </Link>
      </li>
      <li className="hover:underline">
        {/* <Link href='/research/'>Research{'  '}</Link> */}
        <Link href='/research?r=Global&?r=Global&filter0=[{"category":"PositionType","filter":"Lecturer/Instructor"}]'>
          Research{'  '}
        </Link>
      </li>
      <li className="hover:underline">
        {/* <Link href='/professor/'>Professor{'  '}</Link> */}
        <Link href='/professor?r=Global&filter0=[{"category":"PositionType","filter":"Professor"}]'>
          Professor{'  '}
        </Link>
      </li>
      <li className="hover:underline md:hidden">
        {/* <Link href='/hr-jobs/'>HR{'  '}</Link> */}
        <Link href='/hr-jobs?r=Global&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]'>
          HR{'  '}
        </Link>
      </li>
      <li className="hover:underline md:hidden">
        {/* <Link href='/student-jobs/'>Student{'  '}</Link> */}
        <Link href='/student-jobs/'>Student{'  '}</Link>
      </li>

      {nativeOn ? (
        <li className="hover:underline">
          <Link href='/Australia/indigenous'>Indigenous</Link>
        </li>
      ) : null}
      <li className="hover:underline">
        {/* <Link href='/graduate'> Graduate{'  '}</Link> */}
        <Link href='/graduate'> Graduate{'  '}</Link>
      </li>
      <li className="hover:underline">
        {/* <Link href='/postdoc'> Postdoc{'  '}</Link> */}
        <Link href='/postdoc'> Postdoc{'  '}</Link>
      </li>
      <li className="hover:underline md:hidden">
        {/* <Link href='/phd'>PhD</Link> */}
        <Link href='/phd'>PhD</Link>
      </li>
      <li className="hover:underline">
        {/* <Link href='/student-jobs'>Student</Link> */}
        <Link href='/student-jobs'>Student</Link>
      </li>
      <li className="hover:underline">
        {/* <Link href='/industry'>Industry</Link> */}
        <Link href='/industry'>Industry</Link>
      </li>
    </ul>
  );
};

export default JobCategoryLinks;
