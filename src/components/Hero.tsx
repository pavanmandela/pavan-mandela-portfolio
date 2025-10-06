import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    // Placeholder for resume download functionality
    window.open("#", "_blank");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Mandela Durga Pavan Kumar
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          Data Science & Software Developer
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Building AI-powered solutions that make life smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            onClick={handleDownloadResume}
            className="w-full sm:w-auto"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
