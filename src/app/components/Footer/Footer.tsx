"use client";

import React from 'react';

function Footer() {
  return (
    <footer className="w-full p-4 bg-white border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            <a href="/" className="hover:underline">Spa Sentirse Bien™</a>. Todos los derechos reservados © 2024.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0">
            <li>
              <a href="/empleos" className="hover:underline me-4 md:me-6">Empleo</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Dirección</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Teléfono</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Email</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Políticas de privacidad</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licencias</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



