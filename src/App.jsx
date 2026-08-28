import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ServicesPage from './pages/ServicesPage'
import ProcessPage from './pages/ProcessPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ImpactPage from './pages/ImpactPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppIntegration from './components/WhatsAppIntegration'

function App() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal, .fade-scale');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    // Simple scroll to top on route change
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <WhatsAppIntegration />
    </>
  )
}

export default App
