import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from './Title';
import aboutImage from '../assets/about/about.jpeg'; 
import { ar } from '../locales/ar'; 

const About = ({ language }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation triggers when 20% of the component is in view
    triggerOnce: true, // Only trigger animation once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const aboutText = language === 'ar' 
    ? ar.aboutText 
    : "Modern Design Company was established in late 2017 with a small team and a clear vision. Our vision has helped us overcome numerous challenges, and most importantly, we have been able to achieve many successes by firmly believing that the key to our success lies in our commitment to establishing ourselves as a specialized group that delivers creative projects and high-quality work. We have full confidence that our entire team shares this vision and works towards implementing it in all our daily activities.";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="bg-primary text-white p-6 md:p-10 lg:p-20 relative overflow-hidden"
    >
      <Title text={language === 'ar' ? ar.about : "About Us"} />

      {/* Multiple Animated Circles */}
      <motion.div
        className="absolute bottom-0 right-0 bg-gray-200 w-8 h-8 rounded-full z-0"
        initial={{ y: 0 }}
        animate={{ y: [-20, 20], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-20 right-0 bg-gray-200 w-30 h-30 rounded-full z-0"
        initial={{ y: 25 }}
        animate={{ y: [-25, 25], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-10 bg-gray-200 w-12 h-12 rounded-full z-0"
        initial={{ y: 30 }}
        animate={{ y: [-30, 30], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-20 bg-gray-200 w-20 h-20 rounded-full z-0"
        initial={{ y: 10 }}
        animate={{ y: [-10, 10], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-30 bg-gray-200 w-16 h-16 rounded-full z-0"
        initial={{ y: 35 }}
        animate={{ y: [-35, 35], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      {/* Additional Circles */}
      <motion.div
        className="absolute bottom-40 left-10 bg-gray-300 w-24 h-24 rounded-full z-0"
        initial={{ y: 20 }}
        animate={{ y: [-30, 30], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 left-0 bg-gray-400 w-14 h-14 rounded-full z-0"
        initial={{ y: 15 }}
        animate={{ y: [-20, 20], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-40 bg-gray-200 w-10 h-10 rounded-full z-0"
        initial={{ y: 10 }}
        animate={{ y: [-10, 10], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-10 left-30 bg-gray-400 w-18 h-18 rounded-full z-0"
        initial={{ y: 30 }}
        animate={{ y: [-20, 20], opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8">
          
          {/* Image Section */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full md:w-3/4 lg:w-2/3 border-4 border-white hover:border-heading rounded-lg relative z-10"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 150 : -150 }} 
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: language === 'ar' ? 150 : -150 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
            className={`text-md leading-8 tracking-wider mt-4 ${language === 'ar' ? 'font-ar text-right' : 'font-en text-left'} relative z-10`}
          >
            <p>{aboutText}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
