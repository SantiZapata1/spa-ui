"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import logo from "../../../../public/logo sin fondo.png";
import { useAuth } from './../../../context/auth';

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropwdownOpen, setUserDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setDropdownOpen(false);
    setUserDropdownOpen(!userDropwdownOpen);
  };

  const { signIn, errorsAuth, user, isAuthenticated } = useAuth();

  const linkClass = 'text-pink-700 font-semibold px-4 py-2 transition text-lg navbar-button rounded-3xl cursor-pointer';

  return (
    <div className='flex flex-col md:flex-row w-full items-center z-50 relative'>
      <div className='flex flex-col md:flex-row justify-center w-full items-center space-y-4 md:space-y-0 md:space-x-6 py-1'>

        <Link href="/" onClick={closeDropdown}>
          <Image
            src={logo}
            alt="logo del spa"
            className='w-20 pb-1'
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
            <div className='absolute bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50 w-full md:w-auto'>
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
          <div className={linkClass} onClick={toggleUserDropdown}>
            {user.nombre_de_usuario}
            {userDropwdownOpen && (
              <div className='absolute bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50'>
                <Link href="/perfil" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                  Mi Perfil
                </Link>
                <Link href="/logout" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                  Cerrar sesión
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
