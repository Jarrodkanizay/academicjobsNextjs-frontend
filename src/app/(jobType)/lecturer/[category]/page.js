import Link from 'next/link';
import lecturerData from "@/data/lecturer.json";
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';

//const Lecturer = () => {
  export default function Page({ params, searchParams }) {
    console.log("````````````````````params````````````````````")
    console.log(params)
    console.log(searchParams)
    const { category } = params
console.log(lecturerData)

  const {
    Name,
    Title,
    Description,
    Keyword,
    content: content1,
  } = lecturerData.find((item) => item.Name === category);


  lecturer = lecturer?.replace(/-/g, " ");
  console.log(lecturer);




  let content;
  console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="container mx-auto flex-col gap-2">

      <h1 className="max-h-50 overflow-y  border border-[#f4a10c] text-gray-500 p-4 mb-4 rounded-lg shadow-lg">
        {Title}
      </h1>
      <Link className="text-[#f4a10c] mb-4 " href="/lecturer/">
        View all Lecturer Jobs →
      </Link>
      <div className="max-h-50 overflow-y  border border-[#f4a10c] text-gray-500 p-4 mb-4 rounded-lg shadow-lg">
        {content1}
      </div>

      <JobSearchBox q="lecturer" />
      <SearchResults q={{ q: 'lecturer' || 0 }} />


     
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
};

