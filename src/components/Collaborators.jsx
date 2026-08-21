import React from 'react';

export default function Collaborators() {
  return (
    <section className="section-pad collaborators-section fade-scale">
      <div className="wrap">
        <div className="collaborators-header reveal">
          <div className="collaborators-badge">
            <span className="dot"></span> MAVROS TECH | AI PRODUCTS &amp; WEBSITES
          </div>
          <h2 className="collaborators-title">OUR COLLABORATORS</h2>
          <p className="collaborators-subtitle">
            We collaborate with forward-thinking partners and organizations<br />
            to create impactful solutions.
          </p>
          <div className="collaborators-divider-horizontal">
            <div className="glow-point"></div>
          </div>
        </div>

        <div className="collaborators-card reveal">
          {/* Clip N Copy */}
          <div className="collaborator-brand" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/clip-n-copy-final.png" 
              alt="Clip N Copy" 
              style={{ width: '100%', maxWidth: '350px', maxHeight: '180px', objectFit: 'contain' }}
            />
          </div>

          <div className="collaborators-vertical-divider" style={{ width: '1px', height: '140px', background: 'linear-gradient(180deg, transparent, rgba(162, 194, 255, 0.15), transparent)', boxShadow: '0 0 10px rgba(162, 194, 255, 0.2)', margin: '0 40px' }}></div>

          {/* Minora */}
          <div className="collaborator-brand" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/assets/minora-final.png" 
              alt="Minora" 
              style={{ width: '100%', maxWidth: '350px', maxHeight: '180px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="collaborators-bg-glow"></div>
      <div className="collaborators-bg-lines"></div>
    </section>
  );
}
