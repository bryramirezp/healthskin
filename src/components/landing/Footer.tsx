import { Logo } from "./Logo";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">&copy; {year} HEALSKIN. Todos los derechos reservados.</p>
            <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
}
