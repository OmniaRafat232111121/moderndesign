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
import img10_1 from '../assets/projects/Book Fair/1.jpg';
import img10_3 from '../assets/projects/Book Fair/3.jpg';
import img10_4 from '../assets/projects/Book Fair/4.jpg';
import img10_5 from '../assets/projects/Book Fair/5.jpg';
import img10_6 from '../assets/projects/Book Fair/6.jpg';
import img10_7 from '../assets/projects/Book Fair/7.jpg';
import img10_8 from '../assets/projects/Book Fair/8.jpg';
import img10_9 from '../assets/projects/Book Fair/9.jpg';
import img10_10 from '../assets/projects/Book Fair/10.jpg';
import img10_11 from '../assets/projects/Book Fair/11.jpg';
import img10_13 from '../assets/projects/Book Fair/13.jpg';
import img10_14 from '../assets/projects/Book Fair/14.jpg';
import img10_15 from '../assets/projects/Book Fair/15.jpg';
import img10_16 from '../assets/projects/Book Fair/16.jpg';
import img10_17 from '../assets/projects/Book Fair/17.jpg';
import img10_18 from '../assets/projects/Book Fair/18.jpg';
import img10_19 from '../assets/projects/Book Fair/19.jpg';
import img10_20 from '../assets/projects/Book Fair/20.jpg';
import img10_21 from '../assets/projects/Book Fair/21.jpg';
import img10_22 from '../assets/projects/Book Fair/22.jpg';
import img10_24 from '../assets/projects/Book Fair/24.jpg';
import img10_25 from '../assets/projects/Book Fair/25.jpg';
import img10_26 from '../assets/projects/Book Fair/26.jpg';
import img10_27 from '../assets/projects/Book Fair/27.jpg';
import img10_28 from '../assets/projects/Book Fair/28.jpg';
import img10_29 from '../assets/projects/Book Fair/29.jpg';



import img11 from '../assets/projects/tourism/main.jpg';
import img11_20 from '../assets/projects/tourism/20.jpg';
import img11_22 from '../assets/projects/tourism/22.jpg';
import img11_23 from '../assets/projects/tourism/23.jpg';
import img11_24 from '../assets/projects/tourism/24.jpg';
import img11_25 from '../assets/projects/tourism/25.jpg';
import img11_26 from '../assets/projects/tourism/26.jpg';
import img11_27 from '../assets/projects/tourism/27.jpg';
import img11_28 from '../assets/projects/tourism/28.jpg';
import img11_29 from '../assets/projects/tourism/29.jpg';



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


import img13 from '../assets/projects/National Day/main.jpg';


import img13_1 from '../assets/projects/National Day/8.jpg';
import img13_2 from '../assets/projects/National Day/9.jpg';
import img13_3 from '../assets/projects/National Day/10.jpg';
import img13_4 from '../assets/projects/National Day/13.jpg';
import img13_5 from '../assets/projects/National Day/14.jpg';
import img13_6 from '../assets/projects/National Day/15.jpg';
import img13_7 from '../assets/projects/National Day/16.jpg';
import img13_8 from '../assets/projects/National Day/17.jpg';
import img13_9 from '../assets/projects/National Day/18.jpg';

import img14 from '../assets/projects/Alfas project/main.jpg';
import img14_2 from '../assets/projects/Alfas project/2.jpg';
import img14_3 from '../assets/projects/Alfas project/3.jpg';
import img14_4 from '../assets/projects/Alfas project/4.jpg';
import img14_5 from '../assets/projects/Alfas project/5.jpg';
import img14_6 from '../assets/projects/Alfas project/6.jpg';
import img14_7 from '../assets/projects/Alfas project/7.jpg';
import img14_9 from '../assets/projects/Alfas project/9.jpg';
import img14_10 from '../assets/projects/Alfas project/10.jpg';
import img14_11 from '../assets/projects/Alfas project/11.jpg';
import img14_12 from '../assets/projects/Alfas project/12.jpg';
import img14_13 from '../assets/projects/Alfas project/13.jpg';
import img14_14 from '../assets/projects/Alfas project/14.jpg';
import img14_15 from '../assets/projects/Alfas project/15.jpg';


