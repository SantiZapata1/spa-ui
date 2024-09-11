"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
// import logo from "/logo_sin_fondo.png";
import { useAuth } from './../../../context/auth';
import NavBarOptions from './NavBarOptions';
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
      <div className='flex flex-col md:flex-row justify-center w-full items-center space-y-4 md:space-y-0 md:space-x-6 py-1'>
        <Link href="/" onClick={closeDropdown}>

          <div className='w-20 pb-1'>
            <Image
              src="logo_sin_fondo.png"
              alt="logo del spa" 
            />
          </div>
        </Link>
        <div className='hidden md:flex'>
          <NavBarOptions />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block md:hidden size-6 cursor-pointer" onClick={() => setDropOptionsOnMobile(!dropOptionsOnMobile)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {dropOptionsOnMobile && (
          <NavBarOptions />
        )}
      </div>
    </div>
  );
}
