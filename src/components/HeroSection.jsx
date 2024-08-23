import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation'; 
import v1 from '../assets/about/viedo.mp4'; 
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      className="relative h-[80vh] bg-primary flex items-center justify-center overflow-hidden"
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

      {/* Optional Additional Content on Top of Overlay */}
      <div className="relative z-20 text-center text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
          }}
        >
          <TypeAnimation
            sequence={[
              'Welcome to',
              1000, 
              'Welcome to Modern Design Advertising Company', 
              2000, 
              '', 
              1000, 
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity} 
            style={{ display: 'inline-block' }}
          />
        </motion.h1>

        <motion.p
          className="text-xl mt-4 text-white"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 2 } },
          }}
        >
          We specialize in creating exceptional and unforgettable events with a focus on modern design and innovative strategies.
        </motion.p>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float fixed bottom-4 right-4 z-50">
        <a
          href={
            isMobile
              ? "https://api.whatsapp.com/send?phone=+966557480817"
              : "https://web.whatsapp.com/send?phone=++966557480817"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={32} color="#fff" />
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
