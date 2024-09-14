type mensaje = {
    _id: string;
    nombre: string;
    email: string;
    mensaje: string;
}

const contactoRows = [
    {
        name: 'ID',
        selector: (row: mensaje) => `${row._id}`,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: (row: mensaje) => row.nombre,
        sortable: true,
    },
    {
        name: 'Correo electrónico',
        selector: (row: mensaje) => row.email,
        sortable: true,
    },
    {
        name: 'Mensaje',
        selector: (row: mensaje) => row.mensaje,
        sortable: true,
    },

];

export default contactoRows;
