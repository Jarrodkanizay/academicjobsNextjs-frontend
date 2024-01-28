import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import HeadlineUpgrade from '@/components/forms/HeadlineUpgrade';

export const metadata: Metadata = {
  title: 'Headline Job Checkout', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: 'About Academic Jobs', //Option 2 overrides the title in layout.tsx
  // },
  description: 'Upgrade your headline posting to a full job posting.',
  keywords: 'Upgrade Job Post, Headline Job Checkout',
};

export default function myPage() {
  return (
    <main className="content-grid">
      <HeadlineUpgrade />
    </main>
  );
}
