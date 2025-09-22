import React, { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1, rootMargin = '0px') => {
  // Safely initialize state with error handling
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

// Hook for multiple elements with staggered animations
export const useScrollRevealStagger = (itemCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = React.useState(new Set());
  const refs = React.useRef([]);

  React.useEffect(() => {
    const observers = [];

    refs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, index]));
              }, index * delay);
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.1 }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [itemCount, delay]);

  const setRef = (index) => (element) => {
    refs.current[index] = element;
  };

  const isVisible = (index) => visibleItems.has(index);

  return [setRef, isVisible];
};