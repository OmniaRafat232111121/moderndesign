import React from 'react';
import logo from "../assets/Logo_footer.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import p1 from "../assets/projects/Gamers/image-68.jpg";
import p2 from "../assets/projects/BOOTHS/image-84.jpg";
import p3 from "../assets/projects/DIRIYAH BIENNIAL/image-29.jpg";
import p4 from "../assets/projects/cienma/image-10.jpg";
import p5 from "../assets/projects/ignight/image-77.jpg";
import p6 from "../assets/projects/Culture/image-16.jpg";

const Footer = ({ language }) => {
  return (
    <footer className={`background_footer text-yellow-400 p-6 md:p-10 cursor-pointer
     ${language === 'ar' ? 'font-ar' : 'font-en'}`}>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div >
          <img src={logo} alt="Lead Logo" className="mb-4 w-[50%] md:w-[75%] lg:w-[50%]  m-auto" />
        </div>

        {/* Main Menu */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-center md:text-left">
            {language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu'}</h4>
          <ul className="text-white space-y-2 text-center md:text-left">
            <li><a href="#home" className="hover:underline">
              {language === 'ar' ? 'الصفحة الرئيسية' : 'Home'}</a></li>
            <li><a href="#about" className="hover:underline">{language === 'ar' ? 'من نحن' : 'About'}</a></li>
            <li><a href="#projects" className="hover:underline">{language === 'ar' ? 'المشاريع' : 'Projects'}</a></li>
            <li><a href="#partners" className="hover:underline">{language === 'ar' ? 'الشركاء' : 'Partners'}</a></li>
            <li><a href="#blog" className="hover:underline">{language === 'ar' ? 'المدونة' : 'Blog'}</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-center md:text-left">
            {language === 'ar' ? 'جهات الاتصال' : 'Contacts'}</h4>
          <ul className="text-white space-y-2 text-center md:text-left">
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
              <span>+966 557480817</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
              <span>+966 55 366 6297</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaEnvelope className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <span>Moderndesign20202@gmail.com</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaMapMarkerAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <span>{language === 'ar' ? 'المملكة العربية السعودية، الرياض' : 'Saudi Arabia, Riyadh'}</span>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
            <a href="https://twitter.com" className="text-white hover:text-yellow-500"><FaTwitter /></a>
            <a href="https://youtube.com" className="text-white hover:text-yellow-500"><FaYoutube /></a>
            <a href="https://linkedin.com" className="text-white hover:text-yellow-500"><FaLinkedinIn /></a>
            <a href="https://instagram.com" className="text-white hover:text-yellow-500"><FaInstagram /></a>
            <a href="https://whatsapp.com" className="text-white hover:text-yellow-500"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-center md:text-left">
            {language === 'ar' ? 'المشاريع' : 'Projects'}</h4>
          <div className="grid grid-cols-3 gap-4 justify-items-center md:justify-items-start">
            <img src={p1} alt="Project 1" className="w-24 h-16 object-cover border-2 border-white" />
            <img src={p4} alt="Project 4" className="w-24 h-16 object-cover border-2 border-white" />
            <img src={p2} alt="Project 2" className="w-24 h-16 object-cover border-2 border-white" />
            <img src={p5} alt="Project 5" className="w-24 h-16 object-cover border-2 border-white" />
            <img src={p3} alt="Project 3" className="w-24 h-16 object-cover border-2 border-white" />
            <img src={p6} alt="Project 6" className="w-24 h-16 object-cover border-2 border-white" />
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-white">
        <p>{language === 'ar' ? 'جميع الحقوق محفوظة &copy; 2024 تم التطوير بواسطة أمنية رفعت' : 'All Rights Reserved &copy; 2024 Developed By OmniaRafat'}</p>
      </div>
    </footer>
  );
};

export default Footer;
