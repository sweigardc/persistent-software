import { Badge } from "@/components/ui/badge";

const skills = [
  { category: "Frontend", items: ["React", "React Native", "TypeScript", "Angular", "Unity"] },
  { category: "Backend", items: ["Node.js", "Python", "Django", "PostgreSQL", "REST APIs"] },
  { category: "Mobile", items: ["iOS", "Android", "React Native", "App Store", "Google Play"] },
  { category: "Cloud & Services", items: ["Google Cloud", "Stripe", "Salesforce", "ClassLink", "Clever"] },
  { category: "Leadership", items: ["Team Management", "Hiring", "Mentoring", "Project Coordination"] },
  { category: "AI & Modern Tools", items: ["AI Code Generation", "Template Systems", "Rapid Prototyping"] }
];

export function Expertise() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive technology stack honed through years of building scalable applications across multiple platforms and industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h3 className="pb-2 border-b border-border">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
