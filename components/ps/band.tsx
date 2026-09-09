import { cn } from '@/lib/utils';

type BandProps = React.ComponentProps<'section'> & {
  /** Paper or ink. Nothing in between — no tinted section backgrounds. */
  tone?: 'paper' | 'ink';
  /** The 3px signal spine on the left edge of a full-bleed ink band. */
  spine?: boolean;
};

/**
 * A major band of the page. Bands alternate paper and ink; ink bands carry the
 * 48px grid texture and, optionally, the cyan spine.
 */
export function Band({
  tone = 'paper',
  spine = false,
  className,
  children,
  ...props
}: BandProps) {
  const ink = tone === 'ink';
  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 md:py-32',
        ink ? 'bg-ink text-graphite-0' : 'bg-paper text-graphite-900',
        className
      )}
      {...props}
    >
      {ink && <div aria-hidden className="ps-grid-texture absolute inset-0 opacity-60" />}
      {ink && spine && (
        <div aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-signal-500" />
      )}
      <div className="relative mx-auto w-full max-w-page px-6">{children}</div>
    </section>
  );
}
