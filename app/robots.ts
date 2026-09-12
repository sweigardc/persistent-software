import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The app itself, not the marketing site. /sign-in, /sign-up and
      // /pricing stay crawlable but carry robots: noindex, so an already
      // indexed URL can still be seen dropping out.
      disallow: ['/api/', '/dashboard']
    },
    sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
    host: SITE_URL
  };
}
