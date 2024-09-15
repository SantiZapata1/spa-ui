type mensaje = {
    _id: string;
    nombre: string;
    correo_electronico: string;
    mensaje: string;
}

import { deleteContacto } from "../../../api/contacto";
import Swal from "sweetalert2";


const handleSendEmail = (data: any) => {
    const email = data.correo_electronico;
    const subject = "Respuesta a su consulta";
    const body = "Estimado " + data.nombre;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
};

const handleDeleteContacto = async (id: any) => {
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7BB263',
        cancelButtonColor: '#D8316C',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Enviar los datos a la API
          try {
            deleteContacto(id); // Enviar los datos del formulario a la API
            Swal.fire({
              title: '¡Listo!',
              text: '¡El mensaje de contacto ha sido eliminado correctamente!',
              icon: 'success',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#7BB263',
            }).then(() => {
              window.location.reload();
            });
          } catch (error) {
            console.error('Error al enviar los datos:', error);
            Swal.fire({
              title: 'Error',
              text: 'Hubo un error al eliminar el mensaje de contacto.',
              icon: 'error',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#D8316C',
            });
          }
        }
      });
};


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
    {
        name: 'Acciones',
        cell: (row: mensaje) =>
            <>
                <button className='bg-sage text-white p-2 rounded-md mr-2' onClick={() => handleSendEmail(row)}>Contestar</button>
                <button className='bg-orange-500 text-white p-2 rounded-md' onClick={() => handleDeleteContacto(row._id)}>Eliminar</button>
            </>

        ,
    }

];

export default contactoRows;
