import { Briefcase, Rocket, Users } from "lucide-react";

export function Story() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl">The Story Behind Persistent Software</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                After spending 20+ years building software for educational platforms, consumer apps, and enterprise solutions, I founded Persistent Software to help companies bring their ideas to life faster than ever before.
              </p>
              <p>
                From leading engineering teams at Teachley's game-based learning platform to building BeerXchange as a successful side project, I've learned that speed and quality don't have to be mutually exclusive.
              </p>
              <p>
                Today, I combine proven templates, modern frameworks, and AI-assisted development to deliver production-ready applications in a fraction of the traditional timeline - without sacrificing the robust architecture and clean code that enterprise clients demand.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-accent/50 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3>20+ Years Experience</h3>
                  <p className="text-muted-foreground">
                    From startups to companies acquired by Google, delivering solutions across web, mobile, and backend systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-accent/50 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3>Rapid Delivery</h3>
                  <p className="text-muted-foreground">
                    Using powerful templates and AI code generation to turn ideas into working prototypes in days, not months.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-accent/50 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3>Team Leadership</h3>
                  <p className="text-muted-foreground">
                    Proven track record leading engineering teams, mentoring developers, and coordinating with stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
