import Image from 'next/image';
import Link from 'next/link';

import AdvancedSearchBar from '@/components/AdvancedSearchBar';
import SearchResults3 from '@/components/SearchResults3';

export async function generateMetadata() {
  return {
    title: `The No. 1 Australian University Jobs Board`,
    description: `Search 100 Australian university and higher education jobs. View our academic vacancies and join our talent pool. New academic jobs added daily.`,
    keywords: `australian university jobs,australian university jobs,australian university jobs`,
  };
}

const cityAndUniversityLinks = [
  {
    name: `ACU Jobs`,
    link: `/university-jobs/australian-catholic-university-acu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20Australian%20Catholic%20University.png`,
  },
  {
    name: `ANU Jobs`,
    link: `/university-jobs/australian-national-university-anu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20Australian%20National%20University.png`,
  },
  {
    name: `Bond University Jobs`,
    link: `/university-jobs/bond-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20bond_university_logo-australia.jpeg`,
  },
  {
    name: `CDU Jobs`,
    link: `/university-jobs/charles-darwin-university-cdu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20Charles%20Darwin%20University%20%20logo.jpeg`,
  },
  {
    name: `CSU Jobs`,
    link: `/university-jobs/charles-sturt-university-csu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20CSU.png`,
  },
  {
    name: `CQU Jobs`,
    link: `/university-jobs/cquniversity-cqu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20CQ%20Uni.png`,
  },
  {
    name: `Curtin Jobs`,
    link: `/university-jobs/curtin-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20Curtin%20University%20logo.png`,
  },
  {
    name: `Deakin Jobs`,
    link: `/university-jobs/deakin-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20Deakin%20University%20logo.svg`,
  },
  {
    name: `ECU Jobs`,
    link: `/university-jobs/edith-cowan-university-ecu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20ecu%20logo.png`,
  },
  {
    name: `Federation Jobs`,
    link: `/university-jobs/federation-university-australia`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20Federation%20university%20logo.jpeg`,
  },
  {
    name: `Flinders Jobs`,
    link: `/university-jobs/flinders-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20Flinders%20University%20logo.png`,
  },
  {
    name: `Griffith University Jobs`,
    link: `/university-jobs/griffith-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/AcademicJobs_Griffith_University.webp`,
  },
  {
    name: `JCU Jobs`,
    link: `/university-jobs/james-cook-university-jcu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20JCU.jpeg`,
  },
  {
    name: `La Trobe University Jobs`,
    link: `/university-jobs/la-trobe-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20La%20trobe%20.png`,
  },
  {
    name: `Macquarie University Jobs`,
    link: `/university-jobs/macquarie-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20macquarie-university.jpeg`,
  },
  {
    name: `Monash University Jobs`,
    link: `/university-jobs/monash-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20%20Monash.png`,
  },
  {
    name: `Murdoch Jobs`,
    link: `/university-jobs/murdoch-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20murdoch%20university%20logo.png`,
  },
  {
    name: `QUT Jobs`,
    link: `/university-jobs/queensland-university-of-technology-qut`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academicjob%20QUT.png`,
  },
  {
    name: `RMIT Jobs`,
    link: `/university-jobs/rmit-university`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20RMIT.svg`,
  },
  {
    name: `SCU Jobs`,
    link: `/university-jobs/southern-cross-university-scu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20Southern%20Cross%20University.png`,
  },
  {
    name: `Swinburne Jobs`,
    link: `/university-jobs/swinburne-university-of-technology`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20Swinburne%20University%20of%20Technology%20logo.png`,
  },
  {
    name: `The University of Adelaide Jobs`,
    link: `/university-jobs/the-university-of-adelaide`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20The%20University%20of%20Adelaide%20logo.gif`,
  },
  {
    name: `UniMelb Jobs`,
    link: `/university-jobs/the-university-of-melbourne-unimelb`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20University%20of%20Melbourne.jpeg`,
  },
  {
    name: `The University of Newcastle Jobs`,
    link: `/university-jobs/the-university-of-newcastle`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20University%20of%20newcastle.png`,
  },
  {
    name: `UND Jobs`,
    link: `/university-jobs/the-university-of-notre-dame-australia-und`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20university%20of%20notre%20dame%20logo.png`,
  },
  {
    name: `UQ Jobs`,
    link: `/university-jobs/the-university-of-queensland-uq`,
    logo_src: `https://www.academicjobs.com/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2FAcademic%20Jobs%20University%20of%20Queensland.png&w=384&q=75`,
  },
  {
    name: `USYD Jobs`,
    link: `/university-jobs/the-university-of-sydney-usyd`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/USYD_academic_jobs.jpg`,
  },
  {
    name: `UTAS Jobs`,
    link: `/university-jobs/the-university-of-tasmania-utas`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs_Utas.jpeg`,
  },
  {
    name: `UWA Jobs`,
    link: `/university-jobs/the-university-of-western-australia-uwa`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20uwa%20logo.jpg`,
  },
  {
    name: `UC Jobs`,
    link: `/university-jobs/university-of-canberra-uc`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20University%20of%20canberra.png`,
  },
  {
    name: `UNE Jobs`,
    link: `/university-jobs/university-of-new-england-une`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/461011bcaf5b5e723e897c33f049f169_XL.jpg`,
  },
  {
    name: `UNSW Jobs`,
    link: `/university-jobs/university-of-new-south-wales-unsw`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20UNSW.png`,
  },
  {
    name: `UniSA Jobs`,
    link: `/university-jobs/university-of-south-australia-unisa`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/academic%20jobs%20uniSA%20logo.jpg`,
  },
  {
    name: `UniSQ Jobs`,
    link: `/university-jobs/university-of-southern-queensland-unisq`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20university%20of%20southern%20queensland.png`,
  },
  {
    name: `UniSC Jobs`,
    link: `/university-jobs/university-of-the-sunshine-coast-unisc`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20Uni%20Sunshine%20Coast.jpeg`,
  },
  {
    name: `UTS Jobs`,
    link: `/university-jobs/university-of-technology-sydney-uts`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/uts-logo-150h.png`,
  },
  {
    name: `UOW Jobs`,
    link: `/university-jobs/university-of-wollongong-uow`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/logo-shorthand-horizontal.png`,
  },
  {
    name: `VU Jobs`,
    link: `/university-jobs/victoria-university-vu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/Academic%20Jobs%20Victoria%20University.png`,
  },
  {
    name: `WSU Jobs`,
    link: `/university-jobs/western-sydney-university-wsu`,
    logo_src: `https://academicjobs.s3.amazonaws.com/img/university-logo/image_2023-10-13_151108330.png`,
  },
];

