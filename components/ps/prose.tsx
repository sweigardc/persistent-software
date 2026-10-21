import { Figure } from '@/components/ps/figure';
import { cn } from '@/lib/utils';

/**
 * Long-form writing. Plain elements inside it — p, h2, h3, lists, links, inline
 * code, tables — pick up the article styles from `.ps-prose` in globals.css, so
 * a post body reads like ordinary HTML.
 */
export function Prose({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('ps-prose', className)} {...props} />;
}

/** A code listing: the terminal panel without the animation. Scrolls sideways rather than wrapping. */
export function CodeBlock({ label, children }: { label?: string; children: string }) {
  return (
    <div className="overflow-hidden rounded-panel border border-graphite-700 bg-graphite-900">
      {label && (
        <div className="border-b border-graphite-700 px-3.5 py-2.5 font-mono text-[11px] font-medium tracking-[0.1em] text-graphite-300">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-4 font-mono text-code leading-[1.75] text-graphite-200">
        <code>{children.trim()}</code>
      </pre>
    </div>
  );
}

/**
 * Two screenshots of the same screen, before and after a change. Portrait
 * screens sit side by side; landscape ones stack so neither shrinks to a
 * thumbnail.
 */
export function BeforeAfter({
  before,
  after,
  alt,
  ratio,
  layout = 'side',
  caption
}: {
  before: string;
  after: string;
  /** What the screen is, e.g. "Profile screen on the closed iPhone Duo". */
  alt: string;
  ratio: string;
  layout?: 'side' | 'stack';
  caption: React.ReactNode;
}) {
  const sizes = layout === 'side' ? '(min-width: 1024px) 360px, 50vw' : '(min-width: 1024px) 740px, 100vw';

  return (
    <figure className="m-0">
      <div className={cn('grid gap-4', layout === 'side' && 'grid-cols-2')}>
        <Figure src={before} alt={`${alt}, before the fix`} ratio={ratio} sizes={sizes} caption="Before" />
        <Figure src={after} alt={`${alt}, after the fix`} ratio={ratio} sizes={sizes} caption="After" />
      </div>
      <figcaption className="mt-3 text-sm text-graphite-500">{caption}</figcaption>
    </figure>
  );
}
