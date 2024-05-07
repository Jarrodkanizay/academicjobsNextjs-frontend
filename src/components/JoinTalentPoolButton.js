/* eslint-disable @next/next/no-img-element */
// components/FavoriteButton.client.jsx
'use client';
import React from 'react';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
export default function FavoriteButton({ jobId, favoriteJobYN }) {
  const router = useRouter();
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteJobId', data);
    },
  });
  return (
    <button  className="bg-[#d9d9d9] text-gray-700 rounded-full btn"
      onClick={() => {
        if (session) {
          console.log(jobId, session.user.id)
          //const mode = favoriteJobYN ? "remove" : "add"
          //mutation.mutate({ jobId, userId: session.user.id, mode });
          //router.refresh();
          router.push('/academic-talent-pool');
          
        } else {
          signIn()
        }
      }}
    >
      Join Talent Pool
    </button>
  );
}
