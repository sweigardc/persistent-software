'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Plug, Server } from 'lucide-react';

const integrate = [
  'A typed API client generated from your existing endpoints',
  'REST, GraphQL, gRPC — and SOAP or XML behind a thin adapter',
  'Your identity provider stays yours: OIDC, SAML, Cognito, Auth0, Firebase',
  'A small backend-for-frontend when your APIs are too chatty for mobile',
  'No schema changes and no migrations demanded of your team',
  'Contract tests so a server change cannot silently break the app',
];

const build = [
  'Postgres, a versioned API, and infrastructure as code on AWS',
  'Accounts, roles, and permissions designed around how you operate',
  'Push notifications, file storage, search, and scheduled jobs',
  'Payments and subscriptions through Stripe or the app stores',
  'An admin console your team uses without calling an engineer',
  'Yours outright — the code, the accounts, the deployment pipeline',
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
  'Google Play',
];

export function Backend() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <h2 className="text-4xl">Bring your backend, or let us build one</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most companies asking for a mobile app already have the data somewhere.
            The app should adapt to your systems — replacing them is a separate
            decision, made on purpose, not smuggled in by a mobile project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-border hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-8 space-y-5">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Plug className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl">Integrate with what you have</h3>
                  <p className="text-muted-foreground">
                    We meet your services where they are, however old they are. The
                    integration layer absorbs the awkwardness so it never reaches
                    the app or your backend team.
                  </p>
                </div>
                <div className="space-y-3 pt-1">
                  {integrate.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-8 space-y-5">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl">Or we build it to your spec</h3>
                  <p className="text-muted-foreground">
                    No backend yet, or one you would rather not extend. We build
                    exactly what the app requires, sized to your traffic and your
                    budget instead of a hypothetical future one.
                  </p>
                </div>
                <div className="space-y-3 pt-1">
                  {build.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mt-14"
        >
          <h3 className="text-2xl">What we build on</h3>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {stack.map((item) => (
              <Badge key={item} variant="secondary" className="px-3 py-1.5">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