export default function Page() {
  return (
    <>
      <div
        className="w-full p-8 flex flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(/uni-campuses/generic-glass-building.jpg)`,
          backgroundSize: `cover`,
        }}
      >
        <div
          className="container px-4 glass md:flex rounded-2xl"
          style={{ backgroundColor: 'transparent' }}
        >
          <figure className="flex items-center justify-center my-4 rounded-xl">
            <Image
              src={'/icons/heart.svg'}
              alt={'Australian University Jobs List'}
              width={300}
              height={300}
              className="md:max-w-[250px]"
            />
          </figure>
          <div class="card-body bg-none">
            <h1 class="text-black">
              The No. 1 Australian University Jobs List
            </h1>
            <p className="leading-tight">
              Find all Australian University Jobs, our comprehensive resource
              for academic and university positions across Australia's top
              universities. The best site for Uni Jobs, Australia University
              Jobs website!
            </p>
            <div class="justify-end card-actions">
              <Link
                class="btn btn-aj"
                href={`/university-jobs?r=Global&l=&q=&lon=0&lat=0&page=0&category=&currentMiddleCategory=&filter0=%255B%255D&mode=default`}
              >
                Global Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="jobs_header container mt-16 flex flex-col md:flex-row gap-16 items-center">
        <Link
          href="https://www.aheia.edu.au"
          className="link link-aj"
          target="_blank"
        >
          <Image
            src={'/partners/aheia/aheia-logo-transparent.png'}
            alt={'AHEIA Logo'}
            width={300}
            height={300}
            className="max-w-[250px]"
          />
        </Link>
        <p className="px-4">
          Find the best University jobs in Australia at{' '}
          <Link href="/" className="link link-aj">
            AcademicJobs.com
          </Link>
          , in partnership with{' '}
          <Link
            href="https://www.aheia.edu.au"
            className="link link-aj"
            target="_blank"
          >
            AHEIA
          </Link>
          . Explore top academic, research, and university positions across
          prestigious Australian universities. Start or expand your academic
          career today!
        </p>
        <Link href="/" className="link link-aj">
          <Image
            src={'/academic-jobs-logo.png'}
            alt={'AcademicJobs Logo'}
            width={300}
            height={300}
            className="max-w-[250px]"
          />
        </Link>
      </div>
      <section className="jobs_grid job_post_panel_container">
        <div className={`post_panel employer_panel mt-6`}>
          {
            <div className={``}>
              <div>
                <h2 className="text-2xl text-gray-blue underline-full">
                  Australian University Jobs List{' '}
                </h2>
                <p className="mb-8">
                  Stay ahead in your career with the latest job openings in
                  lecturing, research, postdoc and administration. Optimise your
                  job search with tailored listings and job alerts designed to
                  connect you with prestigious institutions. Explore
                  opportunities now and advance your academic journey in
                  Australia.
                </p>
                <ul className="remove_bullet grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {cityAndUniversityLinks.map((uni, index) => (
                    <li
                      key={index}
                      className="m-0 p-0 rounded-3xl cursor-pointer"
                    >
                      <Link href={uni.link}>
                        <div class="flip-card rounded-3xl" tabIndex="0">
                          <div class="flip-card-inner rounded-3xl">
                            <div class="flip-card-front rounded-3xl p-4">
                              <Image
                                src={uni.logo_src}
                                alt={'AcademicJobs Logo'}
                                width={180}
                                height={100}
                                className="max-w-full max-h-full"
                              />
                            </div>
                            <div class="flip-card-back rounded-3xl p-4">
                              <h3 className="m-0 p-0">{uni.name}</h3>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
        </div>
        <div className="listings_panel">
          <div className="relative pb-16">
            <div className="search_panel">
              <AdvancedSearchBar sidebarView={true} p={{ r: 'Australia' }} />
            </div>
            <SearchResults3 searchMessage={`Jobs in Australia`} />
          </div>
        </div>
      </section>
    </>
  );
}
