import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Zap, ShieldCheck } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';
import ParticleWave from './ParticleWave';

const headingLines = [
  { text: 'One Vision,', style: 'white', delay: 0.1 },
  { text: 'Endless', style: 'highlight', delay: 0.25 },
  { text: 'Possibilities.', style: 'gradient', delay: 0.4 },
];

const lineVariant = {
  hidden: { opacity: 0, y: 44, filter: 'blur(12px)', scale: 0.98 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.23, 1, 0.32, 1],
      delay,
    },
  }),
};

const trustSignals = [
  { icon: Sparkles, label: 'AI-First Innovation' },
  { icon: Layers, label: 'Built to Solve' },
  { icon: Zap, label: 'Real-World Impact' },
  { icon: ShieldCheck, label: 'Designed for Scale' },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.16]);
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [0, -28]);
  const visualScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.94]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.58]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.24]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 140 };
  const headlineX = useSpring(useTransform(pointerX, [-1, 1], [-3, 3]), springConfig);
  const headlineYMouse = useSpring(useTransform(pointerY, [-1, 1], [-3, 3]), springConfig);
  const visualX = useSpring(useTransform(pointerX, [-1, 1], [-8, 8]), springConfig);
  const visualY = useSpring(useTransform(pointerY, [-1, 1], [-8, 8]), springConfig);
  const backgroundX = useSpring(useTransform(pointerX, [-1, 1], [-6, 6]), springConfig);
  const backgroundY = useSpring(useTransform(pointerY, [-1, 1], [-6, 6]), springConfig);

  const handlePointerMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  };

  const resetPointer = () => {
    if (shouldReduceMotion) return;
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#05070B] text-white pt-[120px] pb-16"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={shouldReduceMotion ? undefined : { x: backgroundX, y: backgroundY, opacity: glowOpacity }}
      >
        <BackgroundEffects />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1400px] grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-16">
        <motion.div
          className="space-y-10"
          style={shouldReduceMotion ? undefined : { x: headlineX, y: headlineYMouse }}
        >
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.45em] text-slate-200 shadow-[0_18px_40px_rgba(255,255,255,0.06)] backdrop-blur-xl"
          >
            <span className="hero-badge-dot inline-flex h-2.5 w-2.5 rounded-full bg-white/40 shadow-[0_0_12px_rgba(59,130,246,0.28)]" />
            MAVROS TECH | AI PRODUCTS & WEBSITES
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="group max-w-[680px]"
          >
            <motion.h1
              className="hero-heading max-w-[680px] text-[clamp(2.6rem,8vw,5.8rem)] font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-[clamp(3rem,7vw,6.4rem)] lg:text-[clamp(4.6rem,6vw,6.8rem)] lg:leading-[0.9]"
              style={shouldReduceMotion ? undefined : { opacity: headlineOpacity, y: headlineY }}
              animate={shouldReduceMotion ? undefined : { filter: ['brightness(1)', 'brightness(1.04)', 'brightness(1)'] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.8 }}
            >
              {headingLines.map((line) => (
                <motion.span
                  key={line.text}
                  custom={line.delay}
                  initial={shouldReduceMotion ? undefined : 'hidden'}
                  animate={isInView || shouldReduceMotion ? 'visible' : 'hidden'}
                  variants={lineVariant}
                  className="block overflow-hidden"
                >
                  <span
                    className={`hero-heading-line relative inline-flex overflow-hidden transition duration-500 ease-out ${
                      line.style === 'highlight' ? 'text-white' : ''
                    }`}
                  >
                    {line.style === 'gradient' ? (
                      <span className="relative inline-flex items-center overflow-hidden">
                        <span className="relative z-10 bg-gradient-to-r from-sky-200 via-cyan-100 to-violet-300 bg-clip-text text-transparent">
                          {line.text}
                        </span>
                        <motion.span
                          className="absolute -bottom-1 left-0 h-[2px] w-16 rounded-full bg-gradient-to-r from-sky-400/90 via-cyan-300/75 to-violet-400/90 opacity-0"
                          initial={{ opacity: 0, x: -12 }}
                          animate={shouldReduceMotion ? undefined : { opacity: [0, 1], x: [ -12, 0 ] }}
                          transition={{ duration: 1.1, ease: 'easeOut', delay: 1.2 }}
                        />
                      </span>
                    ) : line.style === 'highlight' ? (
                      <span className="relative inline-flex bg-gradient-to-r from-white via-slate-100 to-sky-200/20 bg-clip-text text-transparent">
                        {line.text}
                      </span>
                    ) : (
                      <span className="text-white">{line.text}</span>
                    )}
                  </span>
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.75 }}
            className="max-w-[560px] text-lg leading-8 text-slate-300 sm:text-xl"
          >
            MAVROS builds intelligent AI applications, product websites, agents and automation systems designed to power real-world business growth.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.82 }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-[0_16px_50px_rgba(8,12,17,0.18)] backdrop-blur-xl"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/70 ring-1 ring-white/10 text-sky-300">
                  <Icon className="h-4 w-4" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.88 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white border border-white/10 shadow-[0_14px_40px_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/15"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative flex justify-center lg:pl-8"
          style={shouldReduceMotion ? undefined : { x: visualX, y: visualY, scale: visualScale, opacity: visualOpacity }}
        >
          <div className="hidden md:block absolute -left-10 top-16 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="hidden lg:block absolute right-0 top-24 h-[460px] w-[460px] rounded-full bg-white/5 blur-3xl opacity-40" />
          <div className="hidden md:block absolute left-12 bottom-8 h-2 w-2 rounded-full bg-blue-400/60 blur-sm" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/8 via-transparent to-violet-500/10"
            animate={shouldReduceMotion ? undefined : { opacity: [0.25, 0.12, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="relative flex h-[320px] w-full max-w-[420px] items-center justify-center sm:h-[360px] md:h-[420px]"
            animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 600 600" className="h-full w-full">
                <circle cx="300" cy="300" r="220" stroke="rgba(59,130,246,0.18)" strokeWidth="1" fill="none" />
                <circle cx="300" cy="300" r="180" stroke="rgba(59,130,246,0.10)" strokeWidth="1" fill="none" strokeDasharray="6 20" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute inset-0"
              animate={shouldReduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 600 600" className="h-full w-full">
                <circle cx="300" cy="300" r="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="4 24" />
                <circle cx="300" cy="300" r="100" stroke="rgba(59,130,246,0.08)" strokeWidth="0.8" fill="none" />
              </svg>
            </motion.div>

            <div className="absolute left-[15%] top-[18%] h-3 w-3 rounded-full bg-blue-400/80 blur-sm" />
            <div className="absolute right-[18%] top-[22%] h-2.5 w-2.5 rounded-full bg-white/60 blur-sm" />
            <div className="absolute left-[18%] bottom-[28%] h-2.5 w-2.5 rounded-full bg-white/40 blur-sm" />
            <div className="absolute right-[24%] bottom-[30%] h-2.5 w-2.5 rounded-full bg-blue-300/70 blur-sm" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <motion.div
                className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-xl sm:h-[280px] sm:w-[280px]"
                animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src="/assets/logo.svg" alt="Mavros logo" className="relative h-[220px] w-[220px] object-contain sm:h-[240px] sm:w-[240px]" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ParticleWave />
    </section>
  );
}
