import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Header() {
  const headerRef = useRef(null);
  const scrubFillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 30) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }

      if (scrubFillRef.current) {
        const h = document.documentElement;
        const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
        scrubFillRef.current.style.width = pct + '%';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    document.getElementById('nav-links').classList.toggle('open');
  };

  const closeMobileMenu = () => {
    const navLinks = document.getElementById('nav-links');
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  };

  return (
    <>
      <div className="boot-flash" aria-hidden="true"></div>
      <div id="scrub">
          <div id="scrub-fill" ref={scrubFillRef}></div>
      </div>
      <header id="site-header" ref={headerRef}>
          <div className="wrap">
              <nav>
                  <Link to="/#top" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} onClick={closeMobileMenu}>
                    <img src="/assets/logo.svg" alt="Mavros Logo" style={{ height: '32px', width: 'auto', display: 'block' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>MAVROS</span>
                  </Link>
                  <div className="nav-links" id="nav-links">
                      <Link to="/#top" onClick={closeMobileMenu}>Home</Link>
                      <Link to="/#product" onClick={closeMobileMenu}>Product</Link>
                      <Link to="/#contact" onClick={closeMobileMenu}>Contact</Link>
                      <Link to="/about" onClick={closeMobileMenu}>Team</Link>
                      <Link to="/#product" className="btn btn-primary cta-link" onClick={closeMobileMenu}>Try MAVROS.ai</Link>
                  </div>
                  <button className="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu" onClick={toggleMobileMenu}>☰</button>
              </nav>
          </div>
      </header>
    </>
  )
}
