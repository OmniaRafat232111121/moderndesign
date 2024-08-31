import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"; // Importing the gallery styles

// Import images
import img1 from '../assets/projects/cienma/image-04.jpg';
import img_cienma from '../assets/projects/cienma/image-02.jpg';
import imgcienma from '../assets/projects/cienma/image-01.jpg';
import img__cienma from '../assets/projects/cienma/image-08.jpg';
import imgcienma_ from '../assets/projects/cienma/image-10.jpg';
import imgcienma2_ from '../assets/projects/cienma/image-11.jpg';
import imgcienma3_ from '../assets/projects/cienma/image-12.jpg';
import imgcienma4_ from '../assets/projects/cienma/image-13.jpg';



import img_C from '../assets/projects/Culture/image-15.jpg';
import img_u from '../assets/projects/Culture/image-16.jpg';
import img_l from '../assets/projects/Culture/image-17.jpg';
import img_t from '../assets/projects/Culture/image-18.jpg';
import img_tt from '../assets/projects/Culture/image-23.jpg';
import img_t_ from '../assets/projects/Culture/image-25.jpg';


import img2 from '../assets/projects/Culture/image-23.jpg';
import img3 from '../assets/projects/DIRIYAH BIENNIAL/image-29.jpg';
import img_3 from '../assets/projects/DIRIYAH BIENNIAL/image-30.jpg';

import img5 from '../assets/projects/RIYADH/image-43.jpg';

import img4 from '../assets/projects/mas/image-37.jpg';
import img6 from '../assets/projects/uni/image-50.jpg';
import img7 from '../assets/projects/DAKAR/image-54.jpg';



import img8 from '../assets/projects/Tour/image-56.jpg';

import img10 from '../assets/projects/Book Fair/main.jpg';




import img11 from '../assets/projects/tourism/main.jpg';
import img12 from '../assets/projects/Fairgrounds/main.jpg';
import img12_1 from '../assets/projects/Fairgrounds/1.jpg';
import img12_2 from '../assets/projects/Fairgrounds/3.jpg';
import img12_3 from '../assets/projects/Fairgrounds/4.jpg';
import img12_4 from '../assets/projects/Fairgrounds/5.jpg';
import img12_5 from '../assets/projects/Fairgrounds/6.jpg';
import img12_6 from '../assets/projects/Fairgrounds/7.jpg';
import img12_7 from '../assets/projects/Fairgrounds/8.jpg';
import img12_8 from '../assets/projects/Fairgrounds/9.jpg';
import img12_9 from '../assets/projects/Fairgrounds/10.jpg';

import img12_10 from '../assets/projects/Fairgrounds/11.jpg';
import img12_11 from '../assets/projects/Fairgrounds/12.jpg';

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


// (Import all other images as needed)

const ProjectDetails = () => {
  const { id ,title} = useParams(); // Get the project ID from the URL
console.log(title,"title")
  // Define the images for each project
  const projectImages = {
    '1': [
      { original: img1, thumbnail: img1 },
      { original: img_cienma, thumbnail: img_cienma },
      { original: imgcienma, thumbnail: imgcienma },
      { original: img__cienma, thumbnail: img__cienma },
      { original: imgcienma, thumbnail: imgcienma },
      { original: imgcienma_, thumbnail: imgcienma_ },
      { original: imgcienma2_, thumbnail: imgcienma2_ },
      { original: imgcienma3_, thumbnail: imgcienma3_ },
      { original: imgcienma4_, thumbnail: imgcienma4_ },

    ],
    '2': [
      { original: img2, thumbnail: img2 },
      { original: img_C, thumbnail: img_C },
      { original: img_u, thumbnail: img_u },
      { original: img_l, thumbnail: img_l },
      { original: img_t_, thumbnail: img_t_ },
      { original: img_tt, thumbnail: img_tt },

    ],
    '3': [
      { original: img3, thumbnail: img3 },
      { original: img_3, thumbnail: img_3 },

    ],
    '4': [
      { original: img4, thumbnail: img4 },

    ],

  '5': [
    { original: img5, thumbnail: img5 },

  ],
  '6': [
    { original: img6, thumbnail: img6 },

  ],
  
  '7': [
    { original: img7, thumbnail: img7 },

  ],
  '8': [
    { original: img8, thumbnail: img8 },

  ],
  '10': [
    { original: img10, thumbnail: img10 },

  ],
  '11': [
    { original: img11, thumbnail: img11 },

  ],
  '12': [
    { original: img12, thumbnail: img12 },
    { original: img12_1, thumbnail: img12_1 },
    { original: img12_2, thumbnail: img12_2 },
    { original: img12_3, thumbnail: img12_3},
    { original: img12_4, thumbnail: img12_4},

    { original: img12_5, thumbnail: img12_5},

    { original: img12_6, thumbnail: img12_6},
    { original: img12_7, thumbnail: img12_7},
    { original: img12_8, thumbnail: img12_8},
    { original: img12_9, thumbnail: img12_9},

  ],
  '13': [
    { original: img13, thumbnail: img13 },

  ],
  '14': [
    { original: img14, thumbnail: img14 },

  ],

  '15': [
    { original: img15, thumbnail: img15 },

  ],
  '16': [
    { original: img16, thumbnail: img16 },

  ],

  '17': [
    { original: img17, thumbnail: img17 },

  ],
  '18': [
    { original: img18, thumbnail: img18 },

  ],
  '19': [
    { original: img19, thumbnail: img19 },

  ],
  '21': [
    { original: img21, thumbnail: img21 },

  ],
  '21': [
    { original: img21, thumbnail: img21 },
    // Add more images for project 21 if available
  ],
  '22': [
    { original: img22, thumbnail: img22 },
    // Add more images for project 22 if available
  ],
  '23': [
    { original: img23, thumbnail: img23 },
    // Add more images for project 23 if available
  ],
  '24': [
    { original: img24, thumbnail: img24 },
    // Add more images for project 24 if available
  ],
  };

  // Get the images for the current project based on the ID
  const images = projectImages[id] || [];

  return (
    <div className="container mx-auto py-10 px-6 md:px-12">
            <h1 className='text-white mt-4 p-4'>{title}</h1>

      <ImageGallery items={images} />

    </div>
  );
};

export default ProjectDetails;
