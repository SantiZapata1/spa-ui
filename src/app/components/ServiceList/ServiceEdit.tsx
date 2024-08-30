type serviceProp={
    setIsEditing:any
}

export default function ServiceEdit({setIsEditing}:serviceProp){

    const Click=()=>{
        setIsEditing(false);
        console.log("ya no estamos editando");
    }
    return(
        <div>
            <h1>editando</h1>
            <button onClick={Click} className="bg-blue-700 text-white p-1 m-1 rounded-xl">Aceptar</button>

        </div>
    );
}