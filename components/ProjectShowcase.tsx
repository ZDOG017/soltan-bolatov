'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
}

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 'project1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced filtering and cart functionality',
      longDescription: 'A full-featured e-commerce platform built with Next.js and TypeScript. Features include product filtering, search, cart management, user authentication, and payment processing with Stripe.',
      imageUrl: '/projects/project1.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      features: [
        'Server-side rendering for SEO optimization',
        'Responsive design for all devices',
        'Advanced filtering and search functionality',
        'Secure payment processing with Stripe',
        'User authentication and account management'
      ],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project1'
    },
    {
      id: 'project2',
      title: 'Dashboard Interface',
      description: 'An analytics dashboard with real-time data visualization',
      longDescription: 'A comprehensive analytics dashboard that displays real-time data with interactive charts and graphs. Built with React and D3.js, it provides insights through customizable widgets and reports.',
      imageUrl: '/projects/project2.jpg',
      tags: ['React', 'D3.js', 'Redux', 'WebSockets'],
      features: [
        'Real-time data updates via WebSockets',
        'Interactive charts and graphs with D3.js',
        'Customizable dashboard layout',
        'Data export functionality',
        'User permission management'
      ],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project2'
    },
    {
      id: 'project3',
      title: 'Content Management System',
      description: 'A headless CMS with a modern admin interface',
      longDescription: 'A flexible headless CMS built with Node.js and React. It provides a user-friendly admin interface for content management and a robust API for content delivery to various platforms.',
      imageUrl: '/projects/project3.jpg',
      tags: ['Node.js', 'React', 'GraphQL', 'MongoDB'],
      features: [
        'Intuitive content editing experience',
        'Flexible content modeling',
        'GraphQL API for content delivery',
        'Media library with image optimization',
        'Workflow and publishing controls'
      ],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project3'
    }
  ];
  
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => setActiveProject(project)}
          >
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              <button 
                className="text-sm font-medium flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image 
                  src={activeProject.imageUrl} 
                  alt={activeProject.title} 
                  fill 
                  className="object-cover"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
                  onClick={() => setActiveProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{activeProject.longDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={activeProject.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={activeProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 