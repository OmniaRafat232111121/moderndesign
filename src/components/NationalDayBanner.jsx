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
    <section className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
      {/* Banner Container */}
      <div className="relative w-full h-full">
        <motion.div
          className="absolute inset-0 w-full h-full cursor-pointer"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={handleBannerClick}
        >
          {/* Banner Image */}
          <img
            src={banner.image}
            alt="National Day Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default NationalDayBanner;
