import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage1 from '../assets/logo/image-76.jpg';
import heroImage2 from '../assets/logo/image-75.jpg';
import heroImage3 from '../assets/logo/image-74.jpg';

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation triggers when 20% of the component is in view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen bg-primary flex items-center justify-center overflow-hidden"
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r bg-primary"
        initial="hidden"
        animate={controls}
        variants={variants}
      />

      {/* Image Group Animation */}
      <div className="relative z-10 flex space-x-4">
        <motion.img
          src={heroImage1}
          alt="Hero 1"
          className="w-1/3 max-w-xs object-cover rounded-lg"
          initial="hidden"
          animate={controls}
          variants={variants}
          whileHover={{ scale: 1.1, rotate: 2 }}
        />
        <motion.img
          src={heroImage2}
          alt="Hero 2"
          className="w-1/3 max-w-xs object-cover rounded-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.3 } },
          }}
          whileHover={{ scale: 1.1, rotate: -2 }}
        />
        <motion.img
          src={heroImage3}
          alt="Hero 3"
          className="w-1/3 max-w-xs object-cover rounded-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.6 } },
          }}
          whileHover={{ scale: 1.1, rotate: 2 }}
        />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-10 text-center text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
          }}
        >
          Welcome to Our Website
        </motion.h1>
        <motion.p
          className="text-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.5 } },
          }}
        >
          We create beautiful web experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
