import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and explore how Persistent Software can help you deliver exceptional results, fast.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:contact@persistentsoftware.com" >
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
          </a>
          <a href="https://calendly.com/chris-persistentsoftware/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </a>
        </div>
        
        <div className="pt-8 border-t border-border mt-12">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">8+</div>
              <p className="text-muted-foreground">Years Lead Engineering</p>
            </div>
            <div>
              <div className="text-3xl mb-2">20+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl mb-2">∞</div>
              <p className="text-muted-foreground">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
