import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Image Forensics Tool",
    description:
      "Developed an advanced tool to detect manipulated images using machine learning algorithms and deep learning models for forensic analysis.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    github: "https://github.com/pavanmandela",
  },
  {
    title: "Centralized Digital Notice Board",
    description:
      "Built a full-stack MERN application with Firebase push notifications and MongoDB storage for managing digital notices across an organization.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
    github: "https://github.com/pavanmandela",
  },
  {
    title: "AI Voice Assistant",
    description:
      "Created an intelligent voice assistant using natural language processing and speech recognition to automate tasks and provide information.",
    techStack: ["Python", "NLP", "Speech Recognition", "AI"],
    github: "https://github.com/pavanmandela",
  },
  {
    title: "Personal Expense Tracker",
    description:
      "Designed a web application to track personal expenses with data visualization, budget alerts, and comprehensive financial reports.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/pavanmandela",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-smooth hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
