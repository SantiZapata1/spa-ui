// Hooks
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
// DataTable
import DataTable from 'react-data-table-component';
import customStyles from '../Turnos/customStyles';
import columnsDataTable from './columnsDataTable';
// Componentes
import InputText from '../Inputs/InputText';

import { setUserAdmin, getAdmins } from '../../../api/usuarios';
import Swal from 'sweetalert2';
function Admins() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [admins, setAdmins] = useState<any>([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            const admins = await getAdmins();
            setAdmins(admins);
        }

        fetchAdmins();
    }, []);
    
    return (
        <div className='w-full md:w-3/10'>
            <form className='p-3'
                onSubmit={handleSubmit((data) => {
                    Swal.fire({
                        title: '¿Estás seguro de asignar los permisos de administrador?',
                        showCancelButton: true,
                        confirmButtonText: 'Sí',
                        cancelButtonText: 'No',
                        confirmButtonColor: '#7BB263',
                        cancelButtonColor: '#D8316C',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setUserAdmin(data.nombre_de_usuario);
                            Swal.fire(
                                {
                                    title: 'Se asignaron los permisos de administrador',
                                    icon: 'success',
                                    confirmButtonText: 'Aceptar'
                                }
                            ).then(() => {
                                window.location.reload();
                            })
                        }
                    })


                })}>
                <InputText campo="Nombre de usuario" nombre="nombre_de_usuario" register={register} require errors={errors.nombre_de_usuario} type="text" />
                <div className='flex items-center justify-center'>
                    <button className="bg-sage text-white px-6 py-4 rounded-3xl mt-8 transform transition-transform duration-300 ease-in-out hover:scale-105 w-7/10">Asignar</button>
                </div>

            </form>

            <DataTable
                columns={columnsDataTable}
                data={admins}
                pagination
                customStyles={customStyles}
            />
        </div>
    )
}

export default Admins