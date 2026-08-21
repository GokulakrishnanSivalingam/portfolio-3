import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { blogs } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import BlogModal from './BlogModal';
import { BookOpen, Clock, Calendar, ArrowUpRight, Search, Sparkles } from 'lucide-react';

const categories = ['All', 'Web Design', 'Full Stack', 'UI/UX Design'];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blogs" className="section" style={{ position: 'relative' }}>
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-purple" style={{ top: '20%', left: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>[ 04 / PERSPECTIVES & WRITING ]</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <h2 className="heading-xl">
                Engineering Logs & <br />
                <span className="text-gradient">Design Articles</span>
              </h2>
              <p className="section-subtitle">
                Deep dives into modern frontend aesthetics, full-stack scalability, design systems, and distributed system architectures.
              </p>
            </div>

            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '300px'
              }}
            >
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)'
                }}
              />
              <input
                type="text"
                placeholder="Search articles & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pill-badge ${activeCategory === cat ? 'active' : ''}`}
              style={{ cursor: 'pointer', padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid-cards">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <SpotlightCard
                onClick={() => setSelectedBlog(blog)}
                style={{
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div>
                  {/* Category & Read Time */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--accent-light)',
                        background: 'rgba(16, 185, 129, 0.08)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {blog.category}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <Clock size={13} /> {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="heading-md"
                    style={{
                      fontSize: '1.28rem',
                      marginBottom: '0.85rem',
                      color: '#ffffff',
                      lineHeight: 1.35
                    }}
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.93rem',
                      lineHeight: 1.6,
                      marginBottom: '1.75rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {blog.excerpt}
                  </p>
                </div>

                {/* Card Footer: Date & Read Link */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1.25rem',
                    fontSize: '0.88rem'
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <Calendar size={14} /> {blog.date}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--accent)',
                      fontWeight: 600
                    }}
                  >
                    Read Article <ArrowUpRight size={16} />
                  </span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              color: 'var(--text-secondary)'
            }}
          >
            <BookOpen size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
            <p style={{ fontSize: '1.1rem' }}>No articles match "{searchQuery}"</p>
          </div>
        )}
      </div>

      {/* Interactive Modal Reader */}
      <BlogModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />
    </section>
  );
};

export default Blogs;
