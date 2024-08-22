import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Aims from './components/Aims';
import Cover from './components/Cover';
import GoogleMapEmbed from './components/GoogleMapEmbed';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });

    // Refresh AOS on language toggle or whenever necessary
    AOS.refresh();
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className={`App bg-primary  ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <About language={language} data-aos="fade-up"/> {/* Add AOS animation */}
      <Projects language={language} data-aos="fade-up" /> {/* Add AOS animation */}
      <Gallery language={language} data-aos="fade-up" /> {/* Add AOS animation */}
      <Aims language={language} data-aos="fade-up" /> {/* Add AOS animation */}
      <Cover data-aos="fade-up" /> {/* Add AOS animation */}
      <Partners language={language} data-aos="fade-up" /> {/* Add AOS animation */}
      <GoogleMapEmbed data-aos="fade-up"/> {/* Add AOS animation */}
      <Footer language={language} data-aos="fade-up" /> {/* Add AOS animation */}
    </div>
  );
}

export default App;
