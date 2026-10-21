import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Band } from '@/components/ps/band';
import { Prose } from '@/components/ps/prose';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPostDate, getPost, getPosts } from '@/lib/blog';
import { BOOKING_URL, CONTACT_EMAIL, FOUNDER_ID, FOUNDER_NAME, ORGANIZATION_ID } from '@/lib/entity';
import { SITE_URL } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

// Posts are known at build time; any other slug is a 404, not a render.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = `${post.title} | Persistent Software`;
  return {
    title,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: FOUNDER_NAME, url: `${SITE_URL}/about` }],
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'Persistent Software',
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [FOUNDER_NAME],
      tags: post.tags
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}${post.image}`,
    keywords: post.tags,
    author: { '@id': FOUNDER_ID },
    publisher: { '@id': ORGANIZATION_ID }
  };

  return (
    <main className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Band tone="ink" spine className="py-16 md:py-24">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <Link
            href="/blog"
            className="ps-label flex items-center gap-2 border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300 transition-colors duration-[120ms] hover:text-signal-200"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.75} />
            Blog
          </Link>
          <h1 className="text-h2 md:text-h1">{post.title}</h1>
          <p className="max-w-[60ch] text-lead text-graphite-300">{post.description}</p>
          <p className="ps-label flex flex-wrap gap-x-3 gap-y-2 text-graphite-400">
            <Link
              href="/about"
              className="text-graphite-200 transition-colors duration-[120ms] hover:text-graphite-0"
            >
              {FOUNDER_NAME}
            </Link>
            <span aria-hidden>·</span>
            <time dateTime={post.published}>{formatPostDate(post.published)}</time>
            {post.updated && (
              <>
                <span aria-hidden>·</span>
                <span>
                  Updated <time dateTime={post.updated}>{formatPostDate(post.updated)}</time>
                </span>
              </>
            )}
          </p>
        </div>
      </Band>

      <Band className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <article className="min-w-0 lg:col-span-8">
            <Prose>
              <post.Body />
            </Prose>
          </article>

          <aside className="lg:col-span-4">
            <div className="border border-rule bg-surface p-6 lg:sticky lg:top-8">
              <span className="ps-label text-graphite-500">Filed under</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              {post.related && (
                <Link
                  href={post.related.href}
                  className="mt-6 flex items-center justify-between gap-3 border-t border-rule pt-5 font-semibold text-graphite-900 transition-colors duration-[120ms] hover:text-signal-700"
                >
                  {post.related.label}
                  <ArrowRight className="size-4 shrink-0" strokeWidth={1.75} />
                </Link>
              )}
              <Link
                href="/blog"
                className="mt-4 flex items-center justify-between gap-3 border-t border-rule pt-4 text-graphite-500 transition-colors duration-[120ms] hover:text-graphite-900"
              >
                All posts
                <ArrowRight className="size-4 shrink-0" strokeWidth={1.75} />
              </Link>
            </div>
          </aside>
        </div>
      </Band>

      <Band tone="ink" spine className="py-16 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-h2">Have an app that needs the same care?</h2>
            <p className="mt-3.5 max-w-[52ch] text-lead text-graphite-300">
              I do this kind of work on client codebases: find what breaks, fix it at the
              source, and leave notes your team can follow.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild variant="signal" size="lg">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a call
              </a>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <a href={`mailto:${CONTACT_EMAIL}`}>Get in touch</a>
            </Button>
          </div>
        </div>
      </Band>
    </main>
  );
}
