import Link from 'next/link';


export default function HeroImage() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <div className="hero-image bg-image-spa absolute inset-0 bg-cover bg-center"></div>

      {/* Filtro */}
      <div className="filtro absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">

        <h1 className="flex flex-row titulo text-7xl font-bold mb-4 md:text-7xl lg:text-7xl">
            SPA <span className='hidden md:block'> - </span> Sentirse bien
        </h1>

        <p className="eslogan text-xl mb-6 md:text-xl lg:text-xl">
          Estas a un masaje de estar de buen humor
        </p>

        <Link href="/servicios">
          <button className="text-white py-2 px-6 rounded-3xl text-2xl bg-dark-purple transform transition-transform duration-300 ease-in-out hover:scale-105">
            Quiero mi sesión
          </button>
        </Link>
      </div>
    </div>
  );
}

