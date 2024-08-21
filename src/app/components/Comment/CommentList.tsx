import {getCommentsRequest} from "../../../api/comments"
import Comment from "./Comment";
// Utiliza useState para almacenar los comentarios y useEffect para realizar la solicitud cuando el componente se monta.
import { useState, useEffect } from "react";

interface Comentario {
    _id: string;
    servicio: string;
    comentario: string;
    date: Date;
}

export default function CommentList({ comentarios, recargarComentarios }:any) {

   // Efecto para manejar acciones cuando los comentarios cambian (si es necesario)
   useEffect(() => {
    // Puedes realizar alguna acción aquí cuando los comentarios cambian
    console.log("Comentarios actualizados:", comentarios);
    }, [comentarios]);


  return (
    <div>
            <h4>Lista de comentarios</h4>
            <ul>
                {comentarios.length > 0 ? (
                    comentarios.map((comentario:any) => (
                        <li key={comentario._id} className="border-b py-2">
                            <Comment
                                servicio={comentario.servicio}
                                comentario={comentario.comentario}
                                date={comentario.date} 
                            />
                        </li>
                    ))
                ) : (
                    <p>No hay comentarios disponibles.</p>
                )}
            </ul>
        </div>
  )
}
