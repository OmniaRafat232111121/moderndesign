import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bannerEn from '../assets/بنر اليوم الوطني الموقع انجلش copy.jpg';
import bannerAr from '../assets/بنر اليوم الوطني الموقع copy.jpg';

const NationalDayBanner = ({ language }) => {
  const navigate = useNavigate();

  // Single banner based on language
  const banner = {
    image: language === 'ar' ? bannerAr : bannerEn,
  };

  const handleBannerClick = () => {
    // Navigate to the React National Day Gallery
    navigate('/national-day-gallery');
  };

  return (
    <section className={`mt-6 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 relative w-full
       h-[200px]
     xs:h-[220px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] 
     overflow-hidden px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12
      ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Banner Container with Enhanced Border and Effects */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center
       "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
       
      >
        
          {/* Banner Image with Enhanced Effects */}
          <motion.img
            src={banner.image}
            alt={language === 'ar' ? 'بنر اليوم الوطني' : 'National Day Banner '}
            className="max-w-full h-full  border-2 border-yellow-500 rounded-md cursor-pointer "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            onClick={handleBannerClick}

          />
          

          
      
          
         
       
      </motion.div>
    </section>
  );
};

export default NationalDayBanner;
