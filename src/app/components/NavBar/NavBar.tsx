"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
// import logo from "/logo_sin_fondo.png";
import { useAuth } from './../../../context/auth';
import NavBarOptions from './NavBarOptions';
import NavBarMobile from './NavBarMobile';

import { Bars3Icon } from '@heroicons/react/20/solid';

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

  const [dropOptionsOnMobile, setDropOptionsOnMobile] = useState(false);


  return (
    <div className='flex flex-col md:flex-row w-full items-center z-50 relative'>

      <div className='flex  md:flex-row justify-between p-2 md:justify-around  w-full items-center space-y-4 md:space-y-0 md:space-x-6 py-1'>
        <Link href="/" onClick={closeDropdown}>

          <div className='w-40'>
            <img
              src="loguitodef.png"
              alt="logo del spa" 
            />
          </div>
        </Link>
        <div className='hidden md:flex'>
          <NavBarOptions />
        </div>
        <div>
          REDES
        </div>
        <Bars3Icon className="block md:hidden size-6 cursor-pointer" onClick={() => setDropOptionsOnMobile(!dropOptionsOnMobile)} /> 
      </div>
      {dropOptionsOnMobile && (
          <div className='flex flex-col md:hidden'>
          {/* <NavBarOptions /> */}
          <NavBarMobile setDropOptionsOnMobile={setDropOptionsOnMobile}/>
        </div>
        )}
    </div>
  );
}