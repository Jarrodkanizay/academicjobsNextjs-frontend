import SearchResults2 from '@/components/SearchResults';
import JobSearchBox2 from '@/components/JobSearchBox2';
import { StarRank } from '@/components/StarRank';
import WaveBackground from '@/components/WaveBackground';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import DashboardCard from '@/components/profile/DashboardCards';

import ProfileSideNav from '@/components/profile/ProfileSideNav';
import Image from 'next/image';
import Link from 'next/link';
import UserProfile from '@/components/profile/UserProfile';

// import JobSearchBox2 from '@/components/JobSearchBox2';
// import SearchResults from '@/components/SearchResults';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { Span } from 'next/dist/trace';
import { useState } from 'react';
import SavedItems from '@/components/profile/SavedItems'
import DashboardMenu from '@/components/DashboardMenu'
import TalentPool from '@/components/TalentPool';


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
    data: favoritejobs,
  } = useQuery({
    queryKey: ['favoriteJobs'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteJobs', {
        userId: id,
      });
      return response.data.data;
    },
    staleTime: 0,
  });
  const {
    data: favoriteEmployers
  } = useQuery({
    queryKey: ['favoriteEmployers'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteEmployers', {
        userId: id,
      });
      return response.data.data;
    },
    staleTime: 0,
  });


  const [selectedCard, setSelectedCard] = useState('Saved Items');

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  return (
    <>
      <section className={`${bgColor} full-width mb-16`}>
        <div
          className={`container pt-0 pb-10 ${wavesOn ? 'min-h-[380px]' : ''}`}
        >
          <section className="wrapper hidden md:block" style={{ height: '20%', marginTop: '30px' }}>
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
                  width={140}
                  height={140}
                  src={avatar}
                  alt="User Avatar"
                />
                
              </div>
            </div>
            <div className="hidden md:block">
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
            {/* <div className="ml-auto">
              <h2 className="p-0 m-0">Profile Strength {profileStrength}%</h2>
              <progress
                className="progress progress-secondary"
                value={profileStrength}
                max="100"
              ></progress>
              <Link href="/settings" className="p-0 m-0">
                Edit Profile
              </Link>
            </div> */}
          </div>
          <div className="md:hidden block">
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
        </div>
        {wavesOn ? <WaveBackground /> : null}
      </section>
      <section
        title="dashboard"
        className={`${wavesOn ? 'mt-[-96px]' : ''}`}
      >
        {/* <h2 className="profile">Hi {firstName || email}</h2> */}
        <div className="flex gap-6 mt-10">
        <DashboardCard
            title="Saved Items"
            iconPath="/icons/heart.svg"
            href="/my_life"
            onClick={() => handleCardClick('Saved Items')}
          />
          <DashboardCard
            title="Jobs Alerts - Coming Soon!"
            iconPath="/icons/eyeball.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Alerts')}

          />
          <DashboardCard
            title="Talent Pool"
            iconPath="/icons/talent-search-svgrepo-com.svg"
            href="/my_life"
            onClick={() => handleCardClick('Talent Pool')}

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
        <div>
          <h2 className="md:hidden block">Saved Items</h2>
          <SavedItems favoriteJobs={favoritejobs} favoriteEmployers={favoriteEmployers} />
        </div>
        

      )}
      {selectedCard === 'Jobs Alerts' && (
        // Render content for Jobs For You
        <div>
          <h2 className="md:hidden block">Job Alerts</h2>
          {/* Content for Jobs For You */}
        </div>
      )}
      {selectedCard === 'Talent Pool' && (
        // Render content for Jobs For You
        <div>
          <h2 className="md:hidden block">Job Alerts</h2>
          <TalentPool userId={id}/>
        </div>
      )}
      {selectedCard === 'My Profile' && (
        // Render content for Jobs Applied For
        <div className="flex gap-5">
          <div className="w-full md:w-1/2">
            <h2>My Details</h2>
            <UserProfile
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              location={location}
            />
          </div>
        </div>
      )}
      </>
    );
  }
