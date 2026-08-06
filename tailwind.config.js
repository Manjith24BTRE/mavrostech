export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: '#070B18',
        surface2: '#0B1224',
        primary: '#2563EB',
        glow: '#3B82F6',
        accent: '#60A5FA',
      },
      boxShadow: {
        glow: '0 30px 120px rgba(59, 130, 246, 0.22)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 28%), radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 18%), radial-gradient(circle at 80% 10%, rgba(96,165,250,0.08), transparent 12%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        orbit: 'orbit 22s linear infinite',
        wave: 'wave 8s linear infinite',
        pulse: 'pulse 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
