import Image from 'next/image';
import type { Metadata } from 'next';
import ContactUsForm from '@/components/forms/ContactUsForm';

export const metadata: Metadata = {
  title: 'Contact Us', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'Contact our knowledgeable team today for assistance and information on our number 1 academic job board site in higher education and academia. ',
  keywords:
    'Contact Us Academicjobs, Contact Academic Jobs, Academicjobs Contact',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <div className="prose">
          <h1 className="mt-8">Let’s Get Together!</h1>
          <h2 className="mt-4">
            Tell us what you need, and we will be straight back to you. At
            Academic Jobs we make it easy for you!
          </h2>
          <h4 className="mt-4 mb-16">
            <span className="font-bold">Fun Fact: </span> AcademicJobs.com is
            the go-to job board in higher education, experiencing rapid growth
            with a larger audience and more job opportunities than any other.
            Join the success story that even has our mothers beaming with pride!
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          <ContactUsForm maxWidth="700" />
          {/* Contact Numbers */}
          <div className="flex flex-col w-full bg-slate-100 py-4 px-8 rounded-2xl lg:min-w-[450px] lg:max-w-[500px] mt-8 lg:mt-0">
            <h2 className="underline-full mb-6">Global Office Numbers</h2>
            <ul className="contact-number">
              <li>
                <a className="footer-nav__link" href="tel:+852-3730021">
                  <strong>Asia: </strong>+852-3730021 (Hong Kong)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+61-452070156">
                  <strong>Australia: </strong> +61-452070156 (Melbourne)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:778 819 1866">
                  <strong>Canada: </strong>778 819 1866 (Vancouver)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+415 819 0021">
                  <strong>United States: </strong>415 819 0021 (San Francisco)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+49-4158730021">
                  <strong>Europe: </strong>+49-4158730021 (Berlin)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+61-452070156">
                  <strong>New Zealand: </strong>+61-452070156 (Wellington)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+91-2250972736">
                  <strong>India: </strong>+91-2250972736 (Mumbai)
                </a>
              </li>
              <li>
                <a className="footer-nav__link" href="tel:+44-2045876329">
                  <strong>United Kingdom: </strong>+44-2045876329 (London)
                </a>
              </li>
            </ul>
            <Image
              src="/contact-us/global-office-numbers.jpg"
              width={500}
              height={500}
              alt="Global Office Numbers"
              className="rounded-xl mx-auto mt-auto mb-4"
            />
          </div>
        </div>
      </main>
    </>
  );
}
