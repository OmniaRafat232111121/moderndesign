import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as images from '../static'; // Adjust the path as needed
import Title from './Title';

const ITEMS_PER_PAGE = 20; // Number of items to display per page

const Partners_Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Object.keys(images).length / ITEMS_PER_PAGE);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedImages = Object.values(images).slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div id="partners" className="p-8 bg-primary px-12">
      <Title text="Partners" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-6 ">
        {selectedImages.map((img, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src={img}
              alt={`Partner ${index + 1}`}
              className="object-contain h-24 w-full"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Dots Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageClick(page + 1)}
            className={`w-4 h-4 rounded-full ${currentPage === page + 1 ? 'bg-white' : 'bg-transparent border-2 border-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners_Page;
