import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from './../../../context/auth';

function NavBarOptions() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleMouseEnter = () => {
        setUserDropdownOpen(true);
    };

    const handleMouseLeave:any = () => {
        setUserDropdownOpen(false);
    };

    const linkClass = 'text-pink-700 font-semibold px-4 py-2 transition text-md navbar-button rounded-3xl cursor-pointer';

    const { user, isAuthenticated } = useAuth();

    return (
        <> 
            <Link href="/" className={linkClass} onClick={closeDropdown}>
                INICIO
            </Link>

            <Link href="/about" className={linkClass} onClick={closeDropdown}>
                NOSOTROS
            </Link>

            <Link href="/noticias" className={linkClass} onClick={closeDropdown}>
                NOTICIAS
            </Link>

            <Link href='/servicios' className={linkClass}>SERVICIOS</Link>

            <Link href="/#contacto" className={linkClass} onClick={closeDropdown}>
                CONTACTO
            </Link>

            {!isAuthenticated ? (
                <Link href="/login" className={linkClass} onClick={closeDropdown}>
                    LOG IN
                </Link>
            ) : (
                <div 
                    className={linkClass} 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >
                    {user.nombre_de_usuario}
                    {userDropdownOpen && (
                        <div className='absolute bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50'>
                            <Link href="/perfil" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                                Mi Perfil
                            </Link>
                            {user.admin && (
                                <Link href="/admin" className='block px-4 py-2 text-base hover:bg-gray-100' onClick={closeDropdown}>
                                    Panel de administrador
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
    );
}

export default NavBarOptions;
