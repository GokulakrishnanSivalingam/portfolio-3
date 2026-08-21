import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);

  const [statusText, setStatusText] = useState("INITIALIZING DIGITAL EXPERIENCE");

  useEffect(() => {
    let isMounted = true;
    const counterObj = { val: 0 };

    // Safety fallback: if anything hangs, guarantee completion after 2.2s
    const fallbackTimer = setTimeout(() => {
      if (isMounted && onComplete) {
        onComplete();
      }
    }, 2500);

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(fallbackTimer);
        if (isMounted && onComplete) {
          onComplete();
        }
      }
    });

    // Logo pulsing / draw animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }

    // Counter & progress bar tween
    tl.to(counterObj, {
      val: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        const current = Math.floor(counterObj.val);
        if (counterRef.current) {
          counterRef.current.textContent = `${current < 10 ? '0' + current : current}%`;
        }
        if (barRef.current) {
          barRef.current.style.width = `${current}%`;
        }

        if (current > 75) {
          setStatusText("PREPARING WORKSPACE...");
        } else if (current > 40) {
          setStatusText("LOADING VISUAL ASSETS...");
        }
      }
    });

    // Fade out inner elements
    tl.to([logoRef.current, counterRef.current, barRef.current, textRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.04,
      ease: "power2.in"
    });

    // Split curtain exit animation
    if (curtainLeftRef.current && curtainRightRef.current) {
      tl.to(curtainLeftRef.current, {
        xPercent: -100,
        duration: 0.6,
        ease: "power4.inOut"
      }, "-=0.1");

      tl.to(curtainRightRef.current, {
        xPercent: 100,
        duration: 0.6,
        ease: "power4.inOut"
      }, "<");
    }

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Left Curtain */}
      <div
        ref={curtainLeftRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: '#07080a',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          zIndex: 1
        }}
      />

      {/* Right Curtain */}
      <div
        ref={curtainRightRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: '#07080a',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
          zIndex: 1
        }}
      />

      {/* Central Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        {/* Animated Geometric Monogram Logo */}
        <div
          ref={logoRef}
          style={{
            position: 'relative',
            width: '80px',
            height: '80px',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              transform: 'rotate(45deg)',
              animation: 'spinLoader 6s linear infinite'
            }}
          />
          <style>{`
            @keyframes spinLoader {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#10b981',
              letterSpacing: '1px'
            }}
          >
            GS
          </span>
        </div>

        {/* Counter Number */}
        <div
          ref={counterRef}
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: '#f8fafc',
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            lineHeight: 1
          }}
        >
          00%
        </div>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '220px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '1.25rem',
            position: 'relative'
          }}
        >
          <div
            ref={barRef}
            style={{
              height: '100%',
              width: '0%',
              background: 'linear-gradient(90deg, #10b981, #06b6d4)',
              borderRadius: '999px',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)'
            }}
          />
        </div>

        {/* Dynamic status line */}
        <p
          ref={textRef}
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            color: '#94a3b8',
            textTransform: 'uppercase'
          }}
        >
          {statusText}
        </p>
      </div>
    </div>
  );
};

export default Preloader;
