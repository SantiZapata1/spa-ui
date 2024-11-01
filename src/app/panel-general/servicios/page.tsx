'use client';

import { useState, useEffect } from "react";
import { getServicesRequest } from "../../../api/servicios";
import Service from "../../components/ServiceList/Service";
import MenuLateral2 from '../../components/Menu/menuLateral2';
import { useAuth } from "../../../context/auth";
import { redirect } from "next/navigation";
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";

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
            return <LoadingScreen/>
        }

        if ((!isLoading) && (!isAuthenticated)) return redirect('/login');

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                {/* Logo en el centro */}
                <div className="mb-8 flex justify-center w-full">
                    <img src="/nuestrosservicios.png" alt="Logo" className="max-w-3xl" /> 
                </div>

                <img src="nuestrosservicios.png" alt="" className='mb-14 xl:max-w-screen-sm md:max-w-xl sm:max-w-sm max-w-xs' />

                {/* Mostrar todos los servicios automáticamente */}
                <section className="">
                    {renderServiciosPorTipo("Masajes")}
                    {renderServiciosPorTipo("Belleza")}
                    {renderServiciosPorTipo("tratamientos-faciales")}
                    {renderServiciosPorTipo("tratamientos-corporales")}
                </section>
            </div>
        </div>
    );
}
