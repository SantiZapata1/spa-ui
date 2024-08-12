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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod exercitationem expedita molestias et voluptate debitis, adipisci modi hic porro accusamus, blanditiis id, sunt sit dicta suscipit est nostrum quam!</p>
                </section>

                <Link href="/contacto">
                  <button className="primary-button">llamada a la accion</button>
                </Link>

            </section>
          </div>

        </div>

        
      </div>
      <Footer/>



 






    </main>
  );
}
