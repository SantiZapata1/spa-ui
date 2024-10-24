"use client"

import MenuLateral2 from '@/app/components/Menu/menuLateral2'
import React from 'react'
import TurnosConFiltro from '@/app/components/Turnos/TurnosConFiltro'
import { useAuth } from '../../../context/auth'
import { redirect } from 'next/navigation'


function TurnosPage() {

  const { user, isLoading, isAuthenticated } = useAuth();

  
  const isSecretario = (user?.rol === 'Secretario' || user?.rol === 'Administrador');
  const isProfesional = (user?.rol === 'Profesional' || user?.rol === 'Administrador');
  const isAdmin = (user?.rol === 'Administrador');

  if(isLoading){
      return <div>Cargando...</div>
  }

  if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

  if(!isLoading && (!isProfesional && !isSecretario)){
      redirect('/panel-general/')
  }
  return (
        
      <section className="w-full flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0">
          <MenuLateral2 />
        </div>
        {user?.rol === 'Profesional' ? <h2>Turnos asignados</h2> : <h2>Turnos</h2>}
        <TurnosConFiltro />
      </section>
  
  )
}

export default TurnosPage