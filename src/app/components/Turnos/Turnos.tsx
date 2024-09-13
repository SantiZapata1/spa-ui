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
                // Ordena por created At, el más reciente primero
                response.sort((a: any, b: any) => {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                    if (a.createdAt < b.createdAt) {
                        return 1;
                    }
                    return 0;
                });
                setListaTurnos(response);
                setIsLoading(false);
            } catch (error) {
                console.log("error al obtener los turnos", error);
            }
        }
        obtenerTurnos();
    }, []);

    return (
        <div className="w-full p-4">
            <h2 className="text-left">Turnos</h2>

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
            />

        </div>
    );

}