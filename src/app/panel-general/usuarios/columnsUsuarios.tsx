
type Row = {
    _id: string;
    nombre_de_usuario: string;
    nombre: string;
    apellido: string;
    correo_electronico: string;
    rol: string;
}

const columnsUsuarios = [
    {
        name: 'Usuario',
        selector: (row: Row) => row.nombre_de_usuario,
        width: '20%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Nombre completo',
        selector: (row: Row) => `${row.nombre} ${row.apellido}`,
        width: '20%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Correo electrónico',
        selector: (row: Row) => row.correo_electronico,
        width: '40%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
    {
        name: 'Rol',
        selector: (row: Row) => row.rol,
        width: '20%',
        style: {
            fontSize: '14px',
            fontWeight: 500,
        }
    },
]

export default columnsUsuarios;