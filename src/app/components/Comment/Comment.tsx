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
        <div className="p-3 border-b m-1 rounded-xl bg-beige shadow-md">
            <h3 className="mb-4"> <b>Servicio: </b>{formatServicio(servicio)}</h3>
            <p className="mb-4"><b></b>{comentario}</p>
            <p className="text-right"><b></b>{formattedDate}</p>
        </div>
    );

    


}