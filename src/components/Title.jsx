import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ text, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative inline-block ${className}`}
    >
      <h2 className="text-3xl font-bold text-white">
        {text}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute left-0 -bottom-3 h-1 bg-yellow-400"
      />
    </motion.div>
  );
};

export default Title;
