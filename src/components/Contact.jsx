import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="heading-lg">Let's Work Together</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem' }}>
          <style>{`
            @media (min-width: 768px) {
              .contact-grid { grid-template-columns: 1fr 1.5fr !important; }
            }
            .form-input {
              width: 100%;
              padding: 1rem;
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid var(--border);
              border-radius: 8px;
              color: var(--text-primary);
              font-family: inherit;
              transition: border-color 0.3s ease;
            }
            .form-input:focus {
              outline: none;
              border-color: var(--accent);
            }
          `}</style>
          
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <h3 className="heading-md">Contact Information</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                I'm currently available for freelance work or full-time opportunities. Reach out and let's build something amazing together.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '12px', color: 'var(--accent)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Phone</p>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '12px', color: 'var(--accent)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Email</p>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{personalInfo.email}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--accent-glow)', padding: '1rem', borderRadius: '12px', color: 'var(--accent)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Location</p>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>chennai ,TamilNadu</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '2.5rem' }}
            >
               <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Name</label>
                   <input type="text" className="form-input" placeholder="John Doe" />
                 </div>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Your Email</label>
                   <input type="email" className="form-input" placeholder="john@example.com" />
                 </div>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                   <textarea className="form-input" rows="5" placeholder="Tell me about your project..."></textarea>
                 </div>
                 
                 <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                   Send Message <Send size={18} />
                 </button>
               </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
