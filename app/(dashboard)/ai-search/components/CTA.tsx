import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';

const deliverables = [
  'How often ChatGPT, Gemini, Claude and Perplexity name you today',
  'Which competitors they recommend instead, and the sources they cite',
  'The technical and content fixes that would move it, in priority order'
];

export function CTA() {
  return (
    <Band tone="ink" spine className="py-16 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-h2">Find out what AI says about you.</h2>
          <p className="mt-3.5 max-w-[52ch] text-lead text-graphite-300">
            Every engagement starts with an AI visibility audit of your brand against the
            questions your buyers ask. You keep the findings whether or not you hire me to act
            on them.
          </p>
          <ul className="mt-8 border-t border-graphite-700">
            {deliverables.map((item) => (
              <li key={item} className="border-b border-graphite-700 py-3.5 text-graphite-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Button asChild variant="signal" size="lg">
            <a
              href="https://calendly.com/chris-persistentsoftware"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call
            </a>
          </Button>
          <Button asChild variant="inverse" size="lg">
            <a href="mailto:contact@persistentsoftware.com">Get in touch</a>
          </Button>
        </div>
      </div>
    </Band>
  );
}
