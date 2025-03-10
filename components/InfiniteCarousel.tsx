'use client';

import { useEffect, useRef } from 'react';

export default function InfiniteCarousel() {
  const skills = {
    row1: [
      'React', 'Next.js', 'TypeScript', 'Vue', 'Angular', 'JavaScript',
      'HTML5', 'CSS3', 'Tailwind', 'React Native', 'Redux', 'GraphQL'
    ],
    row2: [
      'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS',
      'Docker', 'Kubernetes', 'CI/CD', 'Git', 'REST API', 'Microservices'
    ],
    row3: [
      'Jest', 'Testing Library', 'Cypress', 'Webpack', 'Vite', 'Performance',
      'SEO', 'Accessibility', 'UI/UX', 'Figma', 'Design Systems', 'Component Libraries'
    ]
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-background to-gray-900/10">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Modern technologies I use to build exceptional digital experiences
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Carousel Content */}
        <div className="overflow-hidden">
          {/* Row 1 */}
          <div className="relative flex mb-8 overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills.row1, ...skills.row1].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="inline-flex items-center mx-2 px-4 py-2 rounded-full
                           bg-foreground/[0.05] dark:bg-foreground/[0.1] 
                           border border-foreground/[0.1] dark:border-foreground/[0.15]
                           text-sm font-medium backdrop-blur-sm
                           hover:bg-foreground/[0.1] dark:hover:bg-foreground/[0.15]
                           transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative flex mb-8 overflow-x-hidden">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[...skills.row2, ...skills.row2].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="inline-flex items-center mx-2 px-4 py-2 rounded-full
                           bg-foreground/[0.05] dark:bg-foreground/[0.1]
                           border border-foreground/[0.1] dark:border-foreground/[0.15]
                           text-sm font-medium backdrop-blur-sm
                           hover:bg-foreground/[0.1] dark:hover:bg-foreground/[0.15]
                           transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee-slow whitespace-nowrap">
              {[...skills.row3, ...skills.row3].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="inline-flex items-center mx-2 px-4 py-2 rounded-full
                           bg-foreground/[0.05] dark:bg-foreground/[0.1]
                           border border-foreground/[0.1] dark:border-foreground/[0.15]
                           text-sm font-medium backdrop-blur-sm
                           hover:bg-foreground/[0.1] dark:hover:bg-foreground/[0.15]
                           transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 