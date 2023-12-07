import React, { useState, useEffect, useRef } from "react";

const AnimatedDiv = ({ children, delay = 0 }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : "translateY(24px) translateZ(0)",
    transition: `opacity 0.5s ${delay}s, transform 0.5s ${delay}s`,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, hasAnimated, delay]);

  return (
    <div ref={elementRef} style={animationStyle}>
      {children}
    </div>
  );
};

export default AnimatedDiv;
