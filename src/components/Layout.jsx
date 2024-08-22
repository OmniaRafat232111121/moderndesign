import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';

const Layout = ({ children, language, toggleLanguage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`App bg-primary ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className="content">
        {children}
      </div>
      <Footer language={language} />
      
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float fixed bottom-4 right-4 z-50">
        <a
          href={
            isMobile
              ? "https://api.whatsapp.com/send?phone=+966557480817"
              : "https://web.whatsapp.com/send?phone=+966557480817"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={32} color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
