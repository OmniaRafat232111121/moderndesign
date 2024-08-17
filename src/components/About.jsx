import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';

const About = () => {
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
         <Title text="About us"/>
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
            MODERN DESIGN COMPANY WAS ESTABLISHED IN LATE 2017 WITH A SMALL TEAM
            AND A CLEAR VISION. OUR VISION HAS HELPED US OVERCOME NUMEROUS
            CHALLENGES, AND MOST IMPORTANTLY, WE HAVE BEEN ABLE TO ACHIEVE MANY
            SUCCESSES BY FIRMLY BELIEVING THAT THE KEY TO OUR SUCCESS LIES IN
            OUR COMMITMENT TO ESTABLISHING OURSELVES AS A SPECIALIZED GROUP THAT
            DELIVERS CREATIVE PROJECTS AND HIGH-QUALITY WORK. WE HAVE FULL
            CONFIDENCE THAT OUR ENTIRE TEAM SHARES THIS VISION AND WORKS TOWARDS
            IMPLEMENTING IT IN ALL OUR DAILY ACTIVITIES.
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
