import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import {
  Code2,
  Smartphone,
  CreditCard,
  Link2,
  GitBranch,
  Users
} from 'lucide-react';

const services = [
  {
    index: '01',
    icon: Code2,
    title: 'Full-stack builds',
    body: 'React and TypeScript up front, Python or Node and Postgres behind it. One person, whole stack.'
  },
  {
    index: '02',
    icon: Smartphone,
    title: 'Mobile apps',
    body: 'React Native across both stores, or native where the product genuinely needs it.'
  },
  {
    index: '03',
    icon: CreditCard,
    title: 'Payments',
    body: 'Stripe subscriptions, marketplaces and the billing edge cases nobody scopes for.'
  },
  {
    index: '04',
    icon: Link2,
    title: 'Integrations',
    body: 'Salesforce, Google, ClassLink, Clever — the connections that make a product usable.'
  },
  {
    index: '05',
    icon: GitBranch,
    title: 'Rescue work',
    body: 'Inherited a codebase nobody understands? That is a normal Tuesday.'
  },
  {
    index: '06',
    icon: Users,
    title: 'Team support',
    body: 'Eight years leading engineers. I can hire and mentor the team that takes it over.'
  }
];

export function Services() {
  return (
    <Band id="services" className="pb-16 md:pb-20">
      <SectionHeader label="What you get" />
      <Lattice className="mt-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <LatticeCell
            key={service.index}
            index={service.index}
            icon={service.icon}
            title={service.title}
          >
            {service.body}
          </LatticeCell>
        ))}
      </Lattice>
    </Band>
  );
}
