"use client";

import { motion } from "motion/react";
import { ParallaxText } from "@/components/ui/AnimatedComponents";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gray-950">
      {/* Parallax Text */}
      <div className="py-8 overflow-hidden">
        <ParallaxText baseVelocity={2}>
          Animated • Modern • Beautiful • Interactive • 3D • React • Next.js •
        </ParallaxText>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-white">Animated</span>
            </div>
            <p className="max-w-sm text-gray-400 mb-6">
              A fully animated website showcasing modern 3D features, stunning UI
              components, and cutting-edge web technologies.
            </p>
            <p className="text-sm text-gray-500">
              Built with Anime.js, Three.js, React Three Fiber, Motion, and Tailwind CSS.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Features", "About", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 font-semibold text-white">Technologies</h3>
            <ul className="space-y-3">
              {[
                "Anime.js",
                "Three.js",
                "React Three Fiber",
                "Motion",
                "Tailwind CSS",
                "Next.js",
              ].map((tech) => (
                <li key={tech}>
                  <span className="text-gray-400">{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Animated. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
    </footer>
  );
}
