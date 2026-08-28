import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const getParticles = (isMobile) => {
  const count = isMobile ? 35 : 140;
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index / (count - 1)) * 100}%`,
    width: 2 + Math.random() * 2,
    height: 6 + Math.random() * 18,
    delay: Math.random() * 2.5,
    opacity: 0.18 + Math.random() * 0.3,
  }));
};

export default function ParticleWave() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particles = useMemo(() => getParticles(isMobile), [isMobile]);
  const isInView = useInView(containerRef, { amount: 0.1 });

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[170px] overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.88))]" />
      <div className="absolute inset-x-0 bottom-0 h-[180px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute bottom-0 rounded-full bg-white/20 shadow-[0_0_16px_rgba(255,255,255,0.18)]"
          style={{ left: particle.left, width: particle.width, height: particle.height, opacity: particle.opacity, transform: 'translateX(-50%)' }}
          animate={isInView ? { y: [0, -18, 0], opacity: [particle.opacity, 0.85, particle.opacity] } : undefined}
          transition={{ duration: 2.8 + Math.random() * 1.4, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
