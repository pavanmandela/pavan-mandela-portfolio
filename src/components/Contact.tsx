import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:durgapavankumarmandela2005@gmail.com"
            className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-smooth hover:scale-105 group block"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground break-all">
                durgapavankumarmandela2005@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pavan-mandela"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-smooth hover:scale-105 group block"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">
                Connect on LinkedIn
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/pavanmandela"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-smooth hover:scale-105 group block"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">GitHub</h3>
              <p className="text-sm text-muted-foreground">
                View my repositories
              </p>
            </div>
          </a>
        </div>

        <Button
          variant="hero"
          size="lg"
          asChild
        >
          <a href="mailto:durgapavankumarmandela2005@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Send Me an Email
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
