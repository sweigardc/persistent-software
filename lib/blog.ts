import type { ComponentType } from 'react';
import reactNativeIphoneDuo from '@/content/blog/react-native-iphone-duo';

/**
 * The blog is a list of typed modules, one per post, in content/blog. To publish
 * a post: add its module there, put its images in public/blog/<slug>/, and add
 * it to `posts` below. The index, the post route, the sitemap and the generated
 * share card all read from this list, so there is nothing else to register.
 */
export type Post = {
  /** The URL segment: /blog/<slug>. Never change it once published. */
  slug: string;
  title: string;
  /** One or two sentences. Used as the lead, the meta description and the index blurb. */
  description: string;
  /** YYYY-MM-DD. */
  published: string;
  /** YYYY-MM-DD, only when the content changed after publishing. */
  updated?: string;
  tags: string[];
  /** The service page the post relates to, linked beside the article. */
  related?: { label: string; href: string };
  /** A path under public/ for structured data. Share cards are generated, but their URLs are hashed. */
  image: string;
  /** The share card's headline, when the title is too long to set at card size. */
  cardTitle?: string;
  Body: ComponentType;
};

const posts: Post[] = [reactNativeIphoneDuo];

/** Newest first. */
export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.published.localeCompare(a.published));
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/** "Oct 16, 2026". Dates are calendar days, so they format in UTC. */
export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  });
}
