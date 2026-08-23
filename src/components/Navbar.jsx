import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Impact', href: '#impact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const activeHash = location.hash || '#top';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 40);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-[72px] lg:h-[88px] transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${scrolled ? 'border-b border-white/10 bg-[rgba(5,5,5,0.85)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl' : 'border-b border-white/10 bg-[rgba(5,5,5,0.6)] backdrop-blur-xl'}`}>
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 lg:px-16">
        <a href="#top" className="flex items-center gap-3 transition hover:-translate-y-px">
          <img src="/assets/logo.svg" alt="Mavros logo" className="h-10 w-10 object-contain" />
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white">MAVROS</span>
        </a>

        <nav className="hidden justify-center gap-10 lg:flex">
          {navItems.map((item) => {
            const active = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold transition ${active ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
                {active && <span className="absolute -bottom-3 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-blue-400/90" />}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-[48px] w-[120px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-[#050505] lg:hidden overflow-y-auto transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-4 border-t border-white/10 px-6 py-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              className="block rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
