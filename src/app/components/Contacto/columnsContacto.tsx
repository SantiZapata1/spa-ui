type mensaje = {
    _id: string;
    nombre: string;
    correo_electronico: string;
    mensaje: string;
}

const contactoRows = [
    {
        name: 'Nombre',
        selector: (row: mensaje) => row.nombre,
        sortable: true,
    },
    {
        name: 'Correo electrónico',
        selector: (row: mensaje) => row.correo_electronico,
        sortable: true,
    },
    {
        name: 'Mensaje',
        selector: (row: mensaje) => row.mensaje,
        sortable: true,
    },

];

export default contactoRows;
