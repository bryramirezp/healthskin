import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center">
            <Logo />
            <p className="text-sm text-muted-foreground">&copy; {year} HEALSKIN. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
