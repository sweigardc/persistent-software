import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';

const deliverables = [
  'An honest read on what your prototype is worth keeping',
  'The features that stand between you and a store approval',
  'A phased plan with a real timeline and a real number'
];

export function CTA() {
  return (
    <Band tone="ink" spine className="py-16 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-h2">Send me the app you already built.</h2>
          <p className="mt-3.5 max-w-[52ch] text-lead text-graphite-300">
            Every engagement starts with a review of what exists today — a prototype, a spec,
            or a rough idea of the app your brand needs. You get the findings whether or not
            you hire me to build it.
          </p>
          <ul className="mt-8 border-t border-graphite-700">
            {deliverables.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 border-b border-graphite-700 py-3.5 text-graphite-300"
              >
                <span className="font-mono text-xs leading-6 text-signal-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
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
