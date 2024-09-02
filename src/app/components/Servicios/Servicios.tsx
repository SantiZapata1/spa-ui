'use client';

import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getServicesRequest, deleteServicesRequest, createServiceRequest } from "../../../api/servicios";
import Service from "../ServiceList/Service";
import ServiceEdit from '../ServiceList/ServiceEdit';

import InputText from '../Inputs/InputText';
import SelectOptions from '../Select/SelectOptions';
export default function Servicios() {
    const [servicios, setServicios] = useState<any[]>([]);
    const [isCreatingService, setIsCreatingService] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState<number | null>(null);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

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

    const opcionesServicios = [
        { value: "belleza", nombre: "Belleza" },
        { value: "masajes", nombre: "Masajes" },
        { value: "tratamientos-corporales", nombre: "Tratamientos corporales" },
        { value: "tratamientos-faciales", nombre: "Tratamientos faciales" },
    ]

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
                            <InputText campo="Nombre del servicio" nombre="nombre" type="text" register={register} errors={errors.nombre} />
                        </div>
                        <div className="mb-4">
                            <SelectOptions campo="Tipo de servicio" nombre='tipo' opciones={opcionesServicios} setValue={setValue} error={errors.tipo} />
                        </div>
                            <InputText campo="Precio" nombre="precio" type="text" register={register} errors={errors.precio}  />
                        <div className="mb-4">
                            <InputText campo="Detalles" nombre="detalles" type="text" register={register} errors={errors.detalles}/>
                        </div>
                        <button type="submit" className="py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-lg mr-2">
                            Enviar
                        </button>
                        <button
                            type='button'
                            onClick={() => setIsCreatingService(false)}
                            className='py-2 px-4 bg-orange-700 hover:bg-orange-800 text-white rounded-lg'
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
