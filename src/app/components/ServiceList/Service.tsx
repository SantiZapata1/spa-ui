import { useState } from "react";

type ServiceProps={
    _id:string;
    nombre:string;
    tipo:string;
    precio:number;
    detalles:[string]
    deleteService: () => void;

}

export default function Service({_id,nombre, tipo, precio, detalles,deleteService}:ServiceProps){

    const [estaEditando, setEstaEditando] = useState(false)

    const editService =()=>{

        setEstaEditando(!estaEditando)
        console.log(estaEditando);

    }
    
    const background = estaEditando ? "bg-red-300" : "bg-white"

    return(
        <div className={background}>
            <h3><b>{nombre}</b></h3>
            <h4><i>{tipo}</i></h4>
            <p className="text-green-700">${precio}</p>
            <p>{detalles}</p>

            <button onClick={deleteService} className="bg-red-700 text-white p-1 m-1 rounded-xl">Eliminar</button>
            <button onClick={editService} className="bg-blue-700 text-white p-1 m-1 rounded-xl">Editar</button>

        </div>
    );
}