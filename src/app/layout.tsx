import './global.css';

import { Inter } from 'next/font/google';

import { cn } from '@utils';
import { Providers } from '@modules/layouts/Providers';
import { RootLayout } from '@modules/layouts/RootLayout';

const inter = Inter({ subsets: ['latin'] });

const siteName = 'Ronny Rook';
const siteUrl = 'https://rnny.nl';
const siteDescription = 'Javascript developer from Amsterdam';

export const metadata = {
  title: {
    default: `About me | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: `${siteUrl}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteName,
    card: 'summary_large_image',
  },
  manifest: '/images/favicon/site.webmanifest',
  icons: {
    icon: '/images/favicon/favicon-32x32.png',
    shortcut: '/images/favicon/favicon.ico',
    apple: '/images/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon/safari-pinned-tab.svg',
      },
    ],
  },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="en"
      className={cn('bg-white text-black dark:bg-[#111111] dark:text-white', inter.className)}
    >
      <head />
      <Providers>
        <RootLayout>{children}</RootLayout>
      </Providers>
    </html>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
