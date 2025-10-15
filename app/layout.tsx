import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from 'swr';
import { Analytics } from "@vercel/analytics/react"
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Persistent Software',
  description: 'Build your product quickly with Python, Next.js, and Postgres.',
  keywords: "python, next.js, postgres, stripe, saas, software, web development, react, react native, typescript, tailwindcss, chris sweigard, full stack engineer, persistent software",
  authors: [{ name: 'Persistent Software', url: 'https://www.persistentsoftware.com' }],
  openGraph: {
    title: 'Persistent Software',
    description: 'Build your product quickly with Python, Next.js, and Postgres.',
    url: 'https://www.persistentsoftware.com',
    siteName: 'Persistent Software',
  }
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
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
