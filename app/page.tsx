"use client";

import dynamic from "next/dynamic";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
const CertificateSection = dynamic(
  () =>
    import("@/components/sections/certificates-section").then(
      (mod) => mod.CertificateSection
    ),
  { ssr: false }
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then(
      (mod) => mod.ExperienceSection
    ),
  { ssr: false }
);
import { ProjectsSection } from "@/components/sections/projects-section";
import { VerifiedCredentialsSection } from "@/components/sections/badges-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AnimatedGradientBg } from "@/components/animated-gradient-bg";

export default function Home() {
  return (
    <main className="min-h-screen  relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
      <AnimatedGradientBg />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificateSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}
      <VerifiedCredentialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
