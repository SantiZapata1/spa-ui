import { MouseEventHandler } from 'react';

// Define el tipo para las filas de datos
interface Service {
  _id: number;
  nombre: string;
  tipo: string;
  precio: string;
  detalles: string;
}

// Definir las columnas para el DataTable
const columnsServicios = (handleEdit: (id: number) => void, handleDelete: (id: number) => void) => [
  {
    name: 'Nombre',
    selector: (row: Service) => row.nombre,
    sortable: true,
  },
  {
    name: 'Tipo',
    selector: (row: Service) => row.tipo,
    sortable: true,
  },
  {
    name: 'Precio',
    selector: (row: Service) => row.precio,
    sortable: true,
  },
  {
    name: 'Detalles',
    selector: (row: Service) => row.detalles,
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row: Service) => (
      <div className="flex space-x-2">
        <button
          onClick={() => handleEdit(row._id)}
          className="px-2 py-1 bg-blue-500 text-white rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(row._id)}
          className="px-2 py-1 bg-red-500 text-white rounded-lg"
        >
          Eliminar
        </button>
      </div>
    ),
  },
];

export default columnsServicios;



