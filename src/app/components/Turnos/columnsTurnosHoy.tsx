import { setTurnoRealizado } from '../../../api/turnos';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; 
import { getServicesRequest } from '../../../api/servicios'; 

type Row = {
    _id: string;
    creacion: Date;
    fecha: string;
    hora: string;
    cliente: string;
    servicio: string;
    comentarios: string;
    precio?: number; 
};

const formatServicio = (servicio: string) => {
    return servicio.charAt(0).toUpperCase() + servicio.slice(1).replace('-', ' ');
};

const formatFecha = (fecha: string) => {
    return fecha.split('T')[0].split('-').reverse().join('/');
};

const handleRealizado = async (id: string) => {
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
                await setTurnoRealizado(id);
                Swal.fire({
                    title: 'Realizado!',
                    text: 'El turno ha sido marcado como realizado',
                    icon: 'success',
                    confirmButtonColor: '#7BB263',
                    cancelButtonColor: '#D8316C',
                }).then(() => {
                    window.location.reload();
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un error al marcar el turno como realizado',
                    icon: 'error',
                    confirmButtonColor: '#7BB263',
                    cancelButtonColor: '#D8316C',
                });
            }
        }
    });
};



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
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Acciones',
        cell: (row: Row) => (
            <div className="flex space-x-2">
                <button
                    className='bg-spa-purple hover:bg-spa-light-purple text-white font-bold py-2 px-4 rounded'
                    onClick={() => handleRealizado(row._id)}
                >
                    Realizado
                </button>
                
            </div>
        ),
        button: true,
        width: '20%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    }
];

export default columnsTurnos;