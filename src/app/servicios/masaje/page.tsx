import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel'; // Importa el componente del carrusel

export default function Masajes() {
  const carouselImages = [
    '/Masajes/masaje1.png',  // Ruta desde la carpeta public
    '/Masajes/masaje2.jpg',  // Otros ejemplos de rutas
    '/Masajes/masaje3.jpg',
    '/Masajes/masaje4.jpg'
  ];

  const title = "Servicios de masajes";
  const description = "Sumérgete en un oasis de tranquilidad con nuestros exclusivos masajes diseñados para rejuvenecer tu cuerpo y mente. En nuestro spa, cada sesión es una escapada a la relajación profunda, donde la experiencia de nuestros terapeutas expertos se combina con técnicas innovadoras para brindarte un alivio total.";
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




