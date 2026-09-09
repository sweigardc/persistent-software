import { cn } from '@/lib/utils';

/** One band opener: a mono label, then a hairline running to the edge. */
export function SectionHeader({
  label,
  className,
  tone = 'paper'
}: {
  label: string;
  className?: string;
  tone?: 'paper' | 'ink';
}) {
  return (
    <div className={cn('flex items-baseline gap-5', className)}>
      <span
        className={cn(
          'ps-label shrink-0 tracking-[0.16em]',
          tone === 'ink' ? 'text-signal-300' : 'text-signal-700'
        )}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={cn('h-px flex-1', tone === 'ink' ? 'bg-graphite-700' : 'bg-rule')}
      />
    </div>
  );
}
