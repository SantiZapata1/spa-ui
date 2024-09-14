import DataTable from "react-data-table-component";
import { getTurnos } from "../../../api/turnos";
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import customStyles from './customStyles'
import expandedComponents from './expandedComponent'
import columnsTurnos from './columnsTurnos'

export default function Turnos() {

    const [listaTurnos, setListaTurnos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    }

    useEffect(() => {
        const obtenerTurnos = async () => {
            try {
                const response = await getTurnos();
        
                // Mantener la fecha de creación en su formato original para ordenarla
                const turnosConvertidos = response.map((turno: any) => {
                    const fechaCreacion = new Date(turno.creacion);
    
                    // Formatear la fecha para mostrarla, pero no modificar la fecha original
                    const fechaFormateada = new Intl.DateTimeFormat('es-AR', {
                        timeZone: 'America/Argentina/Buenos_Aires',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format(fechaCreacion);
        
                    return {
                        ...turno,
                        fechaOriginal: fechaCreacion, // Mantener la fecha original para ordenar
                        creacion: fechaFormateada // Usar esta para mostrar
                    };
                });
        
                // Ordenar turnos por fecha original, desde el más reciente al más antiguo
                const turnosOrdenados = turnosConvertidos.sort((a: any, b: any) => {
                    return b.fechaOriginal.getTime() - a.fechaOriginal.getTime(); // Orden descendente
                });
        
                setListaTurnos(turnosOrdenados);
                setIsLoading(false);
            } catch (error) {
                console.log("error al obtener los turnos", error);
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
