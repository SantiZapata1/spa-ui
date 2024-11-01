
"use client"

import MenuLateral2 from '@/app/components/Menu/menuLateral2'
import React from 'react'
import TurnosHoy from '@/app/components/Turnos/turnosHoy';
import Turnos from '@/app/components/Turnos/Turnos'
import { useAuth } from '../../../context/auth'
import { redirect } from 'next/navigation'
import LoadingScreen from '@/app/components/LoadingScreen/LoadingScreen';

function TurnosHoyPage() {
    const { user, isLoading, isAuthenticated } = useAuth();

    const isSecretario = (user?.rol === 'Secretario' || user?.rol === 'Administrador');
    const isProfesional = (user?.rol === 'Profesional' || user?.rol === 'Administrador');
    const isAdmin = (user?.rol === 'Administrador');

    if(isLoading){
        return <LoadingScreen/>
    }

    if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

    if(!isLoading && !isProfesional){
        redirect('/panel-general/')
    }

    return (
    <section className="w-full flex flex-col items-center justify-center">
    <div className="absolute top-0 left-0">
        <MenuLateral2 /> 
    </div>
    {user.rol === 'Profesional' ? <h2>Turnos asignados hoy</h2> : <h2>Turnos de hoy:</h2>}
    <TurnosHoy />
</section>  

)
}

export default TurnosHoyPage