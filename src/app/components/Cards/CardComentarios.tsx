import { useForm } from "react-hook-form";
import { useState, useEffect} from "react";

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

    const [comentarios, setComentarios] = useState([]);
    const [mensajeError, setMensajeError] = useState("");

    // Función para obtener la lista de comentarios
    const listaComentarios = async () => {
        try {
            const response = await getCommentsRequest();
            setComentarios(response.data); // Guarda los comentarios en el estado
        } catch (error) {
            setMensajeError("No se pudieron cargar los comentarios.");
            console.error("Error al obtener los comentarios:", error);
        }
    };
    useEffect(() => {
        listaComentarios(); // Cargar comentarios cuando el componente se monta
    }, []);

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
            listaComentarios(); // Recargar los comentarios después de crear uno nuevo
        } catch (error) {
            console.error("Error al enviar el comentario:", error);
            setMensajeError("Hubo un problema al enviar el comentario.");
        }
    };

    return (
        <div className=" mb-5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg md:w-6/10 p-4 mt-5">
            <h2 className="text-3xl font-medium">Tus comentarios</h2>

            <form 
                className="m-3 w-6/10 flex flex-col items-center justify-center p-2 rounded-md" 
                onSubmit={handleSubmit(onSubmit)}
            >
                <input 
                    type='text' 
                    placeholder='Servicio' 
                    className={`w-full p-2 my-2 border ${errors.servicio ? 'border-red-500' : 'border-black'}`}
                    {...register("servicio", { required: "El campo Servicio es obligatorio" })}
                    autoFocus
                />
                {errors.servicio && <p className="text-red-500">{errors.servicio.message}</p>}

                <textarea 
                    rows={3} 
                    placeholder='comentario' 
                    className={`p-2 w-full my-2 border ${errors.descripcion ? 'border-red-500' : 'border-black'}`}
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

            <CommentList 
                comentarios={comentarios} 
                recargarComentarios={listaComentarios} 
            />


        </div>
    );
}

export default CardComentarios;
