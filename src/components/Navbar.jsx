import React, { useState } from 'react';
import { FaBars, FaTimes, FaGlobeAmericas, FaGlobe, FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
import logo from "../assets/logo/english_logo.png";
import { motion } from 'framer-motion';

const Navbar = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: language === 'en' ? 'Home' : 'الرئيسية', href: '/' },
    { name: language === 'en' ? 'About Us' : 'من نحن', href: '/about' },
    { name: language === 'en' ? 'Services' : 'خدماتنا', href: '/services' },
    { name: language === 'en' ? 'Projects' : 'مشروعتنا', href: '/projects' },
    { name: language === 'en' ? 'Partners' : 'شركائنا', href: '/partners' },
    { name: language === 'en' ? 'Blog' : 'المدونة', href: '/blog' },
    { name: language === 'en' ? 'Contact' : 'اتصل بنا', href: '/contact' },
  ];
  const menuContainerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        staggerChildren: 0.1, // Delays each child animation
        delayChildren: 0.2, // Starts the children animation after a slight delay
      },
    },
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
  };
  return (
    <nav className={`bg-gradient-to-r from-black to-transparent 
    bg-cover bg-center py-4 text-white ${language === 'en' ? 'font-en' : 'font-ar'}`}>
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logo} 
                alt="Logo" 
                className={`h-[60px] md:h-[80px] p-2 md:p-4 rounded-md ${language === 'ar' ? 'ml-4' : 'mr-4'}`} 
              />
            </Link>
          </div>

          {/* Full Menu */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className={`flex items-baseline space-x-4 ${language === 'ar' ? 'space-x-reverse ml-3' : ''}`}>
              {menuItems.map((item) => (
                location.pathname === '/' && item.href === '/' ? (
                  <ScrollLink
                    key={item.href}
                    to="home"
                    smooth={true}
                    duration={500}
                    className="group relative inline-block px-4 py-2 border-2 border-transparent text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <span className="relative z-10 group-hover:text-heading transition-colors duration-300 ease-in-out">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 border border-heading scale-0 origin-bottom-right group-hover:scale-100 group-hover:origin-top-left transition-transform duration-300 ease-in-out rounded-md"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                  </ScrollLink>
                ) : (
                  <RouterLink
                    key={item.href}
                    to={item.href}
                    className="group relative inline-block px-4 py-2 border-2 border-transparent text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <span className="relative z-10 group-hover:text-heading transition-colors duration-300 ease-in-out">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 border border-heading scale-0 origin-bottom-right group-hover:scale-100 group-hover:origin-top-left transition-transform duration-300 ease-in-out rounded-md"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                  </RouterLink>
                )
              ))}
            </div>

            <div className={`flex space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              {/* Social Media Links */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="hover:text-heading" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} className="hover:text-heading" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} className="hover:text-heading" />
              </a>
              <a
                href="https://www.tiktok.com/@yourUsername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={20} className="hover:text-heading" />
              </a>
              <a
                href="https://wa.me/966557480817"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} className="hover:text-heading" />
              </a>
            </div>

            <button
              onClick={toggleLanguage}
              className="hover:text-heading hover:bg-opacity-80 px-3 py-2 rounded-md text-sm font-medium"
            >
              {language === 'en' ? <FaGlobeAmericas className="inline mr-2" /> : <FaGlobe className="inline ml-2" />}
              {language === 'en' ? 'AR' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
  <motion.button
    onClick={toggleMenu}
    className={`inline-flex items-center justify-center rounded-full
      transition-all duration-500 transform bg-secondary hover:bg-secondary-dark
      relative p-4 shadow-lg`}
    initial={false}
    animate={isMenuOpen ? "open" : "closed"}
    variants={{
      open: { scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 183, 3, 0.5)" },
      closed: { scale: 1, boxShadow: "none" },
    }}
  >
    {isMenuOpen ? <FaTimes className="h-6 w-6 text-white" /> : <FaBars className="h-6 w-6 text-white" />}
    
    {/* Outer Circle */}
    <motion.span
      className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out`}
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      variants={{
        open: { 
          opacity: 1, 
          scale: 1.2, 
          borderColor: "white", 
          borderWidth: "3px", 
          x: 0,    // Adjusted to ensure alignment
          y: 0     // Adjusted to ensure alignment
        },
        closed: { 
          opacity: 0, 
          scale: 0.8, 
          borderColor: "transparent", 
          borderWidth: "2px" 
        },
      }}
    ></motion.span>
    
    {/* Inner Circle */}
    <motion.span
      className={`absolute inset-1 rounded-full transition-all duration-500 ease-in-out`}
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      variants={{
        open: { 
          opacity: 1, 
          scale: 1, 
          borderColor: "white", 
          borderWidth: "1px", 
          x: 0,    // Adjusted to ensure alignment
          y: 0     // Adjusted to ensure alignment
        },
        closed: { 
          opacity: 0, 
          scale: 0.6, 
          borderColor: "transparent", 
          borderWidth: "0px" 
        },
      }}
    ></motion.span>
  </motion.button>
</div>




        </div>
      </div>

      {/* Mobile Menu
      <div className={`xl:hidden fixed top-[120px] bottom-0 left-0 right-0 bg-primary bg-opacity-90 
        z-50 transform transition-transform duration-500 ease-in-out 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-4 pt-4 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <RouterLink
              key={item.href}
              to={item.href}
              className="hover:text-heading hover:border-heading block px-3 py-2
               rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {item.name}
            </RouterLink>
          ))}
          <div className="flex flex-col space-y-4 mt-4 items-center justify-center m-auto">
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
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
              <FaTiktok size={20} />
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="w-full text-left m-auto flex items-center justify-center
             hover:text-heading  px-3 py-2 rounded-md text-base font-medium mt-4"
          >
            {language === 'en' ? <FaGlobeAmericas className="inline mr-2" /> : <FaGlobe className="inline ml-2" />}
            {language === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </div> */}
      <motion.div
    className={`xl:hidden fixed top-[120px] bottom-0 left-0 right-0 bg-primary bg-opacity-90 
      z-50 transform transition-transform duration-500 ease-in-out`}
    initial="hidden"
    animate={isMenuOpen ? "visible" : "hidden"}
    variants={menuContainerVariants}
  >
    <div className="px-4 pt-4 pb-3 space-y-1 sm:px-3">
      {menuItems.map((item) => (
        <motion.div
          key={item.href}
          variants={menuItemVariants}
          className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          onClick={toggleMenu}
        >
          <RouterLink
            to={item.href}
            className="hover:text-heading hover:border-heading transition-all duration-300 ease-in-out"
          >
            {item.name}
          </RouterLink>
        </motion.div>
      ))}
      
      <div className="flex flex-col space-y-4 mt-4 items-center justify-center m-auto">
        <motion.a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-heading"
          variants={menuItemVariants}
        >
          <FaLinkedin size={20} />
        </motion.a>
        <motion.a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-heading"
          variants={menuItemVariants}
        >
          <FaFacebook size={20} />
        </motion.a>
        <motion.a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-heading"
          variants={menuItemVariants}
        >
          <FaTwitter size={20} />
        </motion.a>
        <motion.a 
          href="https://www.pinterest.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-heading"
          variants={menuItemVariants}
        >
          <FaPinterest size={20} />
        </motion.a>
        <motion.a 
          href="https://www.tiktok.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-heading"
          variants={menuItemVariants}
        >
          <FaTiktok size={20} />
        </motion.a>
      </div>
      
      <motion.button
        onClick={toggleLanguage}
        className="w-full text-left m-auto flex items-center justify-center
         hover:text-heading  px-3 py-2 rounded-md text-base font-medium mt-4"
        variants={menuItemVariants}
      >
        {language === 'en' ? <FaGlobeAmericas className="inline mr-2" /> : <FaGlobe className="inline ml-2" />}
        {language === 'en' ? 'AR' : 'EN'}
      </motion.button>
    </div>
  </motion.div>
    </nav>
  );
};

export default Navbar;
