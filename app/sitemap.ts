import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { getPosts } from '@/lib/blog';

/**
 * The public marketing pages only. Anything behind sign-in is disallowed in
 * robots.ts and deliberately absent here.
 *
 * lastModified is the date the page's content last changed, not the build time.
 * Update it in the same change that edits the page, so crawlers can trust it.
 */
type Route = {
  path: string;
  lastModified: string;
  changeFrequency: 'monthly' | 'yearly';
  priority: number;
};

const routes: Route[] = [
  { path: '/', lastModified: '2026-10-12', changeFrequency: 'monthly', priority: 1 },
  { path: '/mobile', lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/migrations', lastModified: '2026-09-11', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-search', lastModified: '2026-09-14', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about', lastModified: '2026-10-12', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy', lastModified: '2026-09-09', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', lastModified: '2026-09-09', changeFrequency: 'yearly', priority: 0.2 }
];

// Posts carry their own dates, and the index changes whenever the newest one does.
const posts = getPosts();
const blogRoutes: Route[] = [
  { path: '/blog', lastModified: posts[0].published, changeFrequency: 'monthly', priority: 0.7 },
  ...posts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.updated ?? post.published,
    changeFrequency: 'yearly' as const,
    priority: 0.6
  }))
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...blogRoutes].map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
