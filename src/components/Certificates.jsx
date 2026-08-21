import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import ImageModal from './ImageModal';
import { Award, Sparkles, Eye, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>[ 05 / VERIFIED CREDENTIALS ]</span>
          </div>
          <h2 className="heading-xl">
            Certifications & <br />
            <span className="text-gradient">Recognitions</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications in Java Programming, Advanced React Architecture, and Cloud Robotics.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid-cards">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SpotlightCard
                style={{
                  padding: '1.75rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {cert.image && (
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/10',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid var(--border)',
                        marginBottom: '1.5rem',
                        cursor: 'pointer',
                        background: '#040507'
                      }}
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0.65rem',
                          right: '0.65rem',
                          background: 'rgba(7, 8, 10, 0.8)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <Eye size={16} />
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        background: 'rgba(16, 185, 129, 0.12)',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        color: 'var(--accent)',
                        flexShrink: 0
                      }}
                    >
                      <Award size={24} />
                    </div>

                    <div>
                      <h3
                        className="heading-md"
                        style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}
                      >
                        {cert.title}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1rem',
                    marginTop: '1.5rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <ShieldCheck size={14} /> Verified Credential
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {cert.date}
                  </span>
                </div>
              </SpotlightCard>
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

