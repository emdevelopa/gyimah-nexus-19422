import { Card } from "@/components/ui/card";
import { Zap, Brain, Palette } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            About <span className="holographic-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed">
              With a background in <span className="text-primary font-semibold">Mechatronics Engineering</span>, 
              I bring a unique blend of technical precision and creative thinking to every project. 
              My engineering foundation gives me a systematic approach to problem-solving, 
              while my passion for design drives me to create experiences that are both functional and beautiful.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              As a <span className="text-primary font-semibold">Product Manager</span> and 
              <span className="text-accent font-semibold"> Creative Director</span>, 
              I've learned that the best products emerge at the intersection of logic and artistry. 
              I leverage design thinking methodologies to transform complex technical challenges into 
              intuitive, user-centered solutions.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My multidisciplinary approach allows me to bridge the gap between engineering, 
              product strategy, and creative execution—delivering innovations that are not just 
              technically sound, but visually compelling and strategically aligned.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid gap-6">
            {[
              {
                icon: Zap,
                title: "Innovation",
                description: "Engineering mindset meets creative innovation to solve complex problems"
              },
              {
                icon: Brain,
                title: "Strategy",
                description: "Data-driven product decisions balanced with design thinking principles"
              },
              {
                icon: Palette,
                title: "Creativity",
                description: "Artistic vision combined with technical execution for impactful results"
              }
            ].map((value, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/20 card-3d hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg glow-effect">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-display">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
