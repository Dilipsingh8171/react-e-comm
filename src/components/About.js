import React from 'react';

const About = () => {
  return (
    <div className=" py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 sm:text-5xl">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          We are a trusted pesticide shop offering a wide range of products to protect your crops and ensure a healthy harvest.
        </p>
      </div>
      
      <div className="mt-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="text-center p-6 bg-green-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">Our Mission</h3>
            <p className="mt-4 text-base text-green-600">
              Our mission is to provide effective, high-quality pesticides that promote better farming and crop protection for a sustainable future.
            </p>
          </div>
          <div className="text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-700">Our Values</h3>
            <p className="mt-4 text-base text-yellow-600">
              We value quality, trust, and customer satisfaction. Our goal is to ensure that every product meets the highest standards of safety and effectiveness.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-blue-700 text-center">Why Choose Us?</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-100 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium text-blue-700">Expert Knowledge</h4>
            <p className="mt-2 text-base text-blue-600">
              Our team has extensive knowledge in crop protection and pesticide application.
            </p>
          </div>
          <div className="text-center p-6 bg-red-100 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium text-red-700">Quality Products</h4>
            <p className="mt-2 text-base text-red-600">
              We only offer the highest-quality pesticides to ensure maximum effectiveness.
            </p>
          </div>
          <div className="text-center p-6 bg-purple-100 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium text-purple-700">Customer Support</h4>
            <p className="mt-2 text-base text-purple-600">
              Our customer support team is available to assist with any questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
