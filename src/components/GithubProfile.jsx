import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';
import { Users, BookOpen, Star, GitFork, Sparkles, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = personalInfo.githubUsername;
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`)
        ]);

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        }
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading && !profile) {
    return null;
  }

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} />
            <span>[ 06 / OPEN SOURCE & REPOSITORIES ]</span>
          </div>
          <h2 className="heading-xl">
            GitHub Activity & <br />
            <span className="text-gradient">Open Source Craft</span>
          </h2>
          <p className="section-subtitle">
            Exploring public code repositories, open source contributions, and developer workflows.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '2rem'
          }}
          className="github-grid-wrapper"
        >
          <style>{`
            @media (min-width: 900px) {
              .github-grid-wrapper {
                grid-template-columns: 320px 1fr !important;
              }
            }
          `}</style>

          {/* GitHub Profile Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard
              style={{
                padding: '2.25rem',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <img
                  src={profile?.avatar_url || personalInfo.image}
                  alt="GitHub Avatar"
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    border: '2px solid var(--accent)',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)'
                  }}
                />

                <h3
                  className="heading-md"
                  style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.25rem' }}
                >
                  {profile?.name || personalInfo.name}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                  @{profile?.login || personalInfo.githubUsername}
                </p>

                {/* Stats Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <Users size={18} style={{ color: 'var(--accent)', margin: '0 auto 0.4rem' }} />
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                      {profile?.followers ?? '15+'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Followers</div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <BookOpen size={18} style={{ color: 'var(--accent-light)', margin: '0 auto 0.4rem' }} />
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                      {profile?.public_repos ?? '20+'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Repositories</div>
                  </div>
                </div>
              </div>

              <a
                href={profile?.html_url || personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.9rem' }}
              >
                <FaGithub size={18} />
                <span>Visit GitHub Profile</span>
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Recent Repositories Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {repos.length > 0 ? (
              repos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'block', height: '100%' }}
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
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '0.75rem'
                          }}
                        >
                          <h4
                            style={{
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <BookOpen size={16} style={{ color: 'var(--accent)' }} />
                            <span>{repo.name}</span>
                          </h4>

                          <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
                        </div>

                        <p
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.88rem',
                            lineHeight: 1.5,
                            marginBottom: '1.25rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {repo.description || 'Public repository for software development and engineering solutions.'}
                        </p>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          borderTop: '1px solid var(--border)',
                          paddingTop: '1rem',
                          fontSize: '0.8rem'
                        }}
                      >
                        {repo.language ? (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              padding: '0.2rem 0.6rem',
                              background: 'rgba(16, 185, 129, 0.1)',
                              color: 'var(--accent-light)',
                              borderRadius: '6px'
                            }}
                          >
                            {repo.language}
                          </span>
                        ) : (
                          <span style={{ color: 'var(--text-muted)' }}>MERN / JS</span>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)' }}>
                          <Star size={14} />
                          <span>{repo.stargazers_count}</span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </a>
                </motion.div>
              ))
            ) : (
              <p style={{ color: 'var(--text-secondary)' }}>Loading repositories...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubProfile;

