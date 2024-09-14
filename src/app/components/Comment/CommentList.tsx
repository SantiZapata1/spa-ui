"use client"

import Comment from "./Comment";

// Utiliza useState para almacenar los comentarios y useEffect para realizar la solicitud cuando el componente se monta.
import {useEffect } from "react";

interface Comentario {
    _id: string;
    servicio: string;
    comentario: string;
    date: Date;
}

export default function CommentList({ comentarios }:any) {

   // Efecto para manejar acciones cuando los comentarios cambian (si es necesario)
   useEffect(() => {
    // Puedes realizar alguna acción aquí cuando los comentarios cambian
    // console.log("Comentarios actualizados:", comentarios);
    }, [comentarios]);


  return (
    <div className="min-w-[300px] w-full ">
    <ul className="">
        {comentarios.length > 0 ? (
            comentarios
                .sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((comentario: any) => (
                    <li key={comentario._id} className="">
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
