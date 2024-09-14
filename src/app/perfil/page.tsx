"use client"
// Dependencias
import { redirect } from 'next/navigation'
// Contexto
import { useAuth } from '../../context/auth';
// Hooks
import {  useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

// Componentes
import CardUserInfo from '../components/Cards/CardUserInfo';
import CardUserTurnos from '../components/Cards/CardUserTurnos';
import CardComentarios from '../components/Cards/CardComentarios';
import CardEditUser from '../components/Cards/CardEditUser';

<<<<<<< HEAD
import { getTurnoFromUserRequest } from '@/api/turnos';
=======
// Backend
import { getTurnosByUser } from '../../api/turnos';
>>>>>>> decdf2845cd10d88f26496666d2d63d3a58baca1

export default function Profile(){

    // hook de contexto
    const { user, isAuthenticated, errorsAuth, isLoading } = useAuth();

    useEffect(() => {
        console.log(user)
    }, [user])
    
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
