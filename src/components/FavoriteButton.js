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
  console.log("FavoriteButtonsession", session)
  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteJobId', data);
    },
  });
  return (
    <img
      src={favoriteJobYN ? "/icons/heart.svg" : "/icons/heart-outline.svg"}
      width="28"
      height="28"
      alt="Add this Job Post to Favorites"
      onClick={() => {
        if (session) {
          console.log(jobId, session.user.id)
          const mode = favoriteJobYN ? "remove" : "add"
          mutation.mutate({ jobId, userId: session.user.id, mode });
          router.refresh();
        } else {
          signIn()
        }
      }}
    />
  );
}
