import React, { useState } from 'react';
import { FaBars, FaTimes, FaGlobeAmericas, FaGlobe, FaLinkedin, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "../assets/logo/Logo.png";

const Navbar = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: language === 'en' ? 'Home' : 'الرئيسية', href: 'home' },
    { name: language === 'en' ? 'About Us' : 'من نحن', href: 'about' },
    { name: language === 'en' ? 'Services' : 'خدماتنا', href: 'services' },
    { name: language === 'en' ? 'Projects' : 'مشروعتنا', href: 'projects' },
    { name: language === 'en' ? 'Partners' : 'شروكائنا', href: 'partners' },

    { name: language === 'en' ? 'Blog' : 'المقالات', href: 'blog' },
    { name: language === 'en' ? 'Contact' : 'اتصل بنا', href: 'contact' },
  ];
  
  

  return (
    <nav className={`bg-primary text-white ${language === 'ar' ? 'font-ar' : 'font-en'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className={`h-[50px] sm:h-[150px] p-4 rounded-md  ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className={`flex items-baseline space-x-4 ${language === 'ar' ? 'space-x-reverse ml-3' : ''}`}>
              {menuItems.map((item) => (
                <Link
                key={item.href}
                to={item.href}  
                smooth={true} 
                duration={500}
                className=" hover:text-heading px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 border border-transparent hover:border-heading"

              >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className={`flex space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaPinterest size={20} />
              </a>
            </div>

            <button
              onClick={toggleLanguage}
              className="hover:text-heading  hover:bg-opacity-80 px-3 py-2 rounded-md text-sm font-medium"
            >
              {language === 'en' ? <FaGlobeAmericas className="inline mr-2" /> : <FaGlobe className="inline ml-2" />}
              {language === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary focus:outline-none"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                smooth={true}
                duration={500}
                className="hover:border-2 hover:border-heading block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaPinterest size={20} />
              </a>
            </div>
            <button
              onClick={toggleLanguage}
              className="w-full text-left hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              {language === 'en' ? <FaGlobeAmericas className="inline mr-2" /> : <FaGlobe className="inline ml-2" />}
              {language === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