import img15 from '../assets/projects/space/main.jpg';
import img15_1 from '../assets/projects/space/1.jpg';
import img15_2 from '../assets/projects/space/2.jpg';
import img15_3 from '../assets/projects/space/3.jpg';
import img15_4 from '../assets/projects/space/4.jpg';
import img15_5 from '../assets/projects/space/5.jpg';
import img15_6 from '../assets/projects/space/6.jpg';
import img15_7 from '../assets/projects/space/7.jpg';
import img15_8 from '../assets/projects/space/8.jpg';
import img15_9 from '../assets/projects/space/9.jpg';
import img15_10 from '../assets/projects/space/10.jpg';
import img15_11 from '../assets/projects/space/11.jpg';
import img15_12 from '../assets/projects/space/12.jpg';
import img15_13 from '../assets/projects/space/13.jpg';
import img15_14 from '../assets/projects/space/14.jpg';
import img15_15 from '../assets/projects/space/15.jpg';
import img15_16 from '../assets/projects/space/16.jpg';
import img15_17 from '../assets/projects/space/17.jpg';
import img15_18 from '../assets/projects/space/18.jpg';





import img16 from '../assets/projects/Almarai Project/main.jpg';
import img16_3 from '../assets/projects/Almarai Project/3.jpg';
import img16_4 from '../assets/projects/Almarai Project/4.jpg';
import img16_6 from '../assets/projects/Almarai Project/6.jpg';
import img16_7 from '../assets/projects/Almarai Project/7.jpg';



import img17 from '../assets/projects/Founding Day/main.jpg';

import img18 from '../assets/projects/Saudi Federation/main.jpg';
import img18_1 from '../assets/projects/Saudi Federation/1.jpg';
import img18_2 from '../assets/projects/Saudi Federation/2.jpg';
import img18_3 from '../assets/projects/Saudi Federation/3.jpg';
import img18_4 from '../assets/projects/Saudi Federation/4.jpg';
import img18_6 from '../assets/projects/Saudi Federation/6.jpg';
import img18_7 from '../assets/projects/Saudi Federation/7.jpg';
import img18_8 from '../assets/projects/Saudi Federation/8.jpg';
import img18_9 from '../assets/projects/Saudi Federation/9.jpg';
import img18_10 from '../assets/projects/Saudi Federation/10.jpg';
import img18_11 from '../assets/projects/Saudi Federation/11.jpg';
import img18_12 from '../assets/projects/Saudi Federation/12.jpg';
import img18_13 from '../assets/projects/Saudi Federation/13.jpg';



import img19 from '../assets/projects/LEAP Project/main.jpg';
import img19_1 from '../assets/projects/LEAP Project/1.jpg';
import img19_3 from '../assets/projects/LEAP Project/3.jpg';
import img19_4 from '../assets/projects/LEAP Project/4.jpg';
import img19_5 from '../assets/projects/LEAP Project/5.jpg';
import img19_6 from '../assets/projects/LEAP Project/6.jpg';

import img21 from '../assets/projects/King Solomon Protectorate/main.jpg';
import img21_1 from '../assets/projects/King Solomon Protectorate/1.jpg';
import img21_3 from '../assets/projects/King Solomon Protectorate/3.jpg';
import img21_4 from '../assets/projects/King Solomon Protectorate/4.jpg';
import img21_5 from '../assets/projects/King Solomon Protectorate/5.jpg';
import img21_6 from '../assets/projects/King Solomon Protectorate/6.jpg';
import img21_7 from '../assets/projects/King Solomon Protectorate/7.jpg';
import img21_8 from '../assets/projects/King Solomon Protectorate/8.jpg';
import img21_9 from '../assets/projects/King Solomon Protectorate/9.jpg';
import img21_10 from '../assets/projects/King Solomon Protectorate/10.jpg';
import img21_11 from '../assets/projects/King Solomon Protectorate/11.jpg';
import img21_12 from '../assets/projects/King Solomon Protectorate/12.jpg';
import img21_13 from '../assets/projects/King Solomon Protectorate/13.jpg';
import img21_14 from '../assets/projects/King Solomon Protectorate/14.jpg';

import img22 from '../assets/projects/Diriyah camps/main.jpg';
import img22_1 from '../assets/projects/Diriyah camps/1.jpg';
import img22_2 from '../assets/projects/Diriyah camps/2.jpg';
import img22_3 from '../assets/projects/Diriyah camps/3.jpg';
import img22_5 from '../assets/projects/Diriyah camps/5.jpg';
import img22_6 from '../assets/projects/Diriyah camps/6.jpg';
import img22_7 from '../assets/projects/Diriyah camps/7.jpg';



import img23 from '../assets/projects/Misk project/main.jpg';
import img23_2 from '../assets/projects/Misk project/2.jpg';
import img23_3 from '../assets/projects/Misk project/3.jpg';
import img23_4 from '../assets/projects/Misk project/4.jpg';
import img23_5 from '../assets/projects/Misk project/5.jpg';
import img23_6 from '../assets/projects/Misk project/6.jpg';
import img23_7 from '../assets/projects/Misk project/7.jpg';
import img23_8 from '../assets/projects/Misk project/8.jpg';
import img23_9 from '../assets/projects/Misk project/9.jpg';
import img23_10 from '../assets/projects/Misk project/10.jpg';
import img23_11 from '../assets/projects/Misk project/11.jpg';



