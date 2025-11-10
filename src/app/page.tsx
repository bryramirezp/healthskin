"use client";

import React from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { OriginSection } from "@/components/landing/OriginSection";
import { InstagramFeed } from "@/components/landing/InstagramFeed";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openContactModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onContactClick={openContactModal} />
      <main className="flex-grow">
        <HeroSection onContactClick={openContactModal} />
        <ProblemSolutionSection />
        <BenefitsSection />
        <ScienceSection />
        <OriginSection />
        <InstagramFeed />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
