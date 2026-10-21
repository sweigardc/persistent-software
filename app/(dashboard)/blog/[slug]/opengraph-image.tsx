import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { formatPostDate, getPost, getPosts } from '@/lib/blog';

export const alt = 'Persistent Software blog post';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return renderOgImage({
    label: post ? `Blog · ${formatPostDate(post.published)}` : 'Blog',
    title: post?.cardTitle ?? post?.title ?? 'Notes from the work.',
    blurb: post?.description ?? ''
  });
}
