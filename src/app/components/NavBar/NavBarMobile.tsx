import Link from 'next/link'
import React from 'react'
import { useAuth } from '../../../context/auth'

type NavBarMobileUpdatedProps = {
    setDropOptionsOnMobile: any;

}

function NavBarMobileUpdated({setDropOptionsOnMobile }: NavBarMobileUpdatedProps) {

    const linkClass = 'block px-4 py-2 text-base hover:bg-gray-100 font-semibold px-4 py-2 transition text-lg navbar-button rounded-3xl cursor-pointer text-pink-900';

    const { user, isAuthenticated } = useAuth();

    return (
        <div className="absolute bg-beiged text-gray-700 mt-2 rounded-lg shadow-lg right-0 w-6/10 bg-opacity-90"> 
            <Link href="/" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                Inicio
            </Link>

            <Link href="/about" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                Quienes somos
            </Link>

            <Link href="/noticias" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                Noticias
            </Link>

            <Link href='/servicios' className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>Servicios</Link>

            <Link href="/#contacto" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                Contacto
            </Link>
            {!isAuthenticated ? (
                <Link href="/login" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/perfil" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                        Mi Perfil
                    </Link>
                    {user.admin && (
                        <Link href="/admin" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                            Panel de administrador
                        </Link>
                    )}
                    <Link href="/logout" className={linkClass} onClick={() => setDropOptionsOnMobile(false)}>
                        Cerrar sesión
                    </Link>
                </>
            )}

        </div>)
}

export default NavBarMobileUpdated