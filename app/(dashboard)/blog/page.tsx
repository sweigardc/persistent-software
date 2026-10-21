import type { Metadata } from 'next';
import Link from 'next/link';
import { Band } from '@/components/ps/band';
import { Badge } from '@/components/ui/badge';
import { formatPostDate, getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Persistent Software',
  description:
    'Field notes from client and product work at Persistent Software: what broke, what fixed it, and the code.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Blog | Persistent Software',
    description:
      'Field notes from client and product work at Persistent Software: what broke, what fixed it, and the code.',
    url: 'https://www.persistentsoftware.com/blog',
    siteName: 'Persistent Software'
  }
};

export default function Blog() {
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-paper">
      <Band tone="ink" spine className="py-16 md:py-24">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <span className="ps-label border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300">
            Blog
          </span>
          <h1 className="text-h1 md:text-display">Notes from the work.</h1>
          <p className="max-w-[52ch] text-lead text-graphite-300">
            Field reports from client and product work: what broke, what fixed it, and the
            code that did it.
          </p>
        </div>
      </Band>

      <Band className="py-16 md:py-20">
        <ul className="border-t border-rule">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="grid gap-2 border-b border-rule py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <time dateTime={post.published} className="ps-label text-graphite-500">
                  {formatPostDate(post.published)}
                </time>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-h3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors duration-[120ms] hover:text-signal-700"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-[68ch] text-graphite-500">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Band>
    </main>
  );
}
