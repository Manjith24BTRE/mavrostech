import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';
import ParticleWave from './ParticleWave';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#050505] text-white pt-[120px] pb-16">
      <BackgroundEffects />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-10"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5/10 px-5 py-3 text-xs uppercase tracking-[0.45em] text-slate-200 shadow-[0_18px_40px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/40 shadow-[0_0_12px_rgba(255,255,255,0.12)]" />
            MAVROS TECH | AI PRODUCTS & WEBSITES
          </div>

          <h1 className="max-w-[560px] text-[4.75rem] font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-[5.5rem] lg:text-[6rem]">
            One Vision,
            <span className="block text-white">
              Endless
            </span>
            Possibilities.
          </h1>

          <p className="max-w-[520px] text-lg leading-8 text-slate-300 sm:text-xl">
            MAVROS is an AI innovation company crafting intelligent applications, websites, agents and automation systems that bring premium digital products to life.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white border border-white/10 shadow-[0_14px_40px_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/15"
              whileHover={{ y: -2 }}
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              whileHover={{ y: -2 }}
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative flex justify-center lg:pl-8"
        >
          <div className="absolute inset-x-0 top-10 h-[420px] bg-gradient-to-b from-white/6 to-transparent opacity-50 blur-3xl" />
          <div className="absolute inset-x-0 top-24 h-[260px] bg-gradient-to-b from-white/8 to-transparent opacity-30 blur-3xl" />

          <motion.div
            className="relative flex h-[440px] w-[440px] items-center justify-center"
            animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0">
              <svg viewBox="0 0 600 600" className="h-full w-full">
                <circle cx="300" cy="300" r="220" stroke="rgba(79,160,255,0.15)" strokeWidth="1" fill="none" />
                <circle cx="300" cy="300" r="180" stroke="rgba(79,160,255,0.12)" strokeWidth="1" fill="none" strokeDasharray="8 18" />
                <circle cx="300" cy="300" r="140" stroke="rgba(85,200,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 22" />
              </svg>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                  className="absolute h-[420px] w-[420px] rounded-full bg-white/10"
                  animate={{ opacity: [0.12, 0.18, 0.12], scale: [1, 1.01, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="absolute left-[12%] top-[18%] h-4 w-4 rounded-full bg-white/60 blur-sm" />
                <div className="absolute right-[14%] top-[24%] h-3 w-3 rounded-full bg-white/50 blur-sm" />
                <div className="absolute left-[20%] bottom-[32%] h-3 w-3 rounded-full bg-white/50 blur-sm" />
                <div className="absolute right-[20%] bottom-[28%] h-3 w-3 rounded-full bg-white/40 blur-sm" />

                <motion.div
                  className="absolute bottom-8 h-24 w-[520px] -translate-x-1/2 rounded-full bg-white/06"
                  style={{ left: '50%' }}
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
              />

              <motion.div
                className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full bg-white/5 shadow-[0_0_70px_rgba(255,255,255,0.06)]"
                animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src="/assets/logo.svg" alt="Mavros logo" className="relative h-[260px] w-[260px] object-contain" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ParticleWave />
    </section>
  );
}
