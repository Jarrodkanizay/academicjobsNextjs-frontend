import Image from 'next/image';

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'privacy-policy', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description: 'Review our privacy-policy.',
  keywords: 'privacy-policy, academicjobs',
};
export default function myPage() {
  return (
    <div className="bg-white bg-opacity-70 p-4 text-start text-black text-base">
      <h1 className="text-amber-500 text-2xl mb-4 font-bold">Privacy Policy</h1>
      <p>
        Welcome to AcademicJobs. Your privacy is important to us. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website. Please read this Privacy Policy
        carefully. If you do not agree with the terms of this Privacy Policy,
        please do not access the site.
      </p>

      <p>
        We reserve the right to make changes to this Privacy Policy at any time
        and for any reason. We will alert you about any changes by updating the
        "Last Updated" date of this Privacy Policy. You are encouraged to
        periodically review this Privacy Policy to stay informed of updates. You
        will be deemed to have been made aware of, will be subject to, and will
        be deemed to have accepted the changes in any revised Privacy Policy by
        your continued use of the Site after the date such revised Privacy
        Policy is posted.
      </p>

      <strong className="block text-xl font-bold mb-2 mt-10">
        Collection of Your Information
      </strong>
      <p>
        We may collect information about you in a variety of ways. The
        information we may collect on the Site includes:
      </p>

      <ul>
        <li>Personal Data</li>
        <li>
          Personally identifiable information, such as your name, email address,
          and telephone number, and demographic information, such as your age,
          gender, hometown, and interests, that you voluntarily give to us when
          you register with the Site or when you choose to participate in
          various activities related to the Site, such as online chat and
          message boards. You are under no obligation to provide us with
          personal information of any kind, however, your refusal to do so may
          prevent you from using certain features of the Site.
        </li>
      </ul>

      <strong className="block text-xl font-bold mb-2 mt-4">
        Use of Your Information
      </strong>
      <p>
        Having accurate information about you permits us to provide you with a
        smooth, efficient, and customized experience. Specifically, we may use
        information collected about you via the Site to:
      </p>

      <ul>
        <li>Administer sweepstakes, promotions, and contests.</li>
        <li>
          Compile anonymous statistical data and analysis for use internally or
          with third parties.
        </li>
        <li>Create and manage your account.</li>
        <li>
          Deliver targeted advertising, coupons, newsletters, and other
          information regarding promotions and the Site to you.
        </li>
        <li>Email you regarding your account or order.</li>
        <li>
          Fulfill and manage purchases, orders, payments, and other transactions
          related to the Site.
        </li>
        <li>
          Generate a personal profile about you to make future visits to the
          Site more personalized.
        </li>
        <li>Increase the efficiency and operation of the Site.</li>
        <li>
          Monitor and analyze usage and trends to improve your experience with
          the Site.
        </li>
        <li>Notify you of updates to the Site.</li>
        <li>Offer new products, services, and/or recommendations to you.</li>
        <li>Perform other business activities as needed.</li>
        <li>Process payments and refunds.</li>
      </ul>

      <strong className="block text-xl font-bold mb-2 mt-4">
        Disclosure of Your Information
      </strong>
      <p>
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </p>

      <ul>
        <li>By Law or to Protect Rights</li>
        <li>
          If we believe the release of information about you is necessary to
          respond to legal process, to investigate or remedy potential
          violations of our policies, or to protect the rights, property, and
          safety of others, we may share your information as permitted or
          required by any applicable law, rule, or regulation. This includes
          exchanging information with other entities for fraud protection and
          credit risk reduction.
        </li>
      </ul>

      <strong className="block text-xl font-bold mb-2 mt-4">Contact Us</strong>
      <p>
        If you have questions or comments about this Privacy Policy, please
        contact us at [insert contact information].
      </p>
    </div>
  );
}
