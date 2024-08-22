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
      // id="about"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
      className="bg-[#0a192f] text-white p-6 md:p-10 lg:p-20 background_footer"
    >
      <Title text={language === 'ar' ? ar.about : "About Us"} />

      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  items-center mt-8">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 150 : -150 }} 
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: language === 'ar' ? 150 : -150 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
            className={`text-md leading-8 tracking-wider mt-4 ${language === 'ar' ? 'font-ar text-right' : 'font-en text-left'}`}
          >
            <p>{aboutText}</p>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: language === 'ar' ? -150 : 150 },
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
            }}
          >
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full md:w-3/4 lg:w-2/3 border-4 border-white hover:border-heading rounded-lg"
            />
          </motion.div>

        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-end mt-8 md:mt-12">
          <div className="bg-gray-600 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg transform rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
