import React, { useState } from 'react';
import logo from "../assets/logo/Logo.png";
import {
  FaBars,
  FaTimes,
  FaGlobeAmericas,
  FaGlobe,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import LocalizedStrings from 'react-localization';
import { ar } from '../locales/ar';
import { Link as ScrollLink } from 'react-scroll';

let strings = new LocalizedStrings({
  en: {
    home: "Home",
    about: "About Us",
    portfolio: "Our Work",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    button: "Contact Us",
    partners: "Partners",
    modernDesign: "Modern Design", // Added English text
  },
  ar: {
    ...ar,
    modernDesign: "التصميم الحديث", // Added Arabic text
  },
});

const Navbar = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  strings.setLanguage(language);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: strings.home, href: "home" },
    { name: strings.about, href: "about" },
    { name: strings.portfolio, href: "portfolio" },
    { name: strings.services, href: "services" },
    { name: strings.blog, href: "blog" },
    { name: strings.partners, href: "partners" },
    { name: strings.contact, href: "contact" },
  ];

  const renderMenuItems = (isMobile = false) =>
    menuItems.map((item) => (
      <ScrollLink
        key={item.href}
        to={item.href}
        smooth={true}
        duration={500}
        className={`text-white hover:text-heading px-3 py-2 text-md cursor-pointer
          font-medium transition-colors duration-300 ${
            !isMobile ? 'border-transparent hover:border-secondary' : ''
          } ${language === 'en' ? 'font-en' : 'font-ar'}`}
        onClick={isMobile ? toggleMenu : undefined}
      >
        {item.name}
      </ScrollLink>
    ));

  return (
    <nav
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`bg-primary border-b border-gray-200`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-[100px] items-center`}>
          
          {/* Logo and Modern Design Text Section */}
          <div className={`flex items-center ${language === 'ar' ? 'order-2 ml-auto' : 'order-1 mr-auto'}`}>
            <img src={logo} alt="Logo" className={`h-[50px] sm:h-[130px] ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className={`text-heading cursor-pointer font-semibold  hover:text-white  ${language === 'en' ? 'font-en' : 'font-ar'}`}>
              {strings.modernDesign}
            </span>
          </div>

          {/* Hamburger Icon - Visible on md (768px) and lg (1024px) screens */}
          <div className="flex items-center md:flex lg:flex xl:hidden order-3">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none z-[100000]"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation + Contact + Language Section for larger screens */}
          <div className={`hidden xl:flex items-center space-x-4 
            ${language === 'ar' ? 'order-1 flex-row-reverse ml-auto' : 'order-2 mr-auto'}`}>
            {renderMenuItems()}
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin
                  size={24}
                  className="text-white hover:text-heading transition duration-300"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram
                  size={24}
                  className="text-white hover:text-heading transition duration-300 mr-3"
                />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook
                  size={24}
                  className="text-white hover:text-heading transition duration-300"
                />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter
                  size={24}
                  className="text-white hover:text-heading transition duration-300"
                />
              </a>
            </div>

            {/* Language Toggle and Contact Button */}
            <div className="flex items-center space-x-4">
              <button
                className={`text-white flex items-center px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ${language === 'en' ? 'font-en' : 'font-ar'}`}
                onClick={toggleLanguage}
              >
                {language === 'en' ? (
                  <>
                    <FaGlobeAmericas className="m-2" /> AR
                  </>
                ) : (
                  <>
                    <FaGlobe className="m-2" /> EN
                  </>
                )}
              </button>
              <button
                className={`text-white bg-secondary ${language === 'en' ? 'font-en' : 'font-ar'}
                 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 `}
              >
                {strings.button}
              </button>
            </div>
          </div>

          {/* Full-Screen Overlay Menu for md (768px) and lg (1024px) screens with Framer Motion */}
          <motion.div
            initial={{ x: '100%' }}
            animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed inset-0 bg-primary flex flex-col justify-center items-center 
            z-50"
          >
            {/* Close Button */}
            {renderMenuItems(true)}

            {/* Social Media Icons for md (768px) and lg (1024px) screens */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="text-white hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="text-white hover:text-gray-400" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="text-white hover:text-gray-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} className="text-white hover:text-gray-400" />
              </a>
            </div>

            {/* Language Toggle and Contact Button */}
            <div className="flex flex-col items-center space-y-4 mt-4">
              <button
                className={`text-white flex items-center px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ${language === 'en' ? 'font-en' : 'font-ar'}`}
                onClick={toggleLanguage}
              >
                {language === 'en' ? (
                  <>
                    <FaGlobeAmericas className="mr-2" /> AR
                  </>
                ) : (
                  <>
                    <FaGlobe className="mr-2" /> EN
                  </>
                )}
              </button>
              <button
                className="text-primary bg-white hover:bg-gray-100
                 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300"
                onClick={toggleMenu}
              >
                {strings.button}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
