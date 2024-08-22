import React, { useState } from 'react';
import { FaBars, FaTimes, FaGlobeAmericas, FaGlobe, FaLinkedin, FaFacebook, FaTwitter, FaPinterest, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "../assets/logo/english_logo.png";

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
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className={`h-[80px] p-4 rounded-md ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
          </div>

          <div className="hidden md:flex items-center space-x-6">
          <div className={`flex items-baseline space-x-4 ${language === 'ar' ? 'space-x-reverse ml-3' : ''}`}>
  {menuItems.map((item) => (
    <Link
      key={item.href}
      to={item.href}
      smooth={true}
      duration={500}
      className="group relative inline-block px-4 py-2 border-2 border-transparent text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out"
    >
      <span className="relative z-10 group-hover:text-heading transition-colors duration-300 ease-in-out">
        {item.name}
      </span>
      <span className="absolute inset-0 border border-heading scale-0 origin-bottom-right group-hover:scale-100 group-hover:origin-top-left transition-transform duration-300 ease-in-out rounded-md"></span>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
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
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-heading">
                <FaTiktok size={20} />
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

          <div className="md:hidden">
  <button
    onClick={toggleMenu}
    className={`inline-flex items-center justify-center p-3 rounded-full
       transition-all duration-500 transform bg-secondary hover:bg-secondary-dark
       relative ${isMenuOpen ? 'border-4 border-yellow-500' : 'border-4 border-transparent'}`}
  >
    {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
    <span
      className={`absolute inset-0 rounded-full  transition-all duration-500 ease-in-out
        ${isMenuOpen ? ' opacity-100 scale-100' : 'border-transparent opacity-0 scale-50'}`}
    ></span>
  </button>
</div>


        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[80px] bottom-0 left-0 right-0 bg-primary bg-opacity-90 
        z-50 transform transition-transform duration-500 ease-in-out 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-4 pt-4 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              className="hover:text-heading hover:border-heading block px-3 py-2
               rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
