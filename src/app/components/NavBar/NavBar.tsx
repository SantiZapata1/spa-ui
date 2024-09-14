"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
// import logo from "/logo_sin_fondo.png";
import { useAuth } from './../../../context/auth';
import NavBarOptions from './NavBarOptions';
import NavBarMobile from './NavBarMobile';
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
      <div className='flex flex-col md:flex-row justify-center w-full items-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-1 '>
        <Link href="/" onClick={closeDropdown}>

          <div className='hidden md:block md:w-20 pb-1'>
            <img
              src="logo_sin_fondo.png"
              alt="logo del spa" 
            />
          </div>
        </Link>
        <div className='hidden md:flex'>
          <NavBarOptions />
        </div>
        <div className='flex flex-row md:hidden w-full items-center justify-between px-4'>
          <NavBarMobile />
        </div>
      </div>
    </div>
  );
}
