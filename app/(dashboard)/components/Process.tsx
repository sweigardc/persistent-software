import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';

const steps = [
  {
    step: '01',
    title: 'Scoping call',
    body: 'Thirty minutes is enough to scope most projects. You leave with a plan and a number, whether or not we work together.'
  },
  {
    step: '02',
    title: 'Architecture and design review',
    body: 'The stack, the data model and the screens get decided before anything is built, and written down where you can read them.'
  },
  {
    step: '03',
    title: 'Week one: a prototype you can click',
    body: 'Not a mockup. A deployed application running against real data, on a URL you can send to someone else.'
  },
  {
    step: '04',
    title: 'Weekly demos',
    body: 'A new build every week, in your hands. The timeline never depends on you trusting a status update.'
  },
  {
    step: '05',
    title: 'Ship to production',
    body: 'Deployment, monitoring and the boring operational work that decides whether launch week is calm.'
  },
  {
    step: '06',
    title: 'You own the codebase',
    body: 'The source, the accounts and the pipeline are yours at handover. One hundred percent of it, with no licence attached.'
  }
];

export function Process() {
  return (
    <Band className="pt-0 md:pt-0">
      <SectionHeader label="How a build runs" />
      <ul className="mt-10 border-t border-rule">
        {steps.map((item) => (
          <li
            key={item.step}
            className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <span className="ps-label text-signal-700">Step {item.step}</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-h4">{item.title}</h3>
              <p className="mt-1.5 max-w-[68ch] text-graphite-500">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Band>
  );
}
