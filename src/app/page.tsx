import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css"
import logo from "../../public/logo sin fondo.png"
import imagenSpa from "../../public/imagen spa.jpg"

//componente principal
export default function Home() {
  return (
    <main>

      {/* barra de navegacion */}
      <NavBar/>

      <div className='main'> 

          <Image
              src={imagenSpa}
              alt="imagen del spa"
              className="w-full object-fill	md:object-cover	"
            />       
        
      </div>

 






    </main>
  );
}
