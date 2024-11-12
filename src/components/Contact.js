import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import constus from "../assets/images/image1.jpg";


const Contact = () => {
 
    return (

    <div className=" flex flex-col md:flex-row h-[400px] m-0">
      {/* Left Side: Image */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center m-4 mr-[0px]"
        style={{ backgroundImage: `url(${constus})` }}
      >
        <div className="h-full bg-black opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Contact Us</h2>
        </div>
      </div>

      {/* Right Side: Social Media Links */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center m-4 px-6 py-12 border-4 bg-gray-100 ml-[0]">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <p className="text-gray-600 text-sm mt-2">
              Stay connected with us through social media!
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8 text-3xl">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition duration-300"
            >
              <FaInstagram />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
