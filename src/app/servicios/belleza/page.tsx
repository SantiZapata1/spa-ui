'use client';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


import React from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/navigation';

interface CarouselProps {
  images: string[];
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title, description, buttonText, buttonLink }) => {
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Cambia automáticamente las imágenes
    autoplaySpeed: 3000, // Cambia cada 3 segundos
  };

  const handleButtonClick = () => {
    router.push(buttonLink);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="object-cover w-full h-screen" 
            />
          </div>
        ))}
      </Slider>
      {/* Texto estático en la parte superior del carrusel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gray-800 bg-opacity-50 p-4">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white mb-4 max-w-5xl">{description}</p>
        <button 
          className="bg-green-600 hover:bg-green-400 text-white py-2 px-4 rounded" 
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default function Belleza() {
  const carouselImages = [
    '/Belleza/belleza1.jpg',  
    '/Belleza/belleza2.jpeg',  
    '/Belleza/belleza3.jpg',
    '/Belleza/belleza4.jpg'
  ];

  const title = "Servicios de Belleza";
  const description = "En nuestro spa, entendemos que la verdadera belleza comienza con el cuidado personal. Ofrecemos una gama completa de servicios de belleza diseñados para realzar tu apariencia y renovar tu confianza. Nuestro equipo de expertos utiliza técnicas avanzadas y productos de alta calidad para garantizar que te sientas y te veas espectacular.";
  const buttonText = "REGISTRATE";

  return (
    <div className="relative">
      <Carousel 
        images={carouselImages} 
        title={title} 
        description={description} 
        buttonText={buttonText} 
        buttonLink="/login"
      /> 
    </div>
  );
}