import img24 from '../assets/projects/tea fair/main.jpg';
import img24_1 from '../assets/projects/tea fair/1.jpg';
import img24_2 from '../assets/projects/tea fair/2.jpg';
import img24_5 from '../assets/projects/tea fair/5.jpg';
import img24_6 from '../assets/projects/tea fair/6.jpg';
import img24_7 from '../assets/projects/tea fair/7.jpg';
import img24_8 from '../assets/projects/tea fair/8.jpg';
import img24_9 from '../assets/projects/tea fair/9.jpg';
import img24_10 from '../assets/projects/tea fair/10.jpg';
import img24_11 from '../assets/projects/tea fair/11.jpg';
import img24_12 from '../assets/projects/tea fair/12.jpg';
import img24_13 from '../assets/projects/tea fair/13.jpg';
import img24_14 from '../assets/projects/tea fair/14.jpg';


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
    { original: img10_1, thumbnail: img10_1 },
    { original: img10_3, thumbnail: img10_3 },
    { original: img10_4, thumbnail: img10_4 },
    { original: img10_5, thumbnail: img10_5 },
    { original: img10_6, thumbnail: img10_6 },
    { original: img10_7, thumbnail: img10_7 },
    { original: img10_8, thumbnail: img10_8 },
    { original: img10_9, thumbnail: img10_9 },
    { original: img10_10, thumbnail: img10_10 },
    { original: img10_11, thumbnail: img10_11 },
    { original: img10_13, thumbnail: img10_13 },
    { original: img10_14, thumbnail: img10_14 },
    { original: img10_15, thumbnail: img10_15 },
    { original: img10_16, thumbnail: img10_16 },
    { original: img10_17, thumbnail: img10_17 },
    { original: img10_18, thumbnail: img10_18 },
    { original: img10_19, thumbnail: img10_19 },
    { original: img10_20, thumbnail: img10_20 },
    { original: img10_21, thumbnail: img10_21 },
    { original: img10_22, thumbnail: img10_22 },
    { original: img10_24, thumbnail: img10_24 },
    { original: img10_25, thumbnail: img10_25 },
    { original: img10_26, thumbnail: img10_26 },
    { original: img10_27, thumbnail: img10_27 },
    { original: img10_28, thumbnail: img10_28 },
    { original: img10_29, thumbnail: img10_29 },
],

 '11': [
    { original: img11, thumbnail: img11 },
    { original: img11_20, thumbnail: img11_20 },
    { original: img11_22, thumbnail: img11_22 },
    { original: img11_23, thumbnail: img11_23 },
    { original: img11_24, thumbnail: img11_24 },
    { original: img11_25, thumbnail: img11_25 },
    { original: img11_26, thumbnail: img11_26 },
    { original: img11_27, thumbnail: img11_27 },
    { original: img11_28, thumbnail: img11_28 },
    { original: img11_29, thumbnail: img11_29 },
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
    { original: img13_1, thumbnail: img13_1 },
    { original: img13_2, thumbnail: img13_2 },
    { original: img13_3, thumbnail: img13_3 },
    { original: img13_4, thumbnail: img13_4 },
    { original: img13_5, thumbnail: img13_5 },
    { original: img13_6, thumbnail: img13_6 },
    { original: img13_7, thumbnail: img13_7 },
    { original: img13_8, thumbnail: img13_8 },
    { original: img13_9, thumbnail: img13_9 },
],

  '14': [
    { original: img14, thumbnail: img14 },

    { original: img14_2, thumbnail: img14_2 },
    { original: img14_3, thumbnail: img14_3 },
    { original: img14_4, thumbnail: img14_4 },
    { original: img14_5, thumbnail: img14_5 },
    { original: img14_6, thumbnail: img14_6 },
    { original: img14_7, thumbnail: img14_7 },
    { original: img14_9, thumbnail: img14_9 },
    { original: img14_10, thumbnail: img14_10 },
    { original: img14_11, thumbnail: img14_11 },
    { original: img14_12, thumbnail: img14_12 },
    { original: img14_13, thumbnail: img14_13 },
    { original: img14_14, thumbnail: img14_14 },
    { original: img14_15, thumbnail: img14_15 },
],


 '15': [
    { original: img15, thumbnail: img15 },
    { original: img15_1, thumbnail: img15_1 },
    { original: img15_2, thumbnail: img15_2 },
    { original: img15_3, thumbnail: img15_3 },
    { original: img15_4, thumbnail: img15_4 },
    { original: img15_5, thumbnail: img15_5 },
    { original: img15_6, thumbnail: img15_6 },
    { original: img15_7, thumbnail: img15_7 },
    { original: img15_8, thumbnail: img15_8 },
    { original: img15_9, thumbnail: img15_9 },
    { original: img15_10, thumbnail: img15_10 },
    { original: img15_11, thumbnail: img15_11 },
    { original: img15_12, thumbnail: img15_12 },
    { original: img15_13, thumbnail: img15_13 },
    { original: img15_14, thumbnail: img15_14 },
    { original: img15_15, thumbnail: img15_15 },
    { original: img15_16, thumbnail: img15_16 },
    { original: img15_17, thumbnail: img15_17 },
    { original: img15_18, thumbnail: img15_18 },
],

