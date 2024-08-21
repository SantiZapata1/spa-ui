'use client';

type CommentProps = {
    servicio: string;
    comentario:string;
    date: Date;
  };

export default function Comment({servicio, comentario, date}:CommentProps){
    const formattedDate = new Date(date).toLocaleString();

    return(
        <div className="p-3">
            <h3> <b>Servicio: </b>{servicio}</h3>
            <p><b>Comentario: </b>{comentario}</p>
            <p><b>Fecha: </b>{formattedDate}</p>
        </div>
    );

    


}