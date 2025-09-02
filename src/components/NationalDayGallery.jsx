import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NationalDayGallery = ({ language = 'ar' }) => {
  // Debug: Log the current language
  console.log('NationalDayGallery - Current language:', language);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // Language-specific content
  const content = {
    ar: {
      backButton: 'العودة للرئيسية',
      title: 'احتفالاً بيومنا الوطني',
      subtitle: 'مجموعة من اللحظات التي تشكل هويتنا',
      companyLogoAlt: 'شعار الشركة'
    },
    en: {
      backButton: 'Back to Home',
      title: 'Celebrating Our National Day',
      subtitle: 'A collection of moments that shape our identity',
      companyLogoAlt: 'Company Logo'
    }
  };

  const currentContent = content[language];

  const galleryItems = [
    { 
      nameAr: 'استيكرات السيارات', 
      nameEn: 'Car Stickers',
      image: '/national_day_gallery/images/استيكرات السيارات.jpg' 
    },
    { 
      nameAr: 'استيكرات', 
      nameEn: 'Stickers',
      image: '/national_day_gallery/images/استيكرات.jpg' 
    },
    { 
      nameAr: 'أعلام قماشية', 
      nameEn: 'Fabric Flags',
      image: '/national_day_gallery/images/أعلام قماشية.jpg' 
    },
    { 
      nameAr: 'أقلام', 
      nameEn: 'Pens',
      image: '/national_day_gallery/images/أقلام.jpg' 
    },
    { 
      nameAr: 'أكواب', 
      nameEn: 'Cups',
      image: '/national_day_gallery/images/أكواب.jpg' 
    },
    { 
      nameAr: 'أكياس قماشية', 
      nameEn: 'Fabric Bags',
      image: '/national_day_gallery/images/أكياس قماشية.jpg' 
    },
    { 
      nameAr: 'بالونات', 
      nameEn: 'Balloons',
      image: '/national_day_gallery/images/بالونات.jpg' 
    },
    { 
      nameAr: 'بروش', 
      nameEn: 'Brooches',
      image: '/national_day_gallery/images/بروش.jpg' 
    },
    { 
      nameAr: 'بطاقة هدايا', 
      nameEn: 'Gift Cards',
      image: '/national_day_gallery/images/بطاقة هدايا.jpg' 
    },
    { 
      nameAr: 'بنرات', 
      nameEn: 'Banners',
      image: '/national_day_gallery/images/بنرات.jpg' 
    },
    { 
      nameAr: 'بوب اب', 
      nameEn: 'Pop-up',
      image: '/national_day_gallery/images/بوب اب.jpg' 
    },
    { 
      nameAr: 'بوكسات', 
      nameEn: 'Boxes',
      image: '/national_day_gallery/images/بوكسات.jpg' 
    },
    { 
      nameAr: 'بولو', 
      nameEn: 'Polo Shirts',
      image: '/national_day_gallery/images/بولو.jpg' 
    },
    { 
      nameAr: 'توزيعات', 
      nameEn: 'Giveaways',
      image: '/national_day_gallery/images/توزيعات.jpg' 
    },
    { 
      nameAr: 'تيشرتات', 
      nameEn: 'T-shirts',
      image: '/national_day_gallery/images/تيشرتات.jpg' 
    },
    { 
      nameAr: 'جداريات', 
      nameEn: 'Wall Art',
      image: '/national_day_gallery/images/جداريات.jpg' 
    },
    { 
      nameAr: 'حافظة مياه', 
      nameEn: 'Water Bottles',
      image: '/national_day_gallery/images/حافظة مياه.jpg' 
    },
    { 
      nameAr: 'حائط', 
      nameEn: 'Wall',
      image: '/national_day_gallery/images/حائط.jpg' 
    },
    { 
      nameAr: 'دفتر ملاحظات', 
      nameEn: 'Notebooks',
      image: '/national_day_gallery/images/دفتر ملاحظات.jpg' 
    },
    { 
      nameAr: 'فوركس', 
      nameEn: 'Forex',
      image: '/national_day_gallery/images/فوركس.jpg' 
    },
    { 
      nameAr: 'قاعدة أكواب', 
      nameEn: 'Cup Holders',
      image: '/national_day_gallery/images/قاعدة أكواب.jpg' 
    },
    { 
      nameAr: 'قبعات', 
      nameEn: 'Caps',
      image: '/national_day_gallery/images/قبعات.jpg' 
    },
    { 
      nameAr: 'لوحات', 
      nameEn: 'Signs',
      image: '/national_day_gallery/images/لوحات.jpg' 
    },
    { 
      nameAr: 'ملصقات', 
      nameEn: 'Posters',
      image: '/national_day_gallery/images/ملصقات.jpg' 
    },
    { 
      nameAr: 'مناديل', 
      nameEn: 'Tissues',
      image: '/national_day_gallery/images/مناديل.jpg' 
    },
    { 
      nameAr: 'ميداليات', 
      nameEn: 'Medals',
      image: '/national_day_gallery/images/ميداليات.jpg' 
    }
  ];

  const playlist = [
    '/national_day_gallery/sound/1.m4a',
    '/national_day_gallery/sound/2.m4a',
    '/national_day_gallery/sound/3.m4a'
  ];

  useEffect(() => {
    // Debug: Log language changes
    console.log('Language changed to:', language);
  }, [language]);

  useEffect(() => {
    // Initialize particles
    const initParticles = async () => {
      if (window.tsParticles) {
        try {
          await window.tsParticles.load("tsparticles", {
            fullScreen: { enable: false },
            particles: {
              number: { value: 60, density: { enable: true, value_area: 800 }},
              color: { value: ["#ffd700", "#00A99D", "#8CC63F", "#ffffff"] },
              shape: { type: "circle" },
              opacity: { value: 0.8, random: true },
              size: { value: 5, random: true },
              move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                straight: false,
                out_mode: "out",
                bounce: false,
              }
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true
              }
            },
            detectRetina: true,
          });
        } catch (error) {
          console.log("Particles initialization error:", error);
        }
      } else {
        // If tsParticles is not loaded yet, wait a bit and try again
        setTimeout(initParticles, 100);
      }
    };

    initParticles();

    // Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = volume;
      playRandomAudio();
    }

    // Add interaction listeners
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play();
        setHasInteracted(true);
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchend', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchend', handleInteraction);
    };
  }, []);

  const playRandomAudio = () => {
    if (audioRef.current) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      audioRef.current.src = playlist[randomIndex];
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay was prevented. Waiting for user interaction.");
        });
      }
    }
  };

  const handleAudioEnded = () => {
    playRandomAudio();
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      audioRef.current.muted = false;
    }
    setIsMuted(false);
  };

  const handleMuteToggle = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);
      
      if (!newMuted && volume === 0) {
        const newVolume = 0.1;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
      }
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=966557480817', '_blank');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="national-day-gallery" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Particles Background */}
      <div id="tsparticles" className="particles-background"></div>

      {/* Audio Controls */}
      <div 
        className="audio-controls"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <button 
          className="mute-button"
          onClick={handleMuteToggle}
        >
          {isMuted || volume === 0 ? '🔇' : '🔊'}
        </button>
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            width: showVolumeSlider ? '120px' : '0',
            opacity: showVolumeSlider ? 1 : 0,
            visibility: showVolumeSlider ? 'visible' : 'hidden'
          }}
        />
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        loop={false}
      />

    
     

      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <motion.button
            onClick={handleBackClick}
            className="back-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'ar' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
            {currentContent.backButton}
          </motion.button>

          <div className="header-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentContent.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentContent.subtitle}
            </motion.p>
          </div>

          <div className="logo-container">
            <img src="/national_day_gallery/images/company-logo.svg" alt={currentContent.companyLogoAlt} className="header-logo" />
          </div>
        </div>
      </header>

            {/* Main Content */}
      <main className="content-wrapper">
        <div className="gallery-container">
          {galleryItems.map((item, index) => (
            <motion.a
              key={index}
              href="https://api.whatsapp.com/send?phone=966557480817"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item-link"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                              <div className="gallery-item" data-name={language === 'ar' ? item.nameAr : item.nameEn}>
                  <img src={item.image} alt={language === 'ar' ? item.nameAr : item.nameEn} />
                  <div className="item-overlay">
                    <h3>{language === 'ar' ? item.nameAr : item.nameEn}</h3>
                  </div>
                </div>
            </motion.a>
          ))}
        </div>
      </main>

  

      <style jsx>{`
        .national-day-gallery {
          font-family: 'Tajawal', sans-serif;
          background-color: #002D2D;
          color: #f0f0f0;
          margin: 0;
          text-align: center;
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
        }

        .particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .language-indicator {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          gap: 10px;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 10px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }

        .lang-badge {
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .lang-badge.active {
          background-color: #ffd700;
          color: #002D2D;
          border-color: #ffd700;
        }

        .lang-badge:not(.active) {
          background-color: transparent;
          color: #ccc;
          border-color: #666;
        }

        .lang-badge:hover:not(.active) {
          background-color: rgba(255, 215, 0, 0.2);
          border-color: #ffd700;
          color: #ffd700;
        }

        .audio-controls {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
          display: flex;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50px;
          padding: 5px;
          transition: background-color 0.3s;
        }

        .mute-button {
          background-color: transparent;
          color: white;
          border: 2px solid #ffd700;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s;
          flex-shrink: 0;
        }

        .mute-button:hover {
          transform: scale(1.1);
        }

        .volume-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 5px;
          outline: none;
          transition: width 0.4s ease, opacity 0.4s ease, visibility 0.4s;
          margin-right: 10px;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #ffd700;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .volume-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: #ffd700;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .main-header, .content-wrapper {
          position: relative;
          z-index: 1;
        }

        .main-header {
          padding-top: 20px;
          padding-left: 30px;
          padding-right: 30px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 40px;
        }

        /* Language-specific header layout */
        .national-day-gallery[dir="ltr"] .header-content {
          flex-direction: row;
        }

        .national-day-gallery[dir="rtl"] .header-content {
          flex-direction: row-reverse;
        }

        .back-button {
          background-color: rgba(255, 215, 0, 0.2);
          color: white;
          border: 2px solid #ffd700;
          border-radius: 25px;
          padding: 10px 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Tajawal', sans-serif;
          font-weight: 600;
          transition: all 0.3s ease;
          margin: 0 20px;
        }

        /* Language-specific back button layout */
        .national-day-gallery[dir="ltr"] .back-button {
          flex-direction: row;
        }

        .national-day-gallery[dir="rtl"] .back-button {
          flex-direction: row-reverse;
        }

        .back-button:hover {
          background-color: rgba(255, 215, 0, 0.3);
          transform: scale(1.05);
        }

        .header-logo {
          height: 80px;
          width: auto;
          max-width: 200px;
        }

        .logo-container {
          flex-shrink: 0;
          margin: 0 20px;
        }

        .header-text {
          flex-grow: 1;
          padding: 0 40px;
          margin: 0 20px;
        }

        /* Language-specific text alignment */
        .national-day-gallery[dir="ltr"] .header-text {
          text-align: center;
        }

        .national-day-gallery[dir="rtl"] .header-text {
          text-align: center;
        }

        .header-text h1 {
          font-size: 2.5rem;
          margin: 10px 0;
          color: white;
        }

        .header-text p {
          font-size: 1.1rem;
          color: #ccc;
          margin: 0;
        }

        .header-text h1::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background-color: #ffd700;
          margin: 15px auto 0;
        }

        .content-wrapper {
          width: 66.66%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0;
        }

        .gallery-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          padding-top: 30px;
          padding-bottom: 60px;
        }

        .gallery-item-link {
          text-decoration: none;
          display: block;
          border-radius: 10px;
          overflow: hidden;
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .gallery-item::before, .gallery-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          box-sizing: border-box;
          transition: width 0.25s ease-out, height 0.25s ease-out;
        }

        .gallery-item::before {
          top: -3px;
          left: -3px;
          border-top: 3px solid transparent;
          border-right: 3px solid transparent;
          transition-delay: 0.5s, 0.25s;
        }

        .gallery-item::after {
          bottom: -3px;
          right: -3px;
          border-bottom: 3px solid transparent;
          border-left: 3px solid transparent;
          transition-delay: 0s, 0.75s;
        }

        .gallery-item-link:hover .gallery-item::before,
        .gallery-item-link:hover .gallery-item::after {
          width: calc(100% + 6px);
          height: calc(100% + 6px);
          border-color: #ffd700;
        }

        .gallery-item-link:hover .gallery-item::before {
          transition-delay: 0s, 0.25s;
        }

        .gallery-item-link:hover .gallery-item::after {
          transition-delay: 0.5s, 0.75s;
        }

        .gallery-item-link:hover .gallery-item {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .gallery-item-link:hover .gallery-item img {
          transform: scale(1.1);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          color: white;
          padding: 40px 20px 20px;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .gallery-item-link:hover .item-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .item-overlay h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        /* Language-specific gallery item text */
        .national-day-gallery[dir="ltr"] .item-overlay h3 {
          text-align: center;
        }

        .national-day-gallery[dir="rtl"] .item-overlay h3 {
          text-align: center;
        }

        @media (max-width: 1200px) {
          .content-wrapper {
            width: 80%;
          }
        }

        @media (max-width: 992px) {
          .content-wrapper {
            width: 90%;
          }
          .gallery-container {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .main-header {
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .header-content {
            flex-direction: column;
            padding: 10px 20px;
          }
          .header-text {
            order: 1;
            padding-bottom: 20px;
            padding: 0 20px;
            margin: 0 10px;
          }
          .header-text h1 {
            font-size: 2rem;
          }
          .header-content .logo-container {
            order: 2;
            margin: 0 10px;
          }
          .header-logo {
            height: 60px;
          }
          .content-wrapper {
            width: 95%;
          }
          .gallery-container {
            grid-template-columns: 1fr;
          }
          .back-button {
            order: 0;
            margin-bottom: 20px;
            margin: 0 10px 20px 10px;
          }
          
          /* Mobile language-specific adjustments */
          .national-day-gallery[dir="ltr"] .header-content,
          .national-day-gallery[dir="rtl"] .header-content {
            flex-direction: column;
          }

          /* Mobile language indicator */
          .language-indicator {
            top: 10px;
            right: 10px;
            padding: 8px;
            gap: 8px;
          }

          .lang-badge {
            padding: 6px 12px;
            font-size: 12px;
          }
        }

        /* Footer Styles */
        .gallery-footer {
          background: linear-gradient(135deg, #002D2D, #004d4d);
          padding: 60px 0 40px;
          margin-top: 60px;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          padding: 0 20px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          color: #ffd700;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .project-thumbnail {
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: 8px;
          border: 2px solid rgba(255, 215, 0, 0.3);
        }

        .project-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-thumbnail:hover img {
          transform: scale(1.1);
        }

        /* Contact Information */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #f0f0f0;
          font-size: 0.9rem;
        }

        .contact-icon {
          font-size: 1.2rem;
          min-width: 20px;
        }

        .social-media {
          display: flex;
          gap: 15px;
          margin-top: 20px;
          justify-content: center;
        }

        .social-media a {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
          display: block;
        }

        .social-media a:hover {
          transform: scale(1.2);
        }

        /* Footer Menu */
        .footer-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-menu li a {
          color: #f0f0f0;
          text-decoration: none;
          transition: color 0.3s ease;
          display: block;
          text-align: center;
        }

        .footer-menu li a:hover {
          color: #ffd700;
        }

        /* Logos Section */
        .logos-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .logo-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border: 1px solid rgba(255, 215, 0, 0.2);
        }

        .logo-item img {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .logo-title {
          color: #ffd700;
          font-weight: 700;
          font-size: 1rem;
        }

        .logo-subtitle {
          color: #ccc;
          font-size: 0.8rem;
        }

        /* Language-specific footer layout */
        .national-day-gallery[dir="ltr"] .footer-content {
          text-align: left;
        }

        .national-day-gallery[dir="rtl"] .footer-content {
          text-align: right;
        }

        /* Responsive Footer - Large Screens */
        @media (max-width: 1200px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            max-width: 900px;
          }
          
          .footer-section:nth-child(1),
          .footer-section:nth-child(2) {
            order: 1;
          }
          
          .footer-section:nth-child(3),
          .footer-section:nth-child(4) {
            order: 2;
          }
        }

        /* Responsive Footer - Medium Screens */
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            padding: 0 15px;
          }

          .footer-title {
            font-size: 1.2rem;
            margin-bottom: 15px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .logo-item {
            padding: 12px;
            gap: 12px;
          }

          .logo-item img {
            height: 40px;
          }

          .logo-title {
            font-size: 0.9rem;
          }

          .logo-subtitle {
            font-size: 0.7rem;
          }
        }

        /* Responsive Footer - Small Screens */
        @media (max-width: 768px) {
          .gallery-footer {
            padding: 40px 0 30px;
            margin-top: 40px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 15px;
            max-width: 500px;
          }

          .footer-section {
            text-align: center;
          }

          .footer-title {
            font-size: 1.4rem;
            margin-bottom: 20px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            max-width: 300px;
            margin: 0 auto;
          }

          .contact-info {
            max-width: 300px;
            margin: 0 auto;
          }

          .contact-item {
            justify-content: center;
            font-size: 0.95rem;
          }

          .social-media {
            justify-content: center;
            gap: 20px;
            margin-top: 25px;
          }

          .social-media a {
            font-size: 1.8rem;
          }

          .footer-menu {
            max-width: 200px;
            margin: 0 auto;
          }

          .footer-menu li a {
            font-size: 1rem;
            padding: 8px 0;
          }

          .logos-container {
            max-width: 350px;
            margin: 0 auto;
          }

          .logo-item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
            padding: 20px;
          }

          .logo-item img {
            height: 45px;
          }

          .logo-title {
            font-size: 1rem;
          }

          .logo-subtitle {
            font-size: 0.8rem;
          }
        }

        /* Responsive Footer - Extra Small Screens */
        @media (max-width: 480px) {
          .main-header {
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .header-content {
            padding: 10px 15px;
          }
          
          .header-text {
            padding: 0 15px;
            margin: 0 5px;
          }
          
          .logo-container {
            margin: 0 5px;
          }
          
          .back-button {
            margin: 0 5px 15px 5px;
          }
          
          .gallery-footer {
            padding: 30px 0 20px;
            margin-top: 30px;
          }

          .footer-content {
            padding: 0 10px;
            gap: 25px;
          }

          .footer-title {
            font-size: 1.3rem;
            margin-bottom: 15px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            max-width: 250px;
          }

          .contact-info {
            max-width: 280px;
          }

          .contact-item {
            font-size: 0.9rem;
          }

          .social-media {
            gap: 15px;
            margin-top: 20px;
          }

          .social-media a {
            font-size: 1.6rem;
          }

          .footer-menu li a {
            font-size: 0.95rem;
            padding: 6px 0;
          }

          .logos-container {
            max-width: 300px;
          }

          .logo-item {
            padding: 15px;
          }

          .logo-item img {
            height: 40px;
          }

          .logo-title {
            font-size: 0.9rem;
          }

          .logo-subtitle {
            font-size: 0.75rem;
          }
        }

        /* Landscape Mobile Optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .gallery-footer {
            padding: 20px 0 15px;
            margin-top: 20px;
          }

          .footer-content {
            gap: 20px;
          }

          .footer-title {
            margin-bottom: 10px;
          }

          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 400px;
          }

          .logo-item {
            padding: 10px;
            flex-direction: row;
            gap: 8px;
          }

          .logo-item img {
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default NationalDayGallery;
