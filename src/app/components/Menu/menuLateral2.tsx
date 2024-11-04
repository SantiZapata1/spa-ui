'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../../../context/auth'; 
import { useRouter } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

interface Section {
  id: string;
  title: string;
  route: string;
}

const MenuLateral2 = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showAlways, setShowAlways] = useState(false); // Estado para el checkbox
  const { user, isAuthenticated } = useAuth();
  const router = useRouter(); // Hook para redirigir a logout

  // Definir las secciones según el rol dentro del componente
  const seccionesAdmin: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/panel-general/perfil' },
    { id: 'servicios', title: 'Servicios', route: '/panel-general/servicios' },
    { id: 'noticias', title: 'Noticias', route: '/panel-general/noticias' },
    { id: 'mis-turnos', title: 'Mis turnos', route: '/panel-general/mis-turnos' },
    { id: 'turnos', title: 'Turnos', route: '/panel-general/turnos' },
    { id: 'turnos-hoy', title: 'Turnos Hoy', route: '/panel-general/turnos-hoy' },
    { id: 'usuarios', title: 'Usuarios', route: '/panel-general/usuarios' },
    { id: 'informes', title: 'Informes', route: '/panel-general/informes' },
    { id: 'estadisticas', title: 'Estadisticas', route: '/panel-general/estadisticas' },
  ];

  const seccionesProfesional: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/panel-general/perfil' },
    { id: 'turnos-hoy', title: 'Turnos Hoy', route: '/panel-general/turnos-hoy' },
  ];

  const seccionesSecretario: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/panel-general/perfil' },
    { id: 'turnos', title: 'Turnos', route: '/panel-general/turnos' },
  ];

  const seccionesUsuario: Section[] = [
    { id: 'perfil', title: 'Perfil', route: '/panel-general/perfil' },
    { id: 'servicios', title: 'Servicios', route: '/panel-general/servicios' },
    { id: 'noticias', title: 'Noticias', route: '/panel-general/noticias' },
    { id: 'mis-turnos', title: 'Mis turnos', route: '/panel-general/mis-turnos' },
  ];

  // Determinar las secciones a mostrar en función del rol del usuario
  let sections = [];
  if (isAuthenticated && user.rol === 'Administrador') {
    sections = seccionesAdmin;
  } else if (isAuthenticated && user.rol === 'Profesional') {
    sections = seccionesProfesional;
  } else if (isAuthenticated && user.rol === 'Secretario') {
    sections = seccionesSecretario;
  } else {
    sections = seccionesUsuario;
  }

  // Función para redirigir a la página de logout
  const handleLogout = () => {
    router.push('/logout');
  };

  return (
    <div className="block relative group">
      {!menuVisible && !showAlways && (
        <div className="hidden md:flex header h-screen w-full p-4 bg-gray-100 bg-opacity-0 flex-col" onMouseEnter={() => setMenuVisible(true)}>
          <Bars3Icon className="w-6 h-6" />
        </div>
      )}
      {(menuVisible || showAlways) && (
        <aside className="header w-64 p-4 bg-gray-100 bg-opacity-80 h-screen flex flex-col justify-between" onMouseLeave={() => !showAlways && setMenuVisible(false)}>
          <ul className="space-y-4 mt-6">
            {sections.map((section) => (
              <li key={section.id}>
                <Link href={section.route} className="block p-3 text-gray-900 hover:bg-gray-200 hover:text-green-700 rounded-lg">
                  <span className='font-semibold'> 
                    {section.title}
                    </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón de Cerrar sesión */}
          <button
            onClick={handleLogout} 
            className="font-semibold mt-auto block w-full p-3 text-left text-gray-900 hover:bg-red-200 hover:text-red-700 rounded-lg"
          >
            Cerrar sesión <ArrowRightStartOnRectangleIcon className="w-6 h-6 inline-block" />
          </button>

          {/* Checkbox para mostrar siempre */}
          <label className="mt-4 flex items-center space-x-2">
            <input type="checkbox" checked={showAlways} onChange={(e) => setShowAlways(e.target.checked)} />
            <span className="text-gray-700">Mostrar siempre</span>
          </label>
        </aside>
      )}
    </div>
  );
};

export default MenuLateral2;
