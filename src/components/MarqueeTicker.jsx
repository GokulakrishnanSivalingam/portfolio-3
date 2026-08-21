import React from 'react';
import { Sparkles } from 'lucide-react';

const items = [
  "Web Design",
  "App Development",
  "UI/UX Design",
  "Full-Stack MERN",
  "GSAP Micro-Animations",
  "React.js & Next.js",
  "Figma Design Systems",
  "RESTful APIs",
  "Performance & SEO",
  "Clean Code Architecture"
];

const MarqueeTicker = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: index % 2 === 0 ? 'var(--text-primary)' : 'var(--accent-light)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            <span>{item}</span>
            <Sparkles size={14} style={{ color: 'var(--accent)', opacity: 0.7 }} />
          </div>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {items.concat(items).map((item, index) => (
          <div
            key={`dup-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: index % 2 === 0 ? 'var(--text-primary)' : 'var(--accent-light)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            <span>{item}</span>
            <Sparkles size={14} style={{ color: 'var(--accent)', opacity: 0.7 }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
