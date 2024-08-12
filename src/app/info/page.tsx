import NavBar from '../components/NavBar/NavBar';
import Image from 'next/image';
import logo from '../../../public/logo sin fondo.png'; 
import Footer from '../components/NavBar/Footer';

export default function InfoPage() {
  return (
    <div className="main flex flex-col bg-image-spa">

      <div className="filtro">

        {/* contenido */}
        <div className="flex flex-col justify-between text-balance p-10 rounded-lg md:max-w-screen-lg md:w-full md:h-6/10 z-10">

          <p className="text-2xl md:text-4xl mb-6">
            Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. <br></br>
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


