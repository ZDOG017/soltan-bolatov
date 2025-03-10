'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  skills: string[];
  type: 'education' | 'work' | 'project';
}

export default function CareerTimeline() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  
  const events: TimelineEvent[] = [
    {
      id: 'event1',
      date: '2023 - Present',
      title: 'Senior Frontend Developer',
      description: 'Leading frontend development for a SaaS platform, focusing on performance optimization and accessibility.',
      skills: ['React', 'TypeScript', 'Next.js', 'Performance Optimization'],
      type: 'work'
    },
    {
      id: 'event2',
      date: '2021 - 2023',
      title: 'Frontend Developer',
      description: 'Developed responsive web applications and implemented modern UI/UX designs.',
      skills: ['React', 'JavaScript', 'CSS/SCSS', 'Responsive Design'],
      type: 'work'
    },
    {
      id: 'event3',
      date: '2020 - 2021',
      title: 'UI/UX Designer & Developer',
      description: 'Created user interfaces and implemented them with a focus on user experience.',
      skills: ['Figma', 'HTML/CSS', 'JavaScript', 'UI/UX Design'],
      type: 'work'
    },
    {
      id: 'event4',
      date: '2018 - 2020',
      title: 'Computer Science Degree',
      description: 'Studied computer science with a focus on web technologies and user interface design.',
      skills: ['Algorithms', 'Data Structures', 'Web Development', 'UI Design'],
      type: 'education'
    }
  ];
  
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'education':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        );
      case 'project':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="py-12">
      <h3 className="text-xl font-semibold mb-8 text-center">My Journey</h3>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
        
        {/* Timeline events */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
              
              {/* Event content */}
              <motion.div 
                className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={`p-4 rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer transition-all ${
                    activeEvent === event.id ? 'bg-blue-50 dark:bg-blue-900/20 shadow-md' : 'hover:shadow-md'
                  }`}
                  onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {getEventIcon(event.type)}
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{event.date}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{event.description}</p>
                  
                  {activeEvent === event.id && (
                    <motion.div 
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <h5 className="text-sm font-medium mb-2">Skills & Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {event.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 