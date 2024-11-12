import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"; // Importing icons

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-4 py-10 ">
      <div className="container mx-auto px-4 flex flex-row md:flex-row justify-between">
        {/* Company Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold ml-[20px]">Dsinfo Pvt. Ltd.</h2>
          <p className="mt-2">Our Commitment: Making Technology </p>
          <div className="flex mt-4 space-x-8">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-400 text-[20px] bg-white p-2 rounded-[4px]"
            >
              <FaFacebookF /> {/* Facebook Icon */}
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-500 text-xl bg-white p-2 rounded-[4px]"
            >
              <FaLinkedinIn /> {/* LinkedIn Icon */}
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-400 text-xl bg-white p-2 rounded-[4px]"
            >
              <FaInstagram /> {/* Instagram Icon */}
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-400 text-xl bg-white p-2 rounded-[4px]"
            >
              <FaYoutube /> {/* YouTube Icon */}
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#">Industries we serve</a>
            </li>
            <li>
              <a href="#">Press Release</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-2 space-y-2">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Software Development</li>
            <li>Full Stack Development</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2">
            22, street, Sector B, <br /> Nanda Nagar, Indore, MP,
            India (452010)
          </p>
          <p className="mt-2">Email: dilipsingh8171.com</p>
          <p className="mt-2">Phone: +91-9575430101</p>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p>Copyright ©2023 | dsinfo Pvt. Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
