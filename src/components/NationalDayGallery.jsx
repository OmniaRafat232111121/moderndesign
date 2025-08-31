import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NationalDayGallery = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const galleryItems = [
    { name: 'استيكرات السيارات', image: '/national_day_gallery/images/استيكرات السيارات.jpg' },
    { name: 'استيكرات', image: '/national_day_gallery/images/استيكرات.jpg' },
    { name: 'أعلام قماشية', image: '/national_day_gallery/images/أعلام قماشية.jpg' },
    { name: 'أقلام', image: '/national_day_gallery/images/أقلام.jpg' },
    { name: 'أكواب', image: '/national_day_gallery/images/أكواب.jpg' },
    { name: 'أكياس قماشية', image: '/national_day_gallery/images/أكياس قماشية.jpg' },
    { name: 'بالونات', image: '/national_day_gallery/images/بالونات.jpg' },
    { name: 'بروش', image: '/national_day_gallery/images/بروش.jpg' },
    { name: 'بطاقة هدايا', image: '/national_day_gallery/images/بطاقة هدايا.jpg' },
    { name: 'بنرات', image: '/national_day_gallery/images/بنرات.jpg' },
    { name: 'بوب اب', image: '/national_day_gallery/images/بوب اب.jpg' },
    { name: 'بوكسات', image: '/national_day_gallery/images/بوكسات.jpg' },
    { name: 'بولو', image: '/national_day_gallery/images/بولو.jpg' },
    { name: 'توزيعات', image: '/national_day_gallery/images/توزيعات.jpg' },
    { name: 'تيشرتات', image: '/national_day_gallery/images/تيشرتات.jpg' },
    { name: 'جداريات', image: '/national_day_gallery/images/جداريات.jpg' },
    { name: 'حافظة مياه', image: '/national_day_gallery/images/حافظة مياه.jpg' },
    { name: 'حائط', image: '/national_day_gallery/images/حائط.jpg' },
    { name: 'دفتر ملاحظات', image: '/national_day_gallery/images/دفتر ملاحظات.jpg' },
    { name: 'فوركس', image: '/national_day_gallery/images/فوركس.jpg' },
    { name: 'قاعدة أكواب', image: '/national_day_gallery/images/قاعدة أكواب.jpg' },
    { name: 'قبعات', image: '/national_day_gallery/images/قبعات.jpg' },
    { name: 'لوحات', image: '/national_day_gallery/images/لوحات.jpg' },
    { name: 'ملصقات', image: '/national_day_gallery/images/ملصقات.jpg' },
    { name: 'مناديل', image: '/national_day_gallery/images/مناديل.jpg' },
    { name: 'ميداليات', image: '/national_day_gallery/images/ميداليات.jpg' }
  ];

  const playlist = [
    '/national_day_gallery/sound/1.m4a',
    '/national_day_gallery/sound/2.m4a',
    '/national_day_gallery/sound/3.m4a'
  ];

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
    <div className="national-day-gallery" dir="rtl">
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة للرئيسية
          </motion.button>

          <div className="header-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              احتفالاً بيومنا الوطني
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              مجموعة من اللحظات التي تشكل هويتنا
            </motion.p>
          </div>

          <div className="logo-container">
            <img src="/national_day_gallery/images/company-logo.svg" alt="شعار الشركة" className="header-logo" />
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
              <div className="gallery-item" data-name={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="item-overlay">
                  <h3>{item.name}</h3>
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
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 20px;
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
        }

        .header-text {
          flex-grow: 1;
          padding: 0 20px;
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
          .header-content {
            flex-direction: column;
          }
          .header-text {
            order: 1;
            padding-bottom: 20px;
          }
          .header-text h1 {
            font-size: 2rem;
          }
          .header-content .logo-container {
            order: 2;
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
          }
        }
      `}</style>
    </div>
  );
};

export default NationalDayGallery;
