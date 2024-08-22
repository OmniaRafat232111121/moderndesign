import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation'; // Import the TypeAnimation component
import v1 from '../assets/about/viedo.mp4'; // Import the video

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation triggers when 20% of the component is in view
  });
  const [isPlaying, setIsPlaying] = useState(false);

  React.useEffect(() => {
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
      className="relative h-screen bg-primary flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        initial="hidden"
        animate={controls}
        variants={variants}
        autoPlay
        loop
        playsInline
        controls
        onPlay={handlePlay}   // Track when the video starts playing
        onPause={handlePause} // Track when the video is paused
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
              'Welcome to', // Types 'Welcome to'
              1000, // Waits 1s
              'Welcome to Modern Design Advertising Company', // Types 'Welcome to Modern Design Advertising Company'
              2000, // Waits 2s
              '', // Erase the whole text
              1000, // Wait 1s before restarting
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity} // Repeat indefinitely
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
    </section>
  );
};

export default HeroSection;
