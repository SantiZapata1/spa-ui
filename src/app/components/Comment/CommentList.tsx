"use client"

import Comment from "./Comment";

interface Comentario {
    _id: string;
    servicio: string;
    comentario: string;
    date: Date;
}

export default function CommentList({ comentarios }:any) {


  return (
    <div className="min-w-[300px]  w-full ">
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
