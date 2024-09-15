import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Galeria() {
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    '/Belleza/belleza1.jpg',
    '/Belleza/belleza3.jpg',
    '/Belleza/belleza4.jpg',
    '/Masajes/masaje3.jpg',
    '/Masajes/masaje4.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-10">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-4">
            <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105 w-full h-full"
              />
             
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => setShowVideo(!showVideo)} 
          className="flex items-center justify-center bg-sage text-white py-2 px-4 rounded-lg shadow-md hover:bg-sage-hover focus:outline-none"
        >
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {showVideo ? (
              <path d="M5 3.5h15v15H5z" /> 
            ) : (
              <path d="M5 3.5l15 9-15 9V3.5z" /> 
            )}
          </svg>
          {showVideo ? 'Ocultar Video' : 'Mostrar Video'}
        </button>
      </div>
      {showVideo && (
        <div className="mt-6 flex justify-center">
          <video controls className="w-full max-w-3xl rounded-lg shadow-md">
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
    </div>
  );
}
