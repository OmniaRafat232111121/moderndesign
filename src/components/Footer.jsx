import React from 'react';
import logo from "../assets/Logo_footer.png";
import english_logo from "../assets/logo/Saudi vision 2030 Logo-01.png";
import expo from "../assets/logo/expo.png";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="flex   items-center text-center space-x-4 ">
        <img src={english_logo} alt="Saudi Vision 2030 Logo" className="mb-4 w-24 md:w-32 lg:w-24 mx-auto mt-3" />
        <img src={logo} alt="Lead Logo" className="mb-4 w-36 md:w-32 lg:w-24 mx-auto" />
  <img src={expo} alt="Expo Logo" className="mb-4 w-24 md:w-32 lg:w-24 mx-auto mt-3" />

</div>


        {/* Main Menu */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-center md:text-left">
            {language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu'}
          </h4>
          <ul className="text-white space-y-2 text-center md:text-left">
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
          <h4 className="font-bold text-lg mb-4 text-center md:text-left">
            {language === 'ar' ? 'جهات الاتصال' : 'Contacts'}
          </h4>
          <ul className="text-white space-y-2 text-center md:text-left">
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a
                href="https://wa.me/966557480817"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +966 557480817
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a
                href="https://wa.me/966553666297"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +966 55 366 6297
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaEnvelope className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a
                href="mailto:Moderndesign20202@gmail.com"
                className="hover:underline"
              >
                Moderndesign20202@gmail.com
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaMapMarkerAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a
                href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB+%D9%84%D9%84%D8%AF%D8%B9%D8%A7%D9%8A%D8%A9+%D9%88+%D8%A7%D9%84%D8%A5%D8%B9%D9%84%D8%A7%D9%86%D8%8C+%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D8%B1+%D9%85%D8%AD%D9%85%D8%AF+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%D8%8C+%D8%A7%D9%84%D8%AE%D8%A7%D9%84%D8%AF%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+12875%E2%80%AD/data=!4m2!3m1!1s0x3e2f05379bb626b7:0xe0e962ce762845d5?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE0MC4xMDQYACDXggMqbCw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICU0E%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {language === 'ar' ? 'الخالدية، الرياض، السعودية' : 'Al-Khalidiya, Riyadh, Saudi Arabia'}

              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaMapMarkerAlt className={`mr-2 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              <a
                href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB+%D9%84%D9%84%D8%AF%D8%B9%D8%A7%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86,+Prince+Muhammad+Ibn+Abd+Al+Rahman,+Ghubairah,+Riyadh+12665%E2%80%AD/data=!4m2!3m1!1s0x3e2f05369a8b6a57:0x22372fb6753a8f7f?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE0MS4xMDMYACDXggMqqwEsOTQyMzA1MTEsOTQyMDMzMjQsNDcwNzU0ODksOTQyMTY0MjYsOTQyMTY0MTMsOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMTI2NjUsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyMzExODAsNDcwODcxMTgsNDcwODQzOTMsOTQyMTMyMDBCAlNB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {language === 'ar' ? 'غبيرا, الرياض، السعودية' : 'Ghubairah, Riyadh, Saudi Arabia'}
                </a>
            </li>

           
          </ul>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61564932237031&mibextid=ZbWKwL" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
            {/* <a href="https://twitter.com" className="text-white hover:text-yellow-500"><FaTwitter /></a>
            <a href="https://youtube.com" className="text-white hover:text-yellow-500"><FaYoutube /></a> */}
            <a href="https://www.linkedin.com/in/modern-design-a78203325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-yellow-500"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/moderndesign200/profilecard/?igsh=azBuczVoZ2YxMnk3" className="text-white hover:text-yellow-500"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@modern.design296?_t=8p9GqXbEvp9&_r=1" className="text-white hover:text-yellow-500"><FaTiktok /></a>
            <a href="https://wa.me/966557480817" className="text-white hover:text-yellow-500"><FaWhatsapp /></a>

          </div>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-center md:text-left">
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
              <a
                href="https://www.linkedin.com/in/omnia-rafat-0125191b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                أمنية رافت
              </a>
              inspire By{' '}
              <a
                href="https://www.behance.net/eslammagdy50"
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer hover:underline"
              >
              اسلام مجدي
              </a>
            </>
          ) : (
            <>
              All Rights Reserved &copy; 2024 Developed By{' '}
              <a
                href="https://www.linkedin.com/in/omnia-rafat-0125191b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline"
              >
                Omnia Rafat
              </a>
              , inspire By{' '}
              <a
                href="https://www.behance.net/eslammagdy50"
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer hover:underline"
              >
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
