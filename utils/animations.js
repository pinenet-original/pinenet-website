import { useRef } from "react";
import { useInView } from "framer-motion";

export function FadeIn({ children, transitionDelay, animationSpeed }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(24px)",
          opacity: isInView ? 1 : 0,
          transition: `all ${animationSpeed}s ease-in-out ${transitionDelay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
