import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Bricolage_Grotesque, Instrument_Serif } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const editorial = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-editorial' });

export const metadata: Metadata = {
  metadataBase: new URL('https://zerogive.com'),
  title: {
    default: 'Zero Give · Grip Engineered for the Modern Game',
    template: '%s · Zero Give',
  },
  description:
    'A biomechanical grip system for soccer and field athletes. Zero internal slippage. Maximum force transfer. Built to compete for the full ninety.',
  keywords: ['Zero Give', 'ZG-01', 'grip socks', 'soccer socks', 'PivotCore', 'football grip', 'performance socks'],
  openGraph: {
    title: 'Zero Give · Grip the Game You Love',
    description:
      'A biomechanical grip system worn under the boot. Foot stays planted, force stays forward, the boot stays welded to you, for the full ninety.',
    url: 'https://zerogive.com',
    siteName: 'Zero Give',
    type: 'website',
    images: [
      {
        url: '/images/zg-two-models.png',
        width: 1920,
        height: 1080,
        alt: 'Zero Give · ZG-01 worn on the pitch.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Give · Grip Engineered for the Modern Game',
    description: 'A biomechanical grip system for the modern game.',
    images: ['/images/zg-two-models.png'],
  },
  icons: {
    icon: '/images/zero-give-logo.png',
    apple: '/images/zero-give-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${display.variable} ${editorial.variable}`}>
      <head>
        {/* Preload the hero rotation and Specimen action clips so they
            start downloading the moment the document parses, instead of
            after the markup loads — kills the visible delay on the
            rotating sock at first paint. */}
        <link rel="preload" as="video" href="/media/zero-give-360.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/media/zero-give-action.mp4" type="video/mp4" />
      </head>
      <body className="bg-ink text-bone selection:bg-signal selection:text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
