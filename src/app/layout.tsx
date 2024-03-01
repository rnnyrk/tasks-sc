import { Providers } from '@common/layout/Providers';
import { RootLayout } from '@common/layout/RootLayout';
import { StyledComponentsRegistry } from '@common/layout/StyledComponentsRegistry';

const siteName = 'Tasks Manager';
const siteUrl = 'https://task-manager.nl';
const siteDescription = 'Managing tasks with ease.';

export const metadata = {
  title: {
    default: `Home | ${siteName}`,
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
    <html lang="en">
      <head />
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <RootLayout>{children}</RootLayout>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
