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

  const [currentPage, setCurrentPage] = useState('home');

  // =========================================================
  // Theme State
  // Light mode is the default theme
  // =========================================================
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('gokul_theme');

      // If user has previously selected a theme, use it
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }

      // Default theme = LIGHT
      return 'light';
    } catch (e) {
      // Fallback = LIGHT
      return 'light';
    }
  });

  // =========================================================
  // Apply Theme
  // =========================================================
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('gokul_theme', theme);
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [theme]);

  // =========================================================
  // Toggle Theme
  // =========================================================
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'dark' ? 'light' : 'dark'
    );
  };

  // =========================================================
  // Open Blog Page
  // =========================================================
  const handleOpenBlogs = () => {
    setCurrentPage('blogs');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // =========================================================
  // Back To Home
  // =========================================================
  const handleBackToHome = () => {
    setCurrentPage('home');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app-container">

      {/* =====================================================
          GSAP Intro Preloader
          ===================================================== */}
      {!loadingComplete && (
        <Preloader
          onComplete={() => setLoadingComplete(true)}
        />
      )}

      {/* =====================================================
          Custom Glowing Cursor
          ===================================================== */}
      <CustomCursor />

      {/* =====================================================
          Background Grid Pattern
          ===================================================== */}
      <div
        className="bg-grid-pattern"
        style={{
          opacity: theme === 'light' ? 0.04 : 0.02,
        }}
      />

      {/* =====================================================
          Background Noise
          ===================================================== */}
      <div className="bg-noise" />

      {/* =====================================================
          Blog Page
          ===================================================== */}
      {currentPage === 'blogs' ? (
        <BlogPage
          onBackToHome={handleBackToHome}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      ) : (
        <>
          {/* =================================================
              Main Navigation
              ================================================= */}
          <Navbar
            onOpenBlogs={handleOpenBlogs}
            theme={theme}
            toggleTheme={toggleTheme}
            isBlogPage={false}
            onBackToHome={handleBackToHome}
          />

          {/* =================================================
              Main Portfolio Content
              ================================================= */}
          <main
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Hero */}
            <Hero
              onOpenBlogs={handleOpenBlogs}
            />

            {/* Services */}
            <Services
              onSelectService={(serviceId) =>
                setSelectedService(serviceId)
              }
            />

            {/* Projects */}
            <Projects />

            {/* Experience */}
            <Experience />

            {/* Certificates */}
            <Certificates />

            {/* GitHub */}
            <GithubProfile />

            {/* Contact */}
            <Contact
              preselectedService={selectedService}
            />
          </main>

          {/* =================================================
              Footer
              ================================================= */}
          <Footer
            onOpenBlogs={handleOpenBlogs}
          />
        </>
      )}
    </div>
  );
}

export default App;