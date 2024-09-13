import { MouseEventHandler } from 'react';

// Define el tipo para las filas de datos
interface Service {
  _id: number;
  nombre: string;
  tipo: string;
  precio: string;
  detalles: string;
}

const formatServicio = (servicio: string) => {
  // Pone la primer letra en mayúscula y si tiene un - en medio, pone un espacio
  return servicio.charAt(0).toUpperCase() + servicio.slice(1).replace('-', ' ');
}


// Definir las columnas para el DataTable
const columnsServicios = () => [
  {
    name: 'ID',
    selector: (row: Service) => row._id,
    sortable: true,
    width: '10%',
    style: {
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'Nombre',
    selector: (row: Service) => row.nombre,
    sortable: true,
    width: '10%',
    style: {
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'Tipo',
    selector: (row: Service) => formatServicio(row.tipo),
    sortable: true,
    width: '5%',
    style: {
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'Precio',
    selector: (row: Service) => row.precio,
    sortable: true,
    width: '5%',
    style: {
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'Detalles',
    selector: (row: Service) => row.detalles,
    sortable: true,
    style: {
      fontSize: '14px',
      fontWeight: 500,
    },
  },
];

export default columnsServicios;



