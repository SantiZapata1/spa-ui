import { useForm } from "react-hook-form";
import { useState} from "react";

// componentes
import CommentList from "../Comment/CommentList";

import {
    createCommentRequest,
    getCommentRequest,
    getCommentsRequest,
    deleteCommentsRequest,
    updateCommentRequest,
} from "../../../api/comments";

function CardComentarios() {

    // Destructuramos useForm
    const { 
        register, 
        handleSubmit, 
        formState: { errors }
    } = useForm();

    // Función onSubmit
    const onSubmit = async (datos:any) => {

        try {
            await createCommentRequest(datos);
            console.log(datos);
            alert("Comentario enviado exitosamente");

        } catch (error) {
            console.error("Error al enviar el comentario:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg md:w-6/10 p-4 mt-5">
            <h2 className="text-3xl font-medium">Tus comentarios</h2>

            <form 
                className="m-3 w-6/10 flex flex-col items-center justify-center bg-green-200 p-2 rounded-md" 
                onSubmit={handleSubmit(onSubmit)}
            >
                <input 
                    type='text' 
                    placeholder='Servicio' 
                    className={`w-full my-2 border ${errors.servicio ? 'border-red-500' : 'border-black'}`}
                    {...register("servicio", { required: "El campo Servicio es obligatorio" })}
                    autoFocus
                />
                {errors.servicio && <p className="text-red-500">{errors.servicio.message}</p>}

                <textarea 
                    rows={3} 
                    placeholder='comentario' 
                    className={`w-full my-2 border ${errors.descripcion ? 'border-red-500' : 'border-black'}`}
                    {...register("comentario", { required: "El campo comentario es obligatorio" })}
                ></textarea>

                {errors.comentario && <p className="text-red-500">{errors.comentario.message}</p>}

                <button 
                    type="submit"
                    className="p-3 mt-2 bg-green-900 w-full hover:bg-green-700 text-white font-bold rounded-lg shadow-lg"
                >
                    Enviar
                </button>
            </form>

            <CommentList/>


        </div>
    );
}

export default CardComentarios;
