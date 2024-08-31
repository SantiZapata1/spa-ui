

export default function Service({nombre, tipo, precio, detalles,deleteService,setIsEditing}:any){

    
    return(
        <div className="text-xl space-y-3">
            <h3 className="font-semibold"><span className="text-fuchsia-800">Titulo:</span> {nombre}</h3>
            <h4><span className="text-fuchsia-800 font-semibold">Tipo:</span> <i>{tipo}</i></h4>
            <p><span className="text-fuchsia-800 font-semibold">Precio:</span> ${precio}</p>
            <p><span className="text-fuchsia-800 font-semibold">Detalles:</span> {detalles}</p>

            <button onClick={deleteService} className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 mr-2 rounded-xl">Eliminar</button>
            <button onClick={setIsEditing} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-xl">Editar</button>

        </div>
    );
}