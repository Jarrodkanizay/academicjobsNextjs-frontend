import Image from 'next/image';
import Link from 'next/link';

const TopUniversities = () => {
  return (
    <>
      <div className=" mx-auto mt-8 mb-8">
        <h2 className="underline-full">Top University Employer Rankings</h2>
        <div className="bg-white flex flex-col">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-8 text-left">
            <div className="/academic-hub/happiness-and-academics/">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="mb-0 card-title">
                    Top University Employers USA
                  </h2>
                </div>
                <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/academic-job-postings/harvard-university.jpg"
                    alt="Happiness and Academics: Scott Galloway's Algebra of hub"
                  />
                </figure>
                <div className="p-4 pl-6 text-gray-500 flex flex-col gap-2.5">
                  <Link href="/employers/harvard-university/3100">
                    Harvard University
                  </Link>
                  <Link href="/employers/massachusetts-institute-of-technology/3103">
                    Massachusetts Institute of Technology (MIT)
                  </Link>
                  <Link href="/employers/stanford-university/3101">
                    Stanford University
                  </Link>
                  <Link href="/employers/university-of-california-berkeley/3105">
                    University of California Berkeley (UCB)
                  </Link>
                  <Link href="/employers/caltech/3128">
                    California Institute of Technology (Caltech)
                  </Link>
                  <Link href="/employers/yale-university/3125">
                    Yale University
                  </Link>
                  <Link href="/employers/princeton-university/3104">
                    Princeton University
                  </Link>
                  <Link href="/employers/columbia-university/3127">
                    Columbia University
                  </Link>
                </div>
                {/* <Link
                  href={'/academic-hub/'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
            {/* /top-10-australian-universities */}
            <div className="">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="mb-0 card-title">
                    {' '}
                    Top University Employers Australia{' '}
                  </h2>
                </div>
                <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/academic-job-postings/university-of-sydney.jpg"
                    alt="Top Academic Jobs Australia"
                    className="h-[5rem]"
                  />
                </figure>
                <div className="p-4 pl-6 text-gray-500 flex flex-col gap-2.5">
                  <Link href="/employers/queensland-university-of-technology-qut-/3786">
                    Queensland University of Technology (QUT)
                  </Link>
                  <Link href="/employers/bond-university/3785/">
                    Bond University
                  </Link>
                  <Link href="/employers/university-of-canberra/3821">
                    University of Canberra (UC)
                  </Link>
                  {/* <Link href="/employers/the-university-of-sydney/3171">
                    The University of Sydney
                  </Link> */}
                  <Link href="/employers/australian-national-university/3739">
                    Australian National University (ANU)
                  </Link>
                  <Link href="/employers/monash-university/3182/">
                    Monash University
                  </Link>
                  <Link href="/employers/the-university-of-western-australia/3173">
                    University Western Australia (UWA)
                  </Link>
                  <Link href="/employers/the-university-of-queensland/3172">
                    The University of Queensland
                  </Link>
                  <Link href="/employers/the-university-of-tasmania-utas-/3867">
                    The University of Tasmania (UTAS)
                  </Link>
                </div>
                {/* <Link
                  href={'/top-10-australian-universities'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
            <div className="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="mb-0 card-title">
                    Top University Employers UK
                  </h2>
                </div>
                <figure>
                  <Image
                    width={1280}
                    height={380}
                    src="/academic-job-postings/top-universities-worldwide.jpg"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                    className="h-[5rem]"
                  />
                </figure>
                <div className="p-4 pl-6 text-gray-500 flex flex-col gap-2.5">
                  <Link href="/employers/university-of-oxford/3099">
                    University of Oxford
                  </Link>
                  <Link href="/employers/imperial-college-london/3129">
                    Imperial College London
                  </Link>
                  <Link href="/employers/university-of-cambridge/12635">
                    University of Cambridge
                  </Link>
                  <Link href="/employers/university-of-edinburgh/12681">
                    University of Edinburgh
                  </Link>
                  <Link href="/employers/king-s-college-london/3151">
                    Kings College London
                  </Link>

                  <Link href="/employers/university-college-london-ucl/3135">
                    University College London (UCL)
                  </Link>
                  <Link href="/employers/university-of-manchester/3833">
                    University of Manchester
                  </Link>
                  <Link href="/employers/university-of-glasgow/12713">
                    University of Glasgow
                  </Link>
                </div>
                {/* <Link
                  href={'/academic-hub/'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopUniversities;
