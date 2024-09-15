"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
      <div className='flex md:flex-row justify-between p-2 md:justify-around w-full items-center space-y-4 md:space-y-0 md:space-x-6 py-1'>
        <Link href="/" onClick={closeDropdown}>
          <div className='w-40'>
            <img src="loguitodef.png" alt="logo del spa" />
          </div>
        </Link>
        <div className='hidden md:flex'>
          <NavBarOptions />
        </div>
        <div className='flex space-x-4'>
          <a href="https://facebook.com" className="text-pink-700 hover:text-gray-800">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" className="text-pink-700 hover:text-gray-800">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" className="text-pink-700 hover:text-gray-800">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://whatsapp.com" className="text-pink-700 hover:text-gray-800">
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </div>
        <Bars3Icon className="block md:hidden size-6 cursor-pointer" onClick={() => setDropOptionsOnMobile(!dropOptionsOnMobile)} /> 
      </div>
      {dropOptionsOnMobile && (
        <div className='flex flex-col md:hidden'>
          <NavBarMobile setDropOptionsOnMobile={setDropOptionsOnMobile}/>
        </div>
      )}
    </div>
  );
}