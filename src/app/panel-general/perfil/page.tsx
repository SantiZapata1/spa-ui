"use client"
// Dependencias
import { redirect } from 'next/navigation'
// Contexto
import { useAuth } from '../../../context/auth';
// Hooks
import { useEffect, useState } from 'react';

// Componentes
import CardUserInfo from '../../components/Cards/CardUserInfo';
import CardUserTurnos from '../../components/Cards/CardUserTurnos';
import CardComentarios from '../../components/Cards/CardComentarios';
import CardEditUser from '../../components/Cards/CardEditUser';
import MenuLateral2 from '../../components/Menu/menuLateral2'; 
import LoadingScreen from '@/app/components/LoadingScreen/LoadingScreen';
import BottomNav from '@/app/components/BottomNavbar/BottomNavbar';
import Link from 'next/link';

export default function Profile(){

    // hook de contexto
    
    // Estados
    const [isEditing, setIsEditing] = useState(false);
    
    const { user, isAuthenticated, isLoading } = useAuth();

    const handleLogOut = () => {

    }


    if(isLoading){
        return <LoadingScreen/>
    }

    // Si no esta cargando y no esta autenticado se redirecciona al login
    if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

    return(
            <section className="w-full flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0">
        <MenuLateral2 /> 
      </div>
                <h2> Hola {user.nombre_de_usuario}</h2>    
                <Link href="/logout" className='block px-4 py-2 text-base hover:bg-gray-100' >
                <button className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105">Cerrar sesión
                </button>         
                </Link>
                {!isEditing 
                ? <CardUserInfo datosUsuario={user} setIsEditing={setIsEditing} />
                : <CardEditUser datosUsuario={user} setIsEditing={setIsEditing}/> }
                <CardComentarios />    
                    <BottomNav />           
            </section>
    );
}
