import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ImageModal = ({ isOpen, onClose, imageIndex, images, setImageIndex }) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, imageIndex]);

  if (!isOpen) return null;

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">
        <FaTimes />
      </button>
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <button onClick={prevImage} className="absolute left-0 text-white text-3xl">
          <FaChevronLeft />
        </button>
        <img src={images[imageIndex].src} alt={images[imageIndex].alt} className="max-h-[80vh] max-w-full object-contain rounded-lg" />
        <button onClick={nextImage} className="absolute right-0 text-white text-3xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
