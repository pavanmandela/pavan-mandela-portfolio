import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          © 2025 Mandela Durga Pavan Kumar | Designed with{" "}
          <Heart className="w-4 h-4 text-destructive fill-destructive" /> using Lovable AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
