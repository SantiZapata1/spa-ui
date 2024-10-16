import Turnos from '@/app/components/Turnos/Turnos'
import React from 'react'

type expandedProps = {
    data: any
}

function expandedComponents({ data }: expandedProps) {
    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-center '>
                    <div className='flex flex-col border-4 border-green-500 rounded-lg  p-2'>
                        <p className='text-xl'> <span className='font-bold'> Nombre: </span> {data.nombre}</p>
                        <p className='text-xl'><span className='font-bold'> Apellido: </span> {data.apellido}</p>
                        <p className='text-xl'><span className='font-bold'> Correo electrónico: </span> {data.correo_electronico}</p>
                        <p className='text-xl'><span className='font-bold'> Correo electrónico: </span> {data.nombre_de_usuario}</p>
                        <p className='text-xl'><span className='font-bold'> Rol: </span> {data.rol}</p>
                    </div>
                </div>
            <h1>Lista de turnos</h1>

               <Turnos user={data._id} /> 
            
            </div>
        </div>
    )
}

export default expandedComponents