'use client';
import Profile from '../my_life/Profile';
import TextRotatorBanner from '@/components/TextRotatorBanner';

export default function Page() {
  return (
    <main>
      <TextRotatorBanner />
      <section title="Profile" className="content-grid">
        <Profile id={-1} />
      </section>
    </main>
  );
}
