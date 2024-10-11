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
    '/tFacial/TF1.jpg',  
    '/tFacial/TF2.png',  
    '/tFacial/TF3.png',
    '/tFacial/TF4.png'
  ];

  const title = "Tratamiento Facial";
  const description = "Sumérgete en una experiencia de cuidado facial que transforma tu piel desde el interior. En nuestro spa, el tratamiento facial es más que un simple servicio; es un ritual de renovación que ofrece resultados visibles y una sensación de bienestar duradera. Diseñado para satisfacer las necesidades específicas de tu piel, cada tratamiento combina tecnología avanzada y técnicas expertas para lograr una luminosidad impecable.";
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