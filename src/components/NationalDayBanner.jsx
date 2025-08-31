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
    title: language === 'ar' ? 'اليوم الوطني السعودي' : 'Saudi National Day',
    subtitle: language === 'ar' ? 'احتفل معنا باليوم الوطني' : 'Celebrate with us on National Day',
    cta: language === 'ar' ? 'استكشف المعرض الرقمي' : 'Explore Digital Gallery'
  };

  const handleBannerClick = () => {
    // Navigate to the React National Day Gallery
    navigate('/national-day-gallery');
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Banner Container */}
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Banner Image */}
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {banner.title}
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {banner.subtitle}
            </motion.p>
            
            <motion.button
              onClick={handleBannerClick}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {banner.cta}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NationalDayBanner;
