import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Briefcase, Rocket, Users } from 'lucide-react';

const marks = [
  {
    index: '01',
    icon: Briefcase,
    title: '20+ years shipping',
    body: 'From startups to a company acquired by Google, across web, mobile and backend systems.'
  },
  {
    index: '02',
    icon: Rocket,
    title: 'A prototype in days',
    body: 'AI-assisted build, reviewed line by line, turning ideas into something clickable in week one.'
  },
  {
    index: '03',
    icon: Users,
    title: 'Eight years leading engineers',
    body: 'Hiring, mentoring and coordinating with stakeholders — I can build the team that takes it over.'
  }
];

export function Story() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="The practice" />
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-4 text-graphite-500">
          <p>
            I spent twenty years building software for educational platforms, consumer apps
            and enterprise systems before starting Persistent Software. The practice exists
            because clients kept asking for the same thing: one senior engineer who can take
            an idea and return a working product.
          </p>
          <p>
            I led engineering at Teachley, a game-based learning platform, and built
            BeerXchange as a side project on nights and weekends.
            Speed and quality are not opposites. Most of what makes software slow is work
            nobody needed to do.
          </p>
          <p>
            Today I combine modern frameworks with AI-assisted development, reviewed line by
            line, to deliver production applications in a fraction of the traditional
            timeline. The architecture is still designed on purpose, and the code is still
            yours at the end.
          </p>
        </div>
        <Lattice className="self-start">
          {marks.map((mark) => (
            <LatticeCell key={mark.index} index={mark.index} icon={mark.icon} title={mark.title}>
              {mark.body}
            </LatticeCell>
          ))}
        </Lattice>
      </div>
    </Band>
  );
}
