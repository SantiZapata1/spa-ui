"use client"
// Dependencias
import { redirect } from 'next/navigation';
// Contexto
import { useAuth } from '../../../context/auth';
// Hooks
import { useEffect } from 'react';

// Componentes
import MenuLateral2 from '../../components/Menu/menuLateral2'; 
import CardUserTurnos from '../../components/Cards/CardUserTurnos';
import LoadingScreen from '@/app/components/LoadingScreen/LoadingScreen';

export default function Turnos() {
    // hook de contexto
    const { user, isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
        // Redirección si no está autenticado
        if (!isAuthenticated && !isLoading) {
            redirect('/login');
        }
    }, [isAuthenticated, isLoading]);

    if (isLoading) {
        return <LoadingScreen />;
    }
    
    
    // Si no esta cargando y no esta autenticado se redirecciona al login
    if ((!isLoading) && (!isAuthenticated)) return redirect('/login');


    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0">
                <MenuLateral2 /> 
            </div>
            <h2>Hola {user.nombre_de_usuario}, aquí están tus turnos:</h2>
            <CardUserTurnos />
        </section>
    );
}

