import NavBar from '../components/NavBar/NavBar';
import Image from 'next/image';
import logo from '../../../public/logo sin fondo.png'; 
import Footer from '../components/NavBar/Footer';

export default function InfoPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* <NavBar /> */}
      <div className="flex-grow flex items-center justify-center relative">
        {/* Imagen de fondo difuminada */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/imagen spa.jpg')", filter: "blur(10px)", backgroundSize: "cover", backgroundPosition: "center" }}
        ></div>

        {/* Contenido centrado */}
        <div className="flex flex-col justify-between bg-stone-200 bg-opacity-90 text-center p-10 rounded-lg shadow-lg max-w-md md:max-w-screen-xl md:w-full md:h-8/10 z-10">
          <p className="font-sans text-green-500 font-bold text-3xl md:text-5xl mb-6">
            Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos.
            Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.
          </p>

          {/* Logo de la empresa */}
          <div className="mt-6">
            <Image 
              src={logo} 
              alt="Logo de la empresa" 
              className="mx-auto w-40" // Ajusta el tamaño según sea necesario
            />
          </div>
        </div>
      </div>
    </div>
  );
}


