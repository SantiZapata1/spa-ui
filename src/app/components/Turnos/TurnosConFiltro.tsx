import DataTable from "react-data-table-component";
import { getTurnos } from "../../../api/turnos";
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import customStyles from './customStyles';
import expandedComponents from './expandedComponent';
import columnsTurnos from './columnsTurnos';
import { getTurnosByDate, getTurnosByUser, obtenerMisTurnosAsignados } from "../../../api/turnos";
import { useAuth } from '../../../context/auth'
import { useForm } from "react-hook-form";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import { DefaultDeserializer } from "v8";

type Turnos = {
    today?: boolean;
    user?: string;
}

export default function Turnos({ today, user }: Turnos) {
    // const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [listaTurnos, setListaTurnos] = useState<any[]>([]);
    
    const { user: usuario } = useAuth();

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };


    return (
        <div className="w-full p-5">
            <h2 className="text-2xl mb-4 text-left inline mr-5">Turnos</h2>
            
            <form action="" className='m-4 flex flex-col items-center justify-center  w-full'
            onSubmit={
            handleSubmit( async (values: any) => {
                console.log(values)

                const fechaDesde = values.desde;
                const fechaHasta = values.hasta;

                

                const turnosDate = await getTurnosByDate(fechaDesde, fechaHasta);

                console.log(turnosDate)
                setListaTurnos(turnosDate);



            })
        }
    >

            <DateRangePicker setValue={setValue} isRequired={true} />
            <button
            className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 w-5/10"
            >
            Buscar
            </button>
            </form>

            
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
                />
            </div>


        </div>
    );
}