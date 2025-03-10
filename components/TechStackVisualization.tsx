'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  category: string;
  size: number;
}

export default function TechStackVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  const techStack: TechItem[] = [
    { name: 'React', icon: '⚛️', category: 'Frontend', size: 1.2 },
    { name: 'Next.js', icon: '▲', category: 'Frontend', size: 1.1 },
    { name: 'TypeScript', icon: 'TS', category: 'Language', size: 1.1 },
    { name: 'JavaScript', icon: 'JS', category: 'Language', size: 1 },
    { name: 'HTML5', icon: '🌐', category: 'Frontend', size: 0.9 },
    { name: 'CSS3', icon: '🎨', category: 'Frontend', size: 0.9 },
    { name: 'Tailwind', icon: '🌊', category: 'CSS', size: 1 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', size: 0.9 },
    { name: 'Git', icon: '📊', category: 'Tool', size: 0.8 },
    { name: 'Figma', icon: '🎭', category: 'Design', size: 0.8 },
    { name: 'GraphQL', icon: '◼️', category: 'API', size: 0.8 },
    { name: 'Redux', icon: '🔄', category: 'State', size: 0.8 },
  ];
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const items = container.querySelectorAll('.tech-item');
    
    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left - rect.width / 2;
      mouseY = e.clientY - rect.top - rect.height / 2;
    };
    
    const animate = () => {
      items.forEach((item, index) => {
        const el = item as HTMLElement;
        const factor = 0.01;
        
        // Calculate position based on mouse movement
        const x = mouseX * factor * (index % 3 === 0 ? 1 : -1) * (techStack[index].size);
        const y = mouseY * factor * (index % 2 === 0 ? 1 : -1) * (techStack[index].size);
        
        // Apply transform with some delay based on index
        el.style.transform = `translate(${x}px, ${y}px) scale(${techStack[index].size})`;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="py-12">
      <h3 className="text-xl font-semibold mb-8 text-center">My Tech Stack</h3>
      
      <div 
        ref={containerRef}
        className="relative h-[400px] max-w-3xl mx-auto flex items-center justify-center overflow-hidden"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-item absolute cursor-pointer transition-transform duration-300"
            initial={{ 
              x: (Math.random() - 0.5) * 200, 
              y: (Math.random() - 0.5) * 200,
              opacity: 0 
            }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
          >
            <div 
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-full 
                ${hoveredTech === tech.name ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'} 
                shadow-lg transition-colors duration-300`}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-xs mt-1 font-medium">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Move your mouse over the visualization to see the technologies interact.
          Hover over each item for more details.
        </p>
      </div>
    </div>
  );
} 