type serviceProp={
    setEstaEditando:any
}

export default function ServiceEdit({setEstaEditando}:serviceProp){
    return(
        <div>
            <h1>editando</h1>
            <button onClick={()=> setEstaEditando(false)} className="bg-blue-700 text-white p-1 m-1 rounded-xl">Aceptar</button>

        </div>
    );
}