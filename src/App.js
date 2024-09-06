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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Partners_Page from './components/Partners_Page';
import Layout from './components/Layout';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import ProjectDetails from './components/ProjectDetails';
import Services from './components/Services';

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
    <Router>
    <Layout language={language} toggleLanguage={toggleLanguage}>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection language={language} />
            <About language={language} data-aos="fade-up" />
            <Services language={language} data-aos="fade-up" />

            <Projects language={language} data-aos="fade-up" />

            <Gallery language={language} data-aos="fade-up" />
            <Aims language={language} data-aos="fade-up" />
            {/* <Cover data-aos="fade-up" /> */}
             <Partners language={language} data-aos="fade-up" />
          </>
        } />
        <Route path="/about" element={<About language={language} data-aos="fade-up" />} />
        <Route path="/services" element={<Services language={language} data-aos="fade-up" />} />
        <Route path="/projects" element={<Projects language={language} data-aos="fade-up" />} />

        <Route path="/blog" element={<Blog language={language} data-aos="fade-up" />} />

        <Route path="/gallery" element={<Gallery language={language} data-aos="fade-up" />} />
        <Route path="/aims" element={<Aims language={language} data-aos="fade-up" />} />
        <Route path="/cover" element={<Cover data-aos="fade-up" />} />
        <Route path="/contact" element={<ContactUs  language={language} data-aos="fade-up" />} />
        <Route path="/projects/:id/:title" element={<ProjectDetails />} />

        <Route path="/partners" element={<Partners_Page language={language} data-aos="fade-up" />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
