import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveCursor = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out'
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power3.out'
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive') ||
        target.closest('.glass-card') ||
        target.closest('.spotlight-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? 'active' : ''}`}
      />
    </>
  );
};

export default CustomCursor;
