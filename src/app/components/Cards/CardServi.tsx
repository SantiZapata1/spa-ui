// components/CardServi.tsx
import React from 'react';
import Image from 'next/image';
export default function CardServi(){

  const cards = [
    {
      imgSrc: "/Masajes/masaje1.png",
      title: "Masajes",
      description: "Técnicas de relajación y alivio muscular que mejoran la circulación, reducen el estrés y promueven el bienestar general.",
      link: "/servicios#masajes"
    },
    {
      imgSrc: "/Belleza/belleza1.jpg",
      title: "Belleza",
      description: "Servicios para realzar la apariencia, como depilación, manicuras, pedicuras y maquillaje.",
      link: "/servicios#belleza"
    },
    {
      imgSrc: "/tFacial/TF1.jpg",
      title: "Tratamiento Facial",
      description: "Procedimientos que tonifican, hidratan y rejuvenecen la piel del cuerpo, incluyendo exfoliaciones y envolturas.",
      link: "/servicios#tFacial"
    },
    {
      imgSrc: "/tCorporal/TC1.png",
      title: "Tratamiento Corporal",
      description: "Rutinas de cuidado para limpiar, hidratar y revitalizar la piel del rostro, adaptadas a diferentes tipos de piel y necesidades.",
      link: "/servicios#tCorporales"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-7 pt-7 max-w-7xl">
      {cards.map((card, index) => (
        <div key={index} className=" border border-gray-200 rounded-lg shadow flex flex-col h-full transform transition-transform duration-300 ease-in-out hover:scale-105">
          <a href={card.link}>
            <img className="rounded-t-lg w-full h-48 object-cover" src={card.imgSrc} alt={card.title} />
          </a>
          <div className="p-5 flex flex-col flex-1">
            <a href={card.link}>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600">{card.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 flex-grow">{card.description}</p>
            <a href={card.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-sage focus:ring-blue-300  focus:ring-4 focus:outline-none  mt-auto">
              Ver más
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};



