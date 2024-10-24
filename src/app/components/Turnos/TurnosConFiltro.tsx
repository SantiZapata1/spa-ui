import DataTable from "react-data-table-component";
import { getTurnos } from "../../../api/turnos";
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import customStyles from './customStyles';
import expandedComponents from './expandedComponent';
import columnsTurnos from './columnsTurnos';
import { getTurnosByDateAndProfesional } from "../../../api/turnos";
import { useAuth } from '../../../context/auth'
import { useForm } from "react-hook-form";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import { DefaultDeserializer } from "v8";
import SelectOptions from "../Select/SelectOptions";
import { getProfesionales, getUsuarioPorId } from "../../../api/usuarios";
import Excel from "./Excel";

type Turnos = {
    today?: boolean;
    user?: string;
}

export default function Turnos({ today, user }: Turnos) {
    // const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [listaTurnos, setListaTurnos] = useState<any[]>([]);
    const [listaProfesionales, setListaProfesionales] = useState<any[]>([]);
    const [showExcel, setShowExcel] = useState(false);
    const { user: usuario } = useAuth();

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };

    useEffect(() => {
        const obtenerProfesionales = async () => {
            try {
              const profesionales = await getProfesionales();
              const listaProfesionales = profesionales.map((profesional: any) => {
                return { nombre: profesional.nombre + ' ' + profesional.apellido, value: profesional._id }  
            })
    
            listaProfesionales.push({nombre: 'Todos', value: 'all'}, {nombre: 'Sin asignar', value: 'No asignado'})
              setListaProfesionales(listaProfesionales);
            } catch (error) {
              console.error("Error al obtener los profesionales:", error);
            }
          };
          obtenerProfesionales();
    }),[];

    return (
        <div className="w-full p-5">
            <h2 className="text-2xl mb-4 text-left inline mr-5">Turnos</h2>
            <form action="" className='m-4 flex flex-col items-center justify-center  w-full'
            onSubmit={
                handleSubmit( async (values: any) => {
                    console.log(values)
                    
                    const fechaDesde = values.desde;
                    const fechaHasta = values.hasta;
                    
                    
                    
                    const turnosDate = await getTurnosByDateAndProfesional(fechaDesde, fechaHasta, values.profesional);
                    
                    setListaTurnos(turnosDate);
                    setShowExcel(true);
                    


                })
            }
            >

            <DateRangePicker setValue={setValue} isRequired={true} />
            {/*  Para profesionales */}
            <SelectOptions nombre="profesional" campo="Profesional" opciones={listaProfesionales} setValue={setValue} isRequired={false} error={errors.profesional} width="w-5/10" /> 

            <button
            className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 w-5/10"
            >
            Buscar
            </button>
            </form>

            
            <div className="m-12">
                
                { showExcel && 
                <div className="w-full flex flex-col items-center justify-center my-4">
                <Excel data={listaTurnos} />        
                </div>
            }

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