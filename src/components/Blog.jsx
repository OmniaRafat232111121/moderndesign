import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import blogImage1 from '../assets/designBooth.jpeg';  // Adjust path to your image
import blogImage2 from '../assets/collab.jpeg';  // Adjust path to your second image

const Blog = ({ language }) => {
  const articles = [
    {
      id: 1,
      titleEn: 'Booth Design and Implementation',
      titleAr: 'تصميم وتنفيذ البوثات',
      image: blogImage1,
      excerptEn: 'Learn about key considerations for designing and executing booths in various events.',
      excerptAr: 'تعرف على الجوانب الرئيسية لتصميم وتنفيذ البوثات في مختلف المناسبات.',
      link: '/article/booth-design',
    },
    {
      id: 2,
      titleEn: 'Exhibition and Conference Design',
      titleAr: 'تصميم المعارض والمؤتمرات',
      image: blogImage2,
      excerptEn: 'Explore strategies for designing and organizing successful exhibitions and conferences.',
      excerptAr: 'استكشف استراتيجيات تصميم وتنظيم المعارض والمؤتمرات الناجحة.',
      link: '/article/exhibition-conference-design',
    },
  ];

  return (
    <div className={`max-w-screen-lg mx-auto p-4 ${language === 'ar' ? 'font-ar text-right' : 'font-en text-left'}`}>
      <h2 className="text-3xl font-semibold text-white text-center mb-6">
        {language === 'ar' ? 'مقالات المدونة' : 'Blog Articles'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article) => (
          <RouterLink 
            to={article.link} 
            key={article.id} 
            className="block shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative w-full h-[250px] overflow-hidden">
              <img src={article.image} alt={language === 'ar' ? article.titleAr : article.titleEn} className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105" />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {language === 'ar' ? article.titleAr : article.titleEn}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? article.excerptAr : article.excerptEn}
              </p>
            </div>
          </RouterLink>
        ))}
      </div>
    </div>
  );
};

export default Blog;
