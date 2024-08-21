import React from 'react'
import { useForm } from "react-hook-form";
import Comment from '../Comment/Comment';
import { useComments } from '@/context/commentContext';
function CardComentarios() {
    
    // Destructuramos useForm
    const { 
        register, 
        handleSubmit, 
        setValue, 
        formState: { errors }
   } = useForm()
   // Destructuramos createComment de useComments
   const { createComment } = useComments();

   // Función onSubmit
    const onSubmit = handleSubmit(async(datos)=>{
      createComment(datos)
    });

  return (
    <div className="flex flex-col  items-center justify-center bg-white shadow-lg rounded-lg md:w-6/10 p-4 mt-5">
    <h2 className="text-3xl font-medium">Tus comentarios</h2>
    <form className="m-3 w-6/10 flex flex-col items-center justify-center bg-green-200 p-2 rounded-md" onSubmit={onSubmit}>

        <input 
            type='text' 
            placeholder='Servicio' 
            className='w-full my-2 border b-black'
            {...register("servicio")}
            autoFocus
        />

        <textarea 
            rows={3} 
            placeholder='Descripción' 
            className='w-full my-2 border b-black'
            {...register("descripcion")}
        ></textarea>
        <button className="p-3 mt-2 bg-green-900 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg">
            Guardar
        </button>
        
    </form>

    


    <Comment
        servicio='Peluquería'
        comentario='Muy buena la peluquera rubia'
    />

</div>

)
}

export default CardComentarios