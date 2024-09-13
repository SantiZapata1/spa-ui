interface Cv {
    _id: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    propuesta: string;
}

const columnsCV = (eliminarCV: (id: string) => void) => [
    {
        name: 'Nombre',
        selector: (row: Cv) => `${row.nombre} ${row.apellido}`,
        sortable: true,
    },
    {
        name: 'Email',
        selector: (row: Cv) => row.email,
        sortable: true,
    },
    {
        name: 'Teléfono',
        selector: (row: Cv) => row.telefono,
        sortable: true,
    },
    {
        name: 'Propuesta',
        selector: (row: Cv) => row.propuesta,
        sortable: true,
    },
    {
        name: 'Acciones',
        cell: (row: Cv) => (
            <button
                onClick={() => eliminarCV(row._id)}
                className="px-2 py-1 bg-red-500 text-white rounded-md">
                Entrevistado
            </button>
        ),
    },
];

export default columnsCV;
