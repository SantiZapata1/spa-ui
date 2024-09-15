'use client';

import { useState, useEffect } from "react";
import { getServicesRequest } from "../../api/servicios";
import Service from "../components/ServiceList/Service";

export default function Servicios() {
    const [servicios, setServicios] = useState<any[]>([]);

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

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        <div className="min-h-screen p-2">
            <h2 className="text-3xl mb-4">Todos los servicios ({servicios.length})</h2>

            {/* Masajes */}
            <section className="" id="masajes">
                <h2 className="text-2xl mb-4">Masajes</h2>
                {renderServiciosPorTipo("Masajes")}
            </section>

            {/* Belleza */}
            <section className="" id="belleza">
                <h2 className="text-2xl mb-4">Belleza</h2>
                {renderServiciosPorTipo("Belleza")}
            </section>

            {/* Tratamientos faciales */}
            <section className="" id="tFacial">
                <h2 className="text-2xl mb-4">Tratamientos faciales</h2>
                {renderServiciosPorTipo("tratamientos-faciales")}
            </section>

            {/* Tratamientos corporales */}
            <section className="" id="tCorporales">
                <h2 className="text-2xl mb-4">Tratamientos corporales</h2>
                {renderServiciosPorTipo("tratamientos-corporales")}
            </section>
        </div>
    );
}

