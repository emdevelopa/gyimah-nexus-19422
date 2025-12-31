import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Palette, ExternalLink } from "lucide-react";
import pmProject1 from "@/assets/pm-project-1.jpg";
import pmProject2 from "@/assets/pm-project-2.jpg";
import creativeProject1 from "@/assets/creative-project-1.jpg";
import creativeProject2 from "@/assets/creative-project-2.jpg";

const pmProjects = [
  {
    title: "Analytics Dashboard Platform",
    description: "Led the development of a comprehensive analytics dashboard featuring real-time data visualization, user flow tracking, and performance metrics for enterprise clients.",
    image: pmProject1,
    tags: ["Product Strategy", "Data Analytics", "User Research"]
  },
  {
    title: "Mobile Feature Roadmap",
    description: "Managed end-to-end product lifecycle for mobile app features, coordinating sprint planning and stakeholder alignment to deliver user-centric solutions.",
    image: pmProject2,
    tags: ["Agile Management", "Feature Planning", "Stakeholder Alignment"]
  }
];

const creativeProjects = [
  {
    title: "Brand Identity System",
    description: "Developed comprehensive brand identity systems including logo design, typography guidelines, and visual language for multiple tech startups.",
    image: creativeProject1,
    tags: ["Branding", "Visual Design", "Design Systems"]
  },
  {
    title: "Digital Campaign Direction",
    description: "Directed creative vision for multi-channel digital campaigns, blending motion design, visual storytelling, and strategic messaging.",
    image: creativeProject2,
    tags: ["Creative Direction", "Campaign Design", "Visual Storytelling"]
  }
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("pm");

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Featured <span className="holographic-text">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my work across product management and creative direction
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-secondary/50 backdrop-blur-sm p-1 rounded-xl">
            <TabsTrigger 
              value="pm" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Product Management
            </TabsTrigger>
            <TabsTrigger 
              value="creative"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Palette className="mr-2 h-4 w-4" />
              Creative Direction
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pm" className="space-y-8">
            {pmProjects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-primary/20 card-3d hover:border-primary/50 group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-fit border-primary/50 hover:bg-primary/10 group">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="creative" className="space-y-8">
            {creativeProjects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-primary/20 card-3d hover:border-primary/50 group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                   
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
