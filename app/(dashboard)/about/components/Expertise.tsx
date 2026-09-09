import { Badge } from '@/components/ui/badge';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';

const stack = [
  { category: 'Frontend', items: ['React', 'React Native', 'TypeScript', 'Angular', 'Unity'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'REST'] },
  { category: 'Mobile', items: ['iOS', 'Android', 'App Store', 'Google Play'] },
  { category: 'Cloud', items: ['Google Cloud', 'Vercel', 'AWS', 'Stripe', 'Salesforce'] },
  { category: 'Integrations', items: ['ClassLink', 'Clever', 'OAuth', 'Webhooks'] },
  { category: 'Practice', items: ['CI/CD', 'AI-assisted build', 'Code review', 'Mentoring'] }
];

export function Expertise() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="Stack" />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <div className="ps-label border-b border-rule pb-2.5 text-graphite-500">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Band>
  );
}
