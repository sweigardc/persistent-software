import { cn } from '@/lib/utils';

/**
 * The one frame for imagery: hairline border, 4px radius, mono caption below.
 * Evidence, not atmosphere — real product screens, the real person, the real desk.
 */
export function Figure({
  src,
  alt = '',
  ratio = '16/9',
  caption,
  className
}: {
  src?: string;
  alt?: string;
  ratio?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div
        className="overflow-hidden rounded-control border border-rule bg-sunk"
        style={{ aspectRatio: ratio }}
      >
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="block size-full object-cover" />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-graphite-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
