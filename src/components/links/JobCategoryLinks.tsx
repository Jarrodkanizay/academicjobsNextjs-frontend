import Link from 'next/link';
type JobCategoryLinksProps = {
  nativeOn?: boolean;
};
const JobCategoryLinks = ({ nativeOn }: JobCategoryLinksProps) => {
  return (
    <ul className="faculty-container flex flex-wrap gap-3 md:gap-4 items-center justify-center text-[#f4a10c] px-2">
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/lecturer?r=Global&filter0=[{"category":"PositionType","filter":"Lecturer/Instructor"}]'>Lecturer{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/research?r=Global&?r=Global&filter0=[{"category":"PositionType","filter":"Lecturer/Instructor"}]'>Research{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/professor?r=Global&filter0=[{"category":"PositionType","filter":"Professor"}]'>Professor{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline md:hidden">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/hr-jobs?r=Global&filter0=[{"category":"master_category_job_type","filter":"Human Resources"}]'>HR{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline md:hidden">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/student-jobs/">Student{'  '}</Link>
        </h3>
      </li>
      {nativeOn ? (
        <li className="hover:underline">
          <h3 style={{ marginBottom: 0 }}>
            <Link href="/Australia/indigenous">Indigenous</Link>
          </h3>
        </li>
      ) : null}
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/graduate">Graduate{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/postdoc?r=Global&q=postdoc'>Postdoc{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline md:hidden">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/phd">PhD</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/student-jobs">Student</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/industry">Industry</Link>
        </h3>
      </li>
    </ul>
  );
};
export default JobCategoryLinks;
