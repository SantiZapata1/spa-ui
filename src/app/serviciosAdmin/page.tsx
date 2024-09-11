'use client';


import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getServicesRequest, deleteServicesRequest, createServiceRequest } from "../../api/servicios";
import Service from "../components/ServiceList/Service";
import ServiceEdit from '../components/ServiceList/ServiceEdit';

export default function Servicios() {
    
    const [servicios, setServicios] = useState<any[]>([]);
    const [isCreatingService, setIsCreatingService] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState<number | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const obtenerListaServicios = async () => {
        try {
            const respuesta = await getServicesRequest();
            setServicios(respuesta.data);
        } catch (error) {
            console.log("error al obtener los Servicios", error);
        }
    }

    const deleteService = async (_id: number) => {
        try {
            await deleteServicesRequest(_id);
            obtenerListaServicios();
        } catch (error) {
            console.log("error eliminado servicio", error);
        }
    }

    useEffect(() => {
        obtenerListaServicios();
    }, []);

    const onSubmit = async (values: any) => {
        try {
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
                        Swal.fire({
                            title: '¡Listo!',
                            text: '¡Tu mensaje ha sido enviado correctamente!',
                            icon: 'success',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: '#7BB263',
                        }).then(async (result) => {
                            if (result.isConfirmed) {
                                const respuesta = await createServiceRequest(values);
                                console.log("servicio creado correctamente");
                                obtenerListaServicios();
                                setIsCreatingService(false);
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        } catch (error) {
            console.log("error al crear un servicio", error);
        }
    }

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Todos los servicios ({servicios.length})</h2>
                {isCreatingService ? (
                    <form
                        className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3 className='text-2xl font-semibold mb-4'>Nuevo servicio</h3>
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-gray-700">Nombre del servicio:</label>
                            <input
                                type="text"
                                id="nombre"
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                {...register("nombre", { required: true })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tipo" className="block text-gray-700">Tipo de servicio:</label>
                            <input
                                list="lista-servicio"
                                id="tipo"
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                {...register('tipo', { required: true })}
                            />
                            <datalist id="lista-servicio">
                                <option value="belleza" />
                                <option value="masajes" />
                                <option value="tratamientos-corporales" />
                                <option value="tratamientos-faciales" />
                            </datalist>
                            {errors.tipo && <p className="text-red-500">Este campo es requerido</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="precio" className="block text-gray-700">Precio:</label>
                            <input
                                type="number"
                                id="precio"
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                {...register("precio", { required: true })}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="detalles" className="block text-gray-700">Detalles:</label>
                            <input
                                type="text"
                                id="detalles"
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                                {...register("detalles", { required: true })}
                            />
                        </div>
                        <button type="submit" className="py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-lg mr-2">
                            Enviar
                        </button>
                        <button
                            type='button'
                            onClick={() => setIsCreatingService(false)}
                            className='py-2 px-4 bg-red-700 hover:bg-red-800 text-white rounded-lg'
                        >
                            Cancelar
                        </button>
                    </form>
                ) : (
                    <button
                        className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg'
                        onClick={() => setIsCreatingService(true)}
                    >
                        Nuevo
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.length > 0 ? (
                servicios
                    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) // Ordenar por fecha de creación (descendente)
                    .map((service: any) => (
                        <div key={service._id} className="bg-white p-4 rounded-lg shadow-md">
                            {editingServiceId === service._id
                                ? <ServiceEdit
                                    id={service._id}
                                    setIsEditing={() => setEditingServiceId(null)}
                                    // obtenerListaServicios={obtenerListaServicios}
                                    service={service}
                                />
                                : <Service
                                    _id={service._id}
                                    nombre={service.nombre}
                                    tipo={service.tipo}
                                    precio={service.precio}
                                    detalles={service.detalles}
                                    deleteService={() => deleteService(service._id)}
                                    setIsEditing={() => setEditingServiceId(service._id)}
                                />
                            }
                        </div>
                    ))
            ) : (
                <p className="text-center col-span-full">No hay servicios disponibles.</p>
            )}

            </div>
        </div>
    );
}
