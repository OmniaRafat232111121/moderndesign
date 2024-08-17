import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import img1 from '../assets/projects/cienma/image-01.jpg'
import img2 from '../assets/projects/Culture/image-15.jpg'
import img3 from '../assets/projects/BOOTHS/image-86.jpg'
import img4 from '../assets/projects/Gamers/image-69.jpg'
import img5 from '../assets/projects/Gamers/image-71.jpg'
import Title from './Title';

const Projects = () => {
  const projectList = [
    { id: 'project1', title: 'Project 1', description: 'Description for project 1',
         image: img1 },
    { id: 'project2', title: 'Project 2', description: 'Description for project 2',
         image: img2 },
    { id: 'project3', title: 'Project 3', description: 'Description for project 3',
         image: img3 },
    { id: 'project4', title: 'Project 4', description: 'Description for project 4',
         image: img4 },
    { id: 'project5', title: 'Project 5', description: 'Description for project 5',
         image: img5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
    id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-primary text-white py-10"
    >
      <div className="container mx-auto px-6 md:px-12">
       <Title text="Projects"/>

        <Slider {...settings}>
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-md mx-2 mt-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;
