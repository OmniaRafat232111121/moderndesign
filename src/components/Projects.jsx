import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/projects/cienma/image-04.jpg';
import img2 from '../assets/projects/Culture/image-23.jpg';
import img3 from '../assets/projects/DIRIYAH BIENNIAL/image-29.jpg';
import img4 from '../assets/projects/mas/image-37.jpg';
import img5 from '../assets/projects/RIYADH/image-43.jpg';
import img6 from '../assets/projects/uni/image-50.jpg';
import img7 from '../assets/projects/DAKAR/image-54.jpg';
import img8 from '../assets/projects/Tour/image-56.jpg';
import img9 from '../assets/projects/uni/image-50.jpg';

import Title from './Title';

const Projects = () => {
  const projectList = [
    { id: 'project1', title: 'FILM CRITICISM PROJECT', image: img1 },
    { id: 'project2', title: 'CULTURE FIELD PROJECT', image: img2 },
    { id: 'project3', title: 'DIRIYAH BIENNIAL PROJECT', image: img3 },
    { id: 'project4', title: 'JAMILA AND BUTHAINA PLAY PROJECT, MINISTRY OF CULTURE', image: img4 },
    { id: 'project5', title: 'THE RETURN TO RIYADH FESTIVAL PROJECT', image: img5 },
    { id: 'project6', title: 'UNESCO HERITAGE PROJECT MINISTRY OF CULTURE', image: img6 },
    { id: 'project7', title: 'DAKAR RALLY PROJECT', image: img7 },
    { id: 'project8', title: ' SAUDI TOUR PROJECT', image: img8 },
    { id: 'project9', title: 'THE SINGING PROJECT IN CLASSICAL ARABIC AT THE MINISTRY OF CULTURE',
       image: img9 },

  ];

  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-primary text-white py-10"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Title text="Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-secondary"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
              />
              <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
