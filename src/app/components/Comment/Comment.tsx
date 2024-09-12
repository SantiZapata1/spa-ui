'use client';

type CommentProps = {
    servicio: string;
    comentario:string;
    date: Date;
  };

export default function Comment({servicio, comentario, date}:CommentProps){
    const formattedDate = new Date(date).toLocaleString();

    // Pone la primer letra en mayúscula y remplaza - por espacio
    const formatServicio = (servicio:string) => {
        return servicio.charAt(0).toUpperCase() + servicio.slice(1).replace(/-/g, " ");
    }

    return(
        <div className="p-3">
            <h3> <b>Servicio: </b>{formatServicio(servicio)}</h3>
            <p><b>Comentario: </b>{comentario}</p>
            <p><b>Fecha: </b>{formattedDate}</p>
        </div>
    );

    


}