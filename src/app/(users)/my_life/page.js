'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SearchResults1 from '@/components/SearchResults1';
import { useSearchParams } from 'next/navigation';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import JobSearchBox2 from '@/components/JobSearchBox2';
import JobSearchBox3 from '@/components/JobSearchBox3';
import { filterType } from '@/utils/data';
import Link from 'next/link';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import { useSession } from 'next-auth/react';
import Profile from './Profile';
import TextRotatorBanner from '@/components/TextRotatorBanner';
export default function Page() {
  const { data: session } = useSession();
  
  const { id, image, name, email, uerRole } = session.user

  console.log("mylife: session", session)
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
        userId: session.user.id,
      });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    staleTime: 0,
  });
  const testID = 1;
  return (
    <main>
      <TextRotatorBanner />
      <section title="Profile" className="content-grid">
        {testID === -1 ? (
          <Profile id={-1} />
        ) : (
          <Profile
            id={id}
            firstName={name}
            // lastName="Doe"
            summary=""
            expertise={[]}
            skills={[]}
            teachingPhilosophy=""
            researchPhilosophy=""
            qualifications={[]}
            profileStrength={30}
            location="Add your location here."
            rank={3}
            jobTitle="Add your job title here."
            organization="Add your organization here."
            avatar={image}
            wavesOn={true}
            bgColor="custom-background"
            favorites={favorites}
          />
        )}

        {/* <div className="mx-auto max-w-5xl flex flex-col">
          <table>
            <tbody>
              <tr className="font-bold border-b-2">
                <td>Id</td>
                <td>Title</td>
                <td>Company Name</td>
              </tr>
              {favorites?.length > 0 &&
                favorites.map(
                  (
                    {
                      jobId,
                      job: {
                        title,
                        employer: { company_name },
                      },
                    },
                    i
                  ) => (
                    <tr className=" border-b border-black-1" key={i}>
                      <td className="w-[100px]">{jobId}</td>
                      <td className="w-[300px]">{title}</td>
                      <td className="w-[300px]">{company_name}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div> */}
      </section>
    </main>
  );
}
