"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import("@/components/3d/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gray-950" />
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Content Sections */}
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
