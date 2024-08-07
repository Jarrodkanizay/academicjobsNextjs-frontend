'use client';
import React from 'react';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
export default function FavoriteEmployerButton({ employerId, favoriteEmployerYN }) {
  const router = useRouter();
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteEmployerId', data);
    },
  });
  return (
    <img
      src={favoriteEmployerYN ? "/icons/heart.svg" : "/icons/heart-outline.svg"}
      width="40"
      height="28"
      alt="Add this employer to Favorites"
      className='ml-6'
      onClick={() => {
        if (session) {
          console.log(employerId, session.user.id)
          const mode = favoriteEmployerYN ? "remove" : "add"
          const type =  "FAVORITE";
          mutation.mutate({ employerId, userId: session.user.id, mode, type});
          router.refresh();
        } else {
          signIn()
        }
      }}
    />
  );
}
