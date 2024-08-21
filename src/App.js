import React, { useState } from 'react';
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

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className={`App ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <About language={language} />
      <Projects language={language} />
      <Gallery language={language} />
      <Aims language={language} />
      <Partners language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
