"use client";

import { useState } from 'react';
import MenuLateral from '../components/Menu/menuLateral'; 
import { useAuth } from '../../context/auth';  

const seccionesAdmin = [
  { id: 'perfil', title: 'Perfil' },
  { id: 'servicios', title: 'Servicios' },
  { id: 'noticias', title: 'Noticias' },
  { id: 'mis-turnos', title: 'Mis turnos' },
  { id: 'turnos', title: 'Turnos' },
  { id: 'turnos-hoy', title: 'Turnos Hoy' },
];

const seccionesEmpleado = [
  { id: 'perfil', title: 'Perfil' },
  { id: 'turnos-hoy', title: 'Turnos Hoy' },
  { id: 'turnos', title: 'Turnos' },
];

const seccionesSecretario = [
  { id: 'perfil', title: 'Perfil' },
  { id: 'turnos', title: 'Turnos' },
];

const seccionesUsuario = [
  { id: 'perfil', title: 'Perfil' },
  { id: 'servicios', title: 'Servicios' },
  { id: 'noticias', title: 'Noticias' },
  { id: 'mis-turnos', title: 'Mis turnos' },
];

export default function Proyecto2() {
  const { user, isAuthenticated } = useAuth(); 
  const role = isAuthenticated ? user.rol : null;

  // Determinamos las secciones a mostrar según el rol
  let sections = [];
  if (role === 'Administrador') {
    sections = seccionesAdmin;
  } else if (role === 'Empleado') {
    sections = seccionesEmpleado;
  } else if (role === 'Secretario') {
    sections = seccionesSecretario;
  } else {
    sections = seccionesUsuario;
  }

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-row">
        {/* Envoltura del menú lateral para aplicar estilos */}
        <div className="absolute top-0 left-0">
          <MenuLateral sections={sections} />
        </div>
        
        <div className="flex-grow">
          <div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Bienvenido, {role ? role : 'Invitado'}
            </h1>
          </div>

          <main className="relative z-10 mb-32">
            {/* Contenido principal - vacío para mostrar solo la bienvenida */}
          </main>
        </div>
      </div>
    </div>
  );
}
