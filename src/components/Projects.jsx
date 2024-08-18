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
import img10 from '../assets/projects/Book Fair/main.jpg';
import img11 from '../assets/projects/tourism/main.jpg';
import img12 from '../assets/projects/Fairgrounds/main.jpg';
import img13 from '../assets/projects/National Day/main.jpg';
import img14 from '../assets/projects/Alfas project/main.jpg';
import img15 from '../assets/projects/space/main.jpg';
import img16 from '../assets/projects/Almarai Project/main.jpg'
import img17 from '../assets/projects/Founding Day/main.jpg'

import img18 from '../assets/projects/Saudi Federation/main.jpg'
import img19 from '../assets/projects/LEAP Project/main.jpg'
import img20 from '../assets/projects/LEAP Project/main.jpg'
import img21 from '../assets/projects/King Solomon Protectorate/main.jpg';
import img22 from '../assets/projects/Diriyah camps/main.jpg';
import img23 from '../assets/projects/Misk project/main.jpg';
import img24 from '../assets/projects/tea fair/main.jpg';

import Title from './Title';

// Utility function to capitalize the first letter of each word
const capitalizeTitle = (title) => {
  return title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const Projects = () => {
  const projectList = [
    { id: 'project1', title: 'FILM CRITICISM PROJECT', image: img1 },
    { id: 'project2', title: 'CULTURE FIELD PROJECT', image: img2 },
    { id: 'project3', title: 'DIRIYAH BIENNIAL PROJECT', image: img3 },
    { id: 'project4', title: 'JAMILA AND BUTHAINA PLAY PROJECT, MINISTRY OF CULTURE', image: img4 },
    { id: 'project5', title: 'THE RETURN TO RIYADH FESTIVAL PROJECT', image: img5 },
    { id: 'project6', title: 'UNESCO HERITAGE PROJECT MINISTRY OF CULTURE', image: img6 },
    { id: 'project7', title: 'DAKAR RALLY PROJECT', image: img7 },
    { id: 'project8', title: 'SAUDI TOUR PROJECT', image: img8 },
    { id: 'project9', title: 'THE SINGING PROJECT IN CLASSICAL ARABIC AT THE MINISTRY OF CULTURE', image: img9 },
    { id: 'project10', title: 'Medina Book Fair', image: img10 },
    { id: 'project11', title: 'Ministry of Tourism', image: img11 },
    { id: 'project12', title: 'Fairgrounds', image: img12 },
    { id: 'project13', title: 'National Day', image: img13 },
    { id: 'project14', title: 'Alfas project', image: img14 },

    { id: 'project15', title: 'Space Project', image: img15 },

    { id: 'project16', title: 'Almarai Project', image: img16},
    { id: 'project17', title: 'Founding Day', image: img17},
    { id: 'project18', title: 'Saudi Federation', image: img18},
    { id: 'project19', title: 'LEAP Project', image: img19},
    { id: 'project20', title: 'LEAP Project', image: img20},
    { id: 'project21', title: 'King Solomon Protectorate', image: img21},
    { id: 'project22', title: 'Diriyah camps', image: img22},
    { id: 'project23', title: 'Misk project', image: img23},
    { id: 'project24', title: 'tea fair', image: img24},


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
              <h3 className="  mb-2">
                {capitalizeTitle(project.title)}
              </h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
