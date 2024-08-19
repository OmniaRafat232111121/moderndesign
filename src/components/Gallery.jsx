import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import img1 from '../assets/projects/cienma/image-04.jpg';
import img3 from '../assets/projects/DIRIYAH BIENNIAL/image-29.jpg';
import img4 from '../assets/projects/Alfas project/main.jpg';
import img5 from '../assets/projects/ignight/image-77.jpg'
import img6 from '../assets/projects/mas/image-37.jpg';
import Title from './Title';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' }
  ];

  const settings = {
    dots: false,  // Disable dots if you don't want them
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Number of images to show at once
    slidesToScroll: 1,  // Number of images to scroll at once
    arrows: false,  // Disable previous and next buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white py-10 cursor-pointer">
      <div className="container mx-auto px-6 md:px-12">
        <Title text="Gallery"/>
        <Slider {...settings} className='mt-6'>
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="px-3 relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="h-[700px] bg-cover bg-center rounded-lg shadow-lg object-contain"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  {/* <h3 className="text-lg font-semibold">{image.alt}</h3> */}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
