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

            <h1 className='text-5xl text-center mt-8'>Página de administración</h1>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex flex-col mt-5'>
                    <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded' onClick={() => handleServicios()}>
                        Servicios
                    </button>
                    <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded' onClick={() => handleTurnos()}>
                        Turnos
                    </button>
                    <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded' onClick={() => handleMensajes()}>
                        Mensajes
                    </button>
                </div>

                {isShowServicios && <Servicios />}
                {isShowTurnos && <Turnos/>}
                {isShowMensajes && <Mensajes/>}
                

                

            </div>

        </section>
  )
}
