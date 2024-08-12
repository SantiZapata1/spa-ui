'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
  title: string;
  description: string;
  buttonText: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title, description, buttonText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="default-carousel" className="relative w-full h-screen">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-white'}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      {/* Overlay with title, description, and button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gray-800 bg-opacity-50 p-4">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white mb-4">{description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">{buttonText}</button>
      </div>
    </div>
  );
};

export default Carousel;