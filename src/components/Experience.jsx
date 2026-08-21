import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>[ 03 / CAREER MILESTONES ]</span>
          </div>
          <h2 className="heading-xl">
            Professional Experience & <br />
            <span className="text-gradient">Track Record</span>
          </h2>
          <p className="section-subtitle">
            Hands-on engineering roles building production MERN web applications, optimizing API performance, and crafting UI/UX design systems.
          </p>
        </div>

        {/* Vertical Milestone Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Vertical central glowing line */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent) 0%, rgba(16, 185, 129, 0.1) 100%)',
              zIndex: 0
            }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                position: 'relative',
                display: 'flex',
                gap: '2rem',
                zIndex: 1
              }}
            >
              {/* Timeline Node Icon */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#07080a',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                  marginTop: '0.5rem'
                }}
              >
                <Briefcase size={20} />
              </div>

              {/* Card Container */}
              <div style={{ flex: 1 }}>
                <SpotlightCard style={{ padding: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div>
                      <h3
                        className="heading-md"
                        style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--accent-light)',
                          fontWeight: 600
                        }}
                      >
                        {exp.company}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.8rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-light)'
                      }}
                    >
                      <Calendar size={13} />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Highlights Checklist */}
                  {exp.highlights && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        borderTop: '1px solid var(--border)',
                        paddingTop: '1.25rem'
                      }}
                    >
                      {exp.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.84rem',
                            color: 'var(--text-primary)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '6px',
                            border: '1px solid var(--border)'
                          }}
                        >
                          <CheckCircle2 size={14} color="var(--accent)" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

