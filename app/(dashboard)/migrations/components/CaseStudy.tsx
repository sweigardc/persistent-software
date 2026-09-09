import { Badge } from '@/components/ui/badge';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { ArrowRight } from 'lucide-react';

const results = [
  { label: 'Timeline', before: '18 months quoted', after: '11 weeks' },
  { label: 'Migration cost', before: '$1.4M quoted', after: '~$180K' },
  { label: 'Infrastructure', before: '$9,800/mo', after: '$3,100/mo' },
  { label: 'p95 latency', before: '840ms', after: '210ms' },
  { label: 'Endpoints', before: '340 in the codebase', after: '250 ported, 90 deleted' },
  { label: 'Incidents at cutover', before: '—', after: 'Zero' }
];

const timeline = [
  {
    week: 'Weeks 1–2',
    title: 'Read everything',
    body: 'AI ingested all 200k lines and produced a call graph, an endpoint inventory and a data-flow map. Cross-referencing that inventory against twelve months of access logs found 90 endpoints that had served zero production traffic. I deleted them instead of porting them — roughly a quarter of the work, gone in week two.'
  },
  {
    week: 'Weeks 2–4',
    title: 'Pin down the behavior',
    body: 'I replayed a month of recorded production requests against the legacy service and captured every response as a golden fixture — including the responses that were arguably wrong. Bug-for-bug parity was the default. Anything worth fixing went on a short list the business signed off on explicitly.'
  },
  {
    week: 'Weeks 3–8',
    title: 'Port module by module',
    body: 'Spring controllers became FastAPI routers; Hibernate entities became SQLAlchemy models. Postgres stayed exactly where it was — one migration at a time is the whole discipline. Every module had to pass its characterization tests before the next one started.'
  },
  {
    week: 'Weeks 7–10',
    title: 'Run both, diff everything',
    body: 'The Python service went onto ECS Fargate behind the existing load balancer, shadowing live traffic. Both systems saw every request; only the Java response was returned. A diff harness compared the pairs and filed anything that disagreed.'
  },
  {
    week: 'Week 11',
    title: 'Shift traffic, turn it off',
    body: 'One percent, then ten, then fifty, then all of it — with the old fleet warm the entire time. It stayed warm for a month after. It was never needed, and the EC2 instances were terminated the day that month ended.'
  }
];

export function CaseStudy() {
  return (
    <Band id="case-study" className="scroll-mt-8 pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="Case 01 · Order platform" />

      <div className="mt-10 max-w-3xl">
        <h2 className="text-h2">A twelve-year-old Java server, retired in eleven weeks</h2>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Badge variant="outline">Java 7 · Spring · Hibernate · Tomcat on EC2</Badge>
          <ArrowRight className="size-4 text-signal-700" strokeWidth={1.75} />
          <Badge variant="signal">Python · FastAPI · SQLAlchemy · AWS Fargate</Badge>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-4 text-graphite-500 lg:col-span-7">
          <p>
            The system was twelve years old and it worked. That was the problem. It had been
            written in 2012 against Java 7, deployed as a WAR onto Tomcat across a fixed fleet
            of EC2 instances, and it had processed every order the business took since. Nobody
            wanted to touch it, and everybody needed something from it.
          </p>
          <p>
            None of the original authors were still at the company. Two engineers knew roughly
            where the bodies were buried. The build ran on one particular machine with one
            particular Maven configuration, and a release meant a three-hour window on a
            Saturday. Meanwhile the JDK had been out of support for years, the security team
            had it flagged in every quarterly audit, and the roadmap had a growing pile of
            &ldquo;we cannot do that on the old server&rdquo; attached to it.
          </p>
          <p>
            A large consultancy had scoped the rewrite at eighteen months and roughly $1.4
            million. That estimate was not padded — it was an honest read of how long it takes
            a team of a dozen engineers to understand 200,000 lines of undocumented code well
            enough to replace it. The reading is the expensive part. The typing never was.
          </p>
          <p>
            I started by having AI read all of it. Not to write the replacement — to build the
            map. In two weeks I had a call graph, a complete endpoint inventory and a data-flow
            trace for every table. Cross-referencing that inventory against a year of access
            logs turned up 90 endpoints that had not served a single production request in
            twelve months. Dead admin tools, a deprecated partner API, three generations of
            abandoned reporting. I deleted them. A quarter of the scope disappeared before
            anyone wrote a line of Python.
          </p>
          <p>
            The rest was discipline. Every module got characterization tests generated from
            real recorded traffic before it got ported, so &ldquo;does the new one behave like
            the old one&rdquo; had an answer that was a test run rather than an opinion. The
            database did not move — one migration at a time is the whole trick. And the new
            service ran in shadow mode against live production traffic for three weeks, with a
            harness diffing every response pair.
          </p>
          <p>
            That harness earned its keep. It caught a month-end batch job whose output depended
            on the specific way Java rounds half-even on a{' '}
            <code className="rounded-control bg-sunk px-1 text-sm text-graphite-900">
              BigDecimal
            </code>{' '}
            — a difference of a few cents per invoice that nobody had documented because nobody
            had ever noticed. Python rounded it differently. In a conventional rewrite that
            surfaces as an angry finance email in month seven. Here it surfaced as a failing
            diff in week nine, and I fixed it in an afternoon.
          </p>
          <p className="text-graphite-900">
            Eleven weeks after kickoff the last of the traffic shifted. Zero incidents at
            cutover. Infrastructure spend dropped from $9,800 a month to $3,100 because Fargate
            scales down at night and the old fleet never did. p95 latency went from 840ms to
            210ms — mostly because three layers of indirection were deleted, not because Python
            is faster than Java. And a deploy now takes nine minutes and does not require a
            Saturday.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-rule bg-surface p-6 lg:sticky lg:top-8">
            <span className="ps-label text-graphite-500">By the numbers</span>
            <div className="mt-5">
              {results.map((result) => (
                <div key={result.label} className="border-b border-rule py-3.5 last:border-0">
                  <p className="text-sm text-graphite-500">{result.label}</p>
                  <div className="mt-1 flex flex-wrap items-baseline gap-2 font-mono text-sm">
                    <span className="text-graphite-400 line-through">{result.before}</span>
                    <ArrowRight className="size-3 shrink-0 text-graphite-400" strokeWidth={1.75} />
                    <span className="text-base text-signal-700">{result.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <span className="ps-label text-graphite-500">How the eleven weeks broke down</span>
        <ul className="mt-6 border-t border-rule">
          {timeline.map((step) => (
            <li
              key={step.week}
              className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <span className="ps-label text-signal-700">{step.week}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-h4">{step.title}</h3>
                <p className="mt-1.5 max-w-[68ch] text-graphite-500">{step.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Band>
  );
}
