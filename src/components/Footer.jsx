import React from 'react';
import logo from "../assets/لوجوهات على الموقع.png";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import p1 from "../assets/projects/Gamers/image-68.jpg";
import p2 from "../assets/projects/BOOTHS/image-84.jpg";
import p3 from "../assets/projects/DIRIYAH BIENNIAL/image-29.jpg";
import p4 from "../assets/projects/cienma/image-10.jpg";
import p5 from "../assets/projects/ignight/image-77.jpg";
import p6 from "../assets/projects/Culture/image-16.jpg";

const Footer = ({ language }) => {
  return (
    <footer className={`background_footer text-yellow-400 p-6 md:p-10 cursor-pointer ${language === 'ar' ? 'rtl font-ar text-right' : 'ltr font-en text-left'}`}>
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        {/* Logos */}
        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
         <img src={logo} alt="Logo" className='w-[400px]' />
        </div>

        {/* Conditional column order for RTL */}
        {language === 'ar' ? (
          <>
            {/* Main Menu - First for Arabic */}
            <div>
            <h4 className="font-bold text-lg mb-4 text-center md:text-right">
              القائمة الرئيسية
            </h4>
            <ul className="text-white space-y-2 text-center md:text-right">
              <li>
                <a href="#home" className="hover:underline">
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  المشاريع
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:underline">
                  الشركاء
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  المدونة
                </a>
              </li>
            </ul>
            </div>

            {/* Contacts - Second for Arabic */}
            <div>
            <h4 className="font-bold text-lg mb-4 text-center md:text-right">
              جهات الاتصال
            </h4>

              <ul className="text-white space-y-2 text-center md:text-right">
                <li className="flex items-center justify-center md:justify-start">
                  <FaPhoneAlt className="ml-2" />
                  <a href="https://wa.me/966557480817" target="_blank" rel="noopener noreferrer" className="hover:underline" dir="ltr" style={{unicodeBidi: 'bidi-override'}}>
                    +966 557 480 817
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaPhoneAlt className="ml-2" />
                  <a href="https://wa.me/966553666297" target="_blank" rel="noopener noreferrer" className="hover:underline" dir="ltr" style={{unicodeBidi: 'bidi-override'}}>
                    +966 55 366 6297
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaEnvelope className="ml-2" />
                  <a href="mailto:Moderndesign20202@gmail.com" className="hover:underline" dir="ltr">
                    Moderndesign20202@gmail.com
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="ml-2" />
                  <a href="https://maps.app.goo.gl/6wKVHhLLPeBzLc2p6" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    الخالدية، الرياض، السعودية
                  </a>
                </li>
              </ul>
              <div className="flex mt-4 gap-4 justify-center md:justify-start rtl:justify-end">
                <a href="https://wa.me/966557480817" className="text-white hover:text-yellow-500"><FaWhatsapp /></a>
                <a href="https://www.tiktok.com/@moderndesignadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaTiktok /></a>
                <a href="https://www.instagram.com/moderndesignadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaInstagram /></a>
                <a href="https://x.com/moderndesignadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaXTwitter /></a>
                <a href="https://www.facebook.com/ModernDesignAdv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
              </div>
            </div>

            {/* Projects - Third for Arabic */}
            <div>
            <h4 className="font-bold text-lg mb-4 text-center md:text-right">
              المشاريع
            </h4>

              <div className="grid grid-cols-3 gap-4 justify-items-center md:justify-items-end">
                <img src={p1} alt="Project 1" className="w-24 h-16 object-cover border-2 border-white" />
                <img src={p4} alt="Project 4" className="w-24 h-16 object-cover border-2 border-white" />
                <img src={p2} alt="Project 2" className="w-24 h-16 object-cover border-2 border-white" />
                <img src={p5} alt="Project 5" className="w-24 h-16 object-cover border-2 border-white" />
                <img src={p3} alt="Project 3" className="w-24 h-16 object-cover border-2 border-white" />
                <img src={p6} alt="Project 6" className="w-24 h-16 object-cover border-2 border-white" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Main Menu - First for English */}
            <div>
            <h4 className="font-bold text-lg mb-4 text-center md:text-left">
              Main Menu
            </h4>
            <ul className="text-white space-y-2 text-center md:text-left">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
            </div>

            {/* Contacts - Second for English */}
            <div>
            <h4 className="font-bold text-lg mb-4 text-center md:text-left">
              Contacts
            </h4>

              <ul className="text-white space-y-2 text-center md:text-left">
                <li className="flex items-center justify-center md:justify-start">
                  <FaPhoneAlt className="mr-2" />
                  <a href="https://wa.me/966557480817" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    +966 557 480 817
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaPhoneAlt className="mr-2" />
                  <a href="https://wa.me/966553666297" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    +966 55 366 6297
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:Moderndesign20202@gmail.com" className="hover:underline">
                    Moderndesign20202@gmail.com
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-2" />
                  <a href="https://maps.app.goo.gl/6wKVHhLLPeBzLc2p6" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Al-Khalidiya, Riyadh, Saudi Arabia
                  </a>
                </li>
              </ul>
              <div className="flex mt-4 space-x-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/ModernDesignAdv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
                <a href="https://x.com/moderndesignadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaXTwitter /></a>
                <a href="https://www.instagram.com/moderndesignadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@moderndesignadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500"><FaTiktok /></a>
                <a href="https://wa.me/966557480817" className="text-white hover:text-yellow-500"><FaWhatsapp /></a>
              </div>
            </div>

            {/* Projects - Third for English */}
            <div>
            <h4 className="font-bold text-lg mb-4 text-center md:text-left">
              Projects
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
          </>
        )}
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-white">
        <p>
          {language === 'ar' ? (
            <>
              جميع الحقوق محفوظة &copy; 2024 تم التطوير بواسطة{' '}
              <a href="https://x.com/moderndesignadv" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">
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
              <a href="https://x.com/moderndesignadv" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:underline">
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
