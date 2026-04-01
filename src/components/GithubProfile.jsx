import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Users, BookOpen, Star } from 'lucide-react';
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
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`)
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

  if (loading || !profile) {
    return null; // Silent fail if no github profile or loading
  }

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Open Source</span>
          <h2 className="heading-lg">GitHub Profile</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem' }}>
          <style>{`
            @media (min-width: 768px) {
              .github-grid { grid-template-columns: 300px 1fr !important; }
            }
          `}</style>
          
          <div className="github-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '2rem', textAlign: 'center', height: 'fit-content' }}
            >
              <img 
                src={profile.avatar_url} 
                alt="GitHub Avatar" 
                style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '1.5rem', border: '2px solid var(--accent)' }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>{profile.name || profile.login}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>@{profile.login}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                  <Users size={20} style={{ color: 'var(--accent)', margin: '0 auto 0.5rem' }} />
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{profile.followers}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Followers</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                  <BookOpen size={20} style={{ color: 'var(--accent)', margin: '0 auto 0.5rem' }} />
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{profile.public_repos}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Repos</p>
                </div>
              </div>
              
              <a href={profile.html_url} target="_blank" rel="noreferrer" className="btn-outline" style={{ width: '100%' }}>
                <FaGithub size={18} /> View on GitHub
              </a>
            </motion.div>

            {/* Recent Repositories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Recent Repositories</h3>
              {repos.map((repo, i) => (
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  key={repo.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel"
                  style={{ 
                    padding: '1.5rem', 
                    display: 'block',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                 >
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                     <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <BookOpen size={18} style={{ color: 'var(--accent)' }}/> {repo.name}
                     </h4>
                     <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                       <Star size={14} /> {repo.stargazers_count}
                     </span>
                   </div>
                   <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                     {repo.description || 'No description provided.'}
                   </p>
                   {repo.language && (
                     <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'var(--accent-glow)', color: 'var(--accent)', borderRadius: '9999px' }}>
                       {repo.language}
                     </span>
                   )}
                 </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubProfile;
