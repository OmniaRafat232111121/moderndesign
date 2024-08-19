import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import { ar } from '../locales/ar'; // Importing ar directly

const About = ({ language }) => {  // Accept language as a prop
  console.log(language,"language")
  const aboutText = language === 'ar' ? ar.aboutText : "MODERN DESIGN COMPANY WAS ESTABLISHED..."; // Add your English text

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#0a192f] text-white py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Title text={language === 'ar' ? ar.about : "About Us"} />
          
          <div className="md:flex-grow flex justify-end">
            <div className="bg-gray-600 w-12 h-12 rounded-lg transform rotate-45"></div>
          </div>
        </div>
        <div className="text-center mt-12">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg leading-8 tracking-wider"
          >
            {aboutText}
          </motion.p>
        </div>
        <div className="md:flex-grow flex justify-end">
          <div className="bg-gray-600 w-12 h-12 rounded-lg transform rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
