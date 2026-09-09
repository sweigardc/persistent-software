import { Button } from '@/components/ui/button';
import { Band } from '@/components/ps/band';
import { Stat } from '@/components/ps/stat';
import { Terminal } from '@/components/ps/terminal';
import { Services } from './components/Services';
import { Process } from './components/Process';

const terminalLines = [
  'kickoff call: scope the build',
  'architecture + design review',
  'week 1: working prototype',
  'weekly demos, fast iteration',
  'ship to production',
  'you own the codebase'
];

export default function HomePage() {
  return (
    <main>
      <Band tone="ink" spine className="py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="flex flex-col items-start gap-6">
            <span className="ps-label border-b border-signal-300/40 pb-1.5 tracking-[0.16em] text-signal-300">
              Personal · Experienced · Fast
            </span>
            <h1 className="text-h1 md:text-display">
              Working software
              <br />
              in week one.
            </h1>
            <p className="max-w-[46ch] text-lead text-graphite-300">
              Persistent Software is one senior engineer with two decades of production
              experience and modern tooling behind it. You get a prototype you can click in
              days, and the codebase itself at the end.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button asChild variant="signal" size="lg">
                <a
                  href="https://calendly.com/chris-persistentsoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a scoping call
                </a>
              </Button>
              <Button asChild variant="inverse" size="lg">
                <a href="#services">See what I build</a>
              </Button>
            </div>
          </div>
          <Terminal lines={terminalLines} />
        </div>
      </Band>

      <Services />
      <Process />

      <Band tone="ink" spine className="py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-h2">Tell me what you&rsquo;re building.</h2>
            <p className="mt-3.5 max-w-[52ch] text-lead text-graphite-300">
              A 30-minute call is enough to scope most projects. You&rsquo;ll leave it with a
              plan and a number, whether or not we work together.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild variant="signal" size="lg">
              <a
                href="https://calendly.com/chris-persistentsoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <a href="mailto:contact@persistentsoftware.com">Email instead</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-6 border-t border-graphite-700 pt-10 sm:grid-cols-3">
          <Stat tone="ink" value="20" unit="+" className="p-0">
            Years shipping production software
          </Stat>
          <Stat tone="ink" value="8" unit="+" className="p-0">
            Years leading engineering teams
          </Stat>
          <Stat tone="ink" value="100" unit="%" className="p-0">
            Of the code is yours at handover
          </Stat>
        </div>
      </Band>
    </main>
  );
}
