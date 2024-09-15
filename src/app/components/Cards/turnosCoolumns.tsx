type Row = {
  _id: string;
  fecha: string;
  hora: string;
  servicio: string;
  comentarios: string;
}


import { deleteTurnoRequest } from '../../../api/turnos';
import Swal from 'sweetalert2';

const handleDelete = async (id: string) => {
  try {
    Swal.fire({
      title: 'Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7BB263',
      cancelButtonColor: '#D8316C',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteTurnoRequest(id);
        Swal.fire(
          {
            text: "Se ha eliminado el turno",
            icon: 'success',
            confirmButtonColor: '#7BB263',
            confirmButtonText: 'Aceptar',
          }
        ).then(async result => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        }
        )
      }
    }
    )
  } catch (err) {
    console.log(err)
  }

}



const columnsTurnos = [
  // {
  //   name: 'ID',
  //   selector: (row: Row) => row._id,
  //   style: {
  //     fontSize: '14px',
  //     fontWeight: 500,
  //   }
  // },
  {
    name: 'Fecha',
    selector: (row: Row) => row.fecha,
    sortable: true,
    // @ts-ignore
    sortFunction: (a: any, b:any) => new Date(b.fecha) - new Date(a.fecha),
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
    name: 'Servicio',
    selector: (row: Row) => row.servicio,
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
          onClick={() => handleDelete(row._id)}
          className="px-2 py-1 bg-orange-500 text-white rounded-lg"
        >
          Eliminar
        </button>
      </div>
    ),
  },


]

export default columnsTurnos;