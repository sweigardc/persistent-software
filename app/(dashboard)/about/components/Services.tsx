import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Code2, Zap, Smartphone, Database, ShoppingCart, Link2 } from 'lucide-react';

const services = [
  {
    index: '01',
    icon: Code2,
    title: 'Full-stack web applications',
    body: 'React, TypeScript and Node or Python. Responsive, fast, and built to go to production.'
  },
  {
    index: '02',
    icon: Smartphone,
    title: 'Mobile development',
    body: 'React Native across both stores, or native iOS and Android where the product needs it.'
  },
  {
    index: '03',
    icon: Database,
    title: 'Backend and APIs',
    body: 'Postgres, versioned REST APIs and authentication designed around how you operate.'
  },
  {
    index: '04',
    icon: ShoppingCart,
    title: 'E-commerce and payments',
    body: 'Stripe subscriptions, marketplaces, and the billing edge cases nobody scopes for.'
  },
  {
    index: '05',
    icon: Link2,
    title: 'Third-party integrations',
    body: 'Google, Salesforce, ClassLink, Clever, and whichever identity provider you already use.'
  },
  {
    index: '06',
    icon: Zap,
    title: 'Rapid prototyping',
    body: 'AI-assisted build, reviewed line by line, to put a real product in front of users in days.'
  }
];

export function Services() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="What I build" />
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
