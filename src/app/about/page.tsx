import Image from 'next/image';
import logo from '../../../public/logo sin fondo.png'; 

export default function InfoPage() {
  return (
    <div className="main flex flex-col bg-image-spa">

      <div className="filtro">

        {/* contenido */}
        <div className="flex flex-col justify-between text-balance p-10 rounded-lg md:max-w-screen-lg md:w-full md:h-6/10 z-10">

          <p className="text-2xl md:text-4xl mb-6">
            Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la 
            <span className='text-violet-300'> seducción de los sentidos.</span>
             <br></br>
            Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y <span className='text-violet-300'>disfrute</span> de un momento de <span className='text-violet-300'>bienestar</span>, en total <span className='text-violet-300'>armonía</span> con la naturaleza.
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


