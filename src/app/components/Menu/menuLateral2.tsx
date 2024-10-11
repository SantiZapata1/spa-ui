'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../../../context/auth'; 
import { Bars3Icon } from '@heroicons/react/24/outline';

interface Section {
  id: string;
  title: string;
  route: string;
}

const MenuLateral2 = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, isAuthenticated } = useAuth();

  // Definir las secciones según el rol dentro del componente
  const seccionesAdmin: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/proyecto2/perfil' },
    { id: 'servicios', title: 'Servicios', route: '/proyecto2/servicios' },
    { id: 'noticias', title: 'Noticias', route: '/proyecto2/noticias' },
    { id: 'mis-turnos', title: 'Mis turnos', route: '/proyecto2/mis-turnos' },
    { id: 'turnos', title: 'Turnos', route: '/proyecto2/turnos' },
    { id: 'turnos-hoy', title: 'Turnos Hoy', route: '/proyecto2/turnos-hoy' },
    { id: 'usuarios', title: 'Usuarios', route: '/proyecto2/usuarios' },
  ];

  const seccionesEmpleado: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/proyecto2/perfil' },
    { id: 'turnos-hoy', title: 'Turnos Hoy', route: '/proyecto2/turnos-hoy' },
    { id: 'turnos', title: 'Turnos', route: '/proyecto2/turnos' },
  ];

  const seccionesSecretario: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/proyecto2/perfil' },
    { id: 'turnos', title: 'Turnos', route: '/proyecto2/turnos' },
  ];

  const seccionesUsuario: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/proyecto2/perfil' },
    { id: 'servicios', title: 'Servicios', route: '/proyecto2/servicios' },
    { id: 'noticias', title: 'Noticias', route: '/proyecto2/noticias' },
    { id: 'mis-turnos', title: 'Mis turnos', route: '/proyecto2/mis-turnos' },
  ];

  // Determinar las secciones a mostrar en función del rol del usuario
  let sections = [];
  if (isAuthenticated && user.rol === 'Administrador') {
    sections = seccionesAdmin;
  } else if (isAuthenticated && user.rol === 'Empleado') {
    sections = seccionesEmpleado;
  } else if (isAuthenticated && user.rol === 'Secretario') {
    sections = seccionesSecretario;
  } else {
    sections = seccionesUsuario;
  }

  return (
    <div className="hidden md:block relative group">
      {!menuVisible && (
        <div className="header h-screen w-full p-4 bg-gray-100 bg-opacity-0 flex flex-col" onMouseEnter={() => setMenuVisible(true)}>
          <Bars3Icon className="w-6 h-6 text-lime-600" />
        </div>
      )}
      {menuVisible && (
        <aside className="header w-64 p-4 bg-gray-100 bg-opacity-50 h-screen flex flex-col" onMouseLeave={() => setMenuVisible(false)}>
          <ul className="space-y-4 mt-6">
            {sections.map((section) => (
              <li key={section.id}>
                <Link href={section.route} className="block p-3 text-gray-900 hover:bg-gray-200 hover:text-green-700 rounded-lg">
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default MenuLateral2;

