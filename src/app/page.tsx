import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar/NavBar";
import "./otro.css"

//componente principal
export default function Home() {
  return (
    <main>

      {/* barra de navegacion */}
      <NavBar/>

      <div className='vinoLogo'> hola</div>
      <div className='greenLogo'> hola</div>





    </main>
  );
}
