'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const titles = [
  'Cut Through The Noise',
  'Brand With Purpose',
  'Engage & Convert'
];

export default function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxWidth = 800; // Maximum width before line break

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    const typeWriter = () => {
      const targetText = titles[currentIndex];
      let charIndex = 0;
      
      // Blinking cursor effect
      interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      // Typing effect
      timeout = setTimeout(() => {
        const typeNextChar = () => {
          if (charIndex <= targetText.length) {
            const newText = targetText.substring(0, charIndex);
            setDisplayText(newText);
            
            // Check if we need to move to next line
            if (containerRef.current) {
              const textWidth = containerRef.current.scrollWidth;
              if (textWidth > maxWidth) {
                setCurrentLine(prev => prev + 1);
              }
            }
            
            charIndex++;
            const baseSpeed = 150;
            const speedVariation = Math.random() * 50 - 25; // ±25ms variation
            setTimeout(typeNextChar, baseSpeed + speedVariation);
          } else {
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % titles.length);
              setCurrentLine(0);
            }, 4000); // Increased from 2000ms to 4000ms
          }
        };
        
        typeNextChar();
      }, 500);
    };
    
    typeWriter();
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative min-h-[180px] md:min-h-[240px] lg:min-h-[280px] overflow-hidden">
      <div className="text-6xl md:text-8xl lg:text-[120px] font-black text-black max-w-6xl leading-none font-josefin tracking-normal flex justify-center">
        <div className="text-left">
          {displayText}
          <span className={`inline-block w-3 h-[1em] bg-black align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
}
