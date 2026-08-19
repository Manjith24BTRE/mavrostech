import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import EcosystemSection from '../components/EcosystemSection';
import Process from '../components/Process';
import VentureStack from '../components/VentureStack';
import ImpactGrid from '../components/ImpactGrid';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CaseStudiesPreview from '../components/CaseStudiesPreview';

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

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const revealElements = document.querySelectorAll('.reveal, .fade-scale');
            revealElements.forEach((entry) => {
                const rect = entry.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    entry.classList.add('in');
                }
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <>
            <SEO
                title="Mavros Tech | AI Development & Premium Website Development"
                description="Mavros Tech builds AI applications, premium websites, SaaS platforms, UI/UX experiences and custom software for startups and businesses."
                keywords="Mavros, Mavros Tech, Mavros Tech IN, Mavros.in, Mavros AI, AI Development, Website Development, SaaS Development, React Development, UI UX Design, Software Company"
                url="https://www.mavrostech.in"
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Mavros Tech",
                        "alternateName": ["Mavros", "Mavros Tech IN", "Mavros.in", "Mavros AI"],
                        "url": "https://www.mavrostech.in",
                        "logo": "https://www.mavrostech.in/assets/logo.svg",
                        "email": "official@www.mavrostech.in",
                        "telephone": "+91-6361492452",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bangalore",
                            "addressRegion": "Karnataka",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/mavrostech",
                            "https://www.instagram.com/mavrostech"
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Mavros Tech",
                        "alternateName": ["Mavros", "Mavros Tech IN", "Mavros.in", "Mavros AI"],
                        "url": "https://www.mavrostech.in"
                    }
                ]}
            />

            <main>
                <Hero />

                <EcosystemSection />

                <section className="section-pad services-section fade-scale" id="services">
                    <div className="wrap">
                        <div className="services-header reveal">
                            <div className="section-label">SERVICES</div>
                            <h2 className="section-title">End-to-End AI Engineering & Custom Software</h2>
                            <p className="section-subtitle">We deliver complete digital transformation—from AI strategy and architecture to production deployment and long-term scaling.</p>
                        </div>

                        <div className="services-grid">
                            {serviceCards.map((service) => (
                                <div className="service-card reveal" key={service.title}>
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
                                    <Link to="/#contact" className="service-card-cta">Start Project →</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Process />

                <section className="section-pad scroll-mt-[112px]" id="case-studies">
                    <div className="wrap">
                        <div className="section-label venture-sticky-label">CASE STUDIES</div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(26px,3.4vw,42px)', maxWidth: '700px', marginBottom: '60px' }}>
                            Products we build.<br />
                            <span style={{ background: 'linear-gradient(135deg,#fff 30%,#9b8aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Ventures that scale.</span>
                        </h2>
                        <VentureStack />
                    </div>
                </section>


                <section className="section-pad" id="impact">
                    <div className="wrap">
                        <div className="section-label">IMPACT</div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(26px,3.4vw,38px)', maxWidth: '600px' }}>Building technology that creates lasting value.</h2>
                        <ImpactGrid />
                    </div>
                </section>

                <section className="section-pad" id="client-portal">
                    <div className="wrap">
                        <div className="section-label">CLIENT PORTAL</div>
                        <h2 className="reveal" style={{ fontSize: 'clamp(26px,3.4vw,38px)', maxWidth: '680px' }}>Start your project with Mavros.</h2>
                        <p className="lead reveal" style={{ maxWidth: '720px', marginTop: '24px' }}>
                            Access our secure client onboarding portal to discuss your AI, software, or website project.
                        </p>

                        <div className="client-portal-grid reveal">
                            <div className="client-portal-card">
                                <div className="panel-heading">Client Portal Benefits</div>
                                <p>Access our secure client onboarding portal to discuss your AI, software, or website project.</p>
                                <ul className="portal-features">
                                    <li>Dedicated Project Manager</li>
                                    <li>NDA Available</li>
                                    <li>Weekly Progress Updates</li>
                                    <li>Secure File Sharing</li>
                                    <li>24/7 Client Dashboard</li>
                                </ul>
                                <div className="contact-details">
                                    <div>
                                        <strong>Email</strong>
                                        <p>projects@mavros.ai</p>
                                    </div>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91 XXXXX XXXXX</p>
                                    </div>
                                    <div>
                                        <strong>Location</strong>
                                        <p>Bangalore, India</p>
                                    </div>
                                </div>
                            </div>

                            <form className="client-portal-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="field-group">
                                    <label htmlFor="full-name">Full Name</label>
                                    <input id="full-name" type="text" placeholder="Full Name" />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="company-name">Company Name</label>
                                    <input id="company-name" type="text" placeholder="Company Name" />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="business-email">Business Email</label>
                                    <input id="business-email" type="email" placeholder="Business Email" />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="phone-number">Phone Number</label>
                                    <input id="phone-number" type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="service-required">Service Required</label>
                                    <select id="service-required">
                                        <option>AI Development</option>
                                        <option>Website Development</option>
                                        <option>Mobile App</option>
                                        <option>SaaS Platform</option>
                                        <option>UI/UX Design</option>
                                        <option>Automation</option>
                                    </select>
                                </div>
                                <div className="field-group">
                                    <label htmlFor="budget">Budget</label>
                                    <select id="budget">
                                        <option>Under $10K</option>
                                        <option>$10K - $25K</option>
                                        <option>$25K - $50K</option>
                                        <option>$50K+</option>
                                    </select>
                                </div>
                                <div className="field-group">
                                    <label htmlFor="timeline">Timeline</label>
                                    <select id="timeline">
                                        <option>1 - 3 months</option>
                                        <option>3 - 6 months</option>
                                        <option>6 - 12 months</option>
                                        <option>Flexible / Not sure</option>
                                    </select>
                                </div>
                                <div className="field-group">
                                    <label htmlFor="project-description">Project Description</label>
                                    <textarea id="project-description" rows="5" placeholder="Describe your project" />
                                </div>
                                <div className="field-group">
                                    <label htmlFor="requirements-document">Upload Requirement Document</label>
                                    <input id="requirements-document" type="file" />
                                </div>
                                <button type="submit" className="btn btn-primary">Access Client Portal</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="section-pad" id="contact">
                    <div className="wrap">
                        <div className="contact-box reveal">
                            <span className="c-corner tl"></span>
                            <span className="c-corner br"></span>
                            <div className="eyebrow" style={{ justifyContent: 'center' }}>LET'S BUILD SOMETHING</div>
                            <h2>Got footage that needs a story?</h2>
                            <p>Tell us what you're shooting and how much of it there is. We'll show you what MAVROS does with it.</p>
                            <a href="mailto:official@www.mavrostech.in?subject=MAVROS%20enquiry&body=Hi%20MAVROS%20team%2C%0A%0AI%27d%20like%20to%20discuss..." className="btn btn-primary">Email MAVROS</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
