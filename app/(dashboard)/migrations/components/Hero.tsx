import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Stat } from '@/components/ps/stat';

const stats = [
  { value: '6', unit: '–10x', label: 'Faster than a hand-written rewrite' },
  { value: '70', unit: '–85%', label: 'Lower migration cost' },
  { value: '4', unit: 'x', label: 'Better p95 latency after cutover' }
];

export function Hero() {
  return (
    <Band tone="ink" spine className="py-20 md:py-28">
      <div className="flex max-w-3xl flex-col items-start gap-6">
        <span className="ps-label border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300">
          AI-assisted code migrations
        </span>

        <h1 className="text-h1 md:text-display">
          Get off the legacy stack
          <span className="mt-2 block text-signal-400">without the two-year rewrite.</span>
        </h1>

        <p className="max-w-[52ch] text-lead text-graphite-300">
          Legacy migrations stall because reading the old system costs more than writing the
          new one. AI reads all of it — every branch, every stored procedure, every dead code
          path — in hours. I use that map to port your system deliberately, with tests that
          prove the new one behaves like the old one.
        </p>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <Button asChild variant="signal" size="lg">
            <a
              href="https://calendly.com/chris-persistentsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scope your migration
            </a>
          </Button>
          <Button asChild variant="inverse" size="lg">
            <a href="#the-method">Read the method</a>
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-6 border-t border-graphite-700 pt-10 sm:grid-cols-3">
        {stats.map((stat) => (
          <Stat key={stat.label} tone="ink" value={stat.value} unit={stat.unit} className="p-0">
            {stat.label}
          </Stat>
        ))}
      </div>
    </Band>
  );
}
