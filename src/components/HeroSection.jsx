import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation'; 
import v1 from '../assets/about/viedo.mp4'; 
import { FaWhatsapp } from 'react-icons/fa';
import { strings } from '../strings';

const HeroSection = ({ language }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set language for strings
  strings.setLanguage(language);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <section
      ref={ref}
      className="relative h-[70vh] bg-primary flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        initial="hidden"
        animate={controls}
        variants={variants}
        autoPlay
        loop
        muted
        playsInline
        onPlay={handlePlay}  
        onPause={handlePause} 
      >
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay (only visible when video is playing) */}
      {isPlaying && (
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      )}

      {/* Hero Content with Enhanced Arabic-English Support */}
      <div 
        className={`relative z-20 text-white ${language === 'ar' ? 'rtl' : 'ltr'}`} 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        style={{ 
          textAlign: 'center',
          maxWidth: '90%',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        <motion.h1
          className={`font-bold mb-6 px-4 leading-tight ${language === 'ar' ? 'font-ar' : 'font-en'}`}
          style={{
            fontSize: language === 'ar' ? 'clamp(1.5rem, 4vw, 3rem)' : 'clamp(1.75rem, 4.5vw, 3.5rem)',
            lineHeight: language === 'ar' ? '1.3' : '1.2',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            wordSpacing: language === 'ar' ? '0.1em' : 'normal',
            letterSpacing: language === 'en' ? '0.02em' : 'normal'
          }}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { 
              opacity: 0, 
              x: language === 'ar' ? 100 : -100,
              y: 20
            },
            visible: { 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: { 
                duration: 1.2, 
                delay: 1,
                ease: "easeOut"
              } 
            },
          }}
        >
          <TypeAnimation
            key={language} // Force re-render when language changes
            sequence={[
              strings.hero.welcome,
              1000, 
              strings.hero.companyName, 
              2000, 
              '', 
              1000, 
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity} 
            style={{ 
              display: 'inline-block',
              minHeight: language === 'ar' ? '1.5em' : '1.2em'
            }}
          />
        </motion.h1>

        <motion.p
          className={`text-white ${language === 'ar' ? 'font-ar' : 'font-en'}`}
          style={{
            fontSize: language === 'ar' ? 'clamp(1rem, 2.5vw, 1.4rem)' : 'clamp(1.1rem, 2.8vw, 1.5rem)',
            lineHeight: language === 'ar' ? '1.8' : '1.6',
            fontWeight: '400',
            textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
            maxWidth: language === 'ar' ? '100%' : '80%',
            margin: language === 'ar' ? '0 auto' : '0 auto',
            padding: '0 1rem',
            wordSpacing: language === 'ar' ? '0.05em' : 'normal',
            letterSpacing: language === 'en' ? '0.01em' : 'normal'
          }}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { 
              opacity: 0, 
              x: language === 'ar' ? -100 : 100,
              y: 20
            },
            visible: { 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: { 
                duration: 1.2, 
                delay: 2.2,
                ease: "easeOut"
              } 
            },
          }}
        >
          {strings.hero.description}
        </motion.p>
      </div>


    </section>
  );
};

export default HeroSection;
