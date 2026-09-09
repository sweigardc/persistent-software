import { Badge } from '@/components/ui/badge';
import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Plug, Server } from 'lucide-react';

const integrate = [
  'A typed API client generated from your existing endpoints',
  'REST, GraphQL, gRPC — and SOAP or XML behind a thin adapter',
  'Your identity provider stays yours: OIDC, SAML, Cognito, Auth0, Firebase',
  'A small backend-for-frontend when your APIs are too chatty for mobile',
  'No schema changes and no migrations demanded of your team',
  'Contract tests so a server change cannot silently break the app'
];

const build = [
  'Postgres, a versioned API, and infrastructure as code on AWS',
  'Accounts, roles, and permissions designed around how you operate',
  'Push notifications, file storage, search, and scheduled jobs',
  'Payments and subscriptions through Stripe or the app stores',
  'An admin console your team uses without calling an engineer',
  'Yours outright — the code, the accounts, the deployment pipeline'
];

const stack = [
  'React Native',
  'Expo',
  'TypeScript',
  'FastAPI',
  'Node',
  'Postgres',
  'AWS',
  'Stripe',
  'Firebase',
  'Sentry',
  'App Store Connect',
  'Google Play'
];

function Column({
  icon: Icon,
  title,
  intro,
  items
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-5 bg-surface p-8">
      <Icon className="size-6 text-signal-700" strokeWidth={1.75} />
      <div>
        <h3>{title}</h3>
        <p className="mt-2 text-graphite-500">{intro}</p>
      </div>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 border-b border-rule py-3 text-[15px] leading-snug text-graphite-600 last:border-0"
          >
            <span className="font-mono text-xs leading-6 text-signal-700">&rarr;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Backend() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="Your backend" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">Bring your backend, or let me build one</h2>
        <p className="mt-3.5 text-graphite-500">
          Most companies asking for a mobile app already have the data somewhere. The app
          should adapt to your systems — replacing them is a separate decision, made on
          purpose, not smuggled in by a mobile project.
        </p>
      </div>

      <div className="ps-lattice mt-10 md:grid-cols-2">
        <Column
          icon={Plug}
          title="Integrate with what you have"
          intro="I meet your services where they are, however old they are. The integration layer absorbs the awkwardness so it never reaches the app or your backend team."
          items={integrate}
        />
        <Column
          icon={Server}
          title="Or I build it to your spec"
          intro="No backend yet, or one you would rather not extend. I build exactly what the app requires, sized to your traffic and your budget instead of a hypothetical future one."
          items={build}
        />
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <span className="ps-label text-graphite-500">What I build on</span>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </Band>
  );
}
