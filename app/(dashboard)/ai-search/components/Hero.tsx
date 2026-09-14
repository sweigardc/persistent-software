import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Stat } from '@/components/ps/stat';

const stats = [
  { value: '2', unit: ' channels', label: 'Classic Google rankings and AI answers, in one strategy' },
  { value: '5', unit: ' engines', label: 'ChatGPT, Gemini, Claude, Perplexity and AI Overviews tracked' },
  { value: '30', unit: ' days', label: 'To a measured baseline of where AI mentions you today' }
];

export function Hero() {
  return (
    <Band tone="ink" spine className="py-20 md:py-28">
      <div className="flex max-w-3xl flex-col items-start gap-6">
        <span className="ps-label border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300">
          SEO · AEO · GEO
        </span>

        <h1 className="text-h1 md:text-display">
          You rank on Google.
          <span className="mt-2 block text-signal-400">AI has never heard of you.</span>
        </h1>

        <p className="max-w-[52ch] text-lead text-graphite-300">
          AI is the new search. Your buyers now ask ChatGPT, Gemini and Claude for a
          recommendation and take the answer they get. I make sure your brand is in that
          answer — without giving up the Google rankings you already paid for.
        </p>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <Button asChild variant="signal" size="lg">
            <a
              href="https://calendly.com/chris-persistentsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get an AI visibility audit
            </a>
          </Button>
          <Button asChild variant="inverse" size="lg">
            <a href="#the-gap">Why SEO is not enough</a>
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
