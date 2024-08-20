'use client';

type CommentProps = {
    servicio: string;
    comentario:string;
  };

export default function Comment({servicio, comentario}:CommentProps){

    return(
        <div className="border border-red-800 w-96">
            <h3> <b>Servicio: </b>{servicio}</h3>
            <p><b>Comentario: </b>{comentario}</p>
        </div>
    );

    


}