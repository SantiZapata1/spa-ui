type Row = {
    _id: string;
    servicio: string;
    comentario: string;
  }
  
  const formatServicio = (servicio: string) => {
    // Pone la primer letra en mayúscula y si tiene un - en medio, pone un espacio
    return servicio.charAt(0).toUpperCase() + servicio.slice(1).replace('-', ' ');
  }
  import { deleteCommentsRequest } from '../../../api/comments';

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
          const res = await deleteCommentsRequest(id);
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
    {
      name: 'ID',
      selector: (row: Row) => row._id,
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
      selector: (row: Row) => row.comentario,
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