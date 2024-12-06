import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'team', label: 'Team' },
      { id: 'contact', label: 'Contact' },
    ];
    return (
      <nav className="bg-main-800 fixed w-full top-0 z-50">
        <div className="mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">deshore.</div>
            {}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={0} /> : <Menu size={24} />}
            </button>
            {}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-200 transition-colors font-bold"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden`}
            style={{ zIndex: 40 }}
          >
            <div className="p-4">
              <button
                className="mb-4 text-main-800 transform transition-transform duration-300 delay-100"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  opacity: isMenuOpen ? '1' : '0',
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-50px)'
                }}
              >
                <X size={24} />
              </button>
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-main-800 hover:text-purple-600 transition-colors font-bold text-left transform transition-transform duration-300"
                    style={{
                      opacity: isMenuOpen ? '1' : '0',
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-50px)',
                      transitionDelay: `${(index + 2) * 100}ms`
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300"
              style={{ zIndex: 30 }}
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </div>
      </nav>
    );
  };
export default Header;