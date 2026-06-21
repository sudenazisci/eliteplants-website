import React, { useEffect, useState } from 'react';
import { Sprout, ShoppingBag, Award, Sparkles, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for flat navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar-vintage ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-vintage-container">
        {/* Left Side Navigation Links */}
        <div className="nav-col nav-col-left">
          <a 
            onClick={() => scrollToSection('products')} 
            className={activeSection === 'products' ? 'active' : ''}
          >
            <ShoppingBag size={14} /> Ürünlerimiz
          </a>
          <a 
            onClick={() => scrollToSection('varieties')} 
            className={activeSection === 'varieties' ? 'active' : ''}
          >
            <Award size={14} /> Çeşitlerimiz
          </a>
        </div>

        {/* Centered Logo */}
        <div className="nav-col nav-col-center">
          <div className="logo-vintage" onClick={() => scrollToSection('home')}>
            <span className="logo-vintage-icon">
              <Sprout size={16} />
            </span>
            <span className="logo-vintage-text">
              ELİTE <span>plants</span>
            </span>
          </div>
        </div>

        {/* Right Side Navigation Links */}
        <div className="nav-col nav-col-right">
          <a 
            onClick={() => scrollToSection('about')} 
            className={activeSection === 'about' ? 'active' : ''}
          >
            <Sparkles size={14} /> Hakkımızda
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            <Mail size={14} /> İletişim
          </a>
        </div>
      </div>
    </nav>
  );
};
