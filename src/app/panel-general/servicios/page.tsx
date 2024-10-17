'use client';

import { useState, useEffect } from "react";
import { getServicesRequest } from "../../../api/servicios";
import Service from "../../components/ServiceList/Service";
import MenuLateral2 from '../../components/Menu/menuLateral2';
import { useAuth } from "../../../context/auth";
import { redirect } from "next/navigation";

export default function Servicios() {
    const [servicios, setServicios] = useState<any[]>([]);
    const { user, isAuthenticated, isLoading } = useAuth();

    const obtenerListaServicios = async () => {
        try {
            const respuesta = await getServicesRequest();
            setServicios(respuesta.data);
        } catch (error) {
            console.log("Error al obtener los Servicios", error);
        }
    }

    useEffect(() => {
        obtenerListaServicios();
    }, []);

    // Normaliza los tipos para asegurar que se comparen de manera consistente
    const normalizeType = (tipo: string) => tipo.trim().toLowerCase();
    
    const renderServiciosPorTipo = (tipo: string) => {
        const serviciosFiltrados = servicios.filter(service => {
            const tipoNormalizado = normalizeType(service.tipo);
            return tipoNormalizado === normalizeType(tipo);
        });

        if (serviciosFiltrados.length === 0) {
            return <p className="text-center col-span-full">No hay servicios de {tipo.toLowerCase()} disponibles.</p>;
        }
        


        if (isLoading) {
            return <p>Cargando...</p>
        }

        // Si no esta cargando y no esta autenticado se redirecciona al login
        if ((!isLoading) && (!isAuthenticated)) return redirect('/login');


        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {/* Menú lateral */}
                <div className="absolute top-0 left-0">
                    <MenuLateral2 />
                </div>

                {serviciosFiltrados
                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .map(service => (
                        <div key={service._id} className="p-4">
                            <Service
                                _id={service._id}
                                nombreServicio={service.nombre}
                                tipo={service.tipo}
                                precio={service.precio}
                                detalles={service.detalles}
                            />
                        </div>
                    ))}
            </div>
        );
    };

    return (
        <div className="p-2 flex justify-center bg-flores-beige">

            <div className="max-w-screen-xl bg-beige2 p-10 rounded-xl shadow-xl border flex flex-col items-center">

                {/* <h2 className="text-3xl my-4">Nuestros servicios ({servicios.length})</h2> */}

                <img src="nuestrosservicios.png" alt="" className='mb-14 xl:max-w-screen-sm md:max-w-xl sm:max-w-sm max-w-xs' />


                {/* Masajes */}
                <section className="" id="masajes">
                    {/* <h2 className="ml-3 text-3xl text-left">Masajes</h2> */}

                    <img src="masajes.png" alt="" className='max-w-52 mt-10' />

                    {renderServiciosPorTipo("Masajes")}
                </section>

                {/* Belleza */}
                <section className="" id="belleza">
                    {/* <h2 className="ml-3 mt-8 text-3xl text-left">Belleza</h2> */}
                    <img src="belleza.png" alt="" className='max-w-52 mt-10' />

                    {/* <img src="belleza.png" alt="" className='max-w-52 mt-10' /> */}
                    {renderServiciosPorTipo("Belleza")}
                </section>

                {/* Tratamientos faciales */}
                <section className="" id="tFacial">
                    {/* <h2 className="ml-3 mt-8 text-3xl text-left">Tratamientos faciales</h2> */}
                    <img src="tratamientosfaciales.png" alt="" className='max-w-92 md:max-w-lg mt-10' />

                    {renderServiciosPorTipo("tratamientos-faciales")}
                </section>

                {/* Tratamientos corporales */}
                <section className="" id="tCorporales">
                    {/* <h2 className="ml-3 mt-8 text-3xl text-left">Tratamientos corporales</h2> */}
                    <img src="tratamientoscorporales.png" alt="" className='max-w-92 md:max-w-lg  mt-10' />

                    {renderServiciosPorTipo("tratamientos-corporales")}
                </section>

            </div>

        </div>
    );
}

