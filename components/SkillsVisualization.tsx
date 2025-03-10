'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-10
  category: string;
  description: string;
}

export default function SkillsVisualization() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  
  const skills: Skill[] = [
    { name: 'React', level: 9, category: 'Frontend', description: 'Building complex UIs with React hooks, context, and advanced patterns.' },
    { name: 'Next.js', level: 8, category: 'Frontend', description: 'Creating performant applications with SSR, SSG, and the App Router.' },
    { name: 'TypeScript', level: 8, category: 'Languages', description: 'Developing type-safe applications with advanced TypeScript features.' },
    { name: 'Tailwind CSS', level: 9, category: 'Styling', description: 'Crafting responsive, utility-first designs with custom configurations.' },
    { name: 'JavaScript', level: 9, category: 'Languages', description: 'Deep knowledge of modern JavaScript, including ES6+ features.' },
    { name: 'CSS/SCSS', level: 8, category: 'Styling', description: 'Creating complex layouts and animations with modern CSS.' },
    { name: 'Framer Motion', level: 7, category: 'Animation', description: 'Building fluid, physics-based animations and interactions.' },
    { name: 'Redux', level: 7, category: 'State Management', description: 'Managing complex application state with Redux and middleware.' },
    { name: 'GraphQL', level: 6, category: 'API', description: 'Designing and consuming efficient APIs with GraphQL.' },
    { name: 'Node.js', level: 6, category: 'Backend', description: 'Building server-side applications and APIs with Node.js.' },
    { name: 'Git', level: 8, category: 'Tools', description: 'Version control with advanced Git workflows and collaboration.' },
    { name: 'UI/UX Design', level: 7, category: 'Design', description: 'Creating user-centered designs with a focus on usability and aesthetics.' },
  ];
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  
  return (
    <div className="py-12">
      <h3 className="text-xl font-semibold mb-8 text-center">Technical Expertise</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="relative p-4 rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSkill(skill)}
          >
            <h4 className="font-medium mb-1">{skill.name}</h4>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                style={{ width: `${skill.level * 10}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 mt-1 block">{skill.category}</span>
          </motion.div>
        ))}
      </div>
      
      {activeSkill && (
        <motion.div 
          className="mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{activeSkill.name}</h3>
              <span className="text-sm text-gray-500">{activeSkill.category}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Proficiency:</span>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-6 rounded-sm ${
                      i < activeSkill.level ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p>{activeSkill.description}</p>
        </motion.div>
      )}
    </div>
  );
} 