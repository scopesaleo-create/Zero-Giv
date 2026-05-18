import type { Metadata } from 'next';
import { Inter_Tight, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans' });
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' });
const editorial = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-editorial' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Zero Give — Grip Engineered for the Modern Game',
  description: 'A biomechanical grip system for soccer and field athletes. Zero internal slippage. Maximum force transfer. Built to compete for the full ninety.',
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
