import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-secondary' : 'text-secondary md:text-white'}`}>
            Desiree Contessa
          </span>
          <span className={`text-[10px] tracking-widest uppercase ${isScrolled ? 'text-gray-500' : 'text-gray-400 md:text-gray-200'}`}>
            Patriot Home Mortgage
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button href="tel:+14258763025" variant={isScrolled ? 'primary' : 'white'}>
            Apply Now
          </Button>
        </div>

        {/* Mobile Toggle - Text based to avoid symbols */}
        <button
          className="md:hidden text-xs font-bold tracking-widest uppercase"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-8">
                <Button href="tel:+14258763025" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};