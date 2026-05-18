import type { Metadata } from 'next';
import { Anton, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Zero Give — Grip The Game You Love',
  description: 'Elite grip socks engineered for explosive soccer performance. Lock your foot in, transfer every watt, take control of every move.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} ${mono.variable}`}>
      <body className="bg-ink text-white selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
