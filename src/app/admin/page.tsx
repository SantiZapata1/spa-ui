"use client"
// Next
import Link from 'next/link';
import { redirect } from 'next/navigation';
// Contexto
import { useAuth } from './../../context/auth'
// Componentes
import Servicios from '../components/Servicios/Servicios';
import { useState } from 'react';
import Mensajes from '../components/Mensajes/Mensajes';
import Turnos from '../components/Turnos/Turnos';

export default function Page() {
    
    const { user, isAuthenticated, isLoading } = useAuth();
    const [isHScreen, setIsHScreen] = useState(false);

    const [isShowServicios, setIsShowServicios] = useState(true);
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
        <section className={`h-full`}>

            <div className='flex flex-col md:flex-row justify-between p-5'>
                <h2 className='text-3xl text-center mt-8'>Panel de admin</h2>

                <div className='flex flex-col md:flex-row mt-5 justify-center items-center'>
                        <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleServicios()}>
                            Servicios
                        </button>
                        <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleTurnos()}>
                            Turnos
                        </button>
                        <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleMensajes()}>
                            Mensajes
                        </button>
                        <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleMensajes()}>
                            Candidatos
                        </button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>                
                {isShowServicios && <Servicios />}
                {isShowTurnos && <Turnos/>}
                {isShowMensajes && <Mensajes/>}
            </div>
        </section>
  )
}
