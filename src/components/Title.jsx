import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Title = ({ text, className, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative inline-block ${className} ${language === 'ar' ? 'text-right' : 'text-left'} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text with white color */}
      <h2 className="text-2xl font-bold text-white relative z-10 transition-colors duration-300 cursor-pointer">
        {text}
      </h2>

      {/* Yellow background under the text */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 bg-yellow-400 h-full w-full transform origin-left"
      />

      {/* Underline animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute left-0 -bottom-3 h-1 bg-yellow-400"
      />
    </motion.div>
  );
};

export default Title;
