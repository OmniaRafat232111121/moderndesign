import React from 'react';
import { motion } from 'framer-motion';

// Updated imports with new file names
import img1 from '../assets/services/akhtam.png';
import img2 from '../assets/services/acrylic_and_forex.png';
import img3 from '../assets/services/tasmeemat.png';
import img4 from '../assets/services/roll_up_and_pop_up.png';
import img5 from '../assets/services/tabaa_aelam.png';
import img6 from '../assets/services/tabaa_offset.png';
import img7 from '../assets/services/tabaa_banners_and_stickers.png';
import img8 from '../assets/services/tabaa_die_cut.png';
import img9 from '../assets/services/tabaa_digital.png';
import img10 from '../assets/services/tabaa_silk_screen.png';
import img11 from '../assets/services/tabaa_uv.png';
import Title from './Title';

const Services = ({ language }) => {
  // Array of image imports with corresponding service names in both languages
  const services = [
    { image: img1, nameEn: 'Akhtam', nameAr: 'أختام' },
    { image: img2, nameEn: 'Acrylic and Forex', nameAr: 'أكريليك وفوركس' },
    { image: img3, nameEn: 'Tasmeemat', nameAr: 'تصميمات' },
    { image: img4, nameEn: 'Roll Up and Pop Up', nameAr: 'رول اب وبوب اب' },
    { image: img5, nameEn: 'Tabaa Aelam', nameAr: 'طباعة أعلام' },
    { image: img6, nameEn: 'Tabaa Offset', nameAr: 'طباعة أوفست' },
    { image: img7, nameEn: 'Tabaa Banners and Stickers', nameAr: 'طباعة لافتات وملصقات' },
    { image: img8, nameEn: 'Tabaa Die Cut', nameAr: 'طباعة داي كات' },
    { image: img9, nameEn: 'Tabaa Digital', nameAr: 'طباعة رقمية' },
    { image: img10, nameEn: 'Tabaa Silk Screen', nameAr: 'طباعة سلك سكرين' },
    { image: img11, nameEn: 'Tabaa UV', nameAr: 'طباعة UV' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for children
      },
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
        className={`services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ${language === 'ar' ? 'font-ar' : 'font-en'}`}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-gradient-to-r from-[#104448]  to-[#18917c] shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:-translate-y-2"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={service.image} alt={service.nameEn} className="service-image mx-auto flex items-center justify-center h-48 object-cover transition-transform duration-500 ease-in-out transform hover:translate-y-2" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-center text-heading">
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
