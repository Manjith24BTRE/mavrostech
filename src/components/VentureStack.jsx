import { useState, useRef, useEffect } from 'react';

const ventureDetails = {
  veytrix: {
    title: 'Veytrix.Ai',
    subtitle: '01 / FLAGSHIP',
    problem: 'Modern video production is slow and resource-intensive. Creators spend significant time editing footage, enhancing visuals, synchronizing media, and producing engaging content, making high-quality video creation expensive and inefficient.',
    solution: 'Veytrix.Ai is an all-in-one AI Video Editing & Generation Studio that combines intelligent video editing with AI-powered content generation. The platform automates editing workflows, enhances video quality, and enables users to generate professional videos from text, images, and prompts.',
    features: [
      'AI Video Editing',
      'AI Video Generation',
      'Text-to-Video Creation',
      'Image-to-Video Conversion',
      'AI Scene Enhancement',
      'Smart Editing Automation'
    ]
  },
  director: {
    title: 'Veytrix Director',
    subtitle: '02 / PIPELINE',
    problem: 'Creators lack a unified director tool to coordinate camera positions, scripting, and shot composition.',
    solution: 'A system that translates scripts into shot lists, visual boards, and AI pre-visualizations.',
    features: [
      'Script-to-Shot list parser',
      'AI camera framing guides',
      '3D scene pre-vis',
      'Collaborative storyboards'
    ]
  }
};

export default function VentureStack() {
  const stackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null); // 'veytrix' or 'director' or null
  const totalCards = 2;

  const updatePagination = () => {
    if (!stackRef.current) return;
    const cards = stackRef.current.querySelectorAll('.v-card');
    if (cards.length === 0) return;
    
    const stackRect = stackRef.current.getBoundingClientRect();
    const center = stackRect.left + stackRect.width / 2;
    let index = 0;
    let minDiff = Infinity;
    
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const diff = Math.abs(cardCenter - center);
      if (diff < minDiff) {
        minDiff = diff;
        index = i;
      }
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const stack = stackRef.current;
    if (stack) {
      stack.addEventListener('scroll', updatePagination, { passive: true });
      window.addEventListener('resize', updatePagination, { passive: true });
      return () => {
        stack.removeEventListener('scroll', updatePagination);
        window.removeEventListener('resize', updatePagination);
      };
    }
  }, []);

  const handlePrev = () => {
    if (stackRef.current) {
      const cardWidth = stackRef.current.querySelector('.v-card').offsetWidth;
      stackRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (stackRef.current) {
      const cardWidth = stackRef.current.querySelector('.v-card').offsetWidth;
      stackRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const closeModal = () => setActiveModal(null);

  const selectedDetails = activeModal ? ventureDetails[activeModal] : null;

  return (
    <>
      <div className="venture-stack" id="venture-stack" ref={stackRef}>
        {/* Card 1: Veytrix.ai */}
        <div className="v-card v-card-1">
          <div className="v-glow"></div>
          <div className="v-card-header">
            <span className="v-num">01 / FLAGSHIP</span>
            <span className="v-badge live"><span className="dp"></span>Live Product</span>
          </div>
          <div className="v-title">Veytrix.Ai</div>
          <p className="v-desc">An all-in-one AI Video Editing & Generation Studio that automates editing workflows, enhances video quality, and enables users to generate professional videos from text, images, and prompts.</p>
          <div className="v-footer">
            <div className="venture-actions">
              <span className="btn btn-primary" style={{ fontSize: '13px', padding: '10px 20px', borderRadius: '8px', cursor: 'default', opacity: 0.7 }}>Coming Soon</span>
              <button onClick={() => setActiveModal('veytrix')} className="btn btn-secondary">Learn More</button>
            </div>
            <div className="v-tags">
              <span className="v-tag">AI Video Editing</span>
              <span className="v-tag">AI Video Generation</span>
              <span className="v-tag">Text-to-Video</span>
            </div>
          </div>
        </div>

        {/* Card 2: Crafted Experiences */}
        <div className="v-card v-card-2" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="v-glow"></div>
          <div className="v-card-header">
            <span className="v-num">02 / CASE STUDIES</span>
          </div>
          <div className="v-title">Crafted Experiences.</div>
          <p className="v-desc" style={{ flex: 1 }}>
            A demonstration of our design standards, premium UI, smooth interactions, and scalable development practices.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', overflowX: 'hidden', paddingBottom: '16px', marginBottom: '8px', opacity: 0.8 }}>
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=200" alt="Cafe" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=200" alt="Banquet" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }} />
            <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=200" alt="Skincare" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }} />
          </div>

          <div className="v-footer" style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
            <button onClick={() => window.location.href = '/projects'} className="btn btn-primary" style={{ fontSize: '13px', padding: '10px 20px', borderRadius: '8px' }}>
              Explore All Projects &rarr;
            </button>
          </div>
        </div>
      </div>
      
      <p className="venture-scroll-hint">&#8595; Hover to expand ventures</p>
      <div className="venture-controls">
        <button id="venture-prev" aria-label="Previous" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <span className="venture-pagination" id="venture-pag">0{currentIndex + 1} / 0{totalCards}</span>
        <button id="venture-next" aria-label="Next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      {/* Details Popup Modal */}
      {selectedDetails && (
        <div className="v-modal-overlay" onClick={closeModal}>
          <div className="v-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="v-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="v-modal-header">
              <span className="v-modal-subtitle">{selectedDetails.subtitle}</span>
              <h3 className="v-modal-title">{selectedDetails.title}</h3>
            </div>

            <div className="v-modal-body">
              {/* Problem Section */}
              <div className="v-modal-section">
                <div className="v-modal-icon-wrap">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div className="v-modal-section-content">
                  <h4>THE PROBLEM</h4>
                  <p>{selectedDetails.problem}</p>
                </div>
              </div>

              {/* Solution Section */}
              <div className="v-modal-section">
                <div className="v-modal-icon-wrap">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="v-modal-section-content">
                  <h4>THE SOLUTION</h4>
                  <p>{selectedDetails.solution}</p>
                </div>
              </div>

              {/* Features Section */}
              <div className="v-modal-section">
                <div className="v-modal-icon-wrap">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
                <div className="v-modal-section-content">
                  <h4>CORE FEATURES</h4>
                  <div className="v-modal-features-list">
                    {selectedDetails.features.map((feature, idx) => (
                      <span key={idx} className="v-modal-feature-item">
                        <span className="v-modal-feature-dash">—</span>
                        <span className="v-modal-feature-text">{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
