import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, Linkedin, MessageCircle, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Get In <span className="holographic-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on your next innovative project
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg glow-effect">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+2348165652305" className="text-muted-foreground hover:text-primary transition-colors">
                    +234 816 565 2305
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg glow-effect">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:nerdmcooy@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    nerdmcooy@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="flex-1 border-primary/50 hover:bg-primary/10 gap-2"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="flex-1 border-accent/50 hover:bg-accent/10 gap-2"
                onClick={() => window.open('https://wa.me/2348165652305', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 glow-effect">
              <h3 className="font-bold text-lg mb-2 font-display">Available for</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                  Product Management Consulting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                  Creative Direction Projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                  Speaking Engagements
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          {/* <Card className="p-8 bg-card border-primary/20 card-3d">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-secondary/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-secondary/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card> */}
        </div>
      </div>
    </section>
  );
};
