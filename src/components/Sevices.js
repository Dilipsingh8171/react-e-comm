import React from 'react';

const Services = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold  sm:text-5xl">
          Our Services - Dilip Krashi Kendra
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          At Dilip Krashi Kendra, we provide high-quality pesticide solutions to help your crops grow healthy and strong.
        </p>
      </div>
      
      <div className="mt-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center p-6 bg-green-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-700">Pesticide Supply</h3>
            <p className="mt-4 text-base text-green-600">
              We provide a wide range of effective and safe pesticides for protecting crops from pests, insects, and diseases.
            </p>
          </div>
          <div className="text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-700">Pest Control Services</h3>
            <p className="mt-4 text-base text-yellow-600">
              Our experts offer pest control services that help protect your crops with the most advanced techniques and products.
            </p>
          </div>
          <div className="text-center p-6 bg-red-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-700">Crop Consultation</h3>
            <p className="mt-4 text-base text-red-600">
              We provide expert advice on crop protection, pest management, and the best pesticide practices for optimal yield.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-blue-700 text-center">Why Choose Dilip Krashi Kendra?</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-100 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium text-blue-700">High-Quality Products</h4>
            <p className="mt-2 text-base text-blue-600">
              We offer only the best pesticides and crop care products, ensuring that your crops are well-protected.
            </p>
          </div>
          <div className="text-center p-6 bg-orange-100 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium text-orange-700">Affordable Prices</h4>
            <p className="mt-2 text-base text-orange-600">
              Our services and products are competitively priced, making it easy for farmers to protect their crops without breaking the bank.
            </p>
          </div>
          <div className="text-center p-6 bg-purple-100 rounded-lg shadow-lg">
            <h4 className="text-lg font-medium text-purple-700">Expert Team</h4>
            <p className="mt-2 text-base text-purple-600">
              Our team of experts provides personalized service and advice for all your pesticide and crop protection needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
