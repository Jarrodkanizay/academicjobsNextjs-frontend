//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import Europe from '@/components/topUnis/Europe';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import { getContentRegion } from '@/actions/getContentRegion';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs Europe',
  },
  description:
    'Find your ideal academic job in Europe and join the vibrant academic community at Europe university jobs such teaching, research or innovative opportunities.',
  keywords: 'Academic Jobs Europe. academic jobs in Europe, Europe University Jobs',
};

export default async function myPage() {
  const size = 180;
  const items = [
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: '/europe/admin',
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: '/europe/executive',
    },
  
   
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: '/europe/hr-jobs',
    },
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: '/europe/faculty',
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: '/europe/phd',
    },
    {
      src: '/home/academic-graduate-positions.png',
      alt: 'Academic PhD Positions',
      label: 'Student',
      link: '/europe/student',
    },
    {
      src: '/home/academic-lecturer-positions.png',
      alt: 'Academic Graduate Positions',
      label: 'Collaborate',
      link: '/europe/graduate',
    },
 
 
  ];
  const contentRegion = await getContentRegion();


  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;


  return (

   






 


     

<main className="content-grid">
        <div className="full-width md:h-[400px] h-[229px] gradient-aj">
          <div className="hero-bg-eu md:bg-center">
            
            <section className="wrapper md:flex ">
              <h2 className="sentence mt-[6rem]">
              <h2 className="sentence-eu text-amber-500 md:mb-[-5rem] mb-[-10rem]">All Academic positions in Europe</h2>
                <span className="mr-8">Find</span> <span className="md:hidden block my-[-1rem]"><br/></span>
                <div className="slidingVertical ">
                  <span>Opportunity</span>
                  <span>Connections</span>
                  <span>Happiness</span>
                  <span>Opportunity</span>
                  <span>Connections</span>
                </div>
              </h2>
            
            </section>


            <ul className="hero-icons md:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center md:mt-0 mt-[-11rem] hidden ">
              {items.map((item, index) => (
                <li  key={index}>
                  <Link className="grayscale hover:grayscale-0" href={item.link}>
                    <Image
                      src={item.src}
                      width={size}
                      height={size}
                      alt={item.alt}
                    />
                  </Link>
                  <Link className="mb-4" href={item.link}>
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="hero-icons flex flex-wrap gap-4 md:gap-8 mx-auto text-center items-center justify-center md:mt-0 mt-[-11rem] md:hidden ">
                            <li><a className="grayscale hover:grayscale-0" href="/europe/executive"><Image alt="Academic Executive Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-executive-positions.png&amp;w=384&amp;q=75"></Image></a>
            <a className="mb-4" href="/europe/executive"><p>Executive</p></a></li>
            <li><a className="grayscale hover:grayscale-0" href="/europe/faculty"><Image alt="Academic Faculty Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-human-resource-positions.png&amp;w=384&amp;q=75"></Image></a><a className="mb-4" href="/europe/faculty"><p>Faculty</p></a></li>
            <li><a className="grayscale hover:grayscale-0" href="/europe/admin"><Image alt="Academic Staff Positions" loading="lazy" width="180" height="180" decoding="async" data-nimg="1" src="/_next/image?url=%2Fhome%2Facademic-staff-positions.png&amp;w=384&amp;q=75"></Image></a><a className="mb-4" href="/europe/admin"><p>Staff/Admin</p></a></li></ul>


          </div>
        </div>


        <div className="w-full md:h-[6vh] max-w-[700px] flex flex-col items-top my-4 mx-auto mt-24">
          <JobSearchBoxHome />
        </div>
  

  


      {/* <h3 className="text-center ">We Are Europe's University Job Website</h3> */}
      
      <div className=" mt-[5rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link href="/Europe/lecturer/" >	Lecturer</Link></li>
            <li><Link href="/Europe/research/" >	Research </Link></li>
            <li><Link href="/Europe/professor/" >	Professor</Link></li>
          </ul>
          <li><Link href="/Europe/executive/" >	Executive</Link></li>
          <li><Link href="/Europe/admin/" >Admin</Link></li>
          <li><Link href="/Europe/hr-jobs/" >	HR</Link></li>
          <li><Link href="/Europe/student/" >	Student</Link></li>

        </ul>
      </div>


      <div className=" mt-2 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">

          <li><Link href="/online/" >	Online </Link></li>
          <li><Link href="/remote" >	Remote</Link></li>

          <li><Link href="/full-time/" >Full-Time</Link></li>
          <li><Link href="/part-time" >	Part-Time</Link></li>
          <li><Link href="/casual" >	Casual</Link></li>
        </ul>
      </div>
  

      
        
   
    
            
            
            
        <div id="section" className=" full-width py-4 full-width mb-[175px] bg-slate-200 mt-8">
  <div className="md:hero-content flex-col lg:flex-row mx-auto md:items-start py-12  ">
  <h1 className="text-3xl font-normal md:text-right text-gray-400 m-0 pb-8 px-7 md:px-0 ">
          <span className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 ">ACADEMIC&nbsp;JOBS Europe:</span> < br /> 
          </h1>
          
        <div>
        
        <p className="px-7 mb-4 mt-1">
        Discover what academic positions Europe has to offer through Academic Jobs! We value the importance of an easy to navigate website where your future academic career path is one click away. Academic Jobs provides an extensive list of opportunities for the future of your career in education, carefully sectioning the top Higher Ed jobs to curate the best fitting position for you.</p>
        <p className="px-7">
        The No.1 job board for academics in Europe, for all your university job requirements, from seeking to recruiting, look no further. At Academic Jobs, we value our customers' interests by providing the best career choices possible, making us the best job board for higher education positions globally.</p>
      
        </div>
      </div>
      </div>

      
      {/* <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]"> */}
        {/* <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs Europe</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs board is a platform that connects academic universities, institutions and organizations with qualified candidates across Europe. You can browse through hundreds of University Jobs in various disciplines. Whether you are looking for a permanent or a temporary position, a full-time or a part-time role, our academic job board can help you find your dream job in Europe.</p>
              <p className="font-semibold"></p>
            </div> */}
          {/* </div> */}
          {/* <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div> */}
                    <h2 className="">AcademicJobs Europe: All Academic Positions by university  </h2>
                    <Europe heading="" />
          
            </main>
         
  )
}
