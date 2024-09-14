"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-sage text-gray-400">
      <div className="container mx-auto py-8 px-5 flex flex-wrap justify-between items-start">
        
        {/* Logo y nombre */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <a className="flex items-center justify-start text-white">
            <img src="/logo_sin_fondo.png" alt="Logo" className="w-10 h-10" /> {/* Sin el círculo */}
            <span className="ml-3 text-xl">Spa Sentirse Bien™</span>
          </a>
        </div>

        {/* Sección Empresa */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Empresa</h2>
          <nav className="list-none">
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">Sobre nosotros</a>
            </li>
            <li>
              <a href="/servicios" className="text-gray-400 hover:text-white">Servicios</a>
            </li>
            <li>
              <a href="/empleos" className="text-gray-400 hover:text-white">Empleos</a>
            </li>
          </nav>
        </div>

        {/* Sección Desarrolladores */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Desarrolladores</h2>
          <nav className="list-none">
            <li>
              <a href="https://github.com/GonzaAhrexd" className="text-gray-400 hover:text-white">Gonzalo Ebel</a>
            </li>
            <li>
              <a href="https://github.com/MSCV2607" className="text-gray-400 hover:text-white">Mauro Camors Vecchietti</a>
            </li>
            <li>
              <a href="https://github.com/SantiZapata1" className="text-gray-400 hover:text-white">Santiago Zapata</a>
            </li>
          </nav>
        </div>

        {/* Sección Legal en español */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Legal</h2>
          <nav className="list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Aviso legal</a>
            </li>
          </nav>
        </div>
      </div>

      {/* Copyright y redes sociales */}
      <div className="bg-sage-light py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-800">© 2024 Spa Sentirse Bien™. Todos los derechos reservados.</p>

          {/* Iconos de redes sociales */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-800 hover:text-white">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-800 hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" className="text-gray-800 hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://whatsapp.com" className="text-gray-800 hover:text-white">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
