import Image from 'next/image';
// import Link from 'next/link';
import type { Metadata } from 'next';
import countries from '@/data/CountryList.json';

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
export default function myPage() {
  const cardIconSize = 90;
  return (
    <main className="content-grid">
      <h1>
        {/* Unlock Your Academic Potential!  */}
        Join Our Talent Pool Today!
      </h1>

      <div className="talent-pool px-7 container mx-auto py-16 border-[1px] border-slate-500 bg-slate-50 p-4 pt-4 rounded-3xl mt-8 mb-12">
        {/* <h4 className="font-semibold text-slate-400 text-2xl mt-4">
          Talent Pool Sign Up
        </h4> */}
        <form
          className="mt-4 "
          // onSubmit={handleSubmit}
        >
          <h3 className="underline-full mb-6">Your Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={1}
                  type="text"
                  id="first-name-input"
                  name="01_First_Name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="First Name"
                  autoComplete="given-name"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* Last name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={2}
                  type="text"
                  id="last-name-input"
                  name="02_Last_Name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder=" Last Name"
                  autoComplete="family-name"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* Academic Title */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={3}
                  type="text"
                  id="name-input"
                  name="03_Academic_Title"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Academic Title (Role or Position)"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* phone */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={4}
                  type="tel"
                  id="phone-input"
                  name="04_phone"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  autoComplete="tel"
                  placeholder="Phone Number"
                  // onChange={handleChange}
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* Email */}
            <div className="col-span-2">
              <div className="relative">
                <input
                  tabIndex={5}
                  type="email"
                  id="email-input"
                  name="05_Email"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Email"
                  autoComplete="email"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
          </div>
          <h3 className="underline-full mt-10 mb-6">
            What are you interested in?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Seeking Opportunities */}
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  tabIndex={6}
                  type="checkbox"
                  id="06_Collaborations_Checkbox"
                  name="06_Collaborations_Checkbox"
                  // value={isChecked1 ? 'Collaborate with Top Academics' : ''}
                  className="checkbox checkbox-warning"
                  // checked={isChecked1}
                  // onChange={handleCheckboxChange1}
                />
                <span className="label-text ml-2 mr-auto">Collaborations</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  tabIndex={7}
                  type="checkbox"
                  id="keynote"
                  name="07_Keynote_Checkbox"
                  // value={isChecked2 ? 'Keynote Speaking' : ''}
                  className="checkbox checkbox-warning"
                  // checked={isChecked2}
                  // onChange={handleCheckboxChange2}
                />
                <span className="label-text ml-2 mr-auto">
                  Keynote Speaking
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  tabIndex={8}
                  type="checkbox"
                  id="media"
                  name="08_Media_Checkbox"
                  // value={isChecked3 ? 'Media' : ''}
                  className="checkbox checkbox-warning"
                  // checked={isChecked3}
                  // onChange={handleCheckboxChange3}
                />
                <span className="label-text ml-2 mr-auto">
                  Media Visibility
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  tabIndex={9}
                  type="checkbox"
                  id="career-job-opportunities"
                  name="09_Career_Job_Opportunities_Checkbox"
                  // value={isChecked4 ? 'Career Job Opportunities' : ''}
                  className="checkbox checkbox-warning"
                  // checked={isChecked4}
                  // onChange={handleCheckboxChange4}
                />
                <span className="label-text ml-2 mr-auto">
                  Career Progression (Open to Job Offers)
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  tabIndex={10}
                  type="checkbox"
                  id="seek-ip-investors"
                  name="10_Seek_IP_Investors_Checkbox"
                  // value={isChecked5 ? 'Seek IP Investors' : ''}
                  className="checkbox checkbox-warning"
                  // checked={isChecked5}
                  // onChange={handleCheckboxChange5}
                />
                <span className="label-text ml-2 mr-auto">
                  Seek IP Investors
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  tabIndex={11}
                  type="checkbox"
                  id="partner-with-"
                  name="11_Partner_with_Industry_Checkbox"
                  // value={isChecked6 ? 'Partner with Industry' : ''}
                  className="checkbox checkbox-warning"
                  // checked={isChecked6}
                  // onChange={handleCheckboxChange6}
                />
                <span className="label-text ml-2 mr-auto">
                  Partner with Industry
                </span>
              </label>
            </div>
          </div>
          {/* Academic Details Section */}
          <h3 className="underline-full mt-10 mb-6">Academic Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Institution */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={12}
                  type="text"
                  id="institution-input"
                  name="12_Institution"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Institution/University (Current, Last or Attended)"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* Department/Faculty */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={13}
                  type="text"
                  id="department-faculty-input"
                  name="13_Department_Faculty"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Department/Faculty"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* Specialty */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={14}
                  type="text"
                  id="specialty-input"
                  name="14_Specialty"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Specialty"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            {/* Location */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabIndex={15}
                  type="text"
                  id="location-input"
                  name="15_Institution_Location"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Institution Location"
                  // onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative">
                <select
                  tabIndex={16}
                  id="country-select"
                  name="16_Country"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  // onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a country...
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <i className="required">*</i>
              </div>
            </div>
            {/* Profile */}
            <div className="col-span-2">
              <div className="relative">
                <textarea
                  tabIndex={17}
                  id="profile-input"
                  name="17_Profile"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="OPTIONAL - Please write a brief profile noting your key skills, experience, and achievements."
                  // onChange={handleChange}
                />
                <i className="required">*</i>
                <label
                  htmlFor="profile-input"
                  className="absolute left-4 top-2 text-gray-600 transition-all"
                ></label>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative">
              <p required-data>
                Any field with an asterisk (<span className="asterisk">*</span>)
                is a required field!
              </p>
            </div>
          </div>
          <div className="text-right mt-6">
            <button tabIndex={30} type="submit" className="btn btn-aj">
              Join Talent Pool
            </button>
          </div>
          {/* {submitStatus === 'error' && (
            <p className="mt-4 text-center text-2xl font-bold text-red-500">
              An unknown error occurred.
            </p>
          )} */}
        </form>
      </div>

      <h3 className="text-[#f4a10c] text-xl font-semibold mb-4">
        Checkbox Definitions
      </h3>
      <ul className="ul">
        <li>
          <strong>Collaborations: </strong>Engage in high-level academic
          collaborations and research partnerships.
        </li>
        <li>
          <strong>Keynote Speaking: </strong>
          Access opportunities for keynote speaking at prestigious conferences
          and events.
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
              alt="Shoes"
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
              alt="Shoes"
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
              alt="Shoes"
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
              alt="Shoes"
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
              alt="Shoes"
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
              alt="Shoes"
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
