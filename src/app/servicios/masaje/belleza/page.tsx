import NavBar from '../../../components/NavBar/NavBar';
import Carousel from '../../../components/NavBar/Carousel'; // Importa el componente del carrusel

export default function Masajes() {
  const carouselImages = [
    '/Belleza/belleza1.jpg',  // Ruta desde la carpeta public
    '/Belleza/belleza2.jpeg',  // Otros ejemplos de rutas
    '/Belleza/belleza3.jpg',
    '/Belleza/belleza4.jpg'
  ];

  const title = "Servicios de Belleza";
  const description = "En nuestro spa, entendemos que la verdadera belleza comienza con el cuidado personal. Ofrecemos una gama completa de servicios de belleza diseñados para realzar tu apariencia y renovar tu confianza. Nuestro equipo de expertos utiliza técnicas avanzadas y productos de alta calidad para garantizar que te sientas y te veas espectacular.";
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




