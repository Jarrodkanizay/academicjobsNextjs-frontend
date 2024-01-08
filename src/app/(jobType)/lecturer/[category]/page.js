import Link from 'next/link';
import lecturerData from "@/data/lecturer.json";
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
//const Lecturer = () => {
export default function Page({ params, searchParams }) {
  console.log("````````````````````params````````````````````")
  console.log(params)
  let { category } = params
  console.log(lecturerData)
  console.log(category);
  category = category?.replace(/-/g, " ");
  console.log(category);

  const {
    Title,
    Description,
    Keyword,
    content: content1,
  } = lecturerData.find((item) => item.Name === category);
  let content;
  //console.log(Name);
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

      <div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
      <h1 className="text-3xl font-normal text-right text-gray-400 m-0">
              <span className="text-6xl font-bold  text-right text-gray-500 pb-4">{Title}</span> 
              </h1>
              
            <div>
            
            <p className="px-7 mb-4 mt-1">
            {content1}
            </p>
            <p className="px-7">
            Lecturers can find university jobs online, compare competitive salaries,
        generous benefits, and supportive work environments.
   
        Sign up as a ‘Global Academic’ to get an academic ranking, and to get
        the opportunity to collaborate with national and international partners,
        to work with some of the best minds in your discipline, and access
        world-class facilities and resources.
            </p>
         
            </div>
          </div>
          </div>

      <JobSearchBox q="lecturer" />
      <SearchResults q={{ q: 'lecturer' || 0 }} />
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
};
