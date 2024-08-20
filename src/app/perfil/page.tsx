"use client"

import { useAuth } from '../../context/auth';
import Comment from '../components/Comment/Comment';
import { useComments } from '@/context/commentContext';

import { Form, useForm } from "react-hook-form";

export default function Profile(){

    const { user, isAuthenticated, errorsAuth } = useAuth();

    const {createComment} = useComments();


    // destructuramos useForm
    const { 
        register, 
        handleSubmit, 
        setValue, 
        formState: { errors }
   } = useForm()

    const onSubmit = handleSubmit(async(datos)=>{
    //   console.log(datos);
      createComment(datos)
    });


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

                <section>
                    <h3>Tus turnos:</h3>
                </section>

                <section>

                    <h3>Tus comentarios:</h3>

                    <form className="m-3 w-80 bg-green-200 p-2 rounded-md" onSubmit={onSubmit}>

                        <input 
                            type='text' 
                            placeholder='Servicio' 
                            className='w-full my-2 border b-black'
                            {...register("servicio")}
                            autoFocus
                        />

                        <textarea 
                            rows={3} 
                            placeholder='descripcion' 
                            className='w-full my-2 border b-black'
                            {...register("descripcion")}
                        ></textarea>

                        
                        <button className="p-3 mt-2 bg-green-900 text-white font-bold rounded-lg shadow-lg">
                            Guardar
                        </button>
                        
                    </form>

                    


                    <Comment
                        servicio='peluqueria'
                        comentario='muy buena la peluquera rubia'
                    />

                </section>

            </section>
        </>
    );
}
