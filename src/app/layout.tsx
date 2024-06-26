import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompetitionForm from '@/components/CompetitionForm';
import QueryProvider from '@/lib/store/query-provider';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Providers } from './providers';
// import { GoogleAnalytics } from '@next/third-parties/google';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'The Best Academic Jobs', //Default if nothing is set
    template: '%s Academic Jobs', //If the title is set on the page the %s will be replaced with the title
  },
  description: "Academic Jobs the worlds' number 1 job board",
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                   (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "mt7l4xz4az");
                `,
          }}
        />
      </head>

      <body className={`${inter.className} bg-white`}>
        {/* <CompetitionForm /> */}
        <QueryProvider>
          <Providers session={session}>
            <Header />
            {children}
            <div className="spacer">&nbsp;</div>
            <Footer />
          </Providers>
        </QueryProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
