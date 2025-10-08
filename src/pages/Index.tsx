import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Gyimah Tosin Isaac. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
