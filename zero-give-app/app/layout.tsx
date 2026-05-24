import type { Metadata } from 'next';
import { Inter_Tight, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans' });
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const editorial = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-editorial' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://zerogive.com'),
  title: {
    default: 'Zero Give — Grip Engineered for the Modern Game',
    template: '%s · Zero Give',
  },
  description:
    'A biomechanical grip system for soccer and field athletes. Zero internal slippage. Maximum force transfer. Built to compete for the full ninety.',
  keywords: ['Zero Give', 'ZG-01', 'grip socks', 'soccer socks', 'PivotCore', 'football grip', 'performance socks'],
  openGraph: {
    title: 'Zero Give — Grip the Game You Love',
    description:
      'A biomechanical grip system worn under the boot. Foot stays planted, force stays forward, the boot stays welded to you — for the full ninety.',
    url: 'https://zerogive.com',
    siteName: 'Zero Give',
    type: 'website',
    images: [
      {
        url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DMEyv5KQ2ERwEjJebn3NZHtYXd/hf_20260524_030310_4e988cf2-27f4-4534-ba2b-c3d3d6329637.png',
        width: 1264,
        height: 848,
        alt: 'Zero Give — campaign hero, ZG-01.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Give — Grip Engineered for the Modern Game',
    description: 'A biomechanical grip system for the modern game.',
    images: ['https://d8j0ntlcm91z4.cloudfront.net/user_3DMEyv5KQ2ERwEjJebn3NZHtYXd/hf_20260524_030310_4e988cf2-27f4-4534-ba2b-c3d3d6329637.png'],
  },
  icons: {
    icon: '/images/zero-give-logo.png',
    apple: '/images/zero-give-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${editorial.variable} ${mono.variable}`}>
      <body className="bg-ink text-bone selection:bg-signal selection:text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
