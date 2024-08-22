import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import coverImage from '../assets/cover.png'; 

const Cover = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="h-screen w-full overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
      }}
    >
      <img 
        src={coverImage} 
        alt="Cover" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Cover;
