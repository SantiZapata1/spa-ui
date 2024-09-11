'use client';

import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getServicesRequest, deleteServicesRequest, createServiceRequest } from "../../api/servicios";
import Service from "../components/ServiceList/Service";
import ServiceEdit from '../components/ServiceList/ServiceEdit';


export default function Servicios() {
    
    const [servicios, setServicios] = useState<any[]>([]);
    // const [isCreatingService, setIsCreatingService] = useState(false);
    // const [editingServiceId, setEditingServiceId] = useState<number | null>(null);

    // const { register, handleSubmit, formState: { errors } } = useForm();

    const obtenerListaServicios = async () => {
        try {
            const respuesta = await getServicesRequest();
            setServicios(respuesta.data);
        } catch (error) {
            console.log("error al obtener los Servicios", error);
        }
    }

    // const deleteService = async (_id: number) => {
    //     try {
    //         await deleteServicesRequest(_id);
    //         obtenerListaServicios();
    //     } catch (error) {
    //         console.log("error eliminado servicio", error);
    //     }
    // }

    useEffect(() => {
        obtenerListaServicios();
    }, []);

    // const onSubmit = async (values: any) => {
    //     try {
    //         Swal.fire({
    //             title: '¿Estás seguro?',
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#7BB263',
    //             cancelButtonColor: '#D8316C',
    //             confirmButtonText: 'Sí, enviar',
    //             cancelButtonText: 'Cancelar'
    //         }).then(async (result) => {
    //             if (result.isConfirmed) {
    //                 try {
    //                     Swal.fire({
    //                         title: '¡Listo!',
    //                         text: '¡Tu mensaje ha sido enviado correctamente!',
    //                         icon: 'success',
    //                         confirmButtonText: 'Aceptar',
    //                         confirmButtonColor: '#7BB263',
    //                     }).then(async (result) => {
    //                         if (result.isConfirmed) {
    //                             const respuesta = await createServiceRequest(values);
    //                             console.log("servicio creado correctamente");
    //                             obtenerListaServicios();
    //                             setIsCreatingService(false);
    //                         }
    //                     });
    //                 } catch (error) {
    //                     console.log(error);
    //                 }
    //             }
    //         });
    //     } catch (error) {
    //         console.log("error al crear un servicio", error);
    //     }
    // }

    return (
        <div className="min-h-screen p-4">
            
            <h2 className="text-3xl mb-4">Todos los servicios ({servicios.length})</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicios.length > 0 
                ? (
                    servicios
                        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Ordenar por fecha de creación (descendente)
                        .map((service: any) => (
                            <div key={service._id} className="p-4 rounded-lg shadow-md">
                                {
                                    <Service
                                        _id={service._id}
                                        nombre={service.nombre}
                                        tipo={service.tipo}
                                        precio={service.precio}
                                        detalles={service.detalles}
                                        // deleteService={() => deleteService(service._id)}
                                        // setIsEditing={() => setEditingServiceId(service._id)}
                                    />
                                }
                            </div>
                        ))
                ) 
                : 
                (
                    <p className="text-center col-span-full">No hay servicios disponibles.</p>
                )}

            </div>
        </div>
    );
}
