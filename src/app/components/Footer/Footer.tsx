'use client';

import React from 'react';

function Footer() {
  return (
    <footer className="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 z-50 relative">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
         <a href="/" className="hover:underline">Spa Senirse Bien™</a>. Todos los derechos reservados © 2024.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/empleos" className="hover:underline me-4 md:me-6">Empleo</a>
        </li>
        <li>
          <a href="" className="hover:underline me-4 md:me-6">Direccion</a>
        </li>
        <li>
          <a href="" className="hover:underline me-4 md:me-6">Telefono</a>
        </li>
        <li>
          <a href="" className="hover:underline me-4 md:me-6">Email</a>
        </li>

        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Politicas de privacidad</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Licencias</a>
        </li>
        
      </ul>
    </footer>
  );
}

export default Footer;

