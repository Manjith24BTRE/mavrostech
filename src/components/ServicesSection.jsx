import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const serviceCards = [
  {
    title: 'AI & Autonomous Agents',
    badge: 'Most Requested',
    description: 'Design and deploy intelligent systems that combine RAG, autonomous agents, and fine-tuned LLM workflows.',
    highlights: ['Custom RAG', 'AI Agents', 'LLM Fine-tuning'],
    icon: 'brain',
  },
  {
    title: 'Custom SaaS & Software',
    badge: 'Production Ready',
    description: 'Build enterprise web apps, SaaS platforms, CRM systems and ERP solutions tailored for scale.',
    highlights: ['Enterprise Web Apps', 'SaaS Platforms', 'CRM & ERP'],
    icon: 'code',
  },
  {
    title: 'Mobile App Development',
    badge: 'Cross Platform',
    description: 'Launch native and cross-platform mobile experiences with Flutter, React Native, Android and iOS.',
    highlights: ['Flutter', 'React Native', 'Android & iOS'],
    icon: 'mobile',
  },
  {
    title: 'Enterprise Automation',
    badge: 'High ROI',
    description: 'Automate workflows, streamline business processes, and scale operational efficiency with AI.',
    highlights: ['Workflow Automation', 'AI Process Automation', 'Business Automation'],
    icon: 'automation',
  },
  {
    title: 'Cloud & DevOps Solutions',
    badge: 'Zero Downtime',
    description: 'Secure cloud infrastructure, containerized platforms and CI/CD pipelines for reliable delivery.',
    highlights: ['AWS / Azure / GCP', 'Kubernetes & Docker', 'CI/CD Pipelines'],
    icon: 'cloud',
  },
  {
    title: 'UI/UX & Product Design',
    badge: 'Design System',
    description: 'Craft premium interfaces, design systems and product experiences grounded in research and prototyping.',
    highlights: ['Figma & Design Systems', 'User Research', 'Prototyping'],
    icon: 'design',
  },
];

const renderIcon = (type) => {
  switch (type) {
    case 'brain':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 10c-4 0-6 4-6 8s2 8 6 8h16c4 0 6-4 6-8s-2-8-6-8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 18v8M24 10v12M32 18v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 16 12 24l6 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 16 36 24l-6 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 12h4M22 36h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'mobile':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="8" width="16" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M24 34v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'automation':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 18h20M14 30h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 22l-4-4 4-4M30 22l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 26l-4 4 4 4M30 26l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28H12a8 8 0 1 1 0-16 9 9 0 0 1 17.7 1.9A7 7 0 1 1 40 18h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'design':
      return (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8 10 40h28L24 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M24 16v16M20 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const servicesGridRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 900);
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useGSAP(() => {
    if (!isDesktop) return; // Keep mobile normal
    
    // Staggered entrance animation for desktop
    const cards = gsap.utils.toArray(cardRefs.current);
    gsap.fromTo(cards, 
      { opacity: 0, y: 40 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesGridRef.current,
          start: "top 85%",
          once: true
        }
      }
    );
  }, { scope: sectionRef, dependencies: [isDesktop] });

  useEffect(() => {
    if (!isDesktop || !servicesGridRef.current) return;

    let rafId;
    const grid = servicesGridRef.current;
    
    const handleMouseMove = (e) => {
      // Spotlight logic
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      grid.style.setProperty('--mouse-x', `${x}px`);
      grid.style.setProperty('--mouse-y', `${y}px`);

      // 3D Tilt Logic
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        
        // Calculate distance from center of card
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        // Is mouse over this card?
        if (
          e.clientX >= cardRect.left && e.clientX <= cardRect.right &&
          e.clientY >= cardRect.top && e.clientY <= cardRect.bottom
        ) {
          const deltaX = (e.clientX - cardCenterX) / (cardRect.width / 2);
          const deltaY = (e.clientY - cardCenterY) / (cardRect.height / 2);
          
          // Max rotation 3 degrees
          const rotateX = deltaY * -3; 
          const rotateY = deltaX * 3;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-4px)`;
        } else {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)`;
        }
      });
    };

    const handleMouseLeave = () => {
      cardRefs.current.forEach(card => {
        if (card) {
          card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)`;
        }
      });
    };

    const throttledMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };

    grid.addEventListener('mousemove', throttledMouseMove);
    grid.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      grid.removeEventListener('mousemove', throttledMouseMove);
      grid.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDesktop]);

  const handleServicesScroll = () => {
    if (!servicesGridRef.current) return;
    const scrollLeft = servicesGridRef.current.scrollLeft;
    const cardWidth = servicesGridRef.current.children[0].offsetWidth;
    const gap = 16;
    const itemWidth = cardWidth + gap;
    const newActiveIndex = Math.floor((scrollLeft + itemWidth / 2) / itemWidth);
    if (newActiveIndex !== activeService && newActiveIndex >= 0 && newActiveIndex < serviceCards.length) {
      setActiveService(newActiveIndex);
    }
  };

  return (
    <section className="section-pad services-section" id="services" ref={sectionRef}>
      <div className="wrap relative">
        {isDesktop && <div className="services-ambient-bg"></div>}
        
        <div className="services-header reveal">
          <div className="section-label">SERVICES</div>
          <h2 className="section-title">End-to-End AI Engineering & Custom Software</h2>
          <p className="section-subtitle">We deliver complete digital transformation—from AI strategy and architecture to production deployment and long-term scaling.</p>
        </div>

        <div 
          className="services-grid" 
          ref={servicesGridRef}
          onScroll={handleServicesScroll}
        >
          {serviceCards.map((service, idx) => (
            <div 
              className="service-card reveal" 
              key={service.title}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <div className="service-card-top">
                <div className="service-icon">{renderIcon(service.icon)}</div>
                <span className="service-badge">{service.badge}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-copy">{service.description}</p>
              <div className="service-divider" />
              <ul className="service-highlights">
                {service.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span className="highlight-check">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="service-card-cta">Start Project <span className="arrow">→</span></Link>
            </div>
          ))}
        </div>

        <div className="services-pagination">
          {serviceCards.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${activeService === index ? 'active' : ''}`}
              onClick={() => {
                if (servicesGridRef.current) {
                  const card = servicesGridRef.current.children[index];
                  servicesGridRef.current.scrollTo({
                    left: card.offsetLeft - 16,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
