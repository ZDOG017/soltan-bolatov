import Image from 'next/image';
import SkillsVisualization from './SkillsVisualization';
import CareerTimeline from './CareerTimeline';
import InfiniteCarousel from './InfiniteCarousel';

export default function AboutSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Design", items: ["UI/UX", "Figma", "Responsive Design"] },
    { category: "Tools", items: ["Git", "VS Code", "Chrome DevTools"] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
              <Image 
                src="/profile.jpg" 
                alt="Soltan Bolatov" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-6">
              I'm a passionate frontend developer with a keen eye for design and a commitment to creating 
              exceptional user experiences. With a background in [your background], I bring a unique perspective 
              to every project I work on.
            </p>
            
            <p className="text-lg mb-8">
              My approach combines technical excellence with creative problem-solving, 
              ensuring that the solutions I build are not only functional but also intuitive and engaging.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{skillGroup.category}</h4>
                    <ul className="space-y-1">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300">{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Expertise - Full width */}
      <InfiniteCarousel />

      {/* Career Timeline */}
      <div className="container mx-auto px-6 mt-20">
        <CareerTimeline />
      </div>
    </section>
  );
} 