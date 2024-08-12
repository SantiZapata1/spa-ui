import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css"
import logo from "../../public/logo sin fondo.png"
import imagenSpa from "../../public/imagen spa.jpg"
import Footer from './components/NavBar/Footer';

//componente principal
export default function Home() {
  return (
    <main>

      

      <div className='main'> 

        {/* barra de navegacion */}
        <NavBar/>

        <div className="hero-image">

          <div className="filtro">
          <h1>Titulo de la pagina</h1>

            <section className="contenido">
                <section className="eslogan">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod exercitationem expedita molestias et voluptate debitis, adipisci modi hic porro accusamus.</p>
                </section>

                <Link href="/contacto">
                  <button className="primary-button">llamada a la accion</button>
                </Link>

            </section>
          </div>

        </div>

      </div>

      <div className="nose">

        {/* servicios */}
        <section className="servicios">
          <h2>servicios</h2>
        </section>

        {/* testimonios */}
        <section className="testimonios">
          <h2>testimonios</h2>
        </section>

        {/* galeria */}
        <section className="galeria">
          <h2>galeria</h2>
        </section>

        {/* ubicacion */}
        <section className="ubicacion">
          <h2>ubicacion</h2>
        </section>

        <section className="contacto">
          <h2>contacto</h2>
        </section>


      </div>

        




      {/* footer */}
      <Footer/>


    </main>
  );
}
