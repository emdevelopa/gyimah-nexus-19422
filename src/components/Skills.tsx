import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Palette as PaletteIcon, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Product Tools",
    icon: Layers,
    color: "primary",
    skills: ["Jira", "Notion", "Figma", "Trello", "Miro", "Confluence"]
  },
  {
    title: "Creative Tools",
    icon: PaletteIcon,
    color: "accent",
    skills: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "InDesign", "Blender"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "primary-glow",
    skills: ["Leadership", "Design Thinking", "Storytelling", "Innovation", "Strategy", "Communication"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Skills & <span className="holographic-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning product management, creative direction, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-primary/20 card-3d hover:border-primary/50 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl glow-effect">
                  <category.icon className={`h-8 w-8 text-${category.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-display group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="outline"
                      className="px-3 py-1 bg-secondary/50 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
