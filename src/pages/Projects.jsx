import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const allProjects = [
  {
    id: 1,
    title: 'Café & Restaurant',
    category: 'Hospitality',
    description: 'A modern, elegant web experience with smooth booking flows and menu showcase.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Framer Motion', 'Vite'],
    liveDemoUrl: "https://cafe-vibe-gallery-2.onrender.com",
    status: 'Live'
  },
  {
    id: 2,
    title: 'Banquet Hall',
    category: 'Hospitality',
    description: 'A luxurious web experience for booking grand banquet halls and event spaces.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Tailwind CSS', 'Figma'],
    liveDemoUrl: "https://banquet-hall-2.onrender.com",
    status: 'Live'
  },
  {
    id: 3,
    title: 'Skin Care',
    category: 'Beauty & Wellness',
    description: 'A premium, relaxing web experience for skincare products and treatment booking.',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    technologies: ['Next.js', 'React', 'CSS Modules'],
    liveDemoUrl: "https://lumire-clinic-2.onrender.com",
    status: 'Live'
  },
  {
    id: 4,
    title: 'Gym & Fitness',
    category: 'Health & Wellness',
    description: 'High-energy layout focusing on member signups, class schedules, and trainer profiles.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'GSAP', 'Node.js'],
    liveDemoUrl: "https://apex-performance-2.onrender.com",
    status: 'Live'
  },
  {
    id: 5,
    title: 'Hotel & Resort',
    category: 'Travel',
    description: 'Luxurious design with immersive imagery, room previews, and seamless booking.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Framer Motion'],
    liveDemoUrl: "https://azure-haven-1-vja5.onrender.com",
    status: 'Live'
  }
];

export default function Projects() {
  return (
    <>
      <SEO
        title="Our Projects | Mavros Tech"
        description="Browse our collection of premium demo websites designed to demonstrate the quality, creativity, and performance you can expect when partnering with Mavros."
        keywords="Web Design Projects, Demo Websites, Mavros Tech Portfolio, Premium Websites, AI Projects"
        url="https://www.mavrostech.in/projects"
      />
      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
        <section className="wrap" style={{ marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">PROJECTS SHOWCASE</div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: '24px', lineHeight: 1.1 }}>
              Our Demo Projects
            </h1>
            <p className="lead" style={{ maxWidth: '700px' }}>
              Browse our collection of premium demo websites designed to demonstrate the quality, creativity, and performance you can expect when partnering with Mavros. Each project showcases our expertise in UI/UX, frontend engineering, responsive development, and modern web technologies.
            </p>
          </motion.div>
        </section>

        <section className="wrap">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {allProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 211, 161, 0.3)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {project.status === 'Coming Soon' && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(4px)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      Coming Soon
                    </div>
                  )}
                </div>
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    alignSelf: 'flex-start',
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

                  <h3 style={{ fontSize: '28px', margin: '0 0 12px 0', color: '#fff' }}>{project.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', flex: 1 }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                    {project.technologies.map(tech => (
                      <span key={tech} style={{
                        fontSize: '13px',
                        color: '#888',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={project.status === 'Coming Soon' ? "btn" : "btn btn-primary"}
                    style={{
                      textAlign: 'center',
                      padding: '14px',
                      opacity: project.status === 'Coming Soon' ? 0.5 : 1,
                      pointerEvents: project.status === 'Coming Soon' ? 'none' : 'auto'
                    }}
                    onClick={e => {
                      if (project.status === 'Coming Soon') {
                        e.preventDefault();
                      } else if (project.liveDemoUrl && project.liveDemoUrl !== '#') {
                        e.preventDefault();
                        window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    {project.status === 'Coming Soon' ? 'In Development' : 'Live Demo'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
