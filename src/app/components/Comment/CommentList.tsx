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
    // console.log("Comentarios actualizados:", comentarios);
    }, [comentarios]);


  return (
    <div className="max-h-screen overflow-scroll w-full">
    <ul className="flex flex-wrap justify-center">
        {comentarios.length > 0 ? (
            comentarios
                .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((comentario: any) => (
                    <li key={comentario._id} className="border-b m-1 p-1 rounded-md bg-white w-80 flex-shrink-0">
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
