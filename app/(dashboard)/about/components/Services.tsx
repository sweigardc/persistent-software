import { Code2, Zap, Smartphone, Database, ShoppingCart, Link2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Applications",
    description: "Modern web apps built with React, TypeScript, and Node.js. Responsive, fast, and production-ready."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native iOS/Android apps or cross-platform solutions with React Native for maximum reach."
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Scalable backend systems with PostgreSQL, RESTful APIs, and secure authentication."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Payments",
    description: "Payment integration with Stripe, subscriptions, and marketplace functionality."
  },
  {
    icon: Link2,
    title: "Third-Party Integrations",
    description: "Connect your app to Google, Salesforce, authentication providers, and more."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "AI-powered code generation and templates to validate ideas in days, not weeks."
  }
];

export function Services() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl">What I Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From MVPs to production-grade applications, I deliver complete solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
