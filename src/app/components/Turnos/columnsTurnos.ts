type Row = {
    _id: string;
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


const columnsTurnos = [
    {
        name: 'ID',
        selector: (row: Row) => row._id,
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Fecha',
        selector: (row: Row) => row.fecha,
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Hora',
        selector: (row: Row) => row.hora,
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Cliente',
        selector: (row: Row) => row.cliente,
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Servicio',
        selector: (row: Row) => formatServicio(row.servicio),
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
    }
    

]

export default columnsTurnos;