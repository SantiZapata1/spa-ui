import { useState } from "react";

import Service from "./Service";
import ServiceEdit from "./ServiceEdit";

// interfaz del comentario
type ServicioProps = {
    id: string,
    nombre: string,
    tipo: string,
    precio:number,
    detalles:[string];
    deleteService:()=>void ;
  };

export default function ServiceItem({id, nombre, tipo, precio, detalles, deleteService}:ServicioProps){


    const [estaEditando, setEstaEditando] = useState(false)

    
    
    const background = estaEditando ? "bg-red-300" : "bg-white"


    return(
        <div className={background}>

            {!estaEditando
            ?
            <Service
                _id={id}
                nombre={nombre}
                tipo={tipo}
                precio={precio}
                detalles={detalles}
                setEstaEditando={()=>setEstaEditando}
                deleteService={()=>deleteService}
            />
            :
            <ServiceEdit
                setEstaEditando={()=>setEstaEditando}
            />
            }

        </div>
    );
}