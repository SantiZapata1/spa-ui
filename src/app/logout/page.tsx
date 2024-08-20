"use client"
/*
  [/logout] 
  Descripción: Página de cierre de sesión, solo muestra un mensaje de cerrando sesión
*/
// Hooks
import { useEffect } from 'react'
// Dependencias
import { useRouter } from 'next/navigation';
// Contexto
import { useAuth } from '../../context/auth'

function index() {
    const { logOut, isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(isAuthenticated){
            logOut()
            setTimeout(() => {
              router.push('/')
            }, 2000)
        }
      }, [isAuthenticated])
    return (
    <div className='h-screen'>Cerrando sesión...</div>
  )
}

export default index