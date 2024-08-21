"use client"
// Dependencias
import { redirect } from 'next/navigation'
// Contexto
import { useAuth } from '../../context/auth';
// Hooks
import {  useForm } from "react-hook-form";
import { useState } from 'react';

// Componentes
import CardUserInfo from '../components/Cards/CardUserInfo';
import CardUserTurnos from '../components/Cards/CardUserTurnos';
import CardComentarios from '../components/Cards/CardComentarios';

export default function Profile(){

    const { user, isAuthenticated, errorsAuth, isLoading } = useAuth();


    // Estados
    const [isEditing, setIsEditing] = useState(false);
    const [turnos, setTurnos] = useState([]);

    if(isLoading){
        return <p>Cargando...</p>
    }

    // Si no esta cargando y no esta autenticado se redirecciona al login
    if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

    return(
        <>
            <section className="h-full w-full flex flex-col items-center justify-center mt-10">

                <h2> Hola {user.nombre_de_usuario}</h2>             
                   
                <CardUserInfo datosUsuario={user} setIsEditing={setIsEditing} />
                <CardUserTurnos turnos={[]}/>
                <CardComentarios />               

            </section>
        </>
    );
}
