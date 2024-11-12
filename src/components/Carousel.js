import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/notebook-natural-laptop-macbook.jpg';
import img3 from '../assets/images/Contact.jpg'
const images = [
  img1,
  // 'https://res.cloudinary.com/demo/image/upload/v1611090982/sample.jpg', // Cloudinary Image
  img2,
  img3,
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full m-0"> {/* Full width of the screen */}
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-full h-[87vh] object-cover"  /* Full width, height 60% of viewport height */
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
