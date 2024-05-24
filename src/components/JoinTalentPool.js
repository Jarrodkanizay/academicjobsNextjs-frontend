'use client';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function JoinTalentPool({ employerId, talentPoolYN }) {
  const router = useRouter();
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteEmployerId', data);
    },
  });

  const handleClick = () => {
    if (session) {
      const mode = talentPoolYN ? 'remove' : 'add';
      const type = 'TALENTPOOL';
      mutation.mutate({ employerId, userId: session.user.id, mode, type });
      router.refresh();
    } else {
      signIn();
    }
  };

  return (
    <>
      {session && session.user ? (
        <a
          className={talentPoolYN ? 'bg-green-500 text-white rounded-full btn' : 'bg-[#d9d9d9] text-gray-700 rounded-full btn'}
          onClick={handleClick}
        >
          {talentPoolYN ? 'Talent Pool Joined ✔' : 'Join Talent Pool'}
        </a>
      ) : (
        <a href="/academic-talent-pool" className="bg-[#d9d9d9] text-gray-700 rounded-full btn">
          Join Talent Pool
        </a>
      )}
    </>
  );
}
