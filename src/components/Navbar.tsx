import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveLink(`#${sectionIds[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 h-[60px] flex items-center justify-between">
        {/* Left Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="flex items-center gap-3 focus:outline-none group"
          aria-label="MK_SAN Home"
        >
          <img
            src={logoImg}
            alt="MK_SAN Logo"
            className="w-9 h-9 rounded-full object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-11">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative text-[15px] font-light tracking-wide transition-colors duration-200 py-1 ${
                  isActive ? 'text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute left-1/2 -translate-x-1/2 -bottom-[2px] w-4 h-[1.5px] bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="inline-flex items-center gap-1.5 bg-white text-black rounded-full px-5 py-1.5 text-[14px] font-normal tracking-tight hover:bg-neutral-200 transition-colors duration-200"
          >
            <span>Lets Talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <nav className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-[16px] font-light py-1 border-b border-white/10 ${
                      isActive ? 'text-white font-normal' : 'text-neutral-300'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => handleLinkClick('#contact')}
                className="mt-1 inline-flex items-center justify-center gap-1.5 bg-white text-black rounded-full px-5 py-2.5 text-[15px] font-medium"
              >
                <span>Lets Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

