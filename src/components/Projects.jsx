import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import { ExternalLink, Sparkles, Layers, ChevronDown, ChevronUp, Eye, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = ['All', 'Full-Stack', 'Web Design / Frontend', 'E-Commerce / Web Design', 'Mobile App / AI', 'ML / AI', 'Web App'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory || project.category.includes(activeCategory);
  });

  // Display 3 projects by default, rest under "See More"
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      {/* Ambient background glow */}
      <div className="ambient-glow ambient-cyan" style={{ top: '20%', right: '0%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <div>
            <div className="section-badge">
              <Sparkles size={13} />
              <span>[ SELECTED PRODUCTION WORKS ]</span>
            </div>
            <h2 className="heading-xl">
              Engineered for <span className="text-gradient">Impact & Scale</span>
            </h2>
            <p className="section-subtitle">
              A curated selection of modern web platforms, mobile architectures, intelligent ML models, and high-conversion e-commerce systems.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            {['All', 'Full-Stack', 'Web Design / Frontend', 'Mobile App / AI', 'ML / AI'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`pill-badge ${activeCategory === category ? 'active' : ''}`}
                style={{ cursor: 'pointer', padding: '0.4rem 0.95rem' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid-cards"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <SpotlightCard
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.5rem'
                  }}
                >
                  <div>
                    {/* Project Thumbnail Image */}
                    <div
                      onClick={() => setSelectedImage(project.image)}
                      style={{
                        width: '100%',
                        height: '210px',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        cursor: 'pointer',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border)'
                      }}
                      className="project-thumb-container"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          background: 'var(--bg-card)',
                          backdropFilter: 'blur(8px)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--accent)',
                          border: '1px solid var(--border)'
                        }}
                      >
                        {project.category}
                      </div>

                      {/* Click to Preview Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0, 0, 0, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.2s ease'
                        }}
                        className="project-thumb-overlay"
                      >
                        <div
                          style={{
                            background: 'var(--bg-card)',
                            color: 'var(--text-primary)',
                            padding: '0.4rem 0.85rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            border: '1px solid var(--border)'
                          }}
                        >
                          <Eye size={14} /> Preview
                        </div>
                      </div>
                    </div>

                    <style>{`
                      .project-thumb-container:hover .project-thumb-overlay { opacity: 1 !important; }
                      .project-thumb-container:hover img { transform: scale(1.05); }
                    `}</style>

                    {/* Title */}
                    <h3
                      className="heading-md"
                      style={{
                        fontSize: '1.25rem',
                        marginBottom: '0.75rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.75rem'
                      }}
                    >
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            background: 'var(--bg-glass)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '6px'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Live Demo & GitHub */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      borderTop: '1px solid var(--border)',
                      paddingTop: '1.25rem'
                    }}
                  >
                    {project.live && project.live !== '#' ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{
                          flex: 1,
                          padding: '0.6rem 1rem',
                          fontSize: '0.85rem'
                        }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="btn-secondary"
                        style={{
                          flex: 1,
                          opacity: 0.6,
                          cursor: 'not-allowed',
                          fontSize: '0.85rem'
                        }}
                      >
                        Internal App
                      </button>
                    )}

                    {project.github && project.github !== '#' ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                        style={{
                          padding: '0.6rem 1rem',
                          fontSize: '0.85rem'
                        }}
                        aria-label="View Source Code"
                      >
                        <FaGithub size={16} />
                      </a>
                    ) : null}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More / Show Fewer Toggle */}
        {filteredProjects.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline"
              style={{
                padding: '0.8rem 2.2rem',
                gap: '0.5rem'
              }}
            >
              <span>{showAll ? 'Show Fewer Projects' : `See More Projects (${filteredProjects.length - 3} more)`}</span>
              {showAll ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
            </button>
          </div>
        )}

        {/* Modal Lightbox for Project Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.88)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '900px',
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <img
                  src={selectedImage}
                  alt="Project Full Preview"
                  style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
