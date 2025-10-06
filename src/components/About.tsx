import profilePhoto from "@/assets/profile-photo.jpg";
import { GraduationCap, Code2, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 animate-glow" />
              <img
                src={profilePhoto}
                alt="Mandela Durga Pavan Kumar"
                className="relative rounded-2xl w-80 h-80 object-cover shadow-card border-2 border-primary/30"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a B.Tech student with a passion for merging data science and software development 
              to create innovative solutions. My journey in tech has been driven by curiosity and 
              a desire to build AI-powered applications that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              With strong foundations in Java, Python, SQL, and modern web technologies, I've 
              developed projects ranging from AI image forensics tools to full-stack MERN 
              applications with real-time notifications.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 gradient-card rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in Computer Science & Engineering
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 gradient-card rounded-lg">
                <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Interests</h3>
                  <p className="text-sm text-muted-foreground">
                    AI/ML, Data Science, Full-Stack Development
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 gradient-card rounded-lg">
                <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Goals</h3>
                  <p className="text-sm text-muted-foreground">
                    Build impactful AI solutions and contribute to innovative tech projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
