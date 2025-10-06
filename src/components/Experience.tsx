import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Card */}
          <div className="gradient-card p-6 rounded-xl shadow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  AI/ML Intern
                </h3>
                <p className="text-primary font-semibold mb-2">
                  Blackbucks Engineers Company
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  May 2025 – July 2025
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Developed AI-based tools for automation and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implemented machine learning pipelines for data processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Collaborated with team on AI model optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="gradient-card p-6 rounded-xl shadow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-primary font-semibold mb-2">
                  Swarnandhra College of Engineering and Technology
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Currently Pursuing
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Focus on Data Science and Software Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Specialized in AI/ML and Full-Stack Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Active participation in tech projects and competitions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
