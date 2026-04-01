import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Gokul<span className="text-accent">akrishnan</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <style>{`
            @media (min-width: 768px) {
              .desktop-menu { display: flex !important; gap: 2rem; }
              .mobile-toggle { display: none; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ fontWeight: 500, transition: 'color 0.2s ease' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.target.style.color = 'inherit'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)', padding: '0.25rem' }}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '110%',
              left: '1rem',
              right: '1rem',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              borderRadius: '16px',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
            }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ 
                  padding: '1rem', 
                  fontWeight: 500, 
                  fontSize: '1.1rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'block'
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
