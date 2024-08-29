
type ServiceProps={
    _id:string;
    nombre:string;
    tipo:string;
    precio:number;
    detalles:[string]
    deleteService: any;
    setEstaEditando:any;
}

export default function Service({nombre, tipo, precio, detalles,deleteService,setEstaEditando}:ServiceProps){

    
    return(
        <div>
            <h3><b>{nombre}</b></h3>
            <h4><i>{tipo}</i></h4>
            <p className="text-green-700">${precio}</p>
            <p>{detalles}</p>

            <button onClick={deleteService} className="bg-red-700 text-white p-1 m-1 rounded-xl">Eliminar</button>
            <button onClick={()=> setEstaEditando(true)} className="bg-blue-700 text-white p-1 m-1 rounded-xl">Editar</button>

        </div>
    );
}