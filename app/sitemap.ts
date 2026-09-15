import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * The public marketing pages only. Anything behind sign-in is disallowed in
 * robots.ts and deliberately absent here.
 *
 * lastModified is the date the page's content last changed, not the build time.
 * Update it in the same change that edits the page, so crawlers can trust it.
 */
const routes: {
  path: string;
  lastModified: string;
  changeFrequency: 'monthly' | 'yearly';
  priority: number;
}[] = [
  { path: '/', lastModified: '2026-09-15', changeFrequency: 'monthly', priority: 1 },
  { path: '/mobile', lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/migrations', lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-search', lastModified: '2026-09-14', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', lastModified: '2026-09-15', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy', lastModified: '2026-09-09', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', lastModified: '2026-09-09', changeFrequency: 'yearly', priority: 0.2 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
