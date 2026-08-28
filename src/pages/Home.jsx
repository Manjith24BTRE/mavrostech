import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Collaborators from '../components/Collaborators';
import EcosystemSection from '../components/EcosystemSection';
import Process from '../components/Process';
import VentureStack from '../components/VentureStack';
import ImpactGrid from '../components/ImpactGrid';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import ServicesSection from '../components/ServicesSection';

export default function Home() {

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .fade-scale');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
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
            "email": "official@mavrostech.in",
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
        <Collaborators />

        <EcosystemSection />

        <ServicesSection />

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
                    <option>Under ₹5K</option>
                    <option>₹5K – ₹10K</option>
                    <option>₹10K – ₹25K</option>
                    <option>₹25K+</option>
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
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px', flexWrap: 'wrap' }}>
                <a href="mailto:official@mavrostech.in" className="btn btn-primary">Email MAVROS</a>
                <button 
                  onClick={() => window.dispatchEvent(new Event('open-whatsapp-modal'))} 
                  className="btn" 
                  style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                >
                  💬 WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </section>

<section className="section-pad" id="location">
          <div className="wrap">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>LOCATION AND CONTACT</div>
            <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: 'clamp(28px, 4vw, 48px)' }}>Visit MavrosTech.</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
              
              {/* Contact Card */}
              <div style={{ background: '#09090b', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <h3 style={{ fontFamily: 'var(--mono)', fontSize: '12px', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', margin: 0, textTransform: 'uppercase' }}>Contact Information</h3>
                
                <div style={{ display: 'flex', gap: '16px' }}>
                  <MapPin size={24} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</h4>
                    <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                      House 5, 4th Cross Road,<br/>
                      Chikkabasavanapura, Krishnarajapuram,<br/>
                      Bengaluru, Karnataka, 560036
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <Phone size={24} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</h4>
                    <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                      +91 63614 92452
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <button 
                    onClick={() => window.open('https://maps.app.goo.gl/vEg9Fe2kHMjkfYuHA', '_blank')}
                    className="btn btn-primary" 
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 'bold' }}
                  >
                    Get Directions <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              {/* Map Card */}
              <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', minHeight: '350px', background: '#111' }}>
                <iframe
                  src="https://maps.google.com/maps?q=House%205,%204th%20Cross%20Road,%20Chikkabasavanapura,%20Krishnarajapuram,%20Bengaluru,%20Karnataka,%20560036&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%', display: 'block', position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MavrosTech Location Map"
                ></iframe>
                
                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  <button 
                    onClick={() => window.open('https://maps.app.goo.gl/vEg9Fe2kHMjkfYuHA', '_blank')}
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'background 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.9)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                  >
                    Open in Maps <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
