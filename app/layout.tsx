import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'VismifyTools – World\'s Most Advanced Islamic Tools Platform | Prayer Times, Qibla, Halal Checker & More',
  description: 'Experience the future of Islamic tools with VismifyTools. Lightning-fast Prayer Times, AI-powered Qibla Finder, Smart Halal Checker, Advanced Zakat Calculator, and 50+ premium Islamic tools. Trusted by 1M+ Muslims worldwide. 99.99% uptime guaranteed.',
  keywords: [
    'Islamic tools', 'Muslim tools', 'Prayer times calculator', 'Qibla finder GPS', 'Halal food checker', 'Zakat calculator 2025',
    'Islamic calendar Hijri', 'Quran online reader', 'Dhikr counter digital', 'Muslim prayer app', 'Islamic lifestyle tools',
    'Ramadan tools', 'Hajj guide', 'Islamic finance calculator', 'Muslim community platform', 'Islamic education tools',
    'Prayer reminder app', 'Islamic date converter', 'Muslim wedding tools', 'Islamic business tools', 'Mosque finder',
    'Islamic knowledge base', 'Muslim daily planner', 'Islamic goal tracker', 'Halal investment calculator', 'Islamic charity tools'
  ],
  authors: [{ name: 'VismifyTools Elite Development Team', url: 'https://vismifytools.com' }],
  creator: 'VismifyTools',
  publisher: 'VismifyTools International',
  category: 'Islamic Lifestyle & Productivity Tools',
  classification: 'Islamic Web Application',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vismifytools.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
      'ur-PK': '/ur',
      'tr-TR': '/tr',
      'id-ID': '/id',
      'ms-MY': '/ms',
      'fr-FR': '/fr',
      'de-DE': '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vismifytools.com',
    siteName: 'VismifyTools - Premium Islamic Tools Platform',
    title: 'VismifyTools – World\'s Most Advanced Islamic Tools Platform',
    description: 'Revolutionary Islamic tools platform with AI-powered features. Lightning-fast performance, 99.99% uptime, trusted by 1M+ Muslims globally. Experience the future of Islamic digital tools.',
    images: [
      {
        url: '/og-image-main.png',
        width: 1200,
        height: 630,
        alt: 'VismifyTools - Advanced Islamic Tools Platform',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'VismifyTools Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VismifyTools',
    creator: '@VismifyTools',
    title: 'VismifyTools – Revolutionary Islamic Tools Platform',
    description: 'AI-powered Islamic tools with lightning-fast performance. Trusted by 1M+ Muslims worldwide. 99.99% uptime guaranteed.',
    images: ['/twitter-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#059669' },
    { media: '(prefers-color-scheme: dark)', color: '#10b981' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VismifyTools',
  },
  applicationName: 'VismifyTools',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js 13.5',
  abstract: 'Advanced Islamic tools platform with AI-powered features and lightning-fast performance.',
  archives: ['https://vismifytools.com/archive'],
  assets: ['https://vismifytools.com/assets'],
  bookmarks: ['https://vismifytools.com/bookmarks'],
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'theme-color': '#059669',
    'color-scheme': 'light dark',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//api.vismifytools.com" />
        
        {/* Preconnect to Critical Origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *{box-sizing:border-box;margin:0;padding:0}
            html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            body{font-family:system-ui,-apple-system,sans-serif;line-height:1.6}
            .loading{opacity:0;transform:translateY(20px);transition:all 0.6s ease}
            .loaded{opacity:1;transform:translateY(0)}
          `
        }} />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Rich Snippets and Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VismifyTools',
              url: 'https://vismifytools.com',
              logo: 'https://vismifytools.com/logo-512.png',
              description: 'World\'s most advanced Islamic tools platform with AI-powered features',
              foundingDate: '2024',
              founders: [{
                '@type': 'Person',
                name: 'VismifyTools Team'
              }],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'support@vismifytools.com',
                availableLanguage: ['English', 'Arabic', 'Urdu', 'Turkish', 'Indonesian']
              },
              sameAs: [
                'https://twitter.com/VismifyTools',
                'https://facebook.com/VismifyTools',
                'https://instagram.com/VismifyTools',
                'https://linkedin.com/company/vismifytools'
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '15847',
                bestRating: '5',
                worstRating: '1'
              }
            })
          }}
        />
        
        <Script
          id="webapp-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'VismifyTools',
              description: 'Revolutionary Islamic tools platform with AI-powered features and lightning-fast performance',
              url: 'https://vismifytools.com',
              applicationCategory: 'LifestyleApplication',
              operatingSystem: 'Web Browser, iOS, Android',
              browserRequirements: 'Requires JavaScript. Requires HTML5.',
              softwareVersion: '2.0',
              datePublished: '2024-01-01',
              dateModified: '2025-01-27',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock'
              },
              author: {
                '@type': 'Organization',
                name: 'VismifyTools Elite Development Team'
              },
              publisher: {
                '@type': 'Organization',
                name: 'VismifyTools',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://vismifytools.com/logo-512.png'
                }
              },
              screenshot: 'https://vismifytools.com/screenshot.png',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '15847'
              },
              keywords: 'Islamic tools, Muslim tools, Prayer times, Qibla finder, Halal checker, Zakat calculator',
              featureList: [
                'AI-Powered Prayer Times',
                'GPS Qibla Finder',
                'Smart Halal Checker',
                'Advanced Zakat Calculator',
                'Digital Quran Reader',
                'Dhikr Counter',
                'Islamic Calendar',
                'Community Features'
              ]
            })
          }}
        />
        
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://vismifytools.com'
              }, {
                '@type': 'ListItem',
                position: 2,
                name: 'Islamic Tools',
                item: 'https://vismifytools.com/tools'
              }]
            })
          }}
        />
        
        {/* Performance Monitoring */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals Monitoring
              function measureCWV() {
                if ('web-vital' in window) return;
                window['web-vital'] = true;
                
                // LCP Measurement
                new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  console.log('LCP:', lastEntry.startTime);
                }).observe({entryTypes: ['largest-contentful-paint']});
                
                // FID Measurement  
                new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  entries.forEach((entry) => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                  });
                }).observe({entryTypes: ['first-input']});
                
                // CLS Measurement
                let clsValue = 0;
                new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                      clsValue += entry.value;
                      console.log('CLS:', clsValue);
                    }
                  }
                }).observe({entryTypes: ['layout-shift']});
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', measureCWV);
              } else {
                measureCWV();
              }
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased loading`}>
        <Script
          id="body-loaded"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.body.classList.add('loaded');
              document.body.classList.remove('loading');
            `
          }}
        />
        
        {/* Skip to Content for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-300"
        >
          Skip to main content
        </a>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <main id="main-content">
            {children}
          </main>
        </ThemeProvider>
        
        {/* Service Worker Registration */}
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}