import React from 'react';
// import backgroundImage from '../assets/projects/Book Fair/'; // Use the background image from your assets

const ContactUs = () => {
  return (
    <div className="relative bg-gray-900 text-white py-16">
      {/* Background Image Section */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay Section with Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-64 bg-black bg-opacity-60">
        <h2 className="text-3xl font-bold">Modern Design Advertising</h2>
        <p className="text-xl">Contact us</p>
      </div>

      <div className="relative z-20 container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="bg-yellow-500 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="mb-4">
              <p><i className="fas fa-map-marker-alt"></i> 5181 Al-Huwaidi Street, Al-Musfat District, Riyadh, Kingdom of Saudi Arabia</p>
            </div>
            <div className="mb-4">
              <p><i className="fas fa-envelope"></i> info@leadprojects.net</p>
            </div>
            <div className="mb-4">
              <p><i className="fas fa-phone"></i> +966 56 045 1500</p>
            </div>
            <div className="flex space-x-4">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Send A Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full mt-4 p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                placeholder="Mobile Number *"
                className="w-full mt-4 p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="Write Your Message Here *"
                className="w-full mt-4 p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-yellow-500 text-gray-800 px-6 py-3 rounded-md font-bold hover:bg-yellow-600"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
