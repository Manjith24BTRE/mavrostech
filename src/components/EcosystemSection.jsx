import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ecosystemNodes = [
  {
    id: 'ai',
    label: 'AI',
    x: 320,
    y: 78,
    width: 86,
    height: 52,
    lineStart: { x: 320, y: 245 },
    lineEnd: { x: 320, y: 104 },
    boxDot: { x: 320, y: 104 },
    innerDot: { x: 320, y: 245 },
    accentDot: { x: 363, y: 52 },
  },
  {
    id: 'experiences',
    label: 'EXPERIENCES',
    x: 100,
    y: 232,
    width: 172,
    height: 52,
    lineStart: { x: 267, y: 267 },
    lineEnd: { x: 186, y: 232 },
    boxDot: { x: 186, y: 232 },
    innerDot: { x: 267, y: 267 },
    accentDot: { x: 186, y: 206 },
  },
  {
    id: 'products',
    label: 'PRODUCTS',
    x: 540,
    y: 232,
    width: 156,
    height: 52,
    lineStart: { x: 373, y: 267 },
    lineEnd: { x: 462, y: 232 },
    boxDot: { x: 462, y: 232 },
    innerDot: { x: 373, y: 267 },
    accentDot: { x: 618, y: 232 },
  },
  {
    id: 'research',
    label: 'RESEARCH',
    x: 105,
    y: 476,
    width: 156,
    height: 52,
    lineStart: { x: 267, y: 373 },
    lineEnd: { x: 183, y: 476 },
    boxDot: { x: 183, y: 476 },
    innerDot: { x: 267, y: 373 },
    accentDot: { x: 183, y: 450 },
  },
  {
    id: 'software',
    label: 'SOFTWARE',
    x: 535,
    y: 476,
    width: 156,
    height: 52,
    lineStart: { x: 373, y: 373 },
    lineEnd: { x: 457, y: 476 },
    boxDot: { x: 457, y: 476 },
    innerDot: { x: 373, y: 373 },
    accentDot: { x: 613, y: 476 },
  },
  {
    id: 'design',
    label: 'DESIGN',
    x: 320,
    y: 564,
    width: 124,
    height: 52,
    lineStart: { x: 320, y: 395 },
    lineEnd: { x: 320, y: 538 },
    boxDot: { x: 320, y: 538 },
    innerDot: { x: 320, y: 395 },
    accentDot: { x: 382, y: 538 },
  },
];

const ambientParticles = [
  { cx: 390, cy: 155, r: 2.5 },
  { cx: 215, cy: 195, r: 3 },
  { cx: 465, cy: 175, r: 2 },
  { cx: 175, cy: 370, r: 3 },
  { cx: 480, cy: 385, r: 2.5 },
  { cx: 220, cy: 435, r: 2 },
  { cx: 430, cy: 450, r: 3 },
  { cx: 385, cy: 505, r: 2 },
  { cx: 250, cy: 495, r: 2.5 },
];

