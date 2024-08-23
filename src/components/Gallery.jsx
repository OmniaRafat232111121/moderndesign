import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Icons for navigation
import img1 from '../assets/projects/cienma/image-08.jpg';
import img2 from '../assets/projects/Culture/image-23.jpg';
import img3 from '../assets/projects/DIRIYAH BIENNIAL/image-29.jpg';
import img4 from '../assets/projects/Alfas project/main.jpg';
import img5 from '../assets/projects/Gamers/image-70.jpg';
import img6 from '../assets/projects/mas/image-37.jpg';
import img7 from '../assets/projects/National Day/main.jpg';
import img8 from '../assets/projects/BOOTHS/image-87.jpg';
import img9 from '../assets/projects/Fairgrounds/main.jpg';
import img10 from '../assets/projects/Diriyah camps/main.jpg';
import { ar } from '../locales/ar';
import Title from './Title';
import ImageModal from './ImageModal'; // Assuming you have a modal component for viewing images

const Gallery = ({ language }) => {
  const galleryImages = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' },
    { id: 6, src: img6, alt: 'Image 6' },
    { id: 7, src: img7, alt: 'Image 7' },
    { id: 8, src: img8, alt: 'Image 8' },
    { id: 9, src: img9, alt: 'Image 9' },
    { id: 10, src: img10, alt: 'Image 10' },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust the speed of the scroll (higher value for slower scroll)
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    cssEase: 'linear', // Continuous smooth scrolling
    arrows: false, // Disable navigation arrows if you want purely automatic scroll
    pauseOnHover: false, // Continue scrolling even when hovering over the slider
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
    <div className="background_footer text-white py-10 cursor-pointer">
      <div className="container mx-auto px-6 md:px-12">
        <Title text={language === 'ar' ? ar.galleryTitle : 'Our Gallery'} />

        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="mt-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="px-3 relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-[700px] w-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"></div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Modal */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          imageIndex={currentImageIndex}
          images={galleryImages}
          setImageIndex={setCurrentImageIndex}
        />
      </div>
    </div>
  );
};

export default Gallery;
