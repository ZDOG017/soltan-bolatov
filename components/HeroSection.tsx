'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm font-mono text-blue-500 dark:text-blue-400 mb-4"
            >
              Hi, my name is
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Soltan Bolatov
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400 mb-6"
            >
              I build exceptional digital experiences
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
            >
              I'm a frontend developer specializing in building exceptional digital experiences.
              Currently, I'm focused on creating accessible, human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4"
            >
              <Link
                href="#work"
                className="px-6 py-3 rounded-full bg-foreground text-background
                         hover:bg-foreground/90 transition-colors duration-300"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full border border-foreground/10
                         hover:bg-foreground/5 transition-colors duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Creative Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Code Editor Style Element */}
              <div className="absolute inset-0 rounded-lg bg-gray-900/50 backdrop-blur-xl 
                            border border-white/10 overflow-hidden shadow-2xl">
                <div className="h-8 bg-gray-800/50 border-b border-white/10 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>
                <div className="p-4 font-mono text-sm text-gray-300/90">
                  <CodeSnippet />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center"
          >
            <div className="w-1 h-1 rounded-full bg-gray-500" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function CodeSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="text-blue-400">const</div>
      <div>
        <span className="text-blue-400">developer</span> = {'{'}
      </div>
      <div className="pl-4">
        <span className="text-purple-400">name</span>:{' '}
        <span className="text-green-400">'Soltan Bolatov'</span>,
      </div>
      <div className="pl-4">
        <span className="text-purple-400">role</span>:{' '}
        <span className="text-green-400">'Frontend Developer'</span>,
      </div>
      <div className="pl-4">
        <span className="text-purple-400">skills</span>: [
      </div>
      <div className="pl-8">
        <span className="text-green-400">'React'</span>,
        <span className="text-green-400">'Next.js'</span>,
        <span className="text-green-400">'TypeScript'</span>
      </div>
      <div className="pl-4">],</div>
      <div className="pl-4">
        <span className="text-purple-400">passion</span>:{' '}
        <span className="text-green-400">'Building amazing UIs'</span>
      </div>
      <div>{'}'}</div>
    </motion.div>
  );
} 