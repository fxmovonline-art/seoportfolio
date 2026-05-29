import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  const mouseCoords = useRef({ x: 0, y: 0 });
  const cursorCoords = useRef({ x: 0, y: 0 });
  const followerCoords = useRef({ x: 0, y: 0 });
  
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor tracking and overrides on desktop viewports (>= 768px)
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Setup hover listeners
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="button"], select, textarea'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    addHoverListeners();

    // Hide default cursor globally
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    let animationFrameId: number;
    
    // Performance optimized Animation Loop
    const updatePosition = () => {
      const cursorSpeed = 0.35; // Responsive cursor tracking speed
      cursorCoords.current.x += (mouseCoords.current.x - cursorCoords.current.x) * cursorSpeed;
      cursorCoords.current.y += (mouseCoords.current.y - cursorCoords.current.y) * cursorSpeed;

      const followerSpeed = 0.15; // Smooth trailing effect
      followerCoords.current.x += (mouseCoords.current.x - followerCoords.current.x) * followerSpeed;
      followerCoords.current.y += (mouseCoords.current.y - followerCoords.current.y) * followerSpeed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorCoords.current.x}px, ${cursorCoords.current.y}px, 0)`;
      }
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerCoords.current.x - 16}px, ${followerCoords.current.y - 16}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
      document.body.style.cursor = 'auto';
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Hardware-Style Cursor Arrow */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform select-none hidden md:block"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="miter"
          className={`transform origin-top-left transition-transform duration-300 ${
            isHovered ? 'scale-110 rotate-[15deg] fill-indigo-400 stroke-slate-900' : ''
          }`}
          style={{
            marginTop: '-2px',
            marginLeft: '-2px',
          }}
        >
          {/* SVG path to render the exact retro-style arrow cursor */}
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        </svg>
      </div>

      {/* Trailing follower circle for premium web feel */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9998] will-change-transform transition-all duration-300 ease-out hidden md:block ${
          isHovered
            ? 'scale-150 bg-indigo-500/10 border-indigo-500/50'
            : 'scale-100 bg-transparent border-slate-400/30'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};

export default CustomCursor;
