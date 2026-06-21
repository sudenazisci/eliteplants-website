import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import type { FruitType } from './components/FruitSelector';
import { ContentOverlay } from './components/ContentOverlay';
import { DetailModal } from './components/DetailModal';
import type { VarietyDetail } from './components/DetailModal';
import { Footer } from './components/Footer';

function App() {
  const [activeFruit, setActiveFruit] = useState<FruitType>('blackberry');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedVariety, setSelectedVariety] = useState<VarietyDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (activeFruit === 'blackberry') {
      root.style.setProperty('--color-primary', 'var(--blackberry-primary)');
      root.style.setProperty('--color-glow', 'var(--blackberry-glow)');
      root.style.setProperty('--color-accent', 'var(--blackberry-accent)');
    } else if (activeFruit === 'raspberry') {
      root.style.setProperty('--color-primary', 'var(--raspberry-primary)');
      root.style.setProperty('--color-glow', 'var(--raspberry-glow)');
      root.style.setProperty('--color-accent', 'var(--raspberry-accent)');
    } else if (activeFruit === 'blueberry') {
      root.style.setProperty('--color-primary', 'var(--blueberry-primary)');
      root.style.setProperty('--color-glow', 'var(--blueberry-glow)');
      root.style.setProperty('--color-accent', 'var(--blueberry-accent)');
    }
  }, [activeFruit]);

  useEffect(() => {
    let lastSection = 'home';
    
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      
      // Active section calculation based on viewport intersection
      const sections = ['home', 'products', 'varieties', 'about', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the center of the screen, mark it as active
          if (rect.top <= viewportHeight * 0.4 && rect.bottom >= viewportHeight * 0.4) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection !== lastSection) {
        lastSection = currentSection;
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenVariety = (variety: VarietyDetail) => {
    setSelectedVariety(variety);
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      {/* Premium film grain texture */}
      <div className="noise-overlay" />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Floating Social Sidebar */}
      <div className="social-sidebar">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
      </div>

      {/* Primary Scrollable Content Sections */}
      <ContentOverlay 
        activeFruit={activeFruit} 
        setActiveFruit={setActiveFruit}
        onOpenVariety={handleOpenVariety} 
      />

      {/* Interactive Variety details drawer */}
      <DetailModal 
        isOpen={isModalOpen} 
        variety={selectedVariety} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
