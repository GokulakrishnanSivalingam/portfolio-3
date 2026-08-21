import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onOpenBlogs, theme, toggleTheme, isBlogPage, onBackToHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none'
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1240px',
          padding: '0.65rem 1.25rem',
          borderRadius: 'var(--radius-full)',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border)',
          boxShadow: scrolled ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            if (isBlogPage) {
              e.preventDefault();
              onBackToHome();
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.15rem',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '0.85rem'
            }}
          >
            GS
          </div>
          <span className="navbar-brand-name">
            Gokul<span className="text-accent navbar-brand-suffix">akrishnan</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{ display: 'none' }}
          className="desktop-nav-wrapper"
        >
          <style>{`
            @media (min-width: 920px) {
              .desktop-nav-wrapper { display: flex !important; align-items: center; gap: 1.5rem; }
              .mobile-nav-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (isBlogPage) {
                  e.preventDefault();
                  onBackToHome();
                  setTimeout(() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}

          {/* Dedicated Blog Page Button in Nav */}
          <button
            onClick={onOpenBlogs}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: isBlogPage ? 'var(--accent)' : 'var(--text-secondary)',
              background: 'rgba(16, 185, 129, 0.08)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: `1px solid ${isBlogPage ? 'var(--accent)' : 'var(--border)'}`,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseOut={(e) => {
              if (!isBlogPage) e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <BookOpen size={14} />
            <span>Blogs</span>
          </button>
        </div>

        {/* Right Controls: Theme Switcher & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="btn-secondary navbar-theme-toggle"
            style={{
              padding: '0.5rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={17} color="var(--accent-light)" /> : <Moon size={17} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              if (isBlogPage) {
                e.preventDefault();
                onBackToHome();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="btn-primary navbar-cta"
            style={{
              padding: '0.5rem 1.15rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{
              color: 'var(--text-primary)',
              padding: '0.4rem',
              borderRadius: '8px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              top: '5rem',
              left: '1rem',
              right: '1rem',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem'
            }}
          >
            <div className="status-indicator" style={{ marginBottom: '0.5rem' }}>
              <span className="status-dot" />
              <span>Available for Freelance & Full-time Roles</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (isBlogPage) {
                    e.preventDefault();
                    onBackToHome();
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-glass)',
                  fontWeight: 600,
                  fontSize: '0.98rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: 'var(--text-primary)'
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
              </a>
            ))}

            {/* Mobile Dedicated Blog Page link */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBlogs();
              }}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-glow)',
                border: '1px solid var(--border-hover)',
                fontWeight: 700,
                fontSize: '0.98rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'var(--accent)',
                cursor: 'pointer'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} /> Read Articles & Blogs
              </span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
