// hooks
import { useState } from "react";

// api
import {getServicesRequest} from "../../../api/servicios"

export default function ServiceList(){

    const [services, setServices] = useState([]);

    const listaServicios = async ()=>{
        try{
            await getServicesRequest();
        }catch{
            
        }
    }

    

    return(
        <div>

        </div>
    );





}