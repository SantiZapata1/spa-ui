import Link from 'next/link'; 
import { motion } from 'framer-motion'; 
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const QuienesSomos = () => {
  const { ref: imageRef, inView } = useInView({
    triggerOnce: true, // Solo activa el efecto una vez
    threshold: 0.1, // Porcentaje del elemento visible para activar el efecto
  });

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Columna Izquierda - Texto */}
      <div className="md:w-1/2 flex flex-col justify-center p-10 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">Quiénes Somos</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center w-full">
          Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.
        </p>
        <div className="flex justify-center mt-5">
          <Link href="/about">
            <button className="bg-sage text-white font-bold px-6 py-4 rounded-3xl transform transition-transform duration-300 ease-in-out hover:scale-105">
              Ir a Quienes Somos
            </button>
          </Link>
        </div>
      </div>

      {/* Columna Derecha - Imagen */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/Masajes/masaje1.png"
            alt="Imagen representativa"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default QuienesSomos;
