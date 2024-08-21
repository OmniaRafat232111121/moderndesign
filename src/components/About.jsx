import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import aboutImage from '../assets/about/about.jpeg'; // Import your image
import { ar } from '../locales/ar'; // Importing ar directly

const About = ({ language }) => {  // Accept language as a prop
  const aboutText = language === 'ar' ? ar.aboutText : "Modern Design Company was established in late 2017 with a small team and a clear vision. Our vision has helped us overcome numerous challenges, and most importantly, we have been able to achieve many successes by firmly believing that the key to our success lies in our commitment to establishing ourselves as a specialized group that delivers creative projects and high-quality work. We have full confidence that our entire team shares this vision and works towards implementing it in all our daily activities."; // Add your English text

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#0a192f] text-white p-10 md:p-20 background_footer "
    >
      <Title text={language === 'ar' ? ar.about : "About Us"} />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -150 }} // Animates in from the left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className={`text-md leading-8 tracking-wider mt-4 ${language === 'ar' ? 'font-ar text-right' : 'font-en text-left'}"`}>
              {aboutText}
            </p>
          </motion.div>
          
          {/* Image Section */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 150 }} // Animates in from the right
            animate={{ opacity: 1, x: 0 }} // Corrected opacity to 1
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImage} // Use your imported image
              alt="About Us"
              className="w-full md:w-3/4 lg:w-2/3 border-4 border-white rounded-lg"
            />
          </motion.div>

        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-end mt-12">
          <div className="bg-gray-600 w-12 h-12 rounded-lg transform rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
