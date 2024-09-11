"use client";
import Image from "next/image";

export default function Galeria(){
  // Definir las imágenes dentro del componente
  const images = [
    '/Belleza/belleza1.jpg',
    '/Belleza/belleza2.jpeg',
    '/Belleza/belleza3.jpg',
    '/Belleza/belleza4.jpg',
    '/Masajes/masaje3.jpg',
    '/Masajes/masaje4.jpg'
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-6 px-4 sm:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className=" relative w-full h-64 overflow-hidden rounded-lg bg-white border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


