import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/components/ui/footer';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  // Every relative URL in metadata — openGraph.url, the generated
  // opengraph-image — resolves against this.
  metadataBase: new URL(SITE_URL),
  title: 'Persistent Software',
  description:
    'One senior engineer, twenty years of production experience. Full-stack builds, mobile apps, payments and integrations — and you own the codebase.',
  keywords:
    'python, next.js, postgres, stripe, saas, software, web development, react, react native, typescript, tailwindcss, chris sweigard, full stack engineer, persistent software',
  authors: [{ name: 'Persistent Software', url: 'https://www.persistentsoftware.com' }],
  openGraph: {
    title: 'Persistent Software',
    description:
      'One senior engineer, twenty years of production experience. Full-stack builds, mobile apps, payments and integrations — and you own the codebase.',
    url: 'https://www.persistentsoftware.com',
    siteName: 'Persistent Software',
    type: 'website',
    locale: 'en_US'
  },
  // Card type only: each page's own title, description and generated image
  // fill the rest, so a page never shares under the site-wide blurb.
  twitter: {
    card: 'summary_large_image'
  }
};

export const viewport: Viewport = {
  maximumScale: 1
};

// Manrope for voice, JetBrains Mono for evidence.
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} bg-paper text-graphite-900`}
    >
      <body className="min-h-[100dvh] bg-paper font-sans antialiased">
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              '/api/user': getUser(),
              '/api/team': getTeamForUser()
            }
          }}
        >
          {children}
          <Analytics />
        </SWRConfig>
        <Footer />
      </body>
    </html>
  );
}
