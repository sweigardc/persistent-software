'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * The one piece of characterful motion in the system: lines reveal in sequence
 * and the last one holds a blinking cyan block cursor. It earns its place
 * because it *is* the pitch.
 */
export function Terminal({
  filename = 'engagement.sh',
  lines,
  className
}: {
  filename?: string;
  lines: string[];
  className?: string;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= lines.length) return;
    const timer = setTimeout(() => setStep((s) => s + 1), 420);
    return () => clearTimeout(timer);
  }, [step, lines.length]);

  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-panel border border-graphite-700 bg-graphite-900',
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-graphite-700 px-3.5 py-2.5">
        <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-graphite-300">
          {filename}
        </span>
      </div>
      <div className="px-4 py-5 font-mono text-code leading-[2.1] text-graphite-200">
        {lines.map((line, index) => (
          <div
            key={line}
            className={cn(
              'transition-opacity duration-300 ease-[cubic-bezier(0,0,0.2,1)]',
              index < step ? 'opacity-100' : 'opacity-0'
            )}
          >
            <span className="text-signal-400">$</span> {line}
            {index === lines.length - 1 && index < step && (
              <span
                aria-hidden
                className="ml-1.5 inline-block h-4 w-2 -translate-y-[-3px] animate-pulse bg-signal-400 align-baseline"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
