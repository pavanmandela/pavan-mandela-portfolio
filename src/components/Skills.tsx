import { Code, Database, Globe, Brain, BarChart3, Server } from "lucide-react";

const skills = [
  { name: "Java", icon: Code, category: "Programming" },
  { name: "Python", icon: Code, category: "Programming" },
  { name: "SQL", icon: Database, category: "Database" },
  { name: "HTML", icon: Globe, category: "Web" },
  { name: "CSS", icon: Globe, category: "Web" },
  { name: "React", icon: Globe, category: "Web" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "Machine Learning", icon: Brain, category: "AI/ML" },
  { name: "Data Visualization", icon: BarChart3, category: "Data Science" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-smooth hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
