import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css"
import logo from "../../public/logo sin fondo.png"
import imagenSpa from "../../public/imagen spa.jpg"
import Footer from './components/NavBar/Footer';
import ContactoForm from "./contacto/page";

//componente principal
export default function Home() {
  return (
    <main>

      

      <div className='main'> 

        {/* barra de navegacion */}
        {/* <NavBar/> */}

        <div className="hero-image">

          <div className="filtro">
          <h1>SPA - Sentirse Bien</h1>

            <section className="contenido">
                <section className="eslogan">
                  <p>Sumérgete en una experiencia de pura tranquilidad. Regálate el descanso que mereces y reserva hoy mismo tu momento de renovación total en nuestro spa. ¡Tu bienestar no puede esperar!</p>
                </section>

                <Link href="/contacto">
                  <button className="primary-button">Quiero mi sesion</button>
                </Link>

            </section>
          </div>

        </div>

      </div>

      <div className="nose">

        {/* servicios */}
        <section className="servicios">
          <h2>Servicios</h2>
        </section>

        {/* testimonios */}
        <section className="testimonios">
          <h2>Testimonios</h2>
        </section>

        {/* galeria */}
        <section className="galeria">
          <h2>Galería</h2>
        </section>


        <section className="flex flex-col md:flex-row justify-evenly p-5 bg-white" id="contacto">
          {/* <h2>Contacto</h2> */}
          <ContactoForm/>
          <iframe className="w-full md:w-4/10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5827771761133!2d-58.981585523622684!3d-27.451110615916157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0c80be0d3%3A0xc9f9278c74810912!2sUTN%20-%20Facultad%20Regional%20Resistencia!5e0!3m2!1ses-419!2sar!4v1723472004268!5m2!1ses-419!2sar" loading="lazy"></iframe>

        </section>


      </div>

        




    </main>
  );
}
