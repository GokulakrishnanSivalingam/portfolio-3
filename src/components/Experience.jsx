import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career</span>
          <h2 className="heading-lg">Experience</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ padding: '2rem', display: 'flex', gap: '2rem' }}
            >
               <div style={{ display: 'none' }} className="exp-icon">
                 <style>{`
                   @media (min-width: 768px) {
                     .exp-icon { display: flex !important; align-items: flex-start; }
                   }
                 `}</style>
                 <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '50%', color: 'var(--accent)' }}>
                   <Briefcase size={28} />
                 </div>
               </div>
               <div style={{ flex: 1 }}>
                 <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                   <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{exp.role}</h3>
                   <span style={{ color: 'var(--accent)', fontWeight: 500, background: 'rgba(74, 222, 128, 0.1)', padding: '0.2rem 0.8rem', borderRadius: '999px', fontSize: '0.875rem' }}>{exp.date}</span>
                 </div>
                 <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.company}</h4>
                 <p style={{ color: 'var(--text-primary)' }}>{exp.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
