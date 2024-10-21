import DataTable from "react-data-table-component";
import { getTurnos } from "../../../api/turnos";
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import customStyles from './customStyles';
import expandedComponents from './expandedComponent';
import columnsTurnos from './columnsTurnos';
import { getTurnosByDate, getTurnosByUser, obtenerMisTurnosAsignados } from "../../../api/turnos";
import { useAuth } from '../../../context/auth'

type Turnos = {
    today?: boolean;
    user? : string;
}

export default function Turnos({ today, user }: Turnos) {
    const [listaTurnos, setListaTurnos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user: usuario } = useAuth();

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };

    useEffect(() => {
        const obtenerTurnos = async () => {
            try {
                // Ordenar los turnos por fecha
                if(usuario?.rol === 'Profesional'){
                    console.log(usuario)
                    const turnos = await obtenerMisTurnosAsignados(usuario.id);
                    setListaTurnos(turnos);
                }
                else if (today) {
                    const fechaHoyNormalizada = new Date().toLocaleDateString().replace(/\//g, "-");
                    const turnosHoy = await getTurnosByDate(fechaHoyNormalizada, fechaHoyNormalizada);
                    setListaTurnos(turnosHoy)
                    
                } else if(user){
                    const turnos = await getTurnosByUser(user);
                    setListaTurnos(turnos);

                } else{
                    const turnos = await getTurnos();
                    setListaTurnos(turnos);
                }
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
                progressPending={isLoading} // Mostrar un indicador de carga si está cargando
                />
                </div>


        </div>
    );
}