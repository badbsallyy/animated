"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-gray-800/50 p-8 backdrop-blur-sm",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={cn("inline-block", className)}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: i * 0.03,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlowingButton({ children, className, onClick }: GlowingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl transition-shadow hover:shadow-violet-500/25",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 opacity-75 blur-xl" />
    </motion.button>
  );
}

interface AnimatedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientBorder({ children, className }: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative rounded-xl p-[1px]", className)}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 animate-gradient-x" />
      <div className="relative rounded-xl bg-gray-900/95 p-6">
        {children}
      </div>
    </div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingElement({ children, delay = 0, className }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export function TypewriterText({ words, className }: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentWordIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "inline-block bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent",
          className
        )}
      >
        {words[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}

export function ParallaxText({ children, baseVelocity = 5, className }: ParallaxTextProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20 / Math.abs(baseVelocity),
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-4xl font-bold text-white/10">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
