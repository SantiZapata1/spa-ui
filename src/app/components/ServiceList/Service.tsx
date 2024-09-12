import { useState } from "react";
import CardModalTurnos from "../Turnos/CardModalTurnos";


// cada tarjeta de los diferentes servicios tiene un boton con un estado, que al preciosarlo se activa en true
// para que se abra una ventana modal que permita al usuario cargar los datos de su nuevo turno.

export default function Service({nombre, tipo, precio, detalles}:any){

    const [isCardTurnosOpen, setCardTurnosOpen] = useState(false);

    const openCardTurnos = () => {
        setCardTurnosOpen(true);
    };

    const closeCardTurnos = () => {
        setCardTurnosOpen(false);
    };

    const toUpperCaseFirst = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div className="text-xl space-y-3">

            <h3 className=""><span className="font-semibold">Título:</span> {nombre}</h3>
            <h4><span className=" font-semibold">Tipo:</span> <i>{toUpperCaseFirst(tipo)}</i></h4>
            <p><span className=" font-semibold">Precio:</span> ${precio}</p>
            <p><span className="font-semibold">Detalles:</span> {detalles}</p>
            <button onClick={openCardTurnos} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 mr-2 rounded-xl">Pedir turno</button>


            <CardModalTurnos isOpen={isCardTurnosOpen} onClose={closeCardTurnos} servicio={nombre}/>

        </div>
    );
}