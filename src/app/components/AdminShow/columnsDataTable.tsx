import Swal from "sweetalert2";
import { removeAdmin } from '../../../api/usuarios';


type Row = {
    _id: string;
    nombre: string;
    apellido: string;
    nombre_de_usuario: string;
    correo_electronico: string;
}

const handleRemoveAdmin = async (id: string) => {
    const result = await Swal.fire({
        title: '¿Estás seguro de remover los permisos de administrador?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        confirmButtonColor: '#7BB263',
        cancelButtonColor: '#D8316C',
    });

    if (result.isConfirmed) {
        await removeAdmin(id);
        Swal.fire(
            {
                title: 'Se removieron los permisos de administrador',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#7BB263',
            }
        );
    }
}

const contactoRows = [
    {
        name: 'Nombre',
        selector: (row: Row) => row.nombre + ' ' + row.apellido,
        sortable: true,
    },
    {
        name: 'Correo electrónico',
        selector: (row: Row) => row.correo_electronico,
        sortable: true,
    },
    {
        name: 'Nombre de usuario',
        selector: (row: Row) => row.nombre_de_usuario,
        sortable: true,
    },
    {
        name: 'Acciones',
        cell: (row: Row) =>
            <>
                <button className='bg-sage text-white p-2 rounded-md mr-2' onClick={() => handleRemoveAdmin(row._id)}>Remover admin</button>
            </>

        ,
    }

];

export default contactoRows;
