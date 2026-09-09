import { cn } from '@/lib/utils';

/** A number and what it means. Mono, because it is evidence. */
export function Stat({
  value,
  unit,
  children,
  tone = 'paper',
  className
}: {
  value: string;
  unit?: string;
  children: React.ReactNode;
  tone?: 'paper' | 'ink';
  className?: string;
}) {
  const ink = tone === 'ink';
  return (
    <div
      className={cn(
        'flex flex-wrap items-baseline gap-4 p-5',
        ink ? 'bg-transparent' : 'bg-surface',
        className
      )}
    >
      <span
        className={cn(
          'font-mono text-[40px] font-bold leading-none tracking-[-0.03em]',
          ink ? 'text-graphite-0' : 'text-graphite-900'
        )}
      >
        {value}
        {unit && <span className={ink ? 'text-signal-400' : 'text-signal-500'}>{unit}</span>}
      </span>
      <span className={cn('text-sm leading-snug', ink ? 'text-graphite-300' : 'text-graphite-500')}>
        {children}
      </span>
    </div>
  );
}
