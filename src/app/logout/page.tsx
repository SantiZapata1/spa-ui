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
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

export default function Index() {
    const { logOut, isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(isAuthenticated){
            logOut()
            setTimeout(() => {
              router.push('/')
            }, 1000)
        }
      })
      
    return (
      <div className='h-screen'>
        <LoadingScreen/>
      </div>
  )
}

