import { deleteTurnoRequest } from '../../../api/turnos'
import  Swal from 'sweetalert2'
type Row = {
    _id: string;
    creacion:Date
    fecha: string;
    hora: string;
    cliente: string;
    servicio: string;
    comentarios: string;
}


const formatServicio = (servicio: string) => {
    // Pone la primer letra en mayúscula y si tiene un - en medio, pone un espacio
    return servicio.charAt(0).toUpperCase() + servicio.slice(1).replace('-', ' ');
}

// Pone en formato de fecha en formato DD/MM/AA y elimina la hora, para que 2024-09-13T00:00:00.000Z se vea como 13/09/2024
const formatFecha = (fecha: string) => {
    return fecha.split('T')[0].split('-').reverse().join('/');
}   

const handleRealizado = async (id: String)  => {
    

    Swal.fire({
        title: '¿Estás seguro?',
        text: "Una vez marcado como realizado, no podrás deshacer esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7BB263',
        cancelButtonColor: '#D8316C',
        confirmButtonText: 'Sí, marcar como realizado',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await deleteTurnoRequest(id);
                Swal.fire({
                    
                    title: 'Realizado!',
                    text: 'El turno ha sido marcado como realizado',
                    icon: 'success',
                    confirmButtonColor: '#7BB263',
                    cancelButtonColor: '#D8316C',
                }
                ).then(() => {
                    window.location.reload();
                })
            } catch (error) {
                Swal.fire({

                    title: 'Error',
                    text: 'Hubo un error al marcar el turno como realizado',
                    icon: 'error',
                    confirmButtonColor: '#7BB263',
                    cancelButtonColor: '#D8316C',
                }
                )
            }
        }
    })
    


}



const columnsTurnos = [

    {
        name: 'Fecha',
        selector: (row: Row) => new Date(row.fecha),
        width: '15%',
        id: 'Fecha',
        format: (row: Row) => formatFecha(row.fecha),
        Sortable: true,
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Hora',
        selector: (row: Row) => row.hora,
        width: '10%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Cliente',
        selector: (row: Row) => row.cliente,
        width: '20%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Servicio',
        selector: (row: Row) => formatServicio(row.servicio),
        width: '20%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Comentarios',
        selector: (row: Row) => row.comentarios,
        // width: '45%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Acciones',
        cell: (row: Row) => <button className='bg-spa-purple hover:bg-spa-light-purple text-white font-bold py-2 px-4 rounded w-full' onClick={() => handleRealizado(row._id)}>Realizado</button>,
        button: true,
        width: '10%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    }
    

]

export default columnsTurnos;