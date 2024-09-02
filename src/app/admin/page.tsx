"use client"
// Next
import Link from 'next/link';
import { redirect } from 'next/navigation';
// Contexto
import { useAuth } from './../../context/auth'
// Componentes
import Servicios from '../components/Servicios/Servicios';
import { useState } from 'react';
function page() {
    const { user, isAuthenticated, isLoading } = useAuth();
    const [isHScreen, setIsHScreen] = useState(true);

    const [isShowServicios, setIsShowServicios] = useState(false);
    const [isShowTurnos, setIsShowTurnos] = useState(false);
    const [isShowMensajes, setIsShowMensajes] = useState(false);
    
    const handleReset = () => {
        setIsHScreen(false),
        setIsShowServicios(false),
        setIsShowTurnos(false),
        setIsShowMensajes(false)
    }


    const handleServicios = () => {
        handleReset();
        setIsShowServicios(true);
    }

    const handleTurnos = () => {
        handleReset();
        setIsShowTurnos(true);
    }

    const handleMensajes = () => {
        handleReset();
        setIsShowMensajes(true);
    }

    if(isLoading){
        return <h1 className='text-4xl font-bold text-center mt-20'>Cargando...</h1>
    }
    if(!isAuthenticated){
        return redirect('/')
        }
    if(!user.admin){
        return redirect('/')
        }

    return (
        <section className={`${isHScreen ? 'h-screen' : 'h-full'  }`}>
        <h1 className='text-4xl font-bold text-center mt-20'>Página de administración</h1>

        <div className='flex justify-center mt-10'>
            <button className='m-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded' onClick={() => handleServicios()}>
                Servicios
            </button>
            <button className='m-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded' onClick={() => handleTurnos()}>
                Turnos
            </button>
            <button className='m-2 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded' onClick={() => handleMensajes()}>
                Mensajes
            </button>
            </div>
            {isShowServicios && <Servicios />}
            {isShowTurnos && <h1>Turnos</h1>}
            {isShowMensajes && <h1>Mensajes</h1>}
    </section>
  )
}

export default page