export default function EcosystemSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section
      id="idea-to-impact"
      className="relative overflow-hidden bg-[#040507] text-white py-20 lg:py-32 scroll-mt-[90px]"
    >
      {/* Deep dark ambient radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-blue-600/[0.08] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col space-y-12 sm:space-y-16">
          
          {/* Section Heading matching the reference screenshot */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-left"
          >
            <h2 className="text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold tracking-[-0.03em] leading-[0.95] uppercase select-none font-sans">
              <span className="block text-white drop-shadow-[0_2px_24px_rgba(255,255,255,0.12)]">
                FROM IDEA
              </span>
              <span className="block text-[#6E7582] sm:text-[#7A8290] mt-1.5">
                TO IMPACT.
              </span>
            </h2>
          </motion.div>

          {/* Central Ecosystem Diagram Container */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative flex w-full items-center justify-center py-4 sm:py-8"
          >
            <div className="relative w-full max-w-[520px] sm:max-w-[600px] lg:max-w-[640px]">
              <svg
                viewBox="0 0 640 640"
                className="h-auto w-full select-none overflow-visible"
                aria-label="MAVROS Innovation Ecosystem Circular Diagram"
              >
                <defs>
                  {/* Subtle Center Radial Glow Gradient */}
                  <radialGradient id="centerCoreRadialGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
                    <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#040507" stopOpacity="0" />
                  </radialGradient>

                  {/* Cyan Glow Filter for Connection Dots & Rings */}
                  <filter id="cyanGlowFilter" x="-70%" y="-70%" width="240%" height="240%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Intense Glow Filter for Central Ring */}
                  <filter id="coreRingGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur1" />
                      <feMergeNode in="blur2" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Soft ambient center glow circle */}
                <circle cx="320" cy="320" r="180" fill="url(#centerCoreRadialGlow)" className="ecosystem-center-glow" />

                {/* Concentric Orbit Rings matching reference */}
                <circle
                  cx="320"
                  cy="320"
                  r="248"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1.2"
                />
                <circle
                  cx="320"
                  cy="320"
                  r="190"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.16)"
                  strokeWidth="1"
                  strokeDasharray="4 14"
                />
                <circle
                  cx="320"
                  cy="320"
                  r="140"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.11)"
                  strokeWidth="1.2"
                />
                <circle
                  cx="320"
                  cy="320"
                  r="95"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.24)"
                  strokeWidth="1"
                />

                {/* Ambient floating glowing blue particles along orbits */}
                {ambientParticles.map((particle, idx) => (
                  <circle
                    key={idx}
                    cx={particle.cx}
                    cy={particle.cy}
                    r={particle.r}
                    fill="#38bdf8"
                    opacity="0.8"
                    filter="url(#cyanGlowFilter)"
                    className="ecosystem-dot-pulse"
                    style={{ animationDelay: `${idx * 0.4}s` }}
                  />
                ))}

                {/* Radial Dashed Connector Lines */}
                {ecosystemNodes.map((node) => (
                  <g key={`lines-${node.id}`}>
                    <line
                      x1={node.lineStart.x}
                      y1={node.lineStart.y}
                      x2={node.lineEnd.x}
                      y2={node.lineEnd.y}
                      stroke="rgba(255, 255, 255, 0.22)"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                    />

                    {/* Glowing Connection Dot on Outer Box */}
                    <circle
                      cx={node.boxDot.x}
                      cy={node.boxDot.y}
                      r="4"
                      fill="#38bdf8"
                      filter="url(#cyanGlowFilter)"
                      className="ecosystem-dot-pulse"
                    />

                    {/* Glowing Connection Dot on Inner Core Circle */}
                    <circle
                      cx={node.innerDot.x}
                      cy={node.innerDot.y}
                      r="3.5"
                      fill="#38bdf8"
                      filter="url(#cyanGlowFilter)"
                      className="ecosystem-dot-pulse"
                    />

                    {/* Corner accent dot if present */}
                    {node.accentDot && (
                      <circle
                        cx={node.accentDot.x}
                        cy={node.accentDot.y}
                        r="3.5"
                        fill="#38bdf8"
                        filter="url(#cyanGlowFilter)"
                        className="ecosystem-dot-pulse"
                      />
                    )}
                  </g>
                ))}

                {/* EXACT CENTRAL CIRCULAR CORE WITH MAVROS LOGO */}
                <g className="cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                  {/* Subtle outer glow ring */}
                  <circle
                    cx="320"
                    cy="320"
                    r="75"
                    fill="#04060A"
                    stroke="#38bdf8"
                    strokeWidth="2.2"
                    filter="url(#coreRingGlow)"
                  />
                  {/* Inner subtle outline */}
                  <circle
                    cx="320"
                    cy="320"
                    r="71"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1"
                  />

                  {/* Centered Stylized MAVROS Logo Image */}
                  <image
                    href="/assets/logo.svg"
                    x="274"
                    y="270"
                    width="92"
                    height="56"
                    preserveAspectRatio="xMidYMid meet"
                    className="select-none pointer-events-none brightness-150 contrast-125"
                  />

                  {/* M A V R O S Text below logo mark */}
                  <text
                    x="320"
                    y="346"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="700"
                    letterSpacing="0.45em"
                    fontFamily="Inter, system-ui, -apple-system, sans-serif"
                    className="select-none"
                  >
                    M A V R O S
                  </text>
                </g>

                {/* 6 Outer Category Nodes */}
                {ecosystemNodes.map((node) => {
                  const isHovered = activeNode === node.id;
                  const rectX = node.x - node.width / 2;
                  const rectY = node.y - node.height / 2;

                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      {/* Node Box */}
                      <rect
                        x={rectX}
                        y={rectY}
                        width={node.width}
                        height={node.height}
                        rx="5"
                        fill={isHovered ? '#0E131E' : '#080A0F'}
                        stroke={isHovered ? 'rgba(56, 189, 248, 0.7)' : 'rgba(255, 255, 255, 0.18)'}
                        strokeWidth="1.2"
                        className="transition-colors duration-300"
                        filter="drop-shadow(0 8px 20px rgba(0, 0, 0, 0.75))"
                      />

                      {/* Node Text Label */}
                      <text
                        x={node.x}
                        y={node.y + 1}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={isHovered ? '#FFFFFF' : '#D1D5DB'}
                        fontSize="13"
                        fontWeight="600"
                        letterSpacing="0.28em"
                        fontFamily="Inter, system-ui, -apple-system, sans-serif"
                        className="select-none transition-colors duration-300"
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

