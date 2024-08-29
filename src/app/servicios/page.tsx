"use client"

import Swal from 'sweetalert2';

// hook
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// metodos api
import {
    getServicesRequest, 
    deleteServicesRequest,
    createServiceRequest} from "../../api/servicios"

// componentes
import Service from "../components/ServiceList/Service";
import InputText from "../components/Inputs/InputText";




// interfaz del comentario
type Servicio = {
    id: number,
    nombre: string,
    tipo: string,
    precio:Number,
    detalles:[string];
  };

export default function Servicios(){

    const [servicios, setServicios] = useState<Servicio[]>([]);

    // destructuramos useform
    const {
        register,
        handleSubmit,
        setValue,
        formState:{errors}
    } = useForm()

    // funcion para obtener lista servicios
    const obtenerListaServicios = async ()=>{
        try{
            const respuesta = await getServicesRequest();
            const nuevaListaServicios=respuesta.data; 
            setServicios(nuevaListaServicios)
        }catch(error){
            console.log("error al obtener los Servicios", error);
        }
    }

    const deleteService = async(_id:number)=>{
        try{
            await deleteServicesRequest(_id)
            obtenerListaServicios()
        }catch(error){
            console.log("error eliminado servicio", error);
        }
    }


    useEffect(() => {
        obtenerListaServicios(); // Cargar comentarios cuando el componente se monta
    }, []);

    

    // funcion cuando se envie el form
    const onSubmit = async(values:any)=>{

        console.log(values);

        try{

            Swal.fire({
                title: '¿Estás seguro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7BB263',
                cancelButtonColor: '#D8316C',
                confirmButtonText: 'Sí, enviar',
                cancelButtonText: 'Cancelar'
              }).then(async (result) => {
    
                if (result.isConfirmed) {
                  try {
                    // Aquí iría la conexión a la BD
                    Swal.fire({
                      title: '¡Listo!',
                      text: '¡Tu mensaje ha sido enviado correctamente!',
                      icon: 'success',
                      confirmButtonText: 'Aceptar',
                      confirmButtonColor: '#7BB263',
    
                    }).then(async(result) => {
                      if (result.isConfirmed) {
                        // Si se confirma, recargar la página
                        // sendMessageContacto(values);
                        const respuesta = await createServiceRequest(values)
                        console.log("servicio creado correctamente");
                        obtenerListaServicios()
                        window.location.reload();
                      }
                    });
                  } catch (error) {
                    console.log(error)
                  }
                }
              });

        }catch(error){

            console.log("error al crear un servicio", error);

        }

    }

    
    return(

        <div className="h-screen p-2 overflow-scroll">
            <h2>Todos los servicios</h2>




            <form 
                className="m-3 w-6/10 p-2 rounded-md" 
                onSubmit={handleSubmit(onSubmit)}
                >

                    <div>
                        <label htmlFor="nombre">nombre del servicio:</label>
                        <input 
                        type="text" 
                        id="nombre"
                        {...register("nombre", {required:true})}
                        />
                    </div>

                

                {/* Lista de servicios */}
                <div>
                    <label htmlFor="servicio">Tipo de servicio:</label>
                    <input
                    list="lista-servicio"
                    id="tipo"
                    className="p-1 m-1 font-bold"
                    {...register('tipo', { required: true })} 
                    />
                    <datalist id="lista-servicio">
                        <option value="belleza" />
                        <option value="masajes" />
                        <option value="tratamientos-corporales" />
                        <option value="tratamientos-faciales"/>
                    </datalist>
                    {errors.servicio && <p className="text-red-500">Este campo es requerido</p>}
                </div>

                <div>
                    <label htmlFor="precio">precio:</label>
                    <input 
                        type="number" 
                        id="precio"
                        {...register("precio", {required:true})}
                        />
                </div>
                

                <div>
                    <label htmlFor="detalles">detalles:</label>
                    <input 
                        type="text" 
                        id="detalles"
                        {...register("detalles", {required:true})}
                        />
                </div>

                {/* <InputTextArea require type="text" placeholder="Comentario" register={register} setValue={setValue} campo="" nombre="comentario"  errors={errors.comentario}/> */}

                <button type="submit" className="p-3 mt-2 bg-green-900 w-96 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg">
                    Enviar
                </button>
              </form>

            <p>Total: {servicios.length}</p>

            <ul>
                {servicios.length > 0 ? (

                    servicios
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
                    <p>No hay servicios disponibles.</p>
                )}
            </ul>

        </div>
    );
}