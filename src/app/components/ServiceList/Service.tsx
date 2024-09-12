// Hooks
import { useState } from "react";
// Componentes
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

    // Remplaza la primer letra por mayúscula y los - por espacios
    const formatText = (text:string) => {
        return text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, ' ');
    }

    return(
        <div className="text-xl space-y-3">

            <h3 className=""><span className="font-semibold">Título:</span> {nombre}</h3>
            <h4><span className=" font-semibold">Tipo:</span> <i>{formatText(tipo)}</i></h4>
            <p><span className=" font-semibold">Precio:</span> ${precio}</p>
            <p><span className="font-semibold">Detalles:</span> {detalles}</p>
            <button onClick={openCardTurnos} className="bg-sage hover:bg-sage-hover text-white px-4 py-2 mr-2 rounded-xl">Pedir turno</button>


            <CardModalTurnos isOpen={isCardTurnosOpen} onClose={closeCardTurnos} nombreServicio={nombre}/>
        </div>
    );
}