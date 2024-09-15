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


const columnsTurnos = [

    {
        name: 'Fecha',
        selector: (row: Row) => formatFecha(row.fecha),
        width: '15%',
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
    }
    

]

export default columnsTurnos;