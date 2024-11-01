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

export default function Profile(){

    // hook de contexto
    
    // Estados
    const [isEditing, setIsEditing] = useState(false);
    
    const { user, isAuthenticated, isLoading } = useAuth();
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
                {!isEditing 
                ? <CardUserInfo datosUsuario={user} setIsEditing={setIsEditing} />
                : <CardEditUser datosUsuario={user} setIsEditing={setIsEditing}/> }
                <CardComentarios />               
            </section>
    );
}
