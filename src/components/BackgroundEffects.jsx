import { motion } from 'framer-motion';

const stars = Array.from({ length: 120 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 92}%`,
  size: 0.8 + Math.random() * 1.8,
  delay: Math.random() * 2.4,
  opacity: 0.25 + Math.random() * 0.5,
}));

const constellationLines = [
  { left: '10%', top: '18%', width: '200px', rotate: '12deg', opacity: 0.18 },
  { left: '65%', top: '8%', width: '140px', rotate: '-24deg', opacity: 0.14 },
  { left: '35%', top: '55%', width: '170px', rotate: '18deg', opacity: 0.12 },
  { left: '76%', top: '42%', width: '140px', rotate: '32deg', opacity: 0.1 },
  { left: '20%', top: '72%', width: '220px', rotate: '-18deg', opacity: 0.1 },
];

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <motion.div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent opacity-30"
        animate={{ x: [0, 10, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white/10 to-transparent opacity-20"
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {constellationLines.map((line) => (
        <motion.div
          key={line.left}
          className="absolute h-[1px] bg-white/10"
          style={{ left: line.left, top: line.top, width: line.width, opacity: line.opacity * 0.6, transform: `rotate(${line.rotate})` }}
          animate={{ opacity: [line.opacity * 0.4, line.opacity * 0.8, line.opacity * 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.08)]"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity * 0.7 }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: 3.8, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute left-12 top-24 h-24 w-24 rounded-full bg-white/05 blur-3xl"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-16 top-24 h-20 w-20 rounded-full bg-white/05 blur-3xl"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
