import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      padding: '3rem 0',
      borderTop: '1px solid var(--border)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Gokul<span className="text-accent">akrishnan</span>
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
          Building beautiful digital experiences. Always learning, always creating.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--accent)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>
            <FaGithub size={24} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--accent)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>
            <FaLinkedin size={24} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--accent)'} onMouseOut={(e) => e.target.style.color='var(--text-secondary)'}>
            <FaTwitter size={24} />
          </a>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', width: '100%' }}>
           <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
             &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
