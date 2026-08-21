import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Cpu, 
  Flame, 
  Rocket 
} from 'lucide-react';

const Services = ({ onSelectService }) => {
  const craftSteps = [
    {
      step: '01',
      title: 'Architectural Discovery',
      desc: 'Defining core business goals, target user demographics, and technical specifications.'
    },
    {
      step: '02',
      title: 'UI/UX & Design Systems',
      desc: 'Crafting responsive Figma prototypes, component tokens, and aesthetic micro-interactions.'
    },
    {
      step: '03',
      title: 'Precision Full-Stack Dev',
      desc: 'Writing clean, modular React/Node code with database optimizations and secure APIs.'
    },
    {
      step: '04',
      title: 'Testing, SEO & Launch',
      desc: 'Core Web Vitals tuning, automated Lighthouse testing, production CI/CD deployment.'
    }
  ];

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      {/* Ambient background glow */}
      <div className="ambient-glow ambient-purple" style={{ top: '10%', left: '5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>[ SPECIALIZED DISCIPLINES ]</span>
          </div>
          <h2 className="heading-xl">
            Specialized Engineering & <br />
            <span className="text-gradient">Modern Web Craft</span>
          </h2>
          <p className="section-subtitle">
            Delivering end-to-end digital solutions tailored to modern Western agency aesthetics, high scalability, and seamless user experiences.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem'
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpotlightCard
                  style={{
                    padding: '2.25rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: 'var(--accent-glow)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent)',
                          border: '1px solid var(--border-hover)'
                        }}
                      >
                        {Icon ? <Icon size={24} /> : <Sparkles size={24} />}
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--accent)',
                          background: 'var(--bg-glass)',
                          border: '1px solid var(--border)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="heading-md"
                      style={{
                        fontSize: '1.35rem',
                        marginBottom: '0.75rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.94rem',
                        lineHeight: 1.6,
                        marginBottom: '1.75rem'
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div style={{ marginBottom: '2rem' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--accent)',
                          marginBottom: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        Key Deliverables:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {service.deliverables.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem',
                              fontSize: '0.88rem',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Tech Stack Pills & Inquiry Action */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem',
                        borderTop: '1px solid var(--border)',
                        paddingTop: '1.25rem'
                      }}
                    >
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            background: 'var(--bg-glass)',
                            border: '1px solid var(--border)',
                            color: 'var(--text-secondary)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      onClick={() => onSelectService && onSelectService(service.id)}
                      className="btn-outline"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        fontSize: '0.88rem',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <span>Inquire for {service.category}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* 4-Step Craft Process Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '3rem 2.5rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1rem' }}>
              <Compass size={13} />
              <span>[ HOW I BUILD & SHIP ]</span>
            </div>
            <h3 className="heading-md" style={{ color: 'var(--text-primary)', marginTop: '0.5rem' }}>
              A Systematic, Client-First Engineering Process
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              From conceptual wireframes to high-performance production deployment.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem'
            }}
          >
            {craftSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                style={{
                  background: 'var(--bg-glass)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {stepItem.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {stepItem.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
