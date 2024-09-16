import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';

const QuienesSomos = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Columna Izquierda - Texto */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -100 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex flex-col justify-center p-10 bg-flores-verdes xl:pl-32 md:pl-10 sm:pl-10"
      >
        {/* <h2 className="text-5xl font-semibold mb-6 text-left tx-beige">Sobre nosotros...</h2> */}

        <img src="sobrenos-titulo.png" alt="" className=' sm:max-w-md max-w-xs' />

        <p className="text-xl text-left text-gray-700 leading-relaxed mb-6 tx-beige">
        Ofrecemos experiencias sensoriales <br /> diseñadas para desconectar de la rutina <br /> y disfrutar de bienestar, <br /> en plena armonía con la naturaleza.        </p>
        <div className=" mt-5">
          <Link href="/about">
            <button className="bg-sage text-white font-semibold px-6 py-4 rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-105 border">
              CONOCENOS
            </button>
          </Link>
        </div>

      </motion.div>

      {/* Columna Derecha - Imagen */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : 100 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 flex items-center justify-center overflow-hidden bg-white"
      >
        <div className="relative w-full h-full">
          <img
            src="/Masajes/masaje1.png"
            alt="Imagen representativa"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default QuienesSomos;
