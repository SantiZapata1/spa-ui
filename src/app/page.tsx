"use client";

// CSS
import "./globals.css";
// Componentes
import ContactoForm from "./contacto/page";
import HeroImage from "./components/HeroImage/Heroimage";
import Galeria from "./components/GaleriaFoto/Galeria";
import { getCommentsRequest } from "../api/comments";
import CardServi from "./components/Cards/CardServi";
// Hooks
import { useState, useEffect } from "react";
import Link from "next/link";
// Backend
import ComentariosIndex from "./components/Comment/ComentariosIndex";

// interfaz del comentario
type Comentario = {
  id: number;
  servicio: string;
  comentario: string;
};

export default function Home() {
  return (
    <main>
      <HeroImage
        titulo="SPA - Sentirse bien"
        eslogan="Encuentra la paz en cada momento."
        textoBoton="Quiero mi sesión"
      />

      <div className="secciones bg-beige">
        {/* Quiénes somos */}
        <section className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
            <h3 className="text-lg font-medium">
              Buscamos atraer la atención de nuestros clientes a través de experiencias inspiradas en la seducción de los sentidos. Adaptamos las propuestas con el objetivo de que logre desconectarse completamente de la rutina y disfrute de un momento de bienestar, en total armonía con la naturaleza.
            </h3>
              <Link href="/about" >
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-4 rounded-3xl mt-5 ">
              Ir a Quienes Somos
            </button>
              </Link>
          </div>
        </section>

        {/* Servicios */}
        <section className="flex flex-col p-8">
          <h2 className="text-2xl font-bold mb-4">Servicios</h2>
          <CardServi />
        </section>

        {/* Galería */}
        <section className="p-8">
          <Galeria />
        </section>

        {/* Comentarios */}
        <section className="p-8">
          <ComentariosIndex />
        </section>

        {/* Contacto */}
        <section className="flex flex-col md:flex-row justify-evenly" id="contacto">
          <ContactoForm />
          <iframe className="w-full " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.5827771761133!2d-58.981585523622684!3d-27.451110615916157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf0c80be0d3%3A0xc9f9278c74810912!2sUTN%20-%20Facultad%20Regional%20Resistencia!5e0!3m2!1ses-419!2sar!4v1723472004268!5m2!1ses-419!2sar" loading="lazy"></iframe>
        </section>
      </div>
    </main>
  );
}
