/* eslint-disable @next/next/no-img-element */
// components/FavoriteButton.client.jsx
'use client';
import React from 'react';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { useSession } from 'next-auth/react';
import { CloudCog } from 'lucide-react';
export default function FavoriteButton({ jobId }) {
  const { data: session } = useSession();
  console.log("FavoriteButtonsession", session)
  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteJobId', data);
    },
  });
  return (
    <img
      src="/icons/heart.svg"
      width="44"
      height="44"
      alt="Add this Job Post to Favorites"
      onClick={() => {
        console.log(jobId, session.user.id)
        mutation.mutate({ jobId, userId: session.user.id, mode: 'add' });
      }}
    />
  );
}
