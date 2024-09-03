
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from './../../../context/auth'
function NavBarOptions() {
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
    <Link href="/" className={linkClass} onClick={closeDropdown}>
    Inicio
  </Link>

  <Link href="/about" className={linkClass} onClick={closeDropdown}>
    Quienes somos
  </Link>

  <Link href="/noticias" className={linkClass} onClick={closeDropdown}>
    Noticias
  </Link>

  <Link href='/servicios' className={linkClass}>Servicios</Link>

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
          {user.admin && (
            <Link href="/admin" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
              Panel de adminisrador
            </Link>  
          )}
          <Link href="/logout" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
            Cerrar sesión
          </Link>
        </div>
      )}
    </div>
  )}
</>

)
}

export default NavBarOptions