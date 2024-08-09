import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css"
import logo from "../../public/logo sin fondo.png"

//componente principal
export default function Home() {
  return (
    <main>

      {/* barra de navegacion */}
      <NavBar/>

      <div className='border-indigo-300 main'> 
        <Image
          src={logo}
          alt="logo del spa"
        />
      </div>

      <div className='bg-green-logo'> hola</div>






    </main>
  );
}
