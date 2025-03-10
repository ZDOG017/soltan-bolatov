import ProjectCard from './ProjectCard';
import ProjectShowcase from './ProjectShowcase';

export default function WorkSection() {
  const projects = [
    {
      title: "Project One",
      description: "A responsive web application built with React and Next.js",
      imageUrl: "/projects/project1.jpg",
      tags: ["React", "Next.js", "Tailwind CSS"],
      projectUrl: "/projects/project-one"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with a focus on performance",
      imageUrl: "/projects/project2.jpg",
      tags: ["TypeScript", "Redux", "Stripe"],
      projectUrl: "/projects/project-two"
    },
    {
      title: "Project Three",
      description: "A dashboard interface with data visualization",
      imageUrl: "/projects/project3.jpg",
      tags: ["React", "D3.js", "API Integration"],
      projectUrl: "/projects/project-three"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Work</h2>
        
        <ProjectShowcase />
      </div>
    </section>
  );
} 