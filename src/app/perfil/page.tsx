"use client"
// Dependencias
import { redirect } from 'next/navigation'
// Contexto
import { useAuth } from '../../context/auth';
// Hooks
import { useEffect, useState } from 'react';

// Componentes
import CardUserInfo from '../components/Cards/CardUserInfo';
import CardUserTurnos from '../components/Cards/CardUserTurnos';
import CardComentarios from '../components/Cards/CardComentarios';
import CardEditUser from '../components/Cards/CardEditUser';

export default function Profile(){

    // hook de contexto
    const { user, isAuthenticated, isLoading } = useAuth();
    
    // Estados
    const [isEditing, setIsEditing] = useState(false);
   
    if(isLoading){
        return <p>Cargando...</p>
    }

    // Si no esta cargando y no esta autenticado se redirecciona al login
    if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

    return(
            <section className="w-full flex flex-col items-center justify-center">
                <h2> Hola {user.nombre_de_usuario}</h2>             
                {!isEditing 
                ? <CardUserInfo datosUsuario={user} setIsEditing={setIsEditing} />
                : <CardEditUser datosUsuario={user} setIsEditing={setIsEditing}/> }
                <CardUserTurnos />                
                <CardComentarios />               
            </section>
    );
}
