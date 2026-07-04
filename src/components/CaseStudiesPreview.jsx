import { useNavigate } from 'react-router-dom';

const previewProjects = [
  {
    title: 'Café & Restaurant',
    desc: 'Modern web experience with smooth booking flows.',
    category: 'Hospitality',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Startup SaaS',
    desc: 'High-conversion landing page with dashboard preview.',
    category: 'Technology',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Dental Clinic',
    desc: 'Clean, trustworthy interface for healthcare professionals.',
    category: 'Healthcare',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600'
  }
];

export default function CaseStudiesPreview() {
  const navigate = useNavigate();

  return (
    <section className="section-pad" id="case-studies" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="wrap">
        <div className="section-label">02 / CASE STUDIES</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '60px' }}>
          <div>
            <h2 className="reveal" style={{ fontSize: 'clamp(26px, 3.4vw, 42px)', maxWidth: '700px', marginBottom: '16px' }}>
              Crafted Experiences.
            </h2>
            <p className="lead" style={{ maxWidth: '600px', margin: 0 }}>
              Every website below is a demonstration of our design standards, premium UI, smooth interactions, and scalable development practices. Browse our concepts and discover what's possible for your brand.
            </p>
          </div>
          <button onClick={() => navigate('/projects')} className="btn btn-primary" style={{ padding: '14px 28px' }}>
            Explore All Projects &rarr;
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {previewProjects.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate('/projects')}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(34, 211, 161, 0.3)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '12px', 
                  fontWeight: '600', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase', 
                  backgroundColor: 'rgba(34, 211, 161, 0.1)', 
                  color: '#22d3a1',
                  marginBottom: '16px' 
                }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '24px', margin: '0 0 12px 0', color: '#fff' }}>{project.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
