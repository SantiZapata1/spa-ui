import React from 'react'

import { HomeIcon, QuestionMarkCircleIcon, NewspaperIcon, SparklesIcon, ChatBubbleLeftIcon, UserIcon,  ArrowDownOnSquareIcon, ArrowRightEndOnRectangleIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useAuth } from './../../../context/auth'
import { useState } from 'react'

function NavBarMobile() {
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

  const linkClass = 'text-pink-700 font-semibold px-4 py-2 transition text-lg navbar-button rounded-3xl cursor-pointer';

  const { user, isAuthenticated } = useAuth();

  return (
    <>
    {!userDropwdownOpen && 
    <>  
        <Link href="/">
      <HomeIcon className="h-6 w-6 text-pink-700  "  />
      </Link>
      <Link href="/about">
      <QuestionMarkCircleIcon className="h-6 w-6 text-pink-700" />
      </Link>
      <Link href='/noticias'>
      <NewspaperIcon className="h-6 w-6 text-pink-700" />
      </Link>
      <Link href='/servicios'>
      <SparklesIcon className="h-6 w-6 text-pink-700" />
      </Link>
      <Link href='/#contacto'>
      <ChatBubbleLeftIcon className="h-6 w-6 text-pink-700" />
      </Link>
      {(!userDropwdownOpen && isAuthenticated) && <UserIcon className="h-6 w-6 text-pink-700 cursor-pointer"  onClick={toggleUserDropdown}/>}
      </>  
    }
      {!isAuthenticated ? (
        <Link href="/login" className={linkClass} onClick={closeDropdown}>
        <ArrowDownOnSquareIcon className="h-6 w-6 text-pink-700 cursor-pointer"/>
        </Link>
  ) : (
    <>
    {userDropwdownOpen && (
      <div className='flex flex-row justify-between w-full'>
          <Link href="/perfil" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={toggleUserDropdown}>
          <UserIcon className="h-6 w-6 text-pink-700"/>
          </Link>
          {user.admin && (
            <Link href="/admin" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={toggleUserDropdown}>
              <WrenchScrewdriverIcon className="h-6 w-6 text-pink-700" />
            </Link>  
          )}
          <Link href="/logout" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={toggleUserDropdown}>
            <ArrowRightEndOnRectangleIcon className='h-6 w-6 text-pink-700'/>
          </Link>
    </div>
      )}
      </>
  )}
      
    </>
  )
}

export default NavBarMobile