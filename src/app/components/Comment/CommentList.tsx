"use client"

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
        <ul>
            {comentarios.length > 0 ? (
                // Ordenar los comentarios por fecha, de más nuevo a más viejo
                comentarios
                    .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((comentario: any) => (
                        <li key={comentario._id} className="border-b my-2 py-2 bg-white rounded-md">
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
