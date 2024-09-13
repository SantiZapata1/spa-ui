'use client';

import Swal from 'sweetalert2';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline'

import DataTable from "react-data-table-component";
import columnsServicios from './columnsServicios';
import expandedComponent from './expandedComponents';

import customStylesServicios from '../Turnos/customStyles';

import InputText from '../Inputs/InputText';
import SelectOptions from '../Select/SelectOptions';

import {
    getServicesRequest,
    deleteServicesRequest,
    createServiceRequest,
    updateServiceRequest
} from "../../../api/servicios";


export default function Servicios() {


    // Hooks states
    const [servicios, setServicios] = useState<any[]>([]);
    const [serviciosFiltrados, setServiciosFiltrados] = useState<any[]>([]);
    const [isCreatingService, setIsCreatingService] = useState(false);
    const [isEditingService, setIsEditingService] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState<number | null>(null);
    const [currentService, setCurrentService] = useState<any>(null);

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        formState: { errors } } = useForm();

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    }

    // Función para obtener la lista de servicios
    const obtenerListaServicios = async () => {
        try {
            const respuesta = await getServicesRequest();

            if (respuesta.data && Array.isArray(respuesta.data)) {
                setServicios(respuesta.data);
                setServiciosFiltrados(respuesta.data);
            } else {
                console.log("La respuesta de la API no es válida");
            }
        } catch (error) {
            console.log("Error al obtener los Servicios", error);
        }
    };

    // Maneja la creación y actualización de un servicio
    const onSubmit = async (values: any) => {
        try {

            // Actualizar servicio
            if (editingServiceId) {
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
                            await updateServiceRequest({ ...values, id: editingServiceId });
                            Swal.fire('¡Listo!', '¡Servicio actualizado correctamente!', 'success');
                            obtenerListaServicios();  // Actualiza la lista después de crear o actualizar
                            setIsCreatingService(false);
                            setEditingServiceId(null);
                            setCurrentService(null);
                        } catch (error) {
                            console.log("Error al actualizar el servicio", error);
                        }
                    }
                });
            }
            // Crear nuevo servicio
            else {

                await createServiceRequest(values);
                Swal.fire('¡Listo!', '¡Servicio creado correctamente!', 'success');

                // Actualiza la lista después de crear o actualizar
                obtenerListaServicios();

                // actualizar estados
                setIsCreatingService(false);
                setEditingServiceId(null);
                setCurrentService(null);
            }
        } catch (error) {
            console.log("Error al guardar el servicio", error);
        }
    };

    // Opciones para el filtro
    const opcionesServicios = [
        { value: "ninguno", nombre: "sin filtro" },
        { value: "belleza", nombre: "Belleza" },
        { value: "masajes", nombre: "Masajes" },
        { value: "tratamientos-corporales", nombre: "Tratamientos corporales" },
        { value: "tratamientos-faciales", nombre: "Tratamientos faciales" },
    ];

    // Efecto para obtener los servicios al montar el componente
    useEffect(() => {
        obtenerListaServicios();
    }, []);

    return (
        <>
            <div className="min-w-full p-5">
                <div className="flex flex-col items-center justify-center md:block mb-8">
                    <h2 className="text-2xl mb-4 text-left inline mr-5">Todos los servicios ({servicios.length})</h2>

                    {/* formulario para agregar un nuevo servicio */}
                    {isCreatingService && !isEditingService ? (
                        <form
                            className="mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h3 className='text-2xl font-semibold mb-4'>{editingServiceId ? 'Editar servicio' : 'Nuevo servicio'}</h3>
                            <div className="mb-4">
                                <InputText campo="Nombre del servicio" nombre="nombre" type="text" register={register} errors={errors.nombre} />
                            </div>
                            <div className="mb-4">
                                <SelectOptions campo="Tipo de servicio" nombre='tipo' opciones={opcionesServicios} setValue={setValue} error={errors.tipo} />
                            </div>
                            <InputText campo="Precio" nombre="precio" type="text" register={register} errors={errors.precio} />
                            <div className="mb-4">
                                <InputText campo="Detalles" nombre="detalles" type="text" register={register} errors={errors.detalles} />
                            </div>

                            <button type="submit" className="py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-lg mr-2">
                                {editingServiceId ? 'Actualizar' : 'Enviar'}
                            </button>
                            <button
                                type='button'
                                onClick={() => {
                                    setIsCreatingService(false);
                                }}
                                className='py-2 px-4 bg-orange-700 hover:bg-orange-800 text-white rounded-lg'>
                                Cancelar
                            </button>
                        </form>
                    ) : (
                        <button
                            className='px-3 py-1 text-white bg-sage rounded-lg'
                            onClick={() => setIsCreatingService(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Formulario para filtrar los servicios */}
                <div className="flex flex-col items-center justify-center md:block mb-8 md:w-fit md:mb-2">
                    <form
                        className="mx-auto max-w-4xl bg-white p-2 rounded-lg shadow-md"
                        onSubmit={handleSubmit((values) => {
                            if (values.filtro == "ninguno") {
                                setServiciosFiltrados(servicios)
                            } else {
                                setServiciosFiltrados(servicios.filter((servicio) => servicio.tipo === values.filtro));
                            }
                        })}
                    >
                        <SelectOptions campo="filtro" nombre='filtro' opciones={opcionesServicios} setValue={setValue} error={errors.tipo} />
                        <button className='px-3 ml-1 py-1 bg-sage text-white rounded-lg'>
                            Buscar
                        </button>
                    </form>

                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <DataTable
                    columns={columnsServicios()}
                    expandableRowsComponent={expandedComponent}
                    expandableRows
                    expandableIcon={expandableIcon}
                    data={serviciosFiltrados}
                    pagination
                    customStyles={customStylesServicios}
                    responsive={true}
                />
            </div>
        </>
    );
}
