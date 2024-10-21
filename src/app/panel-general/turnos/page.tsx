"use client"

import MenuLateral2 from '@/app/components/Menu/menuLateral2'
import React from 'react'
import Turnos from '@/app/components/Turnos/Turnos'
import { useAuth } from '../../../context/auth'


function page() {

  const { user, isLoading } = useAuth();

  if(isLoading){
    return <div>Cargando...</div>
  }

  return (
        
      <section className="w-full flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0">
          <MenuLateral2 />
        </div>
        {user?.rol === 'Profesional' ? <h2>Turnos asignados</h2> : <h2>Turnos</h2>}
        <Turnos />
      </section>
  
  )
}

export default page