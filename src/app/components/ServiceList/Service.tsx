

export default function Service({nombre, tipo, precio, detalles,deleteService,}:any){


    const toUpperCaseFirst = (str:string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <div className="text-xl space-y-3">
            <h3 className=""><span className="font-semibold">Título:</span> {nombre}</h3>
            <h4><span className=" font-semibold">Tipo:</span> <i>{toUpperCaseFirst(tipo)}</i></h4>
            <p><span className=" font-semibold">Precio:</span> ${precio}</p>
            <p><span className="font-semibold">Detalles:</span> {detalles}</p>

            <button onClick={deleteService} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 mr-2 rounded-xl">Pedir turno</button>

        </div>
    );
}