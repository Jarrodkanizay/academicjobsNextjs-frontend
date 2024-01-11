import Link from 'next/link';

const JobCategoryLinks = () => {
  return (
    <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 px-2">
      <li className="hover:underline">
        <Link href="/lecturer">Lecturer{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/research/">Research{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/professor/">Professor{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/executive/">Executive{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/faculty/">Faculty{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/admin/">Admin{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/hr-jobs/">HR{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/student/">Student{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/graduate/"> Graduate{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/postdoc/"> Postdoc{'  '}</Link>
      </li>
      <li className="hover:underline">
        <Link href="/phd/">PhD</Link>
      </li>
    </ul>
  );
};

export default JobCategoryLinks;
