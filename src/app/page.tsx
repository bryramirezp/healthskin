"use client";

import React from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { OriginSection } from "@/components/landing/OriginSection";
import { Footer } from "@/components/landing/Footer";
import { InstagramFeed } from "@/components/landing/InstagramFeed";

export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSolutionSection />
        <BenefitsSection />
        <ScienceSection />
        <OriginSection />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
