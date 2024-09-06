import React from 'react';
import logo from "../assets/Logo_footer.png";
import english_logo from "../assets/logo/Saudi vision 2030 Logo-01.png";
import expo from "../assets/logo/expo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import p1 from "../assets/projects/Gamers/image-68.jpg";
import p2 from "../assets/projects/BOOTHS/image-84.jpg";
import p3 from "../assets/projects/DIRIYAH BIENNIAL/image-29.jpg";
import p4 from "../assets/projects/cienma/image-10.jpg";
import p5 from "../assets/projects/ignight/image-77.jpg";
import p6 from "../assets/projects/Culture/image-16.jpg";

const Footer = ({ language }) => {
  return (
    <footer className={`background_footer text-yellow-400 p-6 md:p-10 cursor-pointer ${language === 'ar' ? 'rtl font-ar text-right' : 'ltr font-en text-left'}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logos */}
        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
          <img src={english_logo} alt="Saudi Vision 2030 Logo" className="mb-4 w-24 md:w-32 lg:w-24 mx-auto mt-3" />
          <img src={logo} alt="Lead Logo" className="mb-4 w-36 md:w-32 lg:w-24 mx-auto" />
          <img src={expo} alt="Expo Logo" className="mb-4 w-24 md:w-32 lg:w-24 mx-auto mt-3" />
        </div>

        {/* Main Menu */}
        <div>
        <h4 className={`font-bold text-lg mb-4 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
  {language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu'}
</h4>
<ul className={`text-white space-y-2 text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
  <li>
    <a href="#home" className="hover:underline">
      {language === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
    </a>
  </li>
  <li>
    <a href="#about" className="hover:underline">
      {language === 'ar' ? 'من نحن' : 'About'}
    </a>
  </li>
  <li>
    <a href="#projects" className="hover:underline">
      {language === 'ar' ? 'المشاريع' : 'Projects'}
    </a>
  </li>
  <li>
    <a href="#partners" className="hover:underline">
      {language === 'ar' ? 'الشركاء' : 'Partners'}
    </a>
  </li>
  <li>
    <a href="#blog" className="hover:underline">
      {language === 'ar' ? 'المدونة' : 'Blog'}
    </a>
  </li>
</ul>

        </div>

        {/* Contacts */}
        <div>
        <h4 className={`font-bold text-lg mb-4 text-center md:${language === 'ar' ? 'text-right' : 'text-left'}`}>
  {language === 'ar' ? 'جهات الاتصال' : 'Contacts'}
</h4>

          <ul className="text-white space-y-2 text-center md:text-left">
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a href="https://wa.me/966557480817" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +966 557480817
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a href="https://wa.me/966553666297" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +966 55 366 6297
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaEnvelope className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a href="mailto:Moderndesign20202@gmail.com" className="hover:underline">
                Moderndesign20202@gmail.com
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaMapMarkerAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {language === 'ar' ? 'الخالدية، الرياض، السعودية' : 'Al-Khalidiya, Riyadh, Saudi Arabia'}
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaMapMarkerAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {language === 'ar' ? 'غبيرا, الرياض، السعودية' : 'Ghubairah, Riyadh, Saudi Arabia'}
              </a>
            </li>
          </ul>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 rtl:space-x-reverse">
            <a href="https://www.facebook.com" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
            <a href="https://www.linkedin.com" className="text-white hover:text-yellow-500"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com" className="text-white hover:text-yellow-500"><FaInstagram /></a>
            <a href="https://www.tiktok.com" className="text-white hover:text-yellow-500"><FaTiktok /></a>
            <a href="https://wa.me/966557480817" className="text-white hover:text-yellow-500"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Projects */}
        <div>
        <h4 className={`font-bold text-lg mb-4 text-center md:${language === 'ar' ? 'text-right' : 'text-left'}`}>
  {language === 'ar' ? 'المشاريع' : 'Projects'}
</h4>

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
        <p>
          {language === 'ar' ? (
            <>
              جميع الحقوق محفوظة &copy; 2024 تم التطوير بواسطة{' '}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">
                أمنية رافت
              </a>{' '}
              inspire By{' '}
              <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:underline">
                اسلام مجدي
              </a>
            </>
          ) : (
            <>
              All Rights Reserved &copy; 2024 Developed By{' '}
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">
                Omnia Rafat
              </a>{' '}
              inspire By{' '}
              <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className=" cursor-pointer hover:underline">
                Eslam Magdy
              </a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
