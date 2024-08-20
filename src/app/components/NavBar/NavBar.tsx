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

  const toggleDropdownFalse = () => {
    setDropdownOpen(false);
  }
  // Clase común para todos los enlaces
  const linkClass = 'text-white px-4 py-2 text-lg navbar-button'; 

  const { signIn, errorsAuth, user, isAuthenticated, logOut} = useAuth()

  return (

    <div className='flex flex-row bg-violet-logo w-full items-center'>

      <div className='flex flex-row items-center ml-4 space-x-6 center navbar-father'>

        <Link href="/" onClick={() => toggleDropdownFalse()}>
          <Image
            src={logo}
            alt="logo del spa"
            className='w-20'
          />
        </Link>
      
        <Link href="/" className={linkClass}  onClick={() => toggleDropdownFalse()}>
          Inicio
        </Link>
        
        <Link href="/about" className={linkClass} onClick={() => toggleDropdownFalse()}>
          Quienes somos
        </Link>
        <Link href="/noticias" className={linkClass} onClick={() => toggleDropdownFalse()}>
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
              <Link href="/servicios/masaje" className='block px-4 py-2 text-base hover:bg-gray-100'>Masajes</Link>
              <Link href="/servicios/masaje/belleza" className='block px-4 py-2 text-base hover:bg-gray-100'>Belleza</Link>
              <Link href="/servicios/masaje/tFacial" className='block px-4 py-2 text-base hover:bg-gray-100'>Tratamientos faciales</Link>
              <Link href="/servicios/masaje/tCorporales" className='block px-4 py-2 text-base hover:bg-gray-100'>Tratamientos corporales</Link>
            </div>
          )}
        </div>
        
        <Link href="/#contacto" className={linkClass} onClick={() => toggleDropdownFalse()}>
          Contacto

        </Link>

        {/* Si no esta logueado el boton sirve para loguearse, y si ya lo esta sirve para ver su perfil */}
        {!isAuthenticated ? (
          <Link href="/login" className={linkClass} onClick={() => toggleDropdownFalse()}>
          Login
        </Link>
        ) : (
          <Link href="/profile" className={linkClass} onClick={() => toggleDropdownFalse()}>

          Mi perfil
          {/* Aca no deberia ir un boton para salir de la cuenta? */}

        </Link>
        )  
      }

      {/* si esta autenticado se muestra el boton de salir */}
      {isAuthenticated && <Link href="/" className={linkClass} onClick={logOut}>Salir</Link>}


      </div>
    </div>
  );
}

