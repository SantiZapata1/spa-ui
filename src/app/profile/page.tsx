"use client"

import { useAuth } from '../../context/auth';

export default function Profile(){

    const { user, isAuthenticated, errorsAuth } = useAuth();

    if (!isAuthenticated) {
        return <p>No estás autenticado</p>;
    }

    return(
        <>
            <section className="h-screen">
                {errorsAuth && <p>{errorsAuth}</p>}
                <div>
                    {user ? (
                        <h2> Hola {user.nombre_de_usuario}</h2>
                    ) : (
                        <p>Cargando...</p>
                    )}
                </div>
            </section>
        </>
    );
}
