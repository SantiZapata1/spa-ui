"use client";



import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import customStyles from './customStyles';
import expandedComponents from './expandedComponent';
import columnsTurnos from './columnsTurnosHoy';
import { getTurnosByDate } from "../../../api/turnos";
import { useAuth } from '../../../context/auth';

export default function TurnosHoy() {
    const [listaTurnos, setListaTurnos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user: usuario } = useAuth();

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };

    useEffect(() => {
        const obtenerTurnosHoy = async () => {
            try {
                const fechaHoyNormalizada = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
                const turnosHoy = await getTurnosByDate(fechaHoyNormalizada, fechaHoyNormalizada);

                // Filtra los turnos si el usuario es profesional
                if (usuario?.rol === 'Profesional') {
                    const turnosHoyProfesional = turnosHoy.filter((turno: any) => turno.profesional_asignado === usuario.id);
                    setListaTurnos(turnosHoyProfesional);
                } else {
                    setListaTurnos(turnosHoy);
                }
            } catch (error) {
                console.error("Error al obtener los turnos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        obtenerTurnosHoy();
    }, [usuario]);

    return (
        <div className="w-full p-5">
            <h2 className="text-2xl mb-4 text-left inline mr-5">Turnos de Hoy</h2>
            <div className="m-12">
                <DataTable
                    // @ts-ignore
                    columns={columnsTurnos}
                    data={listaTurnos}
                    
                    pagination
                    customStyles={customStyles}
                    responsive={true}
                    striped={true}
                    highlightOnHover={true}
                    noDataComponent="No hay turnos para mostrar"
                    defaultSortFieldId={"Fecha"}
                    defaultSortAsc={false}
                    expandableRows
                    expandableRowsComponent={expandedComponents}
                    expandableIcon={expandableIcon}
                    progressPending={isLoading} 
                />
            </div>
        </div>
    );
}




