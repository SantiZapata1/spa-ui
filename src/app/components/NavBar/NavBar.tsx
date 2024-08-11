"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import logo from "../../../../public/logo sin fondo.png";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const linkClass = 'text-white px-4 py-2 text-lg font-semibold hover:bg-green-700 focus:outline-none'; // Clase común para todos los enlaces

  return (
    <div className='flex flex-row bg-green-600 w-full items-center'>
      <Link href="/">
        <Image
          src={logo}
          alt="logo del spa"
          className='w-20'
        />
      </Link>
      <div className='flex flex-row items-center ml-4 space-x-4'>
        <Link href="/" className={linkClass}>
          Inicio
        </Link>
        <Link href="/contacto" className={linkClass}>
          Contacto
        </Link>
        <Link href="/info" className={linkClass}>
          Quienes somos
        </Link>
        <Link href="/noticias" className={linkClass}>
          Noticias
        </Link>
        <Link href="/empleos" className={linkClass}>
          Empleos
        </Link>

        <div className='relative'>
          <button 
            onClick={toggleDropdown} 
            className={linkClass}
          >
            Servicios
          </button>
          {dropdownOpen && (
            <div className='absolute bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50'>
              <Link href="/masajes" className='block px-4 py-2 text-base hover:bg-gray-100'>Masajes</Link>
              <Link href="/belleza" className='block px-4 py-2 text-base hover:bg-gray-100'>Belleza</Link>
              <Link href="/tFacial" className='block px-4 py-2 text-base hover:bg-gray-100'>Tratamientos faciales</Link>
              <Link href="/tCorporales" className='block px-4 py-2 text-base hover:bg-gray-100'>Tratamientos corporales</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
