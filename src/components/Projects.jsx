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
import img10 from '../assets/projects/Book Fair/main.jpg';
import Slider from 'react-slick';


import img11 from '../assets/projects/tourism/main.jpg';
import img12 from '../assets/projects/Fairgrounds/main.jpg';
import img13 from '../assets/projects/National Day/main.jpg';
import img14 from '../assets/projects/Alfas project/main.jpg';
import img15 from '../assets/projects/space/main.jpg';
import img16 from '../assets/projects/Almarai Project/main.jpg';
import img17 from '../assets/projects/Founding Day/main.jpg';
import img18 from '../assets/projects/Saudi Federation/main.jpg';
import img19 from '../assets/projects/LEAP Project/main.jpg';
import img21 from '../assets/projects/King Solomon Protectorate/main.jpg';
import img22 from '../assets/projects/Diriyah camps/main.jpg';
import img23 from '../assets/projects/Misk project/main.jpg';
import img24 from '../assets/projects/tea fair/main.jpg';
import { ar } from '../locales/ar'; // Importing Arabic translations

import Title from './Title';
import { Link } from 'react-router-dom';

const capitalizeTitle = (title) => {
  return title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const Projects = ({ language }) => {  // Accept language as a prop
  const projectList = [
    { id: '1', title: 'FILM CRITICISM PROJECT', titleAr: ar.project1, image: img1 },
    { id: '2', title: 'CULTURE FIELD PROJECT', titleAr: ar.project2, image: img2 },
    { id: '3', title: 'DIRIYAH BIENNIAL PROJECT', titleAr: ar.project3, image: img3 },
    { id: '4', title: 'JAMILA AND BUTHAINA PLAY PROJECT, MINISTRY OF CULTURE', titleAr: ar.project4, image: img4 },
    { id: '5', title: 'THE RETURN TO RIYADH FESTIVAL PROJECT', titleAr: ar.project5, image: img5 },
    { id: '6', title: 'UNESCO HERITAGE PROJECT MINISTRY OF CULTURE', titleAr: ar.project6, image: img6 },
    { id: '7', title: 'DAKAR RALLY PROJECT', titleAr: ar.project7, image: img7 },
    { id: '8', title: 'SAUDI TOUR PROJECT', titleAr: ar.project8, image: img8 },
    { id: '10', title: 'Medina Book Fair', titleAr: ar.project10, image: img10 },
    { id: '11', title: 'Ministry of Tourism', titleAr: ar.project11, image: img11 },
    { id: '12', title: 'Fairgrounds', titleAr: ar.project12, image: img12 },
    { id: '13', title: 'National Day', titleAr: ar.project13, image: img13 },
    { id: '14', title: 'Alfas project', titleAr: ar.project14, image: img14 },
    { id: '15', title: 'Space Project', titleAr: ar.project15, image: img15 },
    { id: '16', title: 'Almarai Project', titleAr: ar.project16, image: img16},
    { id: '17', title: 'Founding Day', titleAr: ar.project17, image: img17},
    { id: '18', title: 'Saudi Federation', titleAr: ar.project18, image: img18},
    { id: '19', title: 'LEAP Project', titleAr: ar.project19, image: img19},
    { id: '21', title: 'King Solomon Protectorate', titleAr: ar.project21, image: img21},
    { id: '22', title: 'Diriyah camps', titleAr: ar.project22, image: img22},
    { id: '23', title: 'Misk project', titleAr: ar.project23, image: img23},
    { id: '24', title: 'tea fair', titleAr: ar.project24, image: img24},
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <motion.div
      id="projects"
      initial="hidden"
      animate="show"
      className={`bg-primary py-10 ${language === 'ar' ? 'font-ar' : 'font-en'}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <Title text={language === 'ar' ? ar.projectsTitle : "Projects"} />  {/* Title based on language */}
        <Slider {...settings} className='mt-6'>
          {projectList.map((project, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg px-2">
              <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-heading transition-all duration-500 ease-in-out rounded-lg"></div>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-60 object-cover rounded-lg"
              />
              <motion.h3
                className="absolute inset-0 flex items-center justify-center text-lg md:text-md text-white
                  bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {capitalizeTitle(language === 'ar' ? project.titleAr : project.title)}
              </motion.h3>
              <Link to={`/projects/${project.id}/${project.title}`}>
                  <button className="absolute bottom-0 top-[80px] left-0 right-0 m-auto w-32 h-10 
                   bg-yellow-500 text-white py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 ease-in-out">
                    {language === 'ar' ? 'عرض المزيد' : 'Show More'}
                  </button>
                </Link>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Projects;