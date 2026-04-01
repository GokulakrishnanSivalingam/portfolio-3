import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, PhoneCall, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '6rem'
    }}>
      <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', alignItems: 'center' }}>
        <style>{`
          .hero-container { gap: 2rem; }
          @media (min-width: 768px) {
            .hero-container { gap: 4rem; }
            .hero-grid { grid-template-columns: 1fr 1fr !important; gap: 4rem !important; }
          }
        `}</style>
        
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem', 
              background: 'var(--accent-glow)', 
              color: 'var(--accent)',
              borderRadius: '9999px',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '1px'
            }}>
              Hi, I'm {personalInfo.name}
            </span>
            <h1 className="heading-xl" style={{ marginBottom: '1.5rem' }}>
              Building the future <br/> as a <span className="text-gradient">{personalInfo.role}</span>
            </h1>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.125rem',
              maxWidth: '600px',
              marginBottom: '2.5rem'
            }}>
              I specialize in creating beautiful, responsive, and high-performance web applications that provide seamless user experiences.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Let's Talk <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>

            <div className="hero-contact-grid" style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              <style>{`
                .hero-contact-grid { display: flex; flex-direction: column; gap: 1.5rem; }
                @media (min-width: 768px) {
                  .hero-contact-grid { flex-direction: row; gap: 2rem; }
                }
              `}</style>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent)', flexShrink: 0 }}>
                   <PhoneCall size={20} />
                 </div>
                 <div>
                   <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Call Me</p>
                   <p style={{ fontWeight: 600 }}>{personalInfo.phone}</p>
                 </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                 <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent)', flexShrink: 0 }}>
                   <Mail size={20} />
                 </div>
                 <div style={{ overflow: 'hidden' }}>
                   <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Email Me</p>
                   <p style={{ fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>{personalInfo.email}</p>
                 </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1/1',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--bg-glass)',
              border: '2px solid rgba(74, 222, 128, 0.3)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}>
               <img 
                 src={personalInfo.image} 
                 alt="Profile" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
