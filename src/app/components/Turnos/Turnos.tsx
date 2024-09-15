import DataTable from "react-data-table-component";
import { getTurnos } from "../../../api/turnos";
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import customStyles from './customStyles';
import expandedComponents from './expandedComponent';
import columnsTurnos from './columnsTurnos';

export default function Turnos() {
    const [listaTurnos, setListaTurnos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };

    useEffect(() => {
        const obtenerTurnos = async () => {
            try {
                const turnos = await getTurnos();
                // Ordenar los turnos por fecha
                const turnosOrdenados = turnos.sort((a: any, b: any) => {
                    const fechaA = new Date(a.fecha);
                    const fechaB = new Date(b.fecha);
                    return fechaA.getTime() - fechaB.getTime();
                });
                setListaTurnos(turnosOrdenados);
            } catch (error) {
                console.error("Error al obtener los turnos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        obtenerTurnos();
    }, []);

    return (
        <div className="w-full p-5">
              <h2 className="text-2xl mb-4 text-left inline mr-5">Turnos</h2>
            <DataTable
                columns={columnsTurnos}
                data={listaTurnos}
                pagination
                expandableRows
                expandableRowsComponent={expandedComponents}
                customStyles={customStyles}
                responsive={true}
                striped={true}
                highlightOnHover={true}
                noDataComponent="No hay turnos para mostrar"
                defaultSortFieldId={"Fecha"}
                expandableIcon={expandableIcon}
                progressPending={isLoading} // Mostrar un indicador de carga si está cargando
                />
       

        </div>
    );
}