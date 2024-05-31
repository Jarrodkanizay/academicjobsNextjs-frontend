'use client';
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

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import React, { createContext, useEffect, useState } from 'react';
import SavedItems from '@/components/profile/SavedItems';
import DashboardMenu from '@/components/DashboardMenu';
import TalentPool from '@/components/TalentPool';
import TalentPoolForm from '@/components/forms/TalentPoolForm';

type UserProps = {
  id: number;
  summary?: string;
  expertise?: string[];
  skills?: string[];
  teachingPhilosophy?: string;
  researchPhilosophy?: string;
  qualifications?: string[];
  profileStrength?: number;
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
  firstName?: string; 
  lastName?: string;    
  email?: string;      
  address?: string;  
};

export default function Profile({
  id,
  summary = '',
  expertise = [],
  skills = [],
  teachingPhilosophy = '',
  researchPhilosophy = '',
  qualifications = [],
  profileStrength = 0,
  rank = 1,
  jobTitle = '',
  organization = '',
  wavesOn = true,
  bgColor = 'custom-background',
  logo,
}: UserProps) {
  const { data: favoritejobs } = useQuery({
    queryKey: ['favoriteJobs'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteJobs', {
        userId: id,
      });
      return response.data.data;
    },
    staleTime: 0,
  });

  const { data: favoriteEmployers } = useQuery({
    queryKey: ['favoriteEmployers'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteEmployers', {
        userId: id,
        type: 'FAVORITE',
      });
      return response.data.data;
    },
    staleTime: 0,
  });

  const { data: talentPoolEmployers } = useQuery({
    queryKey: ['talentPoolEmployers'],
    queryFn: async () => {
      const response = await BaseApi.post('/getFavoriteEmployers', {
        userId: id,
        type: 'TALENTPOOL',
      });
      return response.data.data;
    },
    staleTime: 0,
  });

  const { data: userDetails, isLoading: userDetailsLoading, error: userDetailsError } = useQuery({
    queryKey: ['userDetails'],
    queryFn: async () => {
      const response = await BaseApi.post('/auth/getUserDetailsById', {
        userId: id,
      });
      const userProfile: UserProps = {
        id,
        summary,
        expertise,
        skills,
        teachingPhilosophy,
        researchPhilosophy,
        qualifications,
        profileStrength,
        rank,
        jobTitle,
        organization,
        wavesOn,
        bgColor,
        logo,
        avatar: response.data.image,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        address: response.data.address,
      };
      return userProfile;
    },
  });

  const [profile, setProfile] = useState<UserProps | null>(null);

  useEffect(() => {
    if (userDetails) {
      setProfile(userDetails);
    }
  }, [userDetails]);

  const updateProfile = (profile: any) => {
    setProfile(profile);
  };

  const [selectedCard, setSelectedCard] = useState('Saved Jobs');
  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  if (userDetailsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  if (userDetailsError) {
    return <div>Error loading user details</div>;
  }

  return (
    <>
      <section className={`${bgColor} full-width mb-16`}>
        <div className={`container pt-0 pb-10 ${wavesOn ? 'min-h-[380px]' : ''}`}>
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
                  src={
                    profile?.avatar?.includes('https://lh3.googleusercontent')
                      ? profile?.avatar
                      : profile?.avatar
                        ? `https://academicjobs.s3.amazonaws.com/img/users/${profile?.avatar}`
                        : '/favicon.png'
                  }
                  alt="Avatar"
                />
                
              </div>
            </div>
            <div className="hidden md:block">
              <h2 className="profile p-0 m-0 flex gap-6 mt-2">
                <span className="mt-[-6px] text-white font font-light">
                  {profile?.firstName} {profile?.lastName}
                </span>
                {jobTitle === '' ? null : (
                  <span>
                    <p className="text-white flex gap-2 items-end p-0 m-0">
                      <Image src={'/icons/job-title.svg'} width={24} height={24} alt="" />{' '}
                      <span className="inline_heading">{jobTitle}</span>
                    </p>
                  </span>
                )}
              </h2>
              {profile?.email === '' ? null : (
                <p className="text-white flex gap-2 items-center">
                  <Image src={'/icons/email-at-symbol.svg'} width={24} height={24} alt="" />{' '}
                  <span className="inline_heading">{profile?.email}</span>
                </p>
              )}
              {organization === '' ? null : (
                <p className="text-white flex gap-2 items-center">
                  <Image src={'/icons/college-icon.svg'} width={24} height={24} alt="" />{' '}
                  <span className="inline_heading">{organization}</span>
                </p>
              )}
              <p className="text-white flex gap-2 items-center">
                <MapMarkerIcon width={26} height={26} />
                {profile?.address === '' ? 'Add location here' : profile?.address}
              </p>
            </div>
          </div>
          <div className="md:hidden block">
            <h2 className="profile p-0 m-0 flex gap-6 mt-2">
              <span className="mt-[-6px] text-white font font-light">
                {profile?.firstName} {profile?.lastName}
              </span>
              {jobTitle === '' ? null : (
                <span>
                  <p className="text-white flex gap-2 items-end p-0 m-0">
                    <Image src={'/icons/job-title.svg'} width={24} height={24} alt="" />{' '}
                    <span className="inline_heading">{jobTitle}</span>
                  </p>
                </span>
              )}
            </h2>
            {profile?.email === '' ? null : (
              <p className="text-white flex gap-2 items-center">
                <Image src={'/icons/email-at-symbol.svg'} width={24} height={24} alt="" />{' '}
                <span className="inline_heading">{profile?.email}</span>
              </p>
            )}
            {organization === '' ? null : (
              <p className="text-white flex gap-2 items-center">
                <Image src={'/icons/college-icon.svg'} width={24} height={24} alt="" />{' '}
                <span className="inline_heading">{organization}</span>
              </p>
            )}
            <p className="text-white flex gap-2 items-center">
              <MapMarkerIcon width={26} height={26} />
              {profile?.address === '' ? 'Add location here' : profile?.address}
            </p>
          </div>
        </div>
        {wavesOn ? <WaveBackground /> : null}
      </section>
      <section title="dashboard" className={`${wavesOn ? 'mt-[-96px]' : ''}`}>
        <div className="flex gap-6 mt-10">
          <DashboardCard
            title="Saved Jobs"
            iconPath="/icons/heart.svg"
            href="/my_life"
            onClick={() => handleCardClick('Saved Jobs')}
            forceClass={selectedCard === 'Saved Jobs' ? 'bg-gray-200' : 'bg-white'}
          />
          <DashboardCard
            title="Jobs Alerts - Coming Soon!"
            iconPath="/icons/eyeball.svg"
            href="/my_life"
            onClick={() => handleCardClick('Jobs Alerts')}
            forceClass={selectedCard === 'Jobs Alerts' ? 'bg-gray-200' : 'bg-white'}
          />
          <DashboardCard
            title="Talent Pool"
            iconPath="/icons/talent-search-svgrepo-com.svg"
            href="/my_life"
            onClick={() => handleCardClick('Talent Pool')}
            forceClass={selectedCard === 'Talent Pool' ? 'bg-gray-200' : 'bg-white'}
          />
          <DashboardCard
            title="My Profile"
            iconPath="/icons/users.svg"
            href="/my_life"
            onClick={() => handleCardClick('My Profile')}
            forceClass={selectedCard === 'My Profile' ? 'bg-gray-200' : 'bg-white'}
          />
        </div>
      </section>

      {/* Section below Dashboard cards */}
      {selectedCard === 'Saved Jobs' && (
        <div>
          <h2 className="md:hidden block">Saved Jobs</h2>
          <SavedItems favoriteJobs={favoritejobs} favoriteEmployers={favoriteEmployers} />
        </div>
      )}
      {selectedCard === 'Jobs Alerts' && (
        <div>
          <h2 className="md:hidden block">Job Alerts</h2>
        </div>
      )}
      {selectedCard === 'Talent Pool' && (
        <div>
          <h2 className="md:hidden block">Talent Pool</h2>
          <TalentPool talentPool={talentPoolEmployers} />
        </div>
      )}
      {selectedCard === 'My Profile' && (
        <div className="gap-5 mt-6 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mb-6 rounded-2xl px-7 pt-4 pb-6 border-[1px] border-slate-500">
            <UserProfile
              id={id}
              updateProfile={updateProfile}
              userProfile={profile}
            />
          </div>
          <div className="rounded-2xl px-7 pt-4 pb-6 border-[1px] border-slate-500">
            <TalentPoolForm userId={id} />
          </div>
        </div>
      )}
    </>
  );
}