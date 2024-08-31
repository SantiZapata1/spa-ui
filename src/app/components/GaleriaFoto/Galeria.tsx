"use client";
import Image from "next/image";

const Galeria = () => {
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
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Galería</h2>
      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg bg-white">
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
