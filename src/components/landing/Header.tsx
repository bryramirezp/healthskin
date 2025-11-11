
"use client";

import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ContactModal } from "./ContactModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Although the button is removed, we keep the modal logic in case it's triggered from another part of the app.
  // For example, from the Hero section.
  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 ease-in-out",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40" 
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 md:px-8">
          <Logo />
        </div>
      </header>
      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
