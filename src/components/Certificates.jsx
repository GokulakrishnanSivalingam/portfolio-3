import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/portfolioData';
import { Award } from 'lucide-react';
import ImageModal from './ImageModal';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Achievements</span>
          <h2 className="heading-lg">Certifications</h2>
        </div>
        
        <div className="grid-cards">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel"
              style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', flexDirection: 'column' }}
            >
              {cert.image && (
                 <div 
                   style={{ width: '100%', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', cursor: 'pointer' }}
                   onClick={() => setSelectedImage(cert.image)}
                   className="cert-hover"
                  >
                    <style>{`
                      .cert-hover img { transition: transform 0.3s ease; }
                      .cert-hover:hover img { transform: scale(1.05); }
                    `}</style>
                    <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
              )}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                 <div style={{ 
                    background: 'var(--accent-glow)', 
                    padding: '1rem',
                    borderRadius: '50%',
                    color: 'var(--accent)',
                  }}>
                    <Award size={28} />
                 </div>
                 <div>
                   <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{cert.title}</h3>
                   <p style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                   <span style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500 }}>{cert.date}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal 
         src={selectedImage} 
         onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};

export default Certificates;
