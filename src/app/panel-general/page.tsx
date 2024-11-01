'use client';

import { redirect } from 'next/navigation';
import { useAuth } from '../../context/auth';
import MenuLateral2 from '../components/Menu/menuLateral2'; 
import BottomNav from '../components/BottomNavbar/BottomNavbar';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';


export default function Proyecto2() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const role = isAuthenticated ? user.rol : 'Invitado'; // Definimos el rol

  if(isLoading){
    return <LoadingScreen/>
}

  if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

 
  return (
  <html>
    <section>

  <div className="relative min-h-screen flex bg-cover bg-center" style={{ backgroundImage: "url('/Diseño_flores.png')" }}>
      {/* Menú lateral */}
      <div className="absolute top-0 left-0">
        <MenuLateral2 /> 
      </div>

      {/* Contenido principal */}
      <div className="flex-grow p-8 text-center"> 
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido, {role}
        </h1>
        <main className="relative z-10 mb-32">
          {/* Aquí puedes agregar más contenido */}
        </main>
      </div>
    </div>
    </section>
    <BottomNav />
      <link rel="icon" href="logo_sin_fondo.png" sizes="any" />
  </html>
    );
}
