import NavBar from '@/components/NavBar';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import CodePlayground from '@/components/CodePlayground';
import InteractiveBackground from '@/components/InteractiveBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Global Components */}
      <CustomCursor />
      <InteractiveBackground />
      <ScrollProgress />
      
      {/* Main Content */}
      <NavBar />
      <HeroSection />
      <CodePlayground />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Soltan Bolatov. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 dark:hover:text-gray-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 dark:hover:text-gray-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 dark:hover:text-gray-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
