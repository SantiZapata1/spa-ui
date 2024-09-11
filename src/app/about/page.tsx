"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function QuienesSomos() {

  const [menuVisible, setMenuVisible] = useState(false);
  const sections = [
    {
      id: 'quienes-somos',
      title: 'Quiénes Somos',
      content: 'Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.',
    },
    {
      id: 'vision',
      title: 'Visión',
      content: 'Ser el refugio preferido para el bienestar y la relajación, donde cada cliente encuentra armonía y renovación a través de tratamientos personalizados y experiencias de cuidado integral, promoviendo un estilo de vida saludable y equilibrado. Aspiramos a ser líderes en la industria del bienestar, innovando constantemente en nuestros servicios para ofrecer el más alto estándar de calidad y atención, creando un oasis de paz en medio del ajetreo diario.',
    },
    {
      id: 'mision',
      title: 'Misión',
      content: 'Nuestra misión es proporcionar a nuestros clientes un espacio acogedor y relajante donde puedan escapar del estrés diario y rejuvenecer cuerpo, mente y espíritu. Ofrecemos una amplia gama de tratamientos personalizados, diseñados para promover la salud, la belleza y el bienestar integral. Nos comprometemos a utilizar productos de alta calidad y técnicas innovadoras, brindando un servicio excepcional a través de un equipo de profesionales apasionados y capacitados. Nos esforzamos por crear una experiencia única y memorable en cada visita, guiados por nuestros valores de respeto, cuidado y excelencia.',
    },
    {
      id: 'equipo',
      title: 'Equipo Profesional',
      content: '',
    },
  ];

  const profesionales = [
    {
      nombre: 'Ana',
      apellido: 'Felicidad',
      foto: '/Personas/Ana Felicidad.png',
      perfil: 'Apasionada especialista en bienestar con más de 10 años de experiencia en la industria del spa y la salud holística. Su enfoque integral y su habilidad para conectar con las personas la convierten en una profesional excepcional en el arte del masaje terapéutico y los tratamientos relajantes.',
    },
    {
      nombre: 'Dra. Romina',
      apellido: 'Felicidad',
      foto: '/Personas/Dra Romina.png',
      perfil: 'Experta en medicina estética y bienestar, con una sólida formación académica y más de 15 años de experiencia en el campo de la salud y el rejuvenecimiento. Su enfoque médico se basa en la combinación de ciencia y arte para proporcionar tratamientos seguros, efectivos y personalizados que mejoren la calidad de vida de sus pacientes.',
    },
    {
      nombre: 'Dr. Lionel Messi',
      apellido: 'Rique',
      foto: '/Personas/DrMessi.png',
      perfil: 'Experto en medicina deportiva y rehabilitación con más de 12 años de experiencia en el tratamiento y la prevención de lesiones deportivas. Su enfoque se centra en combinar la ciencia médica con técnicas de rehabilitación avanzadas para ayudar a los clientes a recuperar su máximo rendimiento físico y mejorar su calidad de vida.',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Imagen de fondo*/}
      <div className="absolute inset-0">

        <Image
          src="/About/bambu.png"
          alt="Fondo difuminado"
          layout="fill"
          className="w-full h-full object-cover filter blur-sm absolute inset-0"
        />
      </div>

      <div className="relative flex min-h-screen">
        {/* Menú lateral */}
        <div className="relative group">
          {/* Botón que despliega el menú al pasar el mouse */}
          {!menuVisible && (
            <div className="header h-screen w-full p-4 bg-gray-100 bg-opacity-0 flex flex-col" onMouseEnter={() => setMenuVisible(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          )}
          {/* Menú desplegable */}
          {menuVisible && (
            <aside className="header w-64 p-4 bg-gray-100 bg-opacity-50 h-screen flex flex-col" onMouseLeave={() => setMenuVisible(false)}>
              <ul className="space-y-4 mt-6">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="block p-3 text-gray-900 hover:bg-gray-200 hover:text-green-700 rounded-lg">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        {/* Contenido principal */}
        <main className="flex-grow relative z-10">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="min-h-screen flex flex-col justify-center items-center py-0 px-4 relative"
            >
              <div className="max-w-4xl w-full p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">{section.title}</h2>
                {section.id === 'equipo' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {profesionales.map((prof) => (
                      <div key={prof.nombre} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                        <Image
                          src={prof.foto}
                          alt={`${prof.nombre} ${prof.apellido}`}
                          layout="fill"
                          className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold mb-2">{prof.nombre} {prof.apellido}</h3>
                        <p>{prof.perfil}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xl text-center">{section.content}</p>
                )}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}