'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  skills: string[];
  type: 'education' | 'work' | 'project';
}

export default function CareerTimeline() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  
  const events: TimelineEvent[] = [
    {
      id: "relog",
      date: "Feb 2025 - Present",
      title: "Frontend Developer Intern at Relog KZ",
      description: "Developed a Route Comparing Tool using React, TypeScript, and Mapbox. Designed and implemented an interactive map interface to visualize delivery points and route priorities. Integrated backend APIs to fetch and display route data, allowing users to compare different route plans dynamically.",
      skills: ["React", "TypeScript", "Redux", "Mapbox", "Deck.gl"],
      type: "work"
    },
    {
      id: "epam",
      date: "Oct 2024 - Jun 2025",
      title: "Frontend Developer with AI at EPAM Systems",
      description: "Advanced training program focused on frontend development with AI integration. Learning cutting-edge techniques for building intelligent user interfaces and AI-powered web applications.",
      skills: ["React", "AI Integration", "Machine Learning", "Advanced Frontend", "UI/UX"],
      type: "education"
    },
    {
      id: "nfactorial",
      date: "Jun 2024 - Aug 2024",
      title: "Full Stack Developer at nFactorial Incubator",
      description: "Built Quryltai, a web platform designed to assist users in selecting computer components. Created an intuitive UI/UX using Figma, developed the frontend with React, TypeScript, and Tailwind CSS, and built a robust API with Node.js and Express, leveraging MongoDB for data storage. Incorporated ChatGPT-4.0 for personalized component recommendations.",
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "AI Integration"],
      type: "work"
    },
    {
      id: "sergek",
      date: "May 2024 - Aug 2024",
      title: "Computer Vision Annotator at Sergek Group",
      description: "Annotated images to create high-quality datasets for training computer vision models. Accurately labeled images using various annotation tools and ensured consistency and precision across large datasets. Collaborated with data scientists and machine learning engineers to understand annotation requirements.",
      skills: ["Computer Vision", "Data Annotation", "Quality Control"],
      type: "work"
    },
    {
      id: "oskemen",
      date: "Jun 2023 - Aug 2023",
      title: "Frontend Developer at Oskemen IT Hub",
      description: "Designed a Three.js application with React to showcase 3D models on a portfolio website. Integrated Three.js with React for interactive 3D model viewing and created custom shaders and materials for enhanced visual effects. Developed intuitive UI controls for model interaction.",
      skills: ["React", "Three.js", "3D Modeling", "UI Design"],
      type: "work"
    },
    {
      id: "cyprus",
      date: "Oct 2022 - Jun 2026",
      title: "Bachelor of Engineering - Computer Software Engineering",
      description: "Pursuing a Bachelor's degree in Computer Software Engineering at Cyprus International University.",
      skills: ["Software Engineering", "Computer Science", "Programming"],
      type: "education"
    },
    {
      id: "nazarbayev",
      date: "Aug 2021 - May 2022",
      title: "Foundation Degree in Mathematics",
      description: "Completed a Foundation degree in Mathematics at Nazarbayev University.",
      skills: ["Mathematics", "Problem Solving", "Analytical Thinking"],
      type: "education"
    },
    {
      id: "nis",
      date: "2013 - 2021",
      title: "Physics-ICT at Nazarbayev Intellectual Schools",
      description: "Completed secondary education with a focus on Physics and ICT at Nazarbayev Intellectual Schools.",
      skills: ["Physics", "ICT", "Academic Excellence"],
      type: "education"
    }
  ];

  const toggleEvent = (id: string) => {
    if (expandedEvent === id) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(id);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Click on any item to view details
      </p>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full 
                ${event.type === 'work' ? 'bg-blue-500' : event.type === 'education' ? 'bg-green-500' : 'bg-purple-500'}`}>
              </div>
              
              {/* Clickable timeline item */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Left side content for even items */}
                {index % 2 === 0 ? (
                  <>
                    <div 
                      onClick={() => toggleEvent(event.id)}
                      className={`md:text-right bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm cursor-pointer
                        transition-all duration-300 hover:shadow-md md:mr-4
                        ${expandedEvent === event.id ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">{event.title}</h3>
                        <span className="text-sm font-mono text-blue-600 dark:text-blue-400 md:hidden">
                          {event.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center mt-2 md:flex-row-reverse">
                        <span className={`text-xs px-2 py-1 rounded-full
                          ${event.type === 'work' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'}`}
                        >
                          {event.type === 'work' ? 'Work' : 'Education'}
                        </span>
                        <span className="ml-auto md:ml-0 md:mr-auto text-gray-400 text-sm">
                          {expandedEvent === event.id ? 'Click to collapse' : 'Click to expand'}
                        </span>
                      </div>
                      
                      <AnimatePresence>
                        {expandedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 md:text-right"
                          >
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {event.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 md:justify-end">
                              {event.skills.map((skill, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="hidden md:flex md:items-start md:pl-4">
                      <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                        {event.date}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex md:items-start md:justify-end md:pr-4">
                      <span className="text-sm font-mono text-blue-600 dark:text-blue-400">
                        {event.date}
                      </span>
                    </div>
                    
                    <div 
                      onClick={() => toggleEvent(event.id)}
                      className={`md:text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm cursor-pointer
                        transition-all duration-300 hover:shadow-md md:ml-4
                        ${expandedEvent === event.id ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold">{event.title}</h3>
                        <span className="text-sm font-mono text-blue-600 dark:text-blue-400 md:hidden">
                          {event.date}
                        </span>
                      </div>
                      
                      <div className="flex items-center mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full
                          ${event.type === 'work' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200' : 
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'}`}
                        >
                          {event.type === 'work' ? 'Work' : 'Education'}
                        </span>
                        <span className="ml-auto text-gray-400 text-sm">
                          {expandedEvent === event.id ? 'Click to collapse' : 'Click to expand'}
                        </span>
                      </div>
                      
                      <AnimatePresence>
                        {expandedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
                          >
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {event.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {event.skills.map((skill, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 