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

const SigninButton = () => {
  const { data: session } = useSession();
  console.log('siginbutton session', session);

  return (
    <div className="flex items-center gap-2 ">
      {session && session.user ? (
        <>
          {/* <Link
            href={'/profile'}
          >{`${session.user.firstName} ${session.user.lastName}`}</Link> */}

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={session.user?.image || ''} />
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
                  Sign Out
                </DropdownMenuItem>
              </LogoutButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button onClick={() => signIn()}>Sign In</Button>
          <Link href={'/auth/sign-up'}>Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default SigninButton;
