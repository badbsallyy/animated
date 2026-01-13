"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FloatingElement, TextReveal } from "@/components/ui/AnimatedComponents";

const technologies = [
  {
    name: "Anime.js",
    description: "JavaScript animation engine",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Three.js",
    description: "3D graphics library",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    name: "React Three Fiber",
    description: "React renderer for Three.js",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "Motion",
    description: "Production-ready animations",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
  },
  {
    name: "Next.js",
    description: "React framework",
    color: "text-white",
    bgColor: "bg-white/10",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <FloatingElement className="absolute top-20 left-10">
          <div className="h-32 w-32 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-40 right-20">
          <div className="h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-20 left-1/3">
          <div className="h-36 w-36 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
        </FloatingElement>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              About This Project
            </span>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              <TextReveal text="Built with Modern" />
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                <TextReveal text="Web Technologies" />
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-lg text-gray-400 leading-relaxed"
            >
              This showcase demonstrates the power of combining multiple animation
              libraries and modern UI frameworks. From 3D graphics with Three.js to
              smooth animations with Anime.js and Framer Motion, every element is
              carefully crafted to create an immersive experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 leading-relaxed"
            >
              The design takes inspiration from Aceternity UI and Eldora UI,
              featuring spotlight effects, gradient borders, magnetic buttons, and
              countless other micro-interactions that bring the interface to life.
            </motion.p>
          </motion.div>

          {/* Right Side - Technology Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`rounded-xl border border-white/10 ${tech.bgColor} p-4 backdrop-blur-sm cursor-pointer group`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`h-2 w-2 rounded-full ${tech.color} bg-current`} />
                  <h3 className={`font-semibold ${tech.color}`}>{tech.name}</h3>
                </div>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline / Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <h3 className="mb-12 text-center text-2xl font-bold text-white">
            The Development Process
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-pink-500 hidden md:block" />

            {[
              {
                step: "01",
                title: "Design & Planning",
                description:
                  "Carefully planned the UI/UX with modern design principles",
              },
              {
                step: "02",
                title: "Setup & Configuration",
                description:
                  "Configured Next.js, Tailwind CSS, and all animation libraries",
              },
              {
                step: "03",
                title: "3D Integration",
                description:
                  "Implemented Three.js scene with interactive 3D elements",
              },
              {
                step: "04",
                title: "Animation Polish",
                description:
                  "Added smooth animations and micro-interactions throughout",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 mb-12`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="text-sm font-medium text-violet-400">
                    Step {item.step}
                  </span>
                  <h4 className="mt-1 text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </div>
                <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold">
                  {item.step}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
