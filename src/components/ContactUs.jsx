import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import en from '../locales/en';
import { ar } from '../locales/ar';

const ContactUs = ({ language }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Moderndesign20202@gmail.com?subject=Contact Form Submission&body=
      ${language === 'en' ? 'First Name' : 'الاسم الأول'}: ${formData.firstName}%0D%0A
      ${language === 'en' ? 'Last Name' : 'الكنية'}: ${formData.lastName}%0D%0A
      ${language === 'en' ? 'Email' : 'البريد الإلكتروني'}: ${formData.email}%0D%0A
      ${language === 'en' ? 'Phone' : 'رقم الجوال'}: ${formData.phone}%0D%0A
      ${language === 'en' ? 'Message' : 'رسالة'}: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const t = language === 'en' ? en : ar;

  return (
    <motion.div
    className={`relative text-white py-16 ${language === 'en' ? 'font-en' : 'font-ar'}`}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image Section */}

      {/* Overlay Section with Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-64"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-2">{t.modern_design_advertising}</h2>
  
      </motion.div>

      <motion.div
        className="relative z-20 container mx-auto px-6 md:px-12 py-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="p-8 text-white bg-secondary rounded-lg "
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 border-b-2 cursor-pointer
             border-transparent hover:border-primary transition duration-300 ease-in-out hover:text-primary">
  {t.contact_info}
</h3>

            <div className="mb-4 flex items-center">
              <div className="bg-primary p-3 cursor-pointer rounded-full hover:border-2 hover:border-heading flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <p className="flex-1 ml-2 text-left">{t.saudi_arabia}</p>
            </div>

            <div className="mb-4 flex items-center">
              <div className="bg-primary p-3 cursor-pointer rounded-full hover:border-2 hover:border-heading flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <p className="flex-1 ml-2 text-left">Moderndesign20202@gmail.com</p>
            </div>

            <div className="mb-4 flex items-center">
              <div className="bg-primary p-3 cursor-pointer rounded-full hover:border-2 hover:border-heading flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>
              <p className="flex-1 ml-2 text-left">+966 557480817</p>
            </div>

            <div className={`flex items-center justify-center ${language === 'en' ? 'space-x-4' : 'space-x-reverse space-x-4'} text-2xl mt-6`}>
  <button
    onClick={() => window.open('https://www.facebook.com', '_blank')}
    className="bg-white p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-110"
    aria-label="Visit our Facebook page"
  >
    <FaFacebook className="text-blue-600 " />
  </button>
  <button
    onClick={() => window.open('https://www.twitter.com', '_blank')}
    className="bg-white p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-110"
    aria-label="Visit our Twitter page"
  >
    <FaTwitter className="text-blue-400" />
  </button>
  <button
    onClick={() => window.open('https://www.youtube.com', '_blank')}
    className="bg-white p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-110"
    aria-label="Visit our YouTube page"
  >
    <FaYoutube className="text-red-600" />
  </button>
  <button
    onClick={() => window.open('https://www.linkedin.com', '_blank')}
    className="bg-white p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-110"
    aria-label="Visit our LinkedIn page"
  >
    <FaLinkedin className="text-blue-700" />
  </button>
  <button
    onClick={() => window.open('https://www.instagram.com', '_blank')}
    className="bg-white p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-110"
    aria-label="Visit our Instagram page"
  >
    <FaInstagram className="text-pink-600" />
  </button>
</div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder={`${t.first_name} *`}
                  className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-heading"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={`${t.last_name} *`}
                  className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-heading"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder={`${t.email_address} *`}
                className="w-full mt-4 p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-heading"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder={`${t.mobile_number} *`}
                className="w-full mt-4 p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-heading"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={`${t.write_your_message} *`}
                className="w-full mt-4 p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-heading"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-heading text-white px-6 py-3 rounded-md font-bold hover:bg-primary hover:text-heading
                 hover:bg-primaryfocus:outline-none focus:ring-2 focus:ring-primary"
              >
                {t.send}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
