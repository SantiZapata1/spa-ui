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

const handleGeneratePDF = async (row: Row) => {
    try {
        // Obtener el servicio para obtener el precio
        const serviciosResponse = await getServicesRequest();
        const servicios = serviciosResponse.data;
        const servicioEncontrado = servicios.find((servicio: any) => servicio.nombre === row.servicio);

        // Validación del precio para evitar errores si no está definido
        const precio = servicioEncontrado ? servicioEncontrado.precio.toFixed(2) : '0.00';

        const doc = new jsPDF('portrait', 'pt', 'a4');

        // Título de la factura
        doc.setFontSize(20);
        doc.setTextColor(40, 90, 160);
        doc.text('FACTURA COMERCIAL', 40, 60);

        // Sección "De"
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text('DE:', 40, 100);
        doc.text('Dra.Felicia', 40, 120);
        doc.text('French404, 404', 40, 140);
        doc.text('Resistencia-Chaco', 40, 160);
        doc.text('+54-3624888888', 40, 180);
        doc.text('spasentirsebien2024@gmail.com', 40, 200);

        // Sección "Para"
        doc.text('PARA:', 320, 100);
        doc.text(row.cliente, 320, 120);


        // Sección con detalles adicionales (número y fecha de la factura)
        doc.text(`Número de factura: ${row._id}`, 40, 220);
        doc.text(`Fecha: ${formatFecha(row.fecha)}`, 40, 240);

        // Cálculos de Subtotal, IVA y Total
        const subtotal = parseFloat(precio);
        const iva = subtotal * 0.21;
        const total = subtotal + iva;

        // Tabla con el detalle del servicio, con espacios en blanco añadidos
        autoTable(doc, {
            startY: 270,
            head: [['Cantidad', 'Descripción', 'Precio unitario', 'Precios']],
            body: [
                ['1', formatServicio(row.servicio), `$${precio}`, `$${precio}`],
                // Aquí se añade una fila vacía para generar espacio
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', 'Subtotal', `$${subtotal.toFixed(2)}`],
                ['', '', 'IVA (21%)', `$${iva.toFixed(2)}`],
                ['', '', 'Total', `$${total.toFixed(2)}`],
            ],
            theme: 'grid',
            styles: { fontSize: 10, cellPadding: 5 },
        });

        // Pie de página con firma centrada
        const pageWidth = doc.internal.pageSize.getWidth(); // Obtiene el ancho de la página
        const finalY = (doc as any).lastAutoTable.finalY || 270;
        doc.setFontSize(16); // Tamaño de la fuente más grande
        doc.setTextColor(95, 111, 82); 
        // doc.text('SPA Sentirse Bien', pageWidth / 2, finalY + 60, { align: 'center' }); 
        doc.addImage('/logo_sin_fondo.png', 'PNG', pageWidth / 2 - 32, finalY + 70, 64, 64);
        // Descargar el PDF
        doc.save(`factura_turno_${row._id}.pdf`);
    } catch (error) {
        console.error('Error al generar el PDF:', error);
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al generar el PDF.',
            icon: 'error',
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
        });
    }
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
                <button
                    className='bg-sage hover:bg-sage-hover text-white font-bold py-2 px-4 rounded'
                    onClick={() => handleGeneratePDF(row)}
                >
                    Generar PDF
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
