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
import { ar } from '../locales/ar'; // Importing ar directly
import { Link as ScrollLink } from 'react-scroll';

const Navbar = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: language === 'ar' ? ar.home : "Home", href: "home" },
    { name: language === 'ar' ? ar.about : "About Us", href: "about" },
    { name: language === 'ar' ? ar.portfolio : "Our Work", href: "portfolio" },
    { name: language === 'ar' ? ar.services : "Services", href: "services" },
    { name: language === 'ar' ? ar.blog : "Blog", href: "blog" },
    { name: language === 'ar' ? ar.partners : "Partners", href: "partners" },
    { name: language === 'ar' ? ar.contact : "Contact", href: "contact" },
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
      className={`bg-primary border-b border-gray-200 ${
        language === 'ar' ? 'rtl' : 'ltr'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between h-[100px] items-center`}>
          
          {/* Logo Section */}
          <div className={`flex items-center ${language === 'ar' ? 'order-2' : 'order-1'}`}>
            <img src={logo} alt="Logo" className="h-[50px] sm:h-[80px]" />
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
          <div className={`hidden xl:flex items-center space-x-4 ${
            language === 'ar' ? 'order-1 flex-row-reverse' : 'order-2'}`}>
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
                  className="text-white hover:text-heading transition duration-300"
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
                    <FaGlobeAmericas className="mr-2" /> AR
                  </>
                ) : (
                  <>
                    <FaGlobe className="mr-2" /> EN
                  </>
                )}
              </button>
              <button
                className={`text-white bg-secondary ${language === 'en' ? 'font-en' : 'font-ar'}
                 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 `}
              >
                {language === 'ar' ? ar.button : "Contact Us"}
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
                {language === 'ar' ? ar.button : "Contact Us"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
