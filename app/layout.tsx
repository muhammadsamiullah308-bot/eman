import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VismifyTools – All-in-One Muslim Tools for Daily Islamic Needs',
  description: 'Discover VismifyTools – a fast, simple, and powerful collection of online Muslim tools like Prayer Times, Qibla Finder, Halal Checker, Zakat Calculator and more.',
  keywords: ['Muslim Tools', 'Islamic Tools', 'Quran Tools', 'Prayer Times', 'Halal Checker', 'Zakat Calculator', 'Islamic Apps', 'Muslim Web App', 'Qibla Finder'],
  authors: [{ name: 'VismifyTools Team' }],
  creator: 'VismifyTools',
  publisher: 'VismifyTools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vismifytools.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vismifytools.com',
    siteName: 'VismifyTools',
    title: 'VismifyTools – Essential Islamic Tools in One Place',
    description: 'Fast, simple, and reliable tools for every Muslim worldwide. Prayer Times, Qibla Finder, Halal Checker, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VismifyTools - Islamic Tools Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VismifyTools – Essential Islamic Tools',
    description: 'Fast, simple, and reliable tools for every Muslim worldwide.',
    images: ['/og-image.png'],
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
  themeColor: '#059669',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'VismifyTools',
              description: 'Essential Islamic tools for Muslims worldwide',
              url: 'https://vismifytools.com',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              author: {
                '@type': 'Organization',
                name: 'VismifyTools Team',
              },
              keywords: 'Muslim Tools, Islamic Tools, Prayer Times, Qibla Finder, Halal Checker, Zakat Calculator',
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}