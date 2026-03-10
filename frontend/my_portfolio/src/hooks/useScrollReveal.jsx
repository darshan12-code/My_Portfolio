// src/hooks/useScrollReveal.jsx
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({
    threshold: options.threshold || 0.15,
    triggerOnce: options.once !== false,
  });

  return { ref, inView };
}