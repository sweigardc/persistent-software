import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Stat } from '@/components/ps/stat';

export function CTA() {
  return (
    <Band tone="ink" spine className="py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-h2">Tell me what you&rsquo;re building.</h2>
          <p className="mt-3.5 max-w-[52ch] text-lead text-graphite-300">
            Thirty minutes is enough to scope most projects. You&rsquo;ll leave the call with
            a plan and a number, whether or not we work together.
          </p>
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

      <div className="mt-14 grid gap-x-8 gap-y-6 border-t border-graphite-700 pt-10 sm:grid-cols-3">
        <Stat tone="ink" value="8" unit="+" className="p-0">
          Years leading engineering teams
        </Stat>
        <Stat tone="ink" value="20" unit="+" className="p-0">
          Years shipping production software
        </Stat>
        <Stat tone="ink" value="100" unit="%" className="p-0">
          Of the code is yours at handover
        </Stat>
      </div>
    </Band>
  );
}
