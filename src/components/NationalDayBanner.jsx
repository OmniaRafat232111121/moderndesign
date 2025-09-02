import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bannerEn from '../assets/bee.jpg';
import bannerAr from '../assets/ba.jpg';

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
    <section className="mt-6 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 relative w-full h-[180px]
     xs:h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] overflow-hidden px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12">
      {/* Banner Container with Border */}
      <div className="relative w-full h-full border-2 xs:border-2 sm:border-3 md:border-4 border-yellow-500 rounded-md sm:rounded-lg md:rounded-xl shadow-md sm:shadow-lg md:shadow-2xl">
        <div
          className="absolute inset-0 w-full h-full cursor-pointer rounded-md sm:rounded-lg
           md:rounded-xl overflow-hidden"
          onClick={handleBannerClick}
        >
          {/* Banner Image */}
          <img
            src={banner.image}
            alt="National Day Banner"
            className="w-full h-full "
          />
          
        </div>
      </div>
    </section>
  );
};

export default NationalDayBanner;
