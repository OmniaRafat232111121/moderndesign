import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import acrylic_and_forex from '../assets/services/Acrylic and Forex new.jpg';
import banner_and_sticker_flex_print from '../assets/services/Banner and sitker and flex Print.jpg';
import box from '../assets/services/box.jpg';
import business_card from '../assets/services/Business Card.jpg';
import cubes from '../assets/services/cubes.jpg';
import designs from '../assets/services/Designs.jpg';
import digital_print from '../assets/services/Digital Print.jpg';
import dtf_print from '../assets/services/DTF PRINT.jpg';
import flag from '../assets/services/flag.jpg';
import offset_print from '../assets/services/Offset print.jpg';
import roll_up_and_pop_up from '../assets/services/Roll Up and Pop Up.jpg';
import seals from '../assets/services/Seals.jpg';
import sticker_die_cut from '../assets/services/Sitker Die Cut.jpg';
import uv_print from '../assets/services/UV Print.jpg';

const Services = ({ language }) => {
  const services = [
    { image: designs, nameEn: 'Designs', nameAr: 'تصميمات' },
    { image: banner_and_sticker_flex_print, nameEn: 'Banner and Sticker Flex Print', nameAr: 'طباعة بنرات و استيكرات و فليكس' },
    { image: digital_print, nameEn: 'Digital Print', nameAr: 'طباعة ديجيتال' },
    { image: sticker_die_cut, nameEn: 'Sticker Die Cut', nameAr: 'طباعة داي كت' },
    { image: offset_print, nameEn: 'Offset Print', nameAr: 'طباعة أوفست' },
    { image: uv_print, nameEn: 'UV Print', nameAr: 'طباعة يوفي' },
    { image: dtf_print, nameEn: 'DTF Print', nameAr: 'طباعة دي تي اف' },
    { image: business_card, nameEn: 'Business Card', nameAr: 'طباعة كروت شخصية' },
    { image: box, nameEn: 'Box Print', nameAr: 'طباعة علب' },
    { image: roll_up_and_pop_up, nameEn: 'Roll Up and Pop Up', nameAr: 'رول اب و بوب اب' },
    { image: flag, nameEn: 'Flag Print', nameAr: 'أعلام' },
    { image: acrylic_and_forex, nameEn: 'Acrylic and Forex', nameAr: 'اكريليك و فوركس' },
    { image: cubes, nameEn: 'Cubes', nameAr: 'مكعبات' },
    { image: seals, nameEn: 'Seals', nameAr: 'أختام' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`mt-3 ${language === 'en' ? 'font-en' : 'font-ar'}`}>
      <Title className="mb-3" text={language === 'ar' ? 'الخدمات' : 'Services'} />
      <motion.div
        className={`services-container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ${language === 'ar' ? 'font-ar' : 'font-en'}`}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card relative  animated-border  shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:-translate-y-2"
            variants={cardVariants}
          >
            <img
              src={service.image}
              alt={service.nameEn}
              className="object-cover w-full h-64" 

            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
              <h3 className="text-lg font-semibold">
                {language === 'ar' ? service.nameAr : service.nameEn}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
