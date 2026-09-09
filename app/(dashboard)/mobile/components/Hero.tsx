import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Stat } from '@/components/ps/stat';

const stats = [
  { value: '1', unit: ' codebase', label: 'iOS and Android from a single React Native app' },
  { value: '6', unit: '–10 wks', label: 'Working prototype to a build in both stores' },
  { value: '100', unit: '%', label: 'Of the app is yours — source, pipeline and accounts' }
];

export function Hero() {
  return (
    <Band tone="ink" spine className="py-20 md:py-28">
      <div className="flex max-w-3xl flex-col items-start gap-6">
        <span className="ps-label border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300">
          React Native · iOS and Android
        </span>

        <h1 className="text-h1 md:text-display">
          The prototype proved the idea.
          <span className="mt-2 block text-signal-400">Now ship it to the app stores.</span>
        </h1>

        <p className="max-w-[52ch] text-lead text-graphite-300">
          AI-built apps are excellent at showing what a product should be and terrible at
          surviving a thousand real users. I rebuild them in React Native — keeping every
          product decision you validated and none of the code that cannot go to production.
        </p>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <Button asChild variant="signal" size="lg">
            <a
              href="https://calendly.com/chris-persistentsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scope your app
            </a>
          </Button>
          <Button asChild variant="inverse" size="lg">
            <a href="#white-label">See the white-label option</a>
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
