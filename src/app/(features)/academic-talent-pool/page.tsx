import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import TalentPoolForm from '@/components/forms/TalentPoolForm';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import InputBlock2 from '@/components/forms/InputBlock2';
export const metadata: Metadata = {
  title: 'Academic Talent Pool', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Join our exclusive Talent Pool to connect and collaborate with top employers and academics worldwide. Sign up today to explore exciting job opportunities, gain industry exposure, and fast-track your career. Perfect for academics seeking to elevate their career paths.',
  keywords:
    'talent pool, career opportunities, job seekers, find academic networking, academic exposure, professional networking, industry exposure, employment, career growth, job application, talent database, professional development, sign up, global job market',
};
//WIP
export default function Page() {
  const cardIconSize = 90;

  return (
    <main className="content-grid">
      <h1>
        {/* Unlock Your Academic Potential!  */}
        Join Our Talent Pool Today!
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <TalentPoolForm maxWidth="700" />
        {/* Contact Numbers */}
        <div className="flex flex-col w-full pb-8 bg-slate-100 py-4 px-8 rounded-2xl lg:min-w-[450px] lg:max-w-[500px] mt-8 lg:mt-0">
          <h2 className="underline-full mb-6">Checkbox Definitions</h2>
          <ul className="ul mb-auto">
            <li>
              <strong>Collaborations: </strong>Engage in high-level academic
              collaborations and research partnerships.
            </li>
            <li>
              <strong>Keynote Speaking: </strong>
              Access opportunities for keynote speaking at prestigious
              conferences and events.
            </li>
            <li>
              <strong>Media Visibility: </strong>Gain visibility through media
              features and interviews.
            </li>
            <li>
              <strong>Career Progression: </strong>
              Open doors to career progression and attract attention from
              headhunters.
            </li>
            <li>
              <strong>Seek IP Investors: </strong>
              Connect with investors to fund and support your innovative
              intellectual property projects.
            </li>
            <li>
              <strong>Academic Rankings: </strong>
              Become eligible for recognition in academic rankings and awards.
            </li>
          </ul>
          <Image
            src="/talent-pool/talent-pool-juggler.jpg"
            width={500}
            height={500}
            alt="Talent Pool Juggler"
            className="rounded-xl mx-auto mt-8"
          />
        </div>
      </div>
      <div className="text-black rounded-2xl mt-8 mb-16">
        <div className="p-4 rounded-3xl bg-slate-100 pt-7">
          <ul className="ul">
            <li>
              <strong>Dive into a World of Opportunities</strong> - Sign up
              today and connect with prestigious academic institutions
              worldwide. Explore cutting-edge job openings and collaborate with
              world-renowned academics.
            </li>
            <li>
              <strong>Elevate Your Career</strong> - Whether you're seeking
              groundbreaking research projects or looking to shape the minds of
              the next generation, our platform is your gateway to extraordinary
              possibilities.
            </li>
            <li>
              <strong>Expand Your Network</strong> - Collaborate, innovate, and
              grow with the best in academia. Be part of a vibrant community
              where ideas flourish and careers soar.
            </li>
            <li>
              <strong>Find Your Perfect Match</strong> - Our tailored job
              matching system brings you opportunities that align perfectly with
              your expertise and aspirations.
            </li>
            <li>
              <strong>Share and Gain Insights</strong> - Engage in meaningful
              dialogues, share your expertise, and gain unique perspectives from
              fellow academics globally.
            </li>
          </ul>
          <p className="p-6">
            Don't Wait — The Opportunity for Academic Excellence Awaits! Sign Up
            Now and Propel Your Career to New Heights!
          </p>
        </div>
      </div>
      {/* <div className="container mx-auto flex flex-col"> */}
      <h2 className="underline-full">
        Power-up Your Academic Potential: Join Our Dynamic Talent Pool Today!
      </h2>
      <h3 className="my-5">
        We are looking for people who want to connect and collaborate!
      </h3>
      <div className="text-2-cols">
        <p className="mb-6">
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
        </p>
        {/* Option 2
        Elevate your academic journey by becoming part of our vibrant community.
      We're on the lookout for individuals eager to connect, collaborate, and
      share their passions. Joining our talent pool offers you a unique space to
      connect with like-minded academics, exchange ideas, and find inspiration.
      Connect, Collaborate, and Thrive Are you driven by a passion for academia?
      We're building a community where your ideas and interests can flourish.
      Join our talent pool to stay informed about exciting opportunities
      tailored to your interests. Don't miss out – take the first step towards
      academic excellence by connecting with us today! */}
        {/* Suggested new text */}
      </div>
      {/* Cards */}
      <h2 className="text-center my-8">Join the community</h2>
      {/* <div className="container mx-auto"> */}
      <ul className="m-0 p-0 text-left items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card 1  */}
        <div className="card bg-slate-100 mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Professional-Services-icon.png"
              alt="Professional Services icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Collaborations</h2>
            <p>
              Engage in a high-level academic collaborations and research
              partnerships.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Success-icon.png"
              alt="Client Success icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Media Expert</h2>
            <p>Gain visibility through media features and interviews.</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card bg-slate-100 mb-4 shadow-xl">
          <figure className="px-10 pt-10 ">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Internship-icon.png"
              alt="Internship icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Keynote Speaking</h2>
            <p>
              Access opportunities for keynote speaking at prestigious
              conferences and events{' '}
            </p>
          </div>
        </div>
        {/* card 4  */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Corporate-Services-icon.png"
              alt="Corporate Services icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Partner with Industry</h2>
            <p>
              Bridge theory and practical applications to foster collaborative
              research, share resources, and enhance the real-world impact of
              your work.
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div className="card bg-slate-100  mb-4 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Care-icon.png"
              alt="Client Care icon"
              width={cardIconSize}
              height={cardIconSize}
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
              alt="Innovation icon"
              width={cardIconSize}
              height={cardIconSize}
              className="rounded-xl max-h-[100px] "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Patent your Intellectual Property</h2>
            <p>
              Connect with investors to fund and support your innovative
              intellectual property projects.
            </p>
          </div>
        </div>
      </ul>
      {/* </div> */}
      {/* </div> */}
    </main>
  );
}
