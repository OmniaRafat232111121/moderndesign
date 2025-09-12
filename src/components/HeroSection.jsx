import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation'; 
import v1 from '../assets/about/viedo.mp4'; 
import { FaWhatsapp, FaArrowDown, FaPhone, FaEye, FaRocket, FaInstagram, FaLinkedin, FaTwitter, FaStar } from 'react-icons/fa';
import { strings } from '../strings';

const HeroSection = ({ language }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      // Show stats after a delay
      setTimeout(() => setStatsVisible(true), 3000);
    } else {
      controls.start('hidden');
      setStatsVisible(false);
    }
  }, [controls, inView]);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleContactClick = () => {
    // Scroll to contact section or open WhatsApp
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to WhatsApp - Modern Design
      window.open('https://wa.me/966501234567', '_blank');
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
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
      {/* Loading Screen */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 z-50 bg-primary flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-white border-opacity-30 border-t-white rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="text-white text-lg font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {language === 'ar' ? 'جاري التحميل...' : 'Loading...'}
            </motion.p>
          </div>
        </motion.div>
      )}
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

      {/* Dynamic Gradient Overlay */}
      {isPlaying && (
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      )}

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-white border-opacity-20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-16 w-12 h-12 bg-white bg-opacity-10 rounded-lg"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -90, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-8 h-8 border-2 border-white border-opacity-30 transform rotate-45"
          animate={{
            y: [0, -25, 0],
            rotate: [45, 225, 45],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-8 w-6 h-6 bg-white bg-opacity-15 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

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
          className={`font-bold mb-6 px-4 leading-tight ${language === 'ar' ? 'font-ar' : 'font-en'} relative`}
          style={{
            fontSize: language === 'ar' ? 'clamp(1.5rem, 4vw, 3rem)' : 'clamp(1.75rem, 4.5vw, 3.5rem)',
            lineHeight: language === 'ar' ? '1.3' : '1.2',
            fontWeight: '700',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            wordSpacing: language === 'ar' ? '0.1em' : 'normal',
            letterSpacing: language === 'en' ? '0.02em' : 'normal',
            background: 'linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease-in-out infinite'
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

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col  mb-4 sm:flex-row gap-4 mt-8 justify-center items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50
            },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 1, 
                delay: 3,
                ease: "easeOut"
              } 
            },
          }}
        >
          <motion.button
            onClick={handleContactClick}
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone />
            {strings.hero.contactUs}
          </motion.button>
          
          <motion.button
            onClick={handleProjectsClick}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye />
            {strings.hero.viewProjects}
          </motion.button>
        </motion.div>

        {/* Animated Statistics */}
        {statsVisible && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 mt-3 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                5+
              </motion.div>
              <div className="text-white text-sm">
                {language === 'ar' ? 'سنوات من الخبرة' : 'Years Experience'}
              </div>
            </motion.div>

            <motion.div
              className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                100+
              </motion.div>
              <div className="text-white text-sm">
                {language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}
              </div>
            </motion.div>

            <motion.div
              className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                50+
              </motion.div>
              <div className="text-white text-sm">
                {language === 'ar' ? 'عميل راضي' : 'Happy Clients'}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

     
  

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="flex flex-col items-center text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* <div className="text-sm mb-2 opacity-80 mt-12">
            {strings.hero.scrollDown}
          </div> */}
          <FaArrowDown className="text-2xl opacity-80" />
        </motion.div>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="absolute top-8 left-8 z-30 flex items-center gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-20">
          <span className="text-white text-sm font-medium">
            {language === 'ar' ? '✓ معتمد' : '✓ Certified'}
          </span>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-20">
          <span className="text-white text-sm font-medium">
            {language === 'ar' ? '⭐ 5 نجوم' : '⭐ 5 Stars'}
          </span>
        </div>
      </motion.div>

      {/* Pulse Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full" />
      </motion.div>

    </section>
  );
};

export default HeroSection;
