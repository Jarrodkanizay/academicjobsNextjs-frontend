import Link from 'next/link';
type JobCategoryLinksProps = {
  nativeOn?: boolean;
};
const JobCategoryLinks = ({ nativeOn }: JobCategoryLinksProps) => {
  return (
    <ul className="faculty-container flex flex-wrap gap-3 md:gap-4 items-center justify-center text-[#f4a10c] px-2">
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/lecturer'>Lecturer{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/research'>Research{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/professor'>Professor{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline md:hidden">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/hr-jobs'>HR{'  '}</Link>
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
      {/* <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/graduate">Graduate{'  '}</Link>
        </h3>
      </li> */}
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href='/postdoc'>Postdoc{'  '}</Link>
        </h3>
      </li>
      <li className="hover:underline md:hidden">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/phd">PhD</Link>
        </h3>
      </li>
      {/* <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/student-jobs">Student</Link>
        </h3>
      </li> */}
      <li className="hover:underline">
        <h3 style={{ marginBottom: 0 }}>
          <Link href="/industry">Industry</Link>
        </h3>
      </li>
    </ul>
  );
};
export default JobCategoryLinks;
