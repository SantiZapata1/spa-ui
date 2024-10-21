import Turnos from '@/app/components/Turnos/Turnos'
import React from 'react'
import { useForm } from 'react-hook-form'
import SelectOptions from '@/app/components/Select/SelectOptions'
import { cambiarRol } from '@/api/usuarios'
import Swal from 'sweetalert2'
type expandedProps = {
    data: any
}

function ExpandedComponents({ data }: expandedProps) {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();  
    const opcionesRol = [
        { value: 'Administrador', nombre: 'Administrador' },
        { value: 'Profesional', nombre: 'Profesional' },
        { value: 'Secretario', nombre: 'Secretario' },
        { value: 'Usuario', nombre: 'Usuario' }
    ]

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
            <h1 className='text-4xl m-2'>Modificar rol</h1>
                <form  className='flex flex-col items-center justify-center '
                onSubmit = {handleSubmit( async (values: any) => {
                    values._id = data._id
                    Swal.fire({
                        title: '¿Está seguro de cambiar el rol?',
                    
                        showCancelButton: true,
                        confirmButtonText: `Cambiar`,
                            cancelButtonText: 'Cancelar',
                        confirmButtonColor: '#7BB263',
                        cancelButtonColor: '#D8316C',

                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            await cambiarRol(values).then(() => {
                                Swal.fire({
                                    title: 'Rol cambiado',
                                    icon: 'success',
                                    confirmButtonColor: '#7BB263',
                                }).then((result) => {
                                    if(result.isConfirmed){   
                                        window.location.reload()
                                    }
                                })
                            })
                        } else if (result.isDenied) {
                            Swal.fire({
                                title: 'Rol no cambiado',
                                icon: 'error',
                                confirmButtonColor: '#7BB263',
                            })
                        }
                    })

                })}>
                <SelectOptions isRequired={false} campo="Rol" nombre="rol" setValue={setValue} error={errors.rol} opciones={opcionesRol} width='w-1/2' />
                <button className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 w-5/10">Modificar</button>
                </form>
            <h1 className='text-4xl m-2'>Lista de turnos</h1>

               <Turnos user={data._id} /> 
            
            </div>
        </div>
    )
}

export default ExpandedComponents