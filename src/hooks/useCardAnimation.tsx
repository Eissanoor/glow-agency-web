
import { useEffect, useState } from 'react';

export const useCardAnimation = () => {
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardElement = entry.target as HTMLElement;
            const cardId = parseInt(cardElement.dataset.cardId || '0');
            setAnimatedCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const getAnimationClass = (index: number) => {
    if (!animatedCards.has(index + 1)) return '';
    return index % 2 === 0 ? 'slide-left' : 'slide-right';
  };

  return { getAnimationClass };
};
