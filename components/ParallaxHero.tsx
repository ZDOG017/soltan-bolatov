'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Soltan Bolatov</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Frontend Developer & UI Engineer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          Crafting exceptional digital experiences with modern web technologies.
          Focused on performance, accessibility, and beautiful interfaces.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#work" 
            className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] px-6 py-3 font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
      
      {/* Background elements that move at different speeds */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
          opacity: useTransform(scrollYProgress, [0, 0.7], [0.2, 0])
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl" />
      </motion.div>
    </div>
  );
} 