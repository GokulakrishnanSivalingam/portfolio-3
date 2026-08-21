import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const serviceOptions = [
  { id: 'web-design', label: 'Web Design' },
  { id: 'app-dev', label: 'App Development' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'full-stack', label: 'Full-Stack MERN' },
  { id: 'other', label: 'Other Project' }
];

const Contact = ({ preselectedService }) => {
  const [selectedService, setSelectedService] = useState('web-design');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const handleCopy = (text, type) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormSubmitted(true);

    // Fire celebratory confetti
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#06b6d4', '#8b5cf6']
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-green" style={{ bottom: '5%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>[ 07 / START A COLLABORATION ]</span>
          </div>
          <h2 className="heading-xl">
            Let's Build Something <br />
            <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need freelance design engineering, or looking for a dedicated full-stack developer? Send a message and let's get connected.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '3rem'
          }}
          className="contact-grid-wrapper"
        >
          <style>{`
            @media (min-width: 900px) {
              .contact-grid-wrapper {
                grid-template-columns: 1fr 1.3fr !important;
                gap: 4rem !important;
              }
            }
          `}</style>

          {/* Left Column: Direct Details & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            <div>
              <h3 className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Direct Channels
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.96rem' }}>
                Feel free to email or call directly. I typically respond within 24 business hours.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email Card */}
              <SpotlightCard
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      background: 'var(--accent-glow)',
                      padding: '0.9rem',
                      borderRadius: '12px',
                      color: 'var(--accent)'
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email Address</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', wordBreak: 'break-all' }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="btn-secondary"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} color="var(--accent)" /> : <Copy size={16} />}
                </button>
              </SpotlightCard>

              {/* Phone Card */}
              <SpotlightCard
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      background: 'var(--accent-glow)',
                      padding: '0.9rem',
                      borderRadius: '12px',
                      color: 'var(--accent)'
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Phone / WhatsApp</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="btn-secondary"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={16} color="var(--accent)" /> : <Copy size={16} />}
                </button>
              </SpotlightCard>

              {/* Location Card */}
              <SpotlightCard
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    background: 'var(--accent-glow)',
                    padding: '0.9rem',
                    borderRadius: '12px',
                    color: 'var(--accent)'
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Surapet, Chennai, Tamil Nadu, India
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

          {/* Right Column: Studio Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Service Selection Chips */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    I am interested in:
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setSelectedService(opt.id)}
                        className={`pill-badge ${selectedService === opt.id ? 'active' : ''}`}
                        style={{ cursor: 'pointer', padding: '0.45rem 0.95rem', fontSize: '0.85rem' }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    PROJECT DETAILS / MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell me about your goals, timeline, and budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '0.5rem',
                    padding: '0.9rem 2.25rem'
                  }}
                >
                  {formSubmitted ? (
                    <>
                      <Check size={18} />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

