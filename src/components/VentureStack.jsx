export default function VentureStack() {
  return (
    <>
      <div className="venture-stack" id="venture-stack" style={{ overflowX: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <div className="v-card v-card-1" style={{ minWidth: '100%', maxWidth: '100%' }}>
          <div className="v-glow"></div>
          <div className="v-card-header">
            <span className="v-num">01 / FLAGSHIP</span>
            <span className="v-badge live"><span className="dp"></span>Live Product</span>
          </div>
          <div className="v-title">Veytrix.ai</div>
          <p className="v-desc">An AI-powered video intelligence platform that analyzes raw footage the way a
            professional editor would &mdash; understanding pacing, scene rhythm, and story structure to
            deliver finished cuts in seconds.</p>
          <div className="v-footer">
            <span className="btn btn-primary"
               style={{ fontSize: '13px', padding: '10px 20px', borderRadius: '8px', cursor: 'default' }}>Coming Soon</span>
            <div className="v-tags">
              <span className="v-tag">Computer Vision</span>
              <span className="v-tag">Auto-Cut AI</span>
              <span className="v-tag">Scene Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
