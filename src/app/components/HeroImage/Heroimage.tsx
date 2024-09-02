import Link from 'next/link';

type HeroImageProps = {
  titulo: string;
  eslogan: string;
  textoBoton: string;
};

export default function HeroImage({ titulo, eslogan, textoBoton }: HeroImageProps) {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <div className="hero-image bg-image-spa absolute inset-0 bg-cover bg-center"></div>

      {/* Filtro */}
      <div className="filtro absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">

        <h1 className="titulo text-7xl font-bold mb-4 md:text-7xl lg:text-7xl">
          {titulo}
        </h1>

        <p className="eslogan text-xl mb-6 md:text-xl lg:text-xl">
          {eslogan}
        </p>

        <Link href="/#contacto">
          <button className="text-white py-2 px-6 rounded-3xl text-2xl bg-green-700 hover:bg-green-800">
            {textoBoton}
          </button>
        </Link>
      </div>
    </div>
  );
}

