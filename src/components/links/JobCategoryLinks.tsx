import Link from 'next/link';

type JobCategoryLinksProps = {
  nativeOn?: boolean;
};

const JobCategoryLinks = ({ nativeOn }: JobCategoryLinksProps) => {
  return (
    <ul className="faculty-container flex flex-wrap gap-2 md:gap-4 items-center justify-center text-gray-400 px-2">
      <li className="hover:underline">
        <Link href="/lecturer">Lecturer{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/research/">Research{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/professor/">Professor{'  '}</Link>
      </li>
      {/* <li className="hover:underline md:hidden">
        <Link href="/executive/">Executive{'  '}</Link>
      </li> */}
      {/* <li className="hover:underline md:hidden">
        <Link href="/faculty/">Faculty{'  '}</Link>
      </li> */}
      {/* <li className="hover:underline md:hidden">
        <Link href="/staff-jobs/">Staff{'  '}</Link>
      </li> */}
      <li className="hover:underline md:hidden">
        <Link href="/hr-jobs/">HR{'  '}</Link>
      </li>
      <li className="hover:underline md:hidden">
        <Link href="/student-jobs/">Student{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/industry/">Industry{'  '}</Link>
      </li>
      {nativeOn ? (
        <li className="hover:underline">
          <Link href="/Australia/indigenous">Indigenous</Link>
        </li>
      ) : null}
      <li className="hover:underline">
        <Link href="/graduate"> Graduate{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/postdoc"> Postdoc{'  '}</Link>
      </li>
      <li className="hover:underline md:hidden">
        <Link href="/phd">PhD</Link>
      </li>
    
 
  
    </ul>
  );
};

export default JobCategoryLinks;
