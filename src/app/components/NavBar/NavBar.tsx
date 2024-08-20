"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import logo from "../../../../public/logo sin fondo.png";
import { useAuth } from './../../../context/auth';

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Clase común para todos los enlaces
  const linkClass = 'text-white px-4 py-2 text-lg navbar-button';

  const { signIn, errorsAuth, user, isAuthenticated, logOut} = useAuth()

  return (
    <div className='flex flex-row bg-violet-logo w-full items-center z-50 relative'>
      <div className='flex flex-row items-center ml-4 space-x-6 center navbar-father'>
        <Link href="/" onClick={closeDropdown}>
          <Image
            src={logo}
            alt="logo del spa"
            className='w-20'
          />
        </Link>

        <Link href="/" className={linkClass} onClick={closeDropdown}>
          Inicio
        </Link>

        <Link href="/about" className={linkClass} onClick={closeDropdown}>
          Quienes somos
        </Link>
        <Link href="/noticias" className={linkClass} onClick={closeDropdown}>
          Noticias
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
              <Link href="/servicios/masaje" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                Masajes
              </Link>
              <Link href="/servicios/belleza" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                Belleza
              </Link>
              <Link href="/servicios/tFacial" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                Tratamientos faciales
              </Link>
              <Link href="/servicios/tCorporales" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                Tratamientos corporales
              </Link>
            </div>
          )}
        </div>

        <Link href="/#contacto" className={linkClass} onClick={closeDropdown}>
          Contacto

        </Link>
        {!isAuthenticated ? (
          <Link href="/login" className={linkClass} onClick={closeDropdown}>
            Login
          </Link>
        ) : (
          <Link href="/profile" className={linkClass} >
            {/* onClick={() => toggleDropdownFalse()} */}
          {user.nombre_de_usuario}
        </Link>
        )  
      }
      {/* si esta autenticado se muestra el boton de salir */}
      {isAuthenticated && <Link href="/" className={linkClass} onClick={logOut}>Salir</Link>}

      </div>
    </div>
  );
}

