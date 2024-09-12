
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Galeria() {
  const images = [
    '/Belleza/belleza1.jpg',
    '/Belleza/belleza2.jpeg',
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
    </div>
  );
}
