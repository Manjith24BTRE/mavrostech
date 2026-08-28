import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const getStars = (isMobile) => {
  const count = isMobile ? 40 : 120;
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 92}%`,
    size: 0.8 + Math.random() * 1.8,
    delay: Math.random() * 2.4,
    opacity: 0.25 + Math.random() * 0.5,
  }));
};

const constellationLines = [
  { left: '10%', top: '18%', width: '200px', rotate: '12deg', opacity: 0.18 },
  { left: '65%', top: '8%', width: '140px', rotate: '-24deg', opacity: 0.14 },
  { left: '35%', top: '55%', width: '170px', rotate: '18deg', opacity: 0.12 },
  { left: '76%', top: '42%', width: '140px', rotate: '32deg', opacity: 0.1 },
  { left: '20%', top: '72%', width: '220px', rotate: '-18deg', opacity: 0.1 },
];

export default function BackgroundEffects() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stars = useMemo(() => getStars(isMobile), [isMobile]);
  const isInView = useInView(containerRef, { amount: 0.1 });

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <motion.div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent opacity-30"
        animate={isInView ? { x: [0, 10, 0], opacity: [0.2, 0.35, 0.2] } : undefined}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white/10 to-transparent opacity-20"
        animate={isInView ? { opacity: [0.12, 0.22, 0.12] } : undefined}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {!isMobile && constellationLines.map((line) => (
        <motion.div
          key={line.left}
          className="absolute h-[1px] bg-white/10"
          style={{ left: line.left, top: line.top, width: line.width, opacity: line.opacity * 0.6, transform: `rotate(${line.rotate})` }}
          animate={isInView ? { opacity: [line.opacity * 0.4, line.opacity * 0.8, line.opacity * 0.4] } : undefined}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.08)]"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity * 0.7 }}
          animate={isInView ? { opacity: [0.1, 0.8, 0.1] } : undefined}
          transition={{ duration: 3.8, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute left-12 top-24 h-24 w-24 rounded-full bg-white/05 blur-3xl"
        animate={isInView ? { scale: [1, 1.02, 1] } : undefined}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-16 top-24 h-20 w-20 rounded-full bg-white/05 blur-3xl"
        animate={isInView ? { scale: [1, 1.02, 1] } : undefined}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
