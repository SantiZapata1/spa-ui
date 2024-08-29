"use client"
import { useState,useEffect } from "react";
import {getServicesRequest, deleteServicesRequest} from "../../api/servicios"
import Service from "../components/ServiceList/Service";


export default function Servicios(){

    const [services, setServices] = useState([]);

    const listaServicios = async ()=>{
        try{
            const res = await getServicesRequest();
            setServices(res.data)
        }catch(error){
            console.log("error al obtener los Servicios", error);
            
        }
    }
    const deleteService = async(_id:number)=>{
        try{
            await deleteServicesRequest(_id)
            listaServicios()
        }catch(error){
            console.log("error eliminado servicio", error);
        }
    }

    useEffect(() => {
        listaServicios(); // Cargar comentarios cuando el componente se monta
      }, []);

    

    return(

        <div className="h-screen p-2 overflow-scroll">
            <h2>Todos los servicios</h2>

            <p>Total: {services.length}</p>
            <ul>
                {services.length > 0 ? (
                    // Ordenar los services por fecha, de más nuevo a más viejo
                    services
                        .map((service: any) => (
                            <li key={service._id} className="border-b my-2 py-2 bg-white rounded-md">
                                <Service
                                    _id={service._id}
                                    nombre={service.nombre}
                                    tipo={service.tipo}
                                    precio={service.precio}
                                    detalles={service.detalles}
                                    deleteService={()=>deleteService(service._id)}
                                />
                            </li>
                        ))
                ) : (
                    <p>No hay services disponibles.</p>
                )}
            </ul>










        </div>
    );
}