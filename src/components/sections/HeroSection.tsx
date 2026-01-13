"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { animate, stagger } from "animejs";
import {
  GlowingButton,
  MagneticButton,
  TypewriterText,
  FloatingElement,
} from "@/components/ui/AnimatedComponents";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Anime.js animation for the grid pattern
    animate(".grid-line", {
      strokeDashoffset: [1000, 0],
      easing: "inOutSine",
      duration: 2000,
      delay: stagger(50),
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                className="grid-line"
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(139, 92, 246, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} className="absolute top-1/4 left-1/4">
          <div className="h-[400px] w-[400px] rounded-full bg-violet-600/30 blur-[100px]" />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute bottom-1/4 right-1/4">
          <div className="h-[300px] w-[300px] rounded-full bg-cyan-500/30 blur-[100px]" />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute top-1/2 right-1/3">
          <div className="h-[250px] w-[250px] rounded-full bg-pink-500/20 blur-[100px]" />
        </FloatingElement>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Welcome to the future of web design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl"
        >
          Create{" "}
          <TypewriterText
            words={["Amazing", "Beautiful", "Modern", "Stunning"]}
          />
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Web Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          A fully animated website showcasing modern 3D features, stunning UI
          components, and cutting-edge web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowingButton>Explore Now</GlowingButton>
          <MagneticButton>Learn More</MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500">Scroll Down</span>
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
