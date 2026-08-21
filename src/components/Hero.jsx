import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, liveStats } from '../data/portfolioData';
import { ArrowRight, Sparkles, Clock, Eye, Download, Code, Users, BookOpen } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = ({ onOpenBlogs }) => {
  const [profileViews, setProfileViews] = useState(liveStats.initialProfileViews);
  const [currentTime, setCurrentTime] = useState('');

  // Keep the total view count shared across visitors through the counter API.
  useEffect(() => {
    const counterUrl = 'https://api.counterapi.dev/v1/gokul-portfolio-2026/views';
    let isMounted = true;

    const updateProfileViews = async (increment = false) => {
      try {
        const endpoint = increment ? `${counterUrl}/up` : `${counterUrl}/get`;
        const response = await fetch(endpoint, { cache: 'no-store' });
        if (!response.ok) throw new Error('View counter request failed');

        const result = await response.json();
        const total = Number(result.count ?? result.value);
        if (isMounted && Number.isFinite(total)) {
          setProfileViews(Math.max(liveStats.initialProfileViews, total));
        }
      } catch {
        if (!isMounted) return;
        setProfileViews(liveStats.initialProfileViews);
      }
    };

    try {
      if (!sessionStorage.getItem('gokul_session_visited')) {
        sessionStorage.setItem('gokul_session_visited', 'true');
        updateProfileViews(true);
      } else {
        updateProfileViews();
      }
    } catch {
      updateProfileViews();
    }

    const refreshInterval = setInterval(() => updateProfileViews(), 30000);

    return () => {
      isMounted = false;
      clearInterval(refreshInterval);
    };
  }, []);

  // Live Chennai (IST) Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '3.5rem',
        position: 'relative'
      }}
    >
      {/* Background Ambient Glows */}
      <div className="ambient-glow ambient-green" style={{ top: '5%', left: '5%' }} />
      <div className="ambient-glow ambient-cyan" style={{ bottom: '10%', right: '5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="hero-grid-layout"
        >
          <style>{`
            @media (min-width: 960px) {
              .hero-grid-layout {
                grid-template-columns: 1.2fr 0.8fr !important;
                gap: 3.5rem !important;
              }
              .hero-image-wrapper {
                justify-content: flex-end !important;
              }
            }
            @media (max-width: 959px) {
              .hero-grid-layout {
                gap: 2rem !important;
              }
              .hero-text-content {
                order: 1 !important;
              }
              .hero-image-wrapper {
                order: 2 !important;
                margin-top: 1rem !important;
                margin-bottom: 1.5rem !important;
              }
            }
          `}</style>

          {/* Left Column: Hero Typography & Info (Order 1 on mobile) */}
          <motion.div
            className="hero-text-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Live Tickers Bar: Location/Time & Realtime Profile Views */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}
            >
              {/* Real-time Profile Views Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border-hover)',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--accent)'
                }}
              >
                <Eye size={14} />
                <span>{profileViews.toLocaleString()}+ Total Views</span>
              </div>

              {/* Local Time Indicator */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.85rem',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <Clock size={13} style={{ color: 'var(--accent)' }} />
                <span>Chennai • {currentTime || 'IST'}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="heading-hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '1.25rem' }}
            >
              Crafting Digital <br />
              <span className="text-gradient">Experiences</span> with Code & Precision.
            </motion.h1>

            {/* Bio Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                maxWidth: '580px',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Hello, I'm <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.name}</strong> — a software developer & UI/UX craftsman specializing in Western-grade modern web applications, scalable MERN architectures, and micro-interactions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                gap: '0.85rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#projects" className="btn-primary">
                <span>Explore Works</span>
                <ArrowRight size={17} />
              </a>

              <a href="#services" className="btn-outline">
                <span>Specializations</span>
              </a>

              <button
                onClick={onOpenBlogs}
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <BookOpen size={16} />
                <span>Read Blogs</span>
              </button>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                aria-label="GitHub Profile"
              >
                <FaGithub size={17} />
              </a>
            </motion.div>

            {/* Quick Stats Bento Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                borderTop: '1px solid var(--border)',
                paddingTop: '1.75rem'
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)'
                  }}
                >
                  {liveStats.projectsCompleted}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Completed Projects
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--accent)'
                  }}
                >
                  {liveStats.codeCommits}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Git Commits
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)'
                  }}
                >
                  {liveStats.clientSatisfaction}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Code Standards
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Balanced, Fully Visible Profile Image Card (Order 2 on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px'
              }}
            >
              {/* Profile Image Frame - Fully Visible with balanced aspect ratio */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3.8/4.6',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-glass)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%'
                  }}
                />

                {/* Subtle Bottom Card Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'var(--bg-glass)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {personalInfo.name}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                      Surapet, Chennai, India
                    </div>
                  </div>

                  <div className="status-indicator">
                    <span className="status-dot" style={{ width: '7px', height: '7px' }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>Active</span>
                  </div>
                </div>
              </div>

              {/* Floating Orbit Badge: MERN & GSAP */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-hover)',
                  borderRadius: '14px',
                  padding: '0.65rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div
                  style={{
                    background: 'var(--accent-glow)',
                    padding: '0.35rem',
                    borderRadius: '8px',
                    color: 'var(--accent)'
                  }}
                >
                  <Code size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Stack</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    MERN & GSAP
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



