'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import { useSession } from 'next-auth/react';
import Profile from './Profile';
export default function Page() {
  const { data: session } = useSession();
  


  const { id, image, name, email } = session.user;

  const testID = 1;


  return (
    <main>
      <section title="Profile" className="content-grid">
          <Profile
            id={id}
            firstName={name}
            lastName=""
            email={email}
            summary=""
            expertise={[]}
            skills={[]}
            teachingPhilosophy=""
            researchPhilosophy=""
            qualifications={[]}
            profileStrength={30}
            location=""
            rank={3}
            jobTitle=""
            organization=""
            avatar={image}
            wavesOn={true}
            bgColor="custom-background"
            session={session} 
          />
      </section>
    </main>
  );
}
