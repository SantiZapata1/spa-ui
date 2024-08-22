import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css"
import logo from "../../public/logo sin fondo.png"
import imagenSpa from "../../public/imagen spa.jpg"
import Footer from "./components/Footer/Footer";
import ContactoForm from "./contacto/page";
import HeroImage from "./components/HeroImage/Heroimage"
import ComentarioForm from "./components/Comment/ComentarioForm";

export default function Home() {
  return (
    <main>
      
      <HeroImage
        titulo="SPA - Sentirse Bien"
        eslogan="Sumérgete en una experiencia de pura tranquilidad. Regálate el descanso que mereces y reserva hoy mismo tu momento de renovación total en nuestro spa. ¡Tu bienestar no puede esperar!"
        textoBoton="Quiero mi sesion"
      />

      <div className="secciones bg-beige">

        {/* quienes somos */}
        <section className="flex flex-col items-center justify-center min-h-screen p-8">

          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
            <h3 className="text-lg font-medium">
              Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.
            </h3>
          </div>
        </section>
        
        {/* servicios */}
        <section className="servicios">
          <h2>Servicios</h2>
        </section>

        {/* galeria */}
        <section className="galeria">
          <h2>Galería</h2>
        </section>

        {/* testimonios */}
        <section className="testimonios">
          <h2>Testimonios</h2>
        </section>

        {/* Coemntarios sin logear */}
        <section className="testimonios p-8 flex flex-col items-center">
          <div className="w-full max-w-lg">
            <ComentarioForm />
          </div>
        </section>

        {/* contacto */}
        <section className="flex flex-col md:flex-row justify-evenly p-5" id="contacto">
          <ContactoForm/>
          <iframe className="w-full md:w-4/10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5827771761133!2d-58.981585523622684!3d-27.451110615916157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0c80be0d3%3A0xc9f9278c74810912!2sUTN%20-%20Facultad%20Regional%20Resistencia!5e0!3m2!1ses-419!2sar!4v1723472004268!5m2!1ses-419!2sar" loading="lazy"></iframe>
        </section>

      </div>

      
    </main>
  );
}
