'use client';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from './ui/button';
import { LogOut, User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/shadcn/ui/avatar';
import { LogoutButton } from './logout-button';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { useEffect, useState } from 'react';

const SigninButton = () => {
  const { data: session } = useSession();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (session && session.user) {
        try {
          const response = await BaseApi.post('/auth/getUserDetailsById', {
            userId: session.user.id,
          });
          setUserDetails(response.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    fetchUserDetails();
  }, [session]);

  return (
    <div className="flex items-center gap-2 ">
      {session && session.user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={
                    userDetails?.image?.includes(
                      'https://lh3.googleusercontent'
                    )
                      ? userDetails.image
                      : userDetails?.image
                      ? `https://academicjobs.s3.amazonaws.com/img/users/${userDetails.image}`
                      : ''
                  }
                />

                <AvatarFallback className="bg-sky-500">
                  <User className="text-white" />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-60 z-99999" align="end">
              <DropdownMenuItem>{`${session.user.email}`}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href="/my_life">
                <DropdownMenuItem>My Life</DropdownMenuItem>
              </Link>
              <LogoutButton>
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </LogoutButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button onClick={() => signIn()}>Sign In</Button>
          <Link href={'/auth/sign-up'}>Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default SigninButton;
