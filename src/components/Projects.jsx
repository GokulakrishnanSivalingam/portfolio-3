import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ImageModal from './ImageModal';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="heading-lg">Featured Projects</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                overflow: 'hidden',
                padding: '2rem',
              }}
            >
              <style>{`
                @media (min-width: 768px) {
                  .project-grid-${index} { grid-template-columns: 1.2fr 1fr !important; }
                }
              `}</style>
              <div className={`project-grid-${index}`} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center' }}>
                <div style={{ background: '#1a1a1a', borderRadius: '12px', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', overflow: 'hidden' }}>
                    {project.image ? (
                        <div 
                          style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }} 
                          onClick={() => setSelectedImage(project.image)}
                          className="image-hover"
                        >
                          <style>{`
                            .image-hover img { transition: transform 0.3s ease; }
                            .image-hover:hover img { transform: scale(1.05); }
                          `}</style>
                          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ) : (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.5rem' }}>Project Preview</span>
                    )}
                </div>
                
                <div>
                  <h3 className="heading-md" style={{ marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.875rem', 
                        padding: '0.25rem 0.75rem', 
                        background: 'rgba(255,255,255,0.05)', 
                        borderRadius: '9999px',
                        color: 'var(--text-primary)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                      <FaGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox / Modal for Project Image */}
      <ImageModal 
         src={selectedImage} 
         onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};

export default Projects;
