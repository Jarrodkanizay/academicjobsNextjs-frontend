import Image from 'next/image';
import Link from 'next/link';
import PricingTable2 from '@/components/PricingTable2';
import Products from '@/components/Products';

export const metadata = {
  title:
    'Fastest growing Academic Job Board with the best customer service & support', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'With our advanced AI technologies that greatly improve the job posting process, Academic Jobs is the top AI recruitment platform, enabling higher education institutions, the research and development (R&D) industry, and many other industries discover people. ',
  keywords:
    'Academic Recruitment Platform, AI Recruitment, Number 1 AI Recruitment Platform',
};
const countryRegion = 'Australia';

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith('s')
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

export default function myPage() {
  return (
    <main>
      {/* Pricing Table */}
      <section className="container mx-auto px-4">
        <PricingTable2 currency={'AUD'} hideRegionSelector={true} />
      </section>

      <Products />
    </main>
  );
}
