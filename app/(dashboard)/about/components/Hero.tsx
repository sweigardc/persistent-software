import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Figure } from '@/components/ps/figure';

export function Hero() {
  return (
    <Band className="py-16 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="flex flex-col items-start gap-5">
          <span className="ps-label tracking-[0.16em] text-signal-700">About</span>
          <h1>Twenty years of shipping, one person to talk to.</h1>
          <p className="max-w-[52ch] text-lead text-graphite-500">
            I&rsquo;m Chris Sweigard. I&rsquo;ve led engineering at an education company,
            built side projects, and spent the last two
            years folding AI tooling into a practice that still cares about architecture.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="signal">
              <a href="mailto:contact@persistentsoftware.com">Get in touch</a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://calendly.com/chris-persistentsoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a call
              </a>
            </Button>
          </div>
        </div>
        <Figure
          src="/chris-portrait.jpg"
          alt="Chris Sweigard"
          ratio="4/5"
          caption="Chris Sweigard · Founder"
          sizes="(min-width: 768px) 280px, 100vw"
          priority
          className="w-full max-w-[280px]"
        />
      </div>
    </Band>
  );
}
