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
import ServiceEdit from '../components/ServiceList/ServiceEdit';


export default function Servicios(){

    const [servicios, setServicios] = useState<any[]>([]);
    const [isCreatingService, setIsCreatingService] = useState(false)
    const [editingServiceId, setEditingServiceId] = useState<number | null>(null); // Estado para el ID en edición


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
            <h2>Todos los servicios ({servicios.length})</h2>

            


            {isCreatingService
            ?
            <form 
                className="m-3 w-6/10 p-2 rounded-md" 
                onSubmit={handleSubmit(onSubmit)}
                >
                    <h3 className='text-xl font-semibold'>Nuevo servicio</h3>
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

                <button type="submit" className="mt-3 py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-xl">
                    Enviar
                </button>
                <button
                    type='button'
                    onClick={()=>setIsCreatingService(false)}
                    className='bg-red-700 py-2 px-4 mx-2 mt-3 text-white rounded-xl'
                >
                    cancelar
                </button>
              </form>
              :
              <button 
            className='px-4 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700'
            onClick={()=>setIsCreatingService(true)}
            >Nuevo</button>
            }


            


            <ul>
                {servicios.length > 0 ? (

                    servicios
                        .map((service: any) => (
                            <li key={service._id} className="border-b my-2 py-2 rounded-md">
                                
                                {editingServiceId === service._id
                                ? <ServiceEdit
                                    id={service._id}
                                    setIsEditing={() => setEditingServiceId(null)} // Desactivar edición
                                    obtenerListaServicios={obtenerListaServicios}
                                    service={service}
                                />
                                : <Service
                                    _id={service._id}
                                    nombre={service.nombre}
                                    tipo={service.tipo}
                                    precio={service.precio}
                                    detalles={service.detalles}
                                    deleteService={() => deleteService(service._id)}
                                    setIsEditing={() => setEditingServiceId(service._id)} // Activar edición para este servicio
                                />
                                }

                                                             
                                
                            </li>
                        ))
                ) : (
                    <p>No hay servicios disponibles.</p>
                )}
            </ul>

        </div>
    );
}