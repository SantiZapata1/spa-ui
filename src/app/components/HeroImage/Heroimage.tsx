import Link from 'next/link';
import BotonInstalar from '../BotonInstalar/BotonInstalar';

export default function HeroImage() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <div className="hero-image bg-image-spa absolute inset-0 bg-cover bg-center"></div>

      {/* Filtro */}
      <div className="filtro absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">

        {/* <h1 className="flex flex-row titulo text-7xl font-bold mb-4 md:text-7xl lg:text-7xl">
            SPA <span className='hidden md:block'> - </span> Sentirse bien
        </h1> */}

        <img src="nuevoTitulo.png" alt="" className='md:max-w-screen-md sm:max-w-screen-sm  mb-20' />

        {/* <p className="eslogan text-xl mb-6 md:text-xl lg:text-xl">
          Estas a un masaje de estar de buen humor
        </p> */}

        <div className='flex flex-col items-center justify-center'>
        <Link href="/servicios">
          <button className="text-white py-3 px-7 font-semibold rounded-3xl text-lg bg-dark-purple transform transition-transform duration-300 ease-in-out hover:scale-105">
            QUIERO MI SESION
          </button>
        </Link>
        <BotonInstalar />
        </div>
      </div>
    </div>
  );
}

