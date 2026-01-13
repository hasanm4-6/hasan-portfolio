'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
}

export function AnimatedProgressBar({
  label,
  percentage,
}: AnimatedProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = percentage / 40;
    const interval = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setDisplayPercentage(percentage);
        clearInterval(interval);
      } else {
        setDisplayPercentage(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-xs font-semibold text-primary">
          {displayPercentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
          }}
        />
      </div>
    </div>
  );
}
