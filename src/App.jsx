import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import GithubProfile from './components/GithubProfile';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [selectedService, setSelectedService] = useState('web-design');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'blogs'

  // Theme state: default to 'dark' or stored preference
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('gokul_theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('gokul_theme', theme);
    } catch (e) { }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenBlogs = () => {
    setCurrentPage('blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* GSAP Intro Preloader (unmounts completely when loaded) */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Background Grid Pattern & Noise */}
      <div className="bg-grid-pattern" style={{ opacity: theme === 'light' ? 0.04 : 0.02 }} />
      <div className="bg-noise" />

      {/* Conditional rendering: Dedicated Separate Blog Page vs Portfolio Home */}
      {currentPage === 'blogs' ? (
        <BlogPage
          onBackToHome={handleBackToHome}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      ) : (
        <>
          {/* Main Navigation with Theme Switcher */}
          <Navbar
            onOpenBlogs={handleOpenBlogs}
            theme={theme}
            toggleTheme={toggleTheme}
            isBlogPage={false}
            onBackToHome={handleBackToHome}
          />

          <main style={{ position: 'relative', zIndex: 2 }}>
            <Hero onOpenBlogs={handleOpenBlogs} />
            <Services onSelectService={(serviceId) => setSelectedService(serviceId)} />
            <Projects />
            <Experience />
            <Certificates />
            <GithubProfile />
            <Contact preselectedService={selectedService} />
          </main>

          <Footer onOpenBlogs={handleOpenBlogs} />
        </>
      )}
    </div>
  );
}

export default App;


