'use client';

import { useAuth } from '../../context/auth';
import MenuLateral2 from '../components/Menu/menuLateral2'; // Importamos el nuevo componente

export default function Proyecto2() {
  const { user, isAuthenticated } = useAuth();
  const role = isAuthenticated ? user.rol : 'Invitado'; // Definimos el rol

  return (
    <div className="relative min-h-screen flex">
      {/* Menú lateral */}
      <div className="absolute top-0 left-0">
        <MenuLateral2 /> {/* Utilizamos el nuevo menú lateral aquí */}
      </div>

      {/* Contenido principal */}
      <div className="flex-grow ml-64 p-8 text-center"> {/* Margen para compensar el menú lateral */}
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido, {role}
        </h1>
        <main className="relative z-10 mb-32">
          {/* Aquí iría el contenido dinámico dependiendo de la ruta */}
        </main>
      </div>
    </div>
  );
}
