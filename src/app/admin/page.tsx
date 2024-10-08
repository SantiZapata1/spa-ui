"use client"
// Next
import { redirect } from 'next/navigation';
// Contexto
import { useAuth } from './../../context/auth'
// Componentes
import Servicios from '../components/Servicios/Servicios';
import { useState } from 'react';
import Mensajes from '../components/Mensajes/Mensajes';
import Turnos from '../components/Turnos/Turnos';
import Candidatos from '../components/CV/CV';
import Contacto from '../components/Contacto/Contacto';
import Admins from '../components/AdminShow/Admins';
export default function Page() {

    const { user, isAuthenticated, isLoading } = useAuth();
    const [isHScreen, setIsHScreen] = useState(false);

    const [isShowServicios, setIsShowServicios] = useState(true);
    const [isShowTurnos, setIsShowTurnos] = useState(false);
    const [isShowMensajes, setIsShowMensajes] = useState(false);
    const [isShowCandidatos, setIsShowCandidatos] = useState(false);
    const [isShowContactos, setIsShowContactos] = useState(false)
    const [isShowAdmins, setIsShowAdmins] = useState(false)

    const handleReset = () => {
        setIsHScreen(false)
        setIsShowServicios(false)
        setIsShowTurnos(false)
        setIsShowMensajes(false)
        setIsShowCandidatos(false)
        setIsShowContactos(false)
        setIsShowAdmins(false)
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

    const handleCandidatos = () => {
        handleReset();
        setIsShowCandidatos(true);
    }

    const handleContactos = () => {
        handleReset();
        setIsShowContactos(true);
    }

    const handleAdmins = () => {
        handleReset();
        setIsShowAdmins(true);
    }

    if (isLoading) {
        return <h1 className='text-4xl font-bold text-center mt-20'>Cargando...</h1>
    }
    if (!isAuthenticated) {
        return redirect('/')
    }
    if (!user.admin) {
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
                    <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleCandidatos()}>
                        Candidatos
                    </button>
                    <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleContactos()}>
                        Contacto
                    </button>
                    <button className='m-1 bg-sage text-white font-semibold py-2 px-4 rounded w-full' onClick={() => handleAdmins()}>
                        Administradores
                    </button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                {isShowServicios && <Servicios />}
                {isShowTurnos && <Turnos />}
                {isShowMensajes && <Mensajes />}
                {isShowCandidatos && <Candidatos />}
                {isShowContactos && <Contacto />}
                {isShowAdmins && <Admins />}
            </div>
        </section>
    )
}
