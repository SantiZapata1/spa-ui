"use client"
import InputText from '@/app/components/Inputs/InputText';
import MenuLateral2 from '@/app/components/Menu/menuLateral2'
import SelectOptions from '@/app/components/Select/SelectOptions';
import customStyles from '@/app/components/Turnos/customStyles';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'
import DataTable from 'react-data-table-component';

import columnsUsuarios from './columnsUsuarios';
import { buscarUsuarios } from '@/api/usuarios';
import expandedComponents from './expandedComponents'

import { useForm } from 'react-hook-form';

function Page() {
    
    const [listaUsuarios, setListaUsuarios] = useState([])
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const rolOpciones = [
        { value: 'Administrador', nombre: 'Administrador' },
        { value: 'Profesional', nombre: 'Profesional' },
        { value: 'Secretaria', nombre: 'Secretaria' },
        { value: 'Usuario', nombre: 'Usuario' }
    ]

    
    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };

    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0">
                <MenuLateral2 />
            </div>
            <h2>Usuarios</h2>
            <form className='p-3'
                onSubmit={handleSubmit( async (data: any) => {
                    await buscarUsuarios(data).then(res => {
                        setListaUsuarios(res)
                    })

                })}>
                <InputText require={false} campo="Nombre de usuario" nombre="nombre_de_usuario" register={register} errors={errors.nombre_de_usuario} type="text" />
                <SelectOptions isRequired={false} campo="Rol" nombre="rol" setValue={setValue} error={errors.rol} opciones={rolOpciones} />
                <div className='flex items-center justify-center'>
                    <button className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 w-7/10">Buscar</button>
                </div>

            </form>
            <div className='w-8/10 m-4'>

            <DataTable
                columns={columnsUsuarios}
                data={listaUsuarios}
                pagination
                customStyles={customStyles}
                expandableRows
                responsive={true}
                striped={true}
                highlightOnHover={true}
                noDataComponent="No hay usuarios para mostrar"
                defaultSortFieldId={"Fecha"}
                defaultSortAsc={false}
                expandableRowsComponent={expandedComponents}
                expandableIcon={expandableIcon}
                />
                </div>
        </section>

    )
}

export default Page