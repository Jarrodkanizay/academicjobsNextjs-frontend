import SearchResults2 from '@/components/SearchResults';
import JobSearchBox2 from '@/components/JobSearchBox2';
import { StarRank } from '@/components/StarRank';
import WaveBackground from '@/components/WaveBackground';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import DashboardCard from '@/components/profile/DashboardCards';
import UserProfile from '@/components/profile/UserProfile';

import ProfileSideNav from '@/components/profile/ProfileSideNav';
import Image from 'next/image';
import Link from 'next/link';
// import JobSearchBox2 from '@/components/JobSearchBox2';
// import SearchResults from '@/components/SearchResults';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { Span } from 'next/dist/trace';
import { useState } from 'react';

type UserProps = {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  summary?: string;
  expertise?: string[];
  skills?: string[];
  teachingPhilosophy?: string;
  researchPhilosophy?: string;
  qualifications?: string[];
  profileStrength?: number;
  location?: string;
  rank?: number;
  jobTitle?: string;
  organization?: string;
  description?: string;
  avatar?: string;
  wavesOn?: boolean;
  bgColor?: string;
  savedJobs?: [];
  favorites?: [];
  logo?: string;
};
export default function Profile({
  id,
  firstName = '',
  lastName = '',
  email = '',
  summary = '',
  expertise = [],
  skills = [],
  teachingPhilosophy = '',
  researchPhilosophy = '',
  qualifications = [],
  profileStrength = 0,
  location = '',
  rank = 1,
  jobTitle = '',
  organization = '',
  avatar = '/placeholders/generic-headshot.png',
  wavesOn = true,
  bgColor = 'custom-background',
  logo,
}: UserProps) {
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: favorites,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteJobs', {
        userId: id,
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    staleTime: 0,
  });
  const {
    data: favoriteEmployers
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteEmployers', {
        userId: id,
      });
      console.log(response.data);
      console.log('Employers', response.data.data);
      return response.data.data;
    },
    staleTime: 0,
  });
  /* Dummy data for testing */
  if (email === 'dan@zygadox.com') {
    firstName = 'Dan';
    lastName = 'Grant';
    jobTitle = 'Senior Software Engineer';
    organization = 'Academic Jobs';
  }
  if (email === 'zander@zygadox.com') {
    firstName = 'Zander';
    lastName = 'Grant';
    jobTitle = 'Senior Constable - Police Office Guard';
    organization = 'Victoria Police';
  }
  if (
    email === 'jarrod@academicjobs.com' ||
    email === 'jarrod@kanizay.com' ||
    email === 'jazzakan@gmail.com'
  ) {
    firstName = 'Jarrod';
    lastName = 'Kanizay';
    jobTitle = 'CEO';
    organization = 'Post My Job';
  }
  if (id === -1) {
    firstName = 'Jane';
    lastName = 'Doe';
    summary =
      'Dr. Jane Doe is a passionate and experienced marine biologist with a strong research focus on deep-sea ecology and biomimicry. Her research career has involved leading deep-sea exploration missions, discovering and studying fascinating deep-sea creatures, and utilizing biomimicry to develop innovative technologies.  Dr. Doe is committed to fostering a collaborative research environment and inspiring the next generation of marine scientists.';
    expertise = [
      'Deep-Sea Ecology',
      'Biomimicry',
      'Deep-Sea Invertebrate Zoology',
      'Hydrothermal Vent Ecosystems',
      'Bioluminescence',
      'Deep-Sea Exploration Techniques (ROV Piloting, Sample Collection)',
    ];
    skills = [
      'Research Grant Writing and Management (e.g., NSF, NOAA)',
      'Scientific Publication (Authored/Co-authored XX peer-reviewed publications)',
      'Public Outreach and Science Communication',
      'Mentorship and Supervision of Undergraduate/Graduate Students',
      'Teaching Experience (e.g., Undergraduate courses in Marine Biology, Deep-Sea Ecology)',
      'Proficiency in R, MATLAB, and relevant oceanographic software',
    ];
    teachingPhilosophy =
      'Dr. Doe believes in a student-centered learning environment that fosters critical thinking, problem-solving skills, and scientific curiosity.  She utilizes innovative teaching methods, including incorporating real-world research data and case studies from her deep-sea expeditions.';
    researchPhilosophy = `The vast and unexplored depths of the ocean hold a wealth of mysteries waiting to be unveiled. My research philosophy centers on uncovering these mysteries through a blend of exploration, meticulous scientific analysis, and a drive to translate discoveries into real-world applications.
    Here are the core principles guiding my research:
    Deep-Sea Exploration and Discovery: I believe that pushing the boundaries of deep-sea exploration is crucial to understanding our planet's biodiversity, ecological processes, and the potential for new resources and technologies. My research focuses on utilizing cutting-edge submersible technology and sample collection techniques to access and study these previously unexplored environments.
    Focus on Deep-Sea Ecology and Adaptations: The unique pressures, darkness, and limited resources of the deep sea have led to the evolution of fascinating adaptations in its resident organisms. My research dives deep (pun intended) into understanding these adaptations, including bioluminescence, pressure-resistant proteins, and chemosynthesis-based ecosystems.
    Biomimicry for Innovation: Nature has already perfected solutions to many challenges we face. My research philosophy integrates biomimicry, where I translate the insights gained from studying deep-sea organisms into the development of novel technologies. This could involve creating sustainable lighting solutions inspired by bioluminescent creatures or developing new materials using the pressure-resistant proteins found in deep-sea bacteria.
    Collaborative Research Environment: I believe in fostering a collaborative research environment where students and colleagues can contribute their expertise and learn from each other. Open communication, teamwork, and mentorship are key to achieving impactful scientific breakthroughs.
    Public Outreach and Science Communication: Sharing the wonders and importance of the deep sea with the public is essential. I aim to translate complex scientific discoveries into engaging and accessible content through public lectures, educational outreach programs, and media engagement.`;
    qualifications = [
      'Earned Ph.D. in Marine Biology from Harvard University',
      'Served as Principal Investigator on XX funded research projects',
      'Awarded XX for outstanding research/teaching (optional)',
      'Active member of professional organizations (e.g., The Oceanography Society, The Marine Technology Society)',
    ];
    profileStrength = 60;
    location = 'Boston, MA, USA';
    rank = 5;
    jobTitle = 'Department of Ocean Exploration & Marine Biology';
    organization = 'Harvard University';
    avatar = '/users/avatar.jpg';
    wavesOn = true;
    bgColor = 'custom-background';
  }

  const [selectedCard, setSelectedCard] = useState('Saved Items');

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  /* End Dummy data for testing */
  return (
    <>
      <section className={`${bgColor} full-width mb-16`}>
        <div
          className={`container pt-0 pb-10 ${wavesOn ? 'min-h-[380px]' : ''}`}
        >
          <section className="wrapper" style={{ height: '20%', marginTop: '30px' }}>
            <h2 className="sentence p-0 m-0">
              <span className="mr-8">Find</span>{' '}

              <div className="slidingVertical">
                <span>Opportunity</span>
                <span>Connections</span>
                <span>Happiness</span>
                <span>Opportunity</span>
                <span>Connections</span>
              </div>
            </h2>
          </section>
          <div className="flex gap-8 mt-8">
            <div className="avatar">
              <div className="w-40 rounded-full">
                <Image
                  width={160}
                  height={160}
                  src={avatar}
                  alt="User Avatar"
                />
              </div>
            </div>
            <div>
              {/* <StarRank ranking={rank} /> */}
              <h2 className="profile p-0 m-0 flex gap-6 mt-2">
                <span className="mt-[-6px] text-white font font-light">
                  {firstName} {lastName}
                </span>
                {jobTitle === '' ? null : (
                  <span>
                    <p className="text-white flex gap-2 items-end p-0 m-0">
                      <Image
                        src={'/icons/job-title.svg'}
                        width={24}
                        height={24}
                        alt=""
                      />{' '}
                      <span className="inline_heading">{jobTitle}</span>
                    </p>
                  </span>
                )}
              </h2>
              {email === '' ? null : (
                <p className="text-white flex gap-2 items-center">
                  <Image
                    src={'/icons/email-at-symbol.svg'}
                    width={24}
                    height={24}
                    alt=""
                  />{' '}
                  <span className="inline_heading">{email}</span>
                </p>
              )}
              {organization === '' ? null : (
                <p className="text-white flex gap-2 items-center">
                  <Image
                    src={'/icons/college-icon.svg'}
                    width={24}
                    height={24}
                    alt=""
                  />{' '}
                  <span className="inline_heading">{organization}</span>
                </p>
              )}

              <p className="text-white flex gap-2 items-center">
                <MapMarkerIcon width={26} height={26} />
                {location === ''
                  ? 'Add location here'
                  : location}
              </p>
            </div>
            <div className="ml-auto hidden">
              <h2 className="p-0 m-0">Profile Strength {profileStrength}%</h2>
              <progress
                className="progress progress-secondary"
                value={profileStrength}
                max="100"
              ></progress>
              <Link href="/settings" className="p-0 m-0">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
        {wavesOn ? <WaveBackground /> : null}
      </section>
      <section
        title="dashboard"
        className={`${wavesOn ? 'mt-[-96px]' : ''}
`}
      >
        <h2 className="profile">Hi {firstName || email}</h2>
        <div className="flex gap-6">
          <DashboardCard
            title="Saved Items"
            iconPath="/icons/heart.svg"
            href="/my_life"
            onClick={() => handleCardClick('Saved Items')}
          />
          <DashboardCard
            title="Jobs For You"
            iconPath="/icons/eyeball.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs For You')}
          />
          <DashboardCard
            title="Jobs Applied For"
            iconPath="/icons/folder.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Applied For')}
          />
          <DashboardCard
            title="My Profile"
            iconPath="/icons/users.svg"
            href="/my_life"
            onClick={() => handleCardClick('My Profile')}
          />
        </div>
      </section>

      {/* Section below Dashboard cards */}
      {selectedCard === 'Saved Items' && (
        // Render content for Saved Items
        <div>
          <section className='flex'>
            {/* <aside className="side_nav hidden">
          <ProfileSideNav />
        </aside> */}
            <div className="w-2/3">
              <h2>Jobs</h2>
              {favorites?.length > 0 &&
                favorites.map(
                  (
                    {
                      jobId,
                      job: {
                        title,
                        employer: { company_name, logo },
                      },
                    },
                    i
                  ) => (
                    <>
                      <div className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                        <figure className="mr-2">
                          <Image
                            width={100}
                            height={100}
                            src={
                              logo
                                ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
                                : '/favicon.png'
                            }
                            alt=""
                          />
                        </figure>
                        <div className="flex flex-col justify-center">
                          <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">
                            {title}
                          </h3>
                          <p className="font-bold">{company_name}</p>
                          <p className="flex flex-row items-center gap-6">
                            <span className="flex flex-row items-center gap-1">
                              <Image
                                src={'/icons/map-marker-icon.svg'}
                                width={24}
                                height={24}
                                alt=""
                              />
                              Location
                            </span>
                            <span className="flex flex-row items-center gap-1">
                              <Image
                                src={'/icons/dollar-bills.svg'}
                                width={24}
                                height={24}
                                alt=""
                              />
                              Salary
                            </span>
                            <span className="flex flex-row items-center gap-1">
                              <Image
                                src={'/icons/clock.svg'}
                                width={24}
                                height={24}
                                alt=""
                              />
                              14 April 2024
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col justify-center ml-auto gap-2">
                          <button className="btn btn-error">Remove</button>
                          <Link
                            className="btn btn-accent"
                            href={`/jobs/${title
                              .replace(/[^a-zA-Z0-9 ]/g, '')
                              .replace(/\s+/g, '-')}/${jobId}`}
                          >
                            Job Post
                          </Link>
                        </div>
                      </div>
                    </>
                  )
                )}
              <h2>Employers</h2>
              {favoriteEmployers?.length > 0 &&
                favoriteEmployers.map(
                  (
                    {
                      employerId,
                      company_name,
                      logo

                    },
                    i
                  ) => (
                    <>
                      <div className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                        <figure className="mr-2">
                          <Image
                            width={100}
                            height={100}
                            src={
                              logo
                                ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}`
                                : '/favicon.png'
                            }
                            alt=""
                          />
                        </figure>
                        <div className="flex flex-col justify-center">
                          <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">
                            {company_name}
                          </h3>
                          <p className="font-bold">{company_name}</p>
                          <p className="flex flex-row items-center gap-6">
                            <span className="flex flex-row items-center gap-1">
                              <Image
                                src={'/icons/map-marker-icon.svg'}
                                width={24}
                                height={24}
                                alt=""
                              />
                              Location
                            </span>
                            <span className="flex flex-row items-center gap-1">
                              <Image
                                src={'/icons/dollar-bills.svg'}
                                width={24}
                                height={24}
                                alt=""
                              />
                              Salary
                            </span>
                            <span className="flex flex-row items-center gap-1">
                              <Image
                                src={'/icons/clock.svg'}
                                width={24}
                                height={24}
                                alt=""
                              />
                              14 April 2024
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col justify-center ml-auto gap-2">
                          {/* <button className="btn btn-error">Remove</button>*/}
                          <Link
                            className="btn btn-accent"
                            href={`/employer/${employerId}`}
                          >
                            Job Post
                          </Link>
                        </div>
                      </div>
                    </>
                  )
                )}
            </div>
            <div className="w-1/3 m-4 p-2">
              {/* <div className="listings_panel"> */}
              <div className="listings_content">
                <div className="search_panel">
                  <JobSearchBox2 />
                </div>
                <SearchResults2 q={{ q: '', l: '' }} />
              </div>
              {/* </div> */}
            </div>
          </section>        </div>
      )}
      {selectedCard === 'Jobs For You' && (
        // Render content for Jobs For You
        <div>
          {/* Content for Jobs For You */}
        </div>
      )}
      {selectedCard === 'Jobs Applied For' && (
        // Render content for Jobs Applied For
        <div>
          {/* Content for Jobs Applied For */}
        </div>
      )}
      {selectedCard === 'My Profile' && (
        // Render content for Jobs Applied For
        <div>
          <h2>My Details</h2>
          <UserProfile id={id} username={firstName} email={email} location={location}/>
        </div>
      )}

    </>
  );
}
