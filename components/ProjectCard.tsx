import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  projectUrl 
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={projectUrl} 
          className="text-sm font-medium flex items-center gap-1 hover:underline underline-offset-4"
        >
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
} 