'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Coffee, ArrowRight, Container } from 'lucide-react';

const results = [
  { label: 'Timeline', before: '18 months quoted', after: '11 weeks' },
  { label: 'Migration cost', before: '$1.4M quoted', after: '~$180K' },
  { label: 'Infrastructure', before: '$9,800/mo', after: '$3,100/mo' },
  { label: 'p95 latency', before: '840ms', after: '210ms' },
  { label: 'Endpoints', before: '340 in the codebase', after: '250 ported, 90 deleted' },
  { label: 'Production incidents at cutover', before: '—', after: 'Zero' },
];

const timeline = [
  {
    week: 'Weeks 1–2',
    title: 'Read everything',
    body: 'AI ingested all 200k lines and produced a call graph, an endpoint inventory, and a data-flow map. Cross-referencing that inventory against twelve months of access logs found 90 endpoints that had served zero production traffic. We deleted them instead of porting them — roughly a quarter of the work, gone in week two.',
  },
  {
    week: 'Weeks 2–4',
    title: 'Pin down the behavior',
    body: 'We replayed a month of recorded production requests against the legacy service and captured every response as a golden fixture — including the responses that were arguably wrong. Bug-for-bug parity was the default. Anything we wanted to fix went on a short list the business signed off on explicitly.',
  },
  {
    week: 'Weeks 3–8',
    title: 'Port module by module',
    body: 'Spring controllers became FastAPI routers; Hibernate entities became SQLAlchemy models. Postgres stayed exactly where it was — one migration at a time is the whole discipline. Every module had to pass its characterization tests before the next one started.',
  },
  {
    week: 'Weeks 7–10',
    title: 'Run both, diff everything',
    body: 'The Python service went onto ECS Fargate behind the existing load balancer, shadowing live traffic. Both systems saw every request; only the Java response was returned. A diff harness compared the pairs and filed anything that disagreed.',
  },
  {
    week: 'Week 11',
    title: 'Shift traffic, turn it off',
    body: 'One percent, then ten, then fifty, then all of it — with the old fleet warm behind us the entire time. It stayed warm for a month after. We never needed it, and the EC2 instances were terminated the day that month ended.',
  },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="py-20 px-6 bg-background scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <Badge variant="secondary" className="px-3 py-1">Case study</Badge>
          <h2 className="text-4xl max-w-3xl">
            A twelve-year-old Java server, retired in eleven weeks
          </h2>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border border-border">
              <Coffee className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Java 7 · Spring · Hibernate · Tomcat on EC2</span>
            </div>
            <ArrowRight className="w-5 h-5 text-cyan-500" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <Container className="w-5 h-5 text-cyan-600" />
              <span className="text-cyan-700">Python · FastAPI · SQLAlchemy · AWS Fargate</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 text-muted-foreground"
          >
            <p>
              The system was twelve years old and it worked. That was the problem.
              It had been written in 2012 against Java 7, deployed as a WAR onto
              Tomcat across a fixed fleet of EC2 instances, and it had processed
              every order the business took since. Nobody wanted to touch it, and
              everybody needed something from it.
            </p>
            <p>
              None of the original authors were still at the company. Two engineers
              knew roughly where the bodies were buried. The build ran on one
              particular machine with one particular Maven configuration, and a
              release meant a three-hour window on a Saturday. Meanwhile the JDK had
              been out of support for years, the security team had it flagged in
              every quarterly audit, and the roadmap had a growing pile of "we
              cannot do that on the old server" attached to it.
            </p>
            <p>
              A large consultancy had scoped the rewrite at eighteen months and
              roughly $1.4 million. That estimate was not padded — it was an honest
              read of how long it takes a team of a dozen engineers to understand
              200,000 lines of undocumented code well enough to replace it. The
              reading is the expensive part. The typing never was.
            </p>
            <p>
              We started by having AI read all of it. Not to write the replacement —
              to build the map. In two weeks we had a call graph, a complete endpoint
              inventory, and a data-flow trace for every table. Cross-referencing that
              inventory against a year of access logs turned up 90 endpoints that had
              not served a single production request in twelve months. Dead admin
              tools, a deprecated partner API, three generations of abandoned reporting.
              We deleted them. A quarter of the scope disappeared before anyone wrote
              a line of Python.
            </p>
            <p>
              The rest was discipline. Every module got characterization tests
              generated from real recorded traffic before it got ported, so
              "does the new one behave like the old one" had an answer that was
              a test run rather than an opinion. The database did not move — one
              migration at a time is the whole trick. And the new service ran in
              shadow mode against live production traffic for three weeks, with a
              harness diffing every response pair.
            </p>
            <p>
              That harness earned its keep. It caught a month-end batch job whose
              output depended on the specific way Java rounds half-even on a
              <code className="px-1 mx-1 rounded bg-muted text-foreground text-sm">BigDecimal</code>
              — a difference of a few cents per invoice that nobody had documented
              because nobody had ever noticed. Python rounded it differently. In a
              conventional rewrite that surfaces as an angry finance email in month
              seven. Here it surfaced as a failing diff in week nine, and we fixed
              it in an afternoon.
            </p>
            <p className="text-foreground">
              Eleven weeks after kickoff we shifted the last of the traffic. Zero
              incidents at cutover. Infrastructure spend dropped from $9,800 a month
              to $3,100 because Fargate scales down at night and the old fleet never
              did. p95 latency went from 840ms to 210ms — mostly because we deleted
              three layers of indirection, not because Python is faster than Java.
              And a deploy now takes nine minutes and does not require a Saturday.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-8 rounded-xl border border-border bg-card p-6 space-y-5">
              <h3>By the numbers</h3>
              <div className="space-y-4">
                {results.map((result) => (
                  <div key={result.label} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <p className="text-sm text-muted-foreground mb-1">{result.label}</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-muted-foreground line-through decoration-muted-foreground/40">
                        {result.before}
                      </span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                      <span className="text-lg text-cyan-600">{result.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl mb-8">How the eleven weeks broke down</h3>
          <div className="space-y-0">
            {timeline.map((step, index) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-t border-border"
              >
                <div className="md:col-span-3">
                  <div className="text-cyan-600">{step.week}</div>
                </div>
                <div className="md:col-span-9 space-y-2">
                  <h4>{step.title}</h4>
                  <p className="text-muted-foreground">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
