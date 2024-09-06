import React, { useState } from 'react';
import { FaBars, FaTimes, FaGlobeAmericas, FaGlobe, FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaTiktok, FaWhatsapp, FaInstagram } from 'react-icons/fa';
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
    { name: language === 'en' ? 'Blog' : 'المدونة', href: '/blog' },

    { name: language === 'en' ? 'Partners' : 'شركائنا', href: '/partners' },
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
  <div className="max-w-screen-xl mx-auto px-2">

        <div className="flex items-center justify-between h-24 px-3">
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
          <div className={`flex space-x-4 lg:space-x-2 xl:space-x-3 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
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
                href="https://www.linkedin.com/in/modern-design-a78203325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} className="hover:text-heading" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564932237031&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} className="hover:text-heading" />
              </a>
              <a
                href="https://www.instagram.com/moderndesign200/profilecard/?igsh=azBuczVoZ2YxMnk3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} className="hover:text-heading" />
              </a>
              
              <a
                href="https://www.tiktok.com/@modern.design296?_t=8p9GqXbEvp9&_r=1"
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
          <div className="xl:hidden">
  <motion.button
    onClick={toggleMenu}
    className={`inline-flex items-center justify-center rounded-full
      transition-all duration-500 transform bg-secondary hover:bg-secondary-dark
      relative p-4 shadow-lg`}
    initial={{ scale: 1.3, opacity: 1 }}
    animate="animated"  // إضافة حركة مستمرة
    variants={{
      animated: { 
        scale: [1.1, 1.2, 1.1], 
        opacity: [0.8, 1, 0.8], 
        boxShadow: ["rgba(255, 183, 3, 0.4)", "0px 0px 20px rgba(255, 183, 3, 0.7)", "0px 0px 15px rgba(255, 183, 3, 0.9)"],
        transition: {
          duration: 20,  // زيادة مدة الحركة لبطء التأثير
          repeat: Infinity,  // تكرار بلا نهاية
          repeatType: "loop",
        }
      },
    
      open: { 
        scale: 1, 
        opacity: 1, 
        boxShadow: "0px 0px 20px rgba(255, 183, 3, 0.7)",
        transition: { duration: 0.5 }  
      },
      closed: { 
        scale: 1.1, 
        opacity: 0.8, 
        boxShadow: "0px 0px 15px white",
        border: "3px solid white", 
        borderRadius: "50%", 
        transition: { duration: 1.2 },  
      },
    }}
    // whileHover={{ scale: 0.8, boxShadow: "4px 30px 25px rgba(255, 183, 3)" }} // تأثير التمرير
  >
    {isMenuOpen ? <FaTimes className="h-6 w-6 text-white" /> : <FaBars className="h-6 w-6 text-white" />}

    {/* الدائرة الخارجية */}
    <motion.span
      className={`absolute inset-0 rounded-full border-[3px] border-secondary transition-all duration-500 ease-in-out`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.6, 1],
        boxShadow: [
          "0px 0px 10px rgba(255, 183, 3, 0.5)",
          "0px 0px 15px rgba(255, 183, 3, 0.7)",
          "0px 0px 10px rgba(255, 183, 3, 0.5)"
        ],
        transition: {
          duration: 2, // مدة التكرار الكامل
          repeat: Infinity, // يكرر الحركة بلا نهاية
          repeatType: "loop",
        }
      }}
    ></motion.span>
  </motion.button>
</div>








        </div>
      </div>

      <motion.div
  className={`xl:hidden fixed top-[125px] bottom-0 left-0 right-0 bg-primary bg-opacity-90  
    z-50 transform transition-transform duration-500 ease-in-out`}
  initial="hidden"
  animate={isMenuOpen ? "visible" : "hidden"}
  variants={menuContainerVariants}
>
  <div className="px-4 pt-4 pb-3 space-y-1 sm:px-3 flex flex-col">
    {menuItems.map((item) => (
      <RouterLink
        key={item.href}
        to={item.href}
        className="group relative inline-block px-4 py-2 border-2 border-transparent text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out"
      >
        <span className="relative z-10 group-hover:text-heading transition-colors duration-300 ease-in-out">
          {item.name}
        </span>
        <span className="absolute inset-0 border border-heading scale-0 origin-bottom-right group-hover:scale-100 group-hover:origin-top-left transition-transform duration-300 ease-in-out rounded-md"></span>
      </RouterLink>
    ))}
    
    {/* Social Links */}
    <div className="flex flex-col space-y-4 mt-4 items-center justify-center m-auto">
      <motion.a 
        href="https://www.linkedin.com/in/modern-design-a78203325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-heading"
        variants={menuItemVariants}
      >
        <FaLinkedin size={20} />
      </motion.a>
      <motion.a 
        href="https://www.facebook.com/profile.php?id=61564932237031&mibextid=ZbWKwL"
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-heading"
        variants={menuItemVariants}
      >
        <FaFacebook size={20} />
      </motion.a>
      <motion.a 
        href="https://www.tiktok.com/@modern.design296?_t=8p9GqXbEvp9&_r=1"
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-heading"
        variants={menuItemVariants}
      >
        <FaTiktok size={20} />
      </motion.a>
    </div>
    
    {/* Call-to-Actions */}
    <motion.button
      onClick={toggleLanguage}
      className="w-full text-left m-auto flex items-center justify-center hover:text-heading px-3 py-2 rounded-md text-base font-medium mt-4"
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
