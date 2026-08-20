import React, { useState, useEffect, useRef } from 'react';
import { WHATSAPP_NUMBER } from '../config/whatsapp';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

const enquiryOptions = [
  {
    label: 'General Enquiry',
    subtitle: 'Know more about our services',
    message: 'Hi MavrosTech, I visited your website and would like to know more about your services.'
  },
  {
    label: 'Service Enquiry',
    subtitle: 'Web development & services',
    message: 'Hi MavrosTech, I’m interested in your web development services. Could you share more details and pricing?'
  },
  {
    label: 'Project Enquiry',
    subtitle: 'Discuss your project idea',
    message: 'Hi MavrosTech, I have a project requirement and would like to discuss it with your team.'
  },
  {
    label: 'Quick Contact',
    subtitle: 'Connect with our team',
    message: 'Hi MavrosTech 👋 I’d like to connect with your team regarding a business enquiry.'
  }
];

export default function WhatsAppIntegration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-whatsapp-modal', handleOpenModal);
    return () => window.removeEventListener('open-whatsapp-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-white text-black rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] transition-all duration-300 hover:scale-105 flex items-center justify-center group w-14 h-14 md:w-16 md:h-16"
        aria-label="Chat with MavrosTech on WhatsApp"
        style={{ zIndex: 9999 }}
      >
        <MessageCircle size={32} strokeWidth={1.5} />
      </button>

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300">
          <div 
            ref={modalRef}
            className="bg-[#0d0d10] border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-white/10 bg-[#0b0b0d]">
              <div className="flex items-center gap-3">
                <div className="bg-white text-black p-2 rounded-full flex-shrink-0">
                  <MessageCircle size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 id="whatsapp-modal-title" className="text-lg font-bold text-white m-0 leading-tight">Chat with MavrosTech</h3>
                  <p className="text-sm text-gray-400 m-0 mt-1">How can we help you?</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 flex flex-col gap-3 overflow-y-auto">
              {enquiryOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(option.message)}
                  className="w-full text-left p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-white flex items-center justify-between group"
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="font-semibold text-[15px]">{option.label}</span>
                    <span className="text-xs text-gray-400">{option.subtitle}</span>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-200 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
