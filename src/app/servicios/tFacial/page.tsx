import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel'; // Importa el componente del carrusel

export default function Masajes() {
  const carouselImages = [
    '/tFacial/TF1.jpg',  // Ruta desde la carpeta public
    '/tFacial/TF2.png',  // Otros ejemplos de rutas
    '/tFacial/TF3.png',
    '/tFacial/TF4.png'
  ];

  const title = "Servicios de Tratamiento Facial";
  const description = "Sumérgete en una experiencia de cuidado facial que transforma tu piel desde el interior. En nuestro spa, el tratamiento facial es más que un simple servicio; es un ritual de renovación que ofrece resultados visibles y una sensación de bienestar duradera. Diseñado para satisfacer las necesidades específicas de tu piel, cada tratamiento combina tecnología avanzada y técnicas expertas para lograr una luminosidad impecable.";
  const buttonText = "VER MAS";

  return (
    <div>
      {/* <NavBar /> */}
      <div className="relative">
        <Carousel 
          images={carouselImages} 
          title={title} 
          description={description} 
          buttonText={buttonText} 
        /> 
      </div>
    </div>
  );
}




