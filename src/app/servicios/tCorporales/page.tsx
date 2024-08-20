import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel'; // Importa el componente del carrusel

export default function Masajes() {
  const carouselImages = [
    '/tCorporal/TC1.png',  // Ruta desde la carpeta public
    '/tCorporal/TC2.jpeg',  // Otros ejemplos de rutas
    '/tCorporal/TC3.jpg',
    '/tCorporal/TC4.jpg'
  ];

  const title = "Tratamiento Corporal";
  const description = "En nuestro spa, los tratamientos corporales están diseñados para ofrecerte una experiencia revitalizante que va más allá de lo convencional. Cada sesión es un viaje sensorial que combina técnicas innovadoras y productos de alta calidad para transformar tu bienestar físico y mental. Permítete un escape de la rutina diaria y regálate un cuidado integral que te hará sentir renovado desde la cabeza hasta los pies.";
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
          buttonLink="./tCorporales/turnos"
        /> 
      </div>
    </div>
  );
}