'16': [
    { original: img16, thumbnail: img16 },
    { original: img16_3, thumbnail: img16_3 },
    { original: img16_4, thumbnail: img16_4 },
    { original: img16_6, thumbnail: img16_6 },
    { original: img16_7, thumbnail: img16_7 },
],


  '17': [
    { original: img17, thumbnail: img17 },

  ],
 '18': [
    { original: img18, thumbnail: img18 },
    { original: img18_1, thumbnail: img18_1 },
    { original: img18_2, thumbnail: img18_2 },
    { original: img18_3, thumbnail: img18_3 },
    { original: img18_4, thumbnail: img18_4 },
    { original: img18_6, thumbnail: img18_6 },
    { original: img18_7, thumbnail: img18_7 },
    { original: img18_8, thumbnail: img18_8 },
    { original: img18_9, thumbnail: img18_9 },
    { original: img18_10, thumbnail: img18_10 },
    { original: img18_11, thumbnail: img18_11 },
    { original: img18_12, thumbnail: img18_12 },
    { original: img18_13, thumbnail: img18_13 },
],

 '19': [
    { original: img19, thumbnail: img19 },
    { original: img19_1, thumbnail: img19_1 },
    { original: img19_3, thumbnail: img19_3 },
    { original: img19_4, thumbnail: img19_4 },
    { original: img19_5, thumbnail: img19_5 },
    { original: img19_6, thumbnail: img19_6 },
],

  '21': [
    { original: img21, thumbnail: img21 },
    { original: img21_1, thumbnail: img21_1 },
    { original: img21_3, thumbnail: img21_3 },
    { original: img21_4, thumbnail: img21_4 },
    { original: img21_5, thumbnail: img21_5 },
    { original: img21_6, thumbnail: img21_6 },
    { original: img21_7, thumbnail: img21_7 },
    { original: img21_8, thumbnail: img21_8 },
    { original: img21_9, thumbnail: img21_9 },
    { original: img21_10, thumbnail: img21_10 },
    { original: img21_11, thumbnail: img21_11 },
    { original: img21_12, thumbnail: img21_12 },
    { original: img21_13, thumbnail: img21_13 },
    { original: img21_14, thumbnail: img21_14 },
],

  '21': [
    { original: img21, thumbnail: img21 },
    // Add more images for project 21 if available
  ],
 '22': [
    { original: img22, thumbnail: img22 },
    { original: img22_1, thumbnail: img22_1 },
    { original: img22_2, thumbnail: img22_2 },
    { original: img22_3, thumbnail: img22_3 },
    { original: img22_5, thumbnail: img22_5 },
    { original: img22_6, thumbnail: img22_6 },
    { original: img22_7, thumbnail: img22_7 },
],

'23': [
    { original: img23, thumbnail: img23 },
    { original: img23_2, thumbnail: img23_2 },
    { original: img23_3, thumbnail: img23_3 },
    { original: img23_4, thumbnail: img23_4 },
    { original: img23_5, thumbnail: img23_5 },
    { original: img23_6, thumbnail: img23_6 },
    { original: img23_7, thumbnail: img23_7 },
    { original: img23_8, thumbnail: img23_8 },
    { original: img23_9, thumbnail: img23_9 },
    { original: img23_10, thumbnail: img23_10 },
    { original: img23_11, thumbnail: img23_11 },
],

'24': [
    { original: img24, thumbnail: img24 },
    { original: img24_1, thumbnail: img24_1 },
    { original: img24_2, thumbnail: img24_2 },
    { original: img24_5, thumbnail: img24_5 },
    { original: img24_6, thumbnail: img24_6 },
    { original: img24_7, thumbnail: img24_7 },
    { original: img24_8, thumbnail: img24_8 },
    { original: img24_9, thumbnail: img24_9 },
    { original: img24_10, thumbnail: img24_10 },
    { original: img24_11, thumbnail: img24_11 },
    { original: img24_12, thumbnail: img24_12 },
    { original: img24_13, thumbnail: img24_13 },
    { original: img24_14, thumbnail: img24_14 },
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
