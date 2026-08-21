import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ArrowUp, Mail, Sparkles, BookOpen } from 'lucide-react';

const Footer = ({ onOpenBlogs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '4.5rem 0 2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px' }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em'
              }}
            >
              Gokul<span className="text-accent">akrishnan S</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Software developer & UI/UX designer crafting Western-grade digital experiences, scalable full-stack web applications, and fluid micro-animations.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-secondary"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                NAVIGATION
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
                <a href="#services" style={{ color: 'var(--text-secondary)' }}>Services & Specs</a>
                <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Selected Works</a>
                <a href="#experience" style={{ color: 'var(--text-secondary)' }}>Career Timeline</a>
                <button
                  onClick={onOpenBlogs}
                  style={{
                    color: 'var(--accent)',
                    textAlign: 'left',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer'
                  }}
                >
                  <BookOpen size={14} />
                  <span>Engineering Blogs (New Page)</span>
                </button>
                <a href="#certificates" style={{ color: 'var(--text-secondary)' }}>Certifications</a>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                SPECIALIZATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <span>Web Design & Frontend</span>
                <span>Mobile & Web App Dev</span>
                <span>UI/UX Design Systems</span>
                <span>Full-Stack MERN Architecture</span>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn-outline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.4rem',
                borderRadius: 'var(--radius-full)'
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Large Typographic Watermark */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 10vw, 8.5rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--border)',
            userSelect: 'none',
            textAlign: 'center',
            marginBottom: '1.5rem',
            opacity: 0.5
          }}
        >
          GOKULAKRISHNAN
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Crafted with React, GSAP & Precision</span>
            <Sparkles size={13} color="var(--accent)" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


