import MyForm from "@/components/MyForm";
import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import Link  from "next/link";

export default function Home() {
  
  return (
    <>
 {/* Page heading */}
 <div className="container mx-auto mt-8 mb-6">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#f4a10c] text-white rounded-full shadow-xl mb-8">
          {/* Unlock Your Academic Potential!  */}
          Join Our Talent Pool Today!
        </h1>
      </div>

      <div className="container mx-auto flex flex-col">
        <h2 className="font-bold text-xl md:text-xl mt-12 text-center">
          Join Our Talent Pool Today!
        </h2>
        <h2 className=" font-bold text-xl md:text-xl mt-12 text-center">
          We are looking for people who want to connect and collaborate!
        </h2>
        <p className="text-center">
          we want to create a community of academics who share similar passions,
          interests an ideas. So that you have a space to connect, mtivate and
          ...
        </p>
        <p className="text-center">
          if this sounds like you, we want to hear from you!
        </p>
        <p className="text-center mb-8">
          Join our talent pool to be notified when the perfect opportunity for
          you arrives - simply select the relevant interests below.
        </p>

        {/* Suggested new text */}
        {/* <p className="mb-6">
          Our Talent Pool network is a rich community to innovate, and
          collaborate. We're fostering a dynamic community of passionate
          academics dedicated to sharing ideas, sparking innovation, and driving
          academic excellence. Our platform is more than a mere network; it's a
          thriving space for like-minded scholars to engage, motivate, and forge
          lasting professional connections.
        </p>
        <p>
          Dive into Academic Jobs' Talent Pool for tailored academic
          opportunities. Be the first to discover roles that perfectly match
          your skills and interests. Select your preferred areas, and receive
          notifications about positions that align with your unique academic
          profile. Seize the opportunity to find your ideal academic role and
          become part of a community that truly values your expertise and
          vision.
        </p> */}

        {/* Cards */}
        <h2 className="mb-8 font-bold text-xl md:text-xl px-7 mt-12 py-2 text-center">
          Join the community
        </h2>
        <div className="container mx-auto">
          <ul className="m-0 p-0 mx-5 text-left items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* card 1  */}
            <div className="card bg-slate-100 mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Professional-Services-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Collaborations</h2>
                <p>
                  Enagage in a high-level academic collaborations and research
                  partnerships.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="card bg-slate-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Success-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Media Expert</h2>
                <p>Gain visbility through media features and nterviews.</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="card bg-slate-100 mb-4 shadow-xl">
              <figure className="px-10 pt-10 ">
                <Image
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Internship-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Keynote Speaking</h2>
                <p>
                  Access opportunities for keynote speaking at prestigious
                  conferences and events{" "}
                </p>
              </div>
            </div>

            {/* card 4  */}
            <div className="card bg-slate-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Corporate-Services-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Partner with Industry</h2>
                <p>
                  Bridge theory and practical applications to foster
                  collaborative research, share resources, and enhance the
                  real-world impact of your work.
                </p>
              </div>
            </div>
            {/* card 5 */}
            <div className="card bg-slate-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Care-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Headhunted</h2>
                <p>
                  Open doors to career progression and attract attention from
                  headhunters.
                </p>
              </div>
            </div>
            {/* card 6 */}
            <div className="card bg-slate-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Innovation-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Patent your Intellectual Property
                </h2>
                <p>
                  Connect with investors to fund and support your innovative
                  intellectual property projects.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>

   
          </>
);

}
