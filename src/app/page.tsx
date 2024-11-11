"use client";
// CSS
import "./globals.css";
// Componentes
import ContactoForm from "./contacto/page";
import HeroImage from "./components/HeroImage/Heroimage";
import Galeria from "./components/GaleriaFoto/Galeria";
import CardServi from "./components/Cards/CardServi";
import QuienesSomos from "./components/QuienesSomos/quienesSomos";
import ComentariosIndex from "./components/Comment/ComentariosIndex";
import ComentariosIndexMobile from "./components/Comment/ComentariosIndexMobile";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useAuth } from '../context/auth';
// Hooks
import Link from "next/link";
import { div } from "framer-motion/client";
import { redirect } from "next/navigation";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import BotonInstalar from "./components/BotonInstalar/BotonInstalar";

export default function Home() {

  const {  isAuthenticated, isLoading } = useAuth();

  if(isLoading){
    return <LoadingScreen/>
}

  if ((!isLoading) && (isAuthenticated)) return redirect('/panel-general');

  return (
    <>
    <NavBar />
    <main className="overflow-x-hidden">
      <HeroImage/>
      <div className="secciones">
        {/* Quiénes somos */}
        <section className="flex flex-col items-center">
          <QuienesSomos />
        </section>
        {/* Servicios */}
        <section className="flex flex-col items-center py-8">
          <img src="nuestrosservicios.png" alt="" className='xl:max-w-screen-sm md:max-w-xl sm:max-w-sm max-w-xs' />

          <CardServi />
          <Link href="/servicios" >
            <button className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
                Ver todos los servicios
            </button>
          </Link>
        </section>
        {/* Galería */}
        <section className="p-8 flex flex-col justify-center items-center">
          {/* <h2>Veni a conocernos</h2> */}
          <img src="veniaconocernos.png" alt="" className='xl:max-w-screen-sm md:max-w-xl sm:max-w-md ' />

          <Galeria />
        </section>

        {/* Comentarios */}
          <section className="p-2 block md:hidden">
            <ComentariosIndexMobile />
          </section>
          <section className="p-8 hidden md:block pb-20">
          <ComentariosIndex />
          </section>
        {/* Contacto */}
        <section className="flex flex-col md:flex-row justify-evenly" id="contacto">
          <ContactoForm />
          <iframe className="w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5827771761133!2d-58.981585523622684!3d-27.451110615916157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0c80be0d3%3A0xc9f9278c74810912!2sUTN%20-%20Facultad%20Regional%20Resistencia!5e0!3m2!1ses-419!2sar!4v1723472004268!5m2!1ses-419!2sar" loading="lazy"></iframe>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
