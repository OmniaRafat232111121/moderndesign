import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons for navigation
import * as images from '../static'; // Adjust the path as needed
import Title from './Title';

const Partners = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false, // Remove navigation dots
    infinite: true, // Enable infinite loop sliding
    speed: 500, // Slide transition speed
    slidesToShow: 5, // Number of slides to show (adjust as needed)
    slidesToScroll: 1, // Number of slides to scroll at a time
     autoplay: true, // Enable auto sliding
    autoplaySpeed: 700, // Auto sliding speed (2 seconds)
    cssEase: 'linear', // Linear easing for smooth scroll
    arrows: false, // Hide default next/prev arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative p-8 bg-primary" id="partners">
      <Title text="Partners"/>
      <Slider ref={sliderRef} {...settings} >
        {Object.values(images).map((img, index) => (
          <motion.div
            key={index}
            className="p-2 mt-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src={img}
              alt={`Partner ${index + 1}`}
              className="rounded-md object-contain mx-auto h-auto w-[70%]"
            />
          </motion.div>
        ))}
      </Slider>
      
      {/* Custom Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Custom Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default Partners;
