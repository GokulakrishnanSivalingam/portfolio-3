import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Heart, Share2, Eye, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const BlogModal = ({ blog, onClose }) => {
  const [likes, setLikes] = useState(blog ? blog.likes : 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (blog) {
      setLikes(blog.likes);
      setHasLiked(false);
    }
  }, [blog]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!blog) return null;

  const handleLike = (e) => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      
      // Trigger festive confetti
      confetti({
        particleCount: 40,
        spread: 60,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        },
        colors: ['#10b981', '#34d399', '#06b6d4', '#8b5cf6']
      });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="modal-content-wrapper"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span className="section-badge" style={{ marginBottom: 0 }}>
                {blog.category}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}
              >
                <Clock size={14} /> {blog.readTime}
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}
              >
                <Eye size={14} /> {blog.views} views
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Title & Metadata */}
          <h2
            className="heading-lg"
            style={{
              marginBottom: '1.25rem',
              color: '#ffffff',
              lineHeight: 1.2
            }}
          >
            {blog.title}
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={15} style={{ color: 'var(--accent)' }} /> {blog.date}
            </div>
            <span>•</span>
            <div>By Gokulakrishnan S</div>
          </div>

          {/* Excerpt Callout */}
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.06)',
              borderLeft: '3px solid var(--accent)',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 12px 12px 0',
              marginBottom: '2rem',
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              fontSize: '1.02rem',
              lineHeight: 1.6
            }}
          >
            "{blog.excerpt}"
          </div>

          {/* Article Body */}
          <div
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontSize: '1.02rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {blog.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3
                    key={index}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginTop: '1.5rem',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4
                    key={index}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--accent-light)',
                      marginTop: '1rem',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph
                  .replace(/```[a-z]*/, '')
                  .replace(/```$/, '')
                  .trim();
                return (
                  <div
                    key={index}
                    style={{
                      background: '#040507',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      overflowX: 'auto',
                      fontFamily: 'Consolas, Monaco, monospace',
                      fontSize: '0.9rem',
                      color: '#a7f3d0',
                      margin: '1rem 0'
                    }}
                  >
                    <pre style={{ margin: 0 }}>{codeContent}</pre>
                  </div>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Actions & Footer */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <button
              onClick={handleLike}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                background: hasLiked ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${hasLiked ? '#ef4444' : 'var(--border)'}`,
                color: hasLiked ? '#ef4444' : 'var(--text-primary)',
                fontWeight: 600,
                transition: 'all 0.25s ease'
              }}
            >
              <Heart size={18} fill={hasLiked ? '#ef4444' : 'none'} />
              <span>{likes} {likes === 1 ? 'Clap' : 'Claps'}</span>
            </button>

            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                transition: 'all 0.25s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {copied ? <Check size={18} color="var(--accent)" /> : <Share2 size={18} />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogModal;
