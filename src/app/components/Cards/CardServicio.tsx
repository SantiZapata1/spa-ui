import Swal from 'sweetalert2'
import { deleteServicesRequest } from '../../../api/servicios'
// Hooks
import { useState } from 'react'
// Componentes
import ServiceEdit from '../ServiceList/ServiceEdit' 
type CardServicioProps = {
    data: any
}

function CardServicio({data}: CardServicioProps) {
  
    const formatServicio = (servicio: string) => {
        // Pone la primer letra en mayúscula y si tiene un - en medio, pone un espacio
        return servicio.charAt(0).toUpperCase() + servicio.slice(1).replace('-', ' ');
    }

    const [showEdit, setShowEdit] = useState(false);


    const deleteService = async (id: number) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7BB263',
            cancelButtonColor: '#D8316C',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteServicesRequest(id);
                    Swal.fire('¡Eliminado!', 'El servicio ha sido eliminado.', 'success');
                    Swal.fire({
                        title: '¡Eliminado!',
                        text: "El servicio ha sido eliminado",
                        icon: 'success',
                        confirmButtonColor: '#7BB263',
                        confirmButtonText: 'Aceptar',
                    }).then(async (result) => {  
                        window.location.reload()  // Actualiza la lista después de eliminar
                    })
                } catch (error) {
                    console.log("Error al eliminar el servicio", error);
                }
            }
        });
    };


    return (
    // Haz un card con los datos del servicio que sea un cuadrado con bordes redondeados verde y la información por dentro
    <div className='w-8/10 md:w-4/10 h-full bg-sage text-white rounded-lg p-4'>

        
        {showEdit ? <ServiceEdit id={data._id} setIsEditing={setShowEdit} service={data}/>
        :
        <>
            <h1 className='text-2xl'>{formatServicio(data.nombre)}</h1>
            <p className='text-lg'>{formatServicio(data.tipo)}</p>
            <p className='text-lg'>${data.precio}</p>
            <p className='text-lg'>{data.detalles}</p>
            <div className='flex flex- items-center justify-center'>
            <button className="py-2 px-6 mt-5 bg-green-700 hover:bg-green-800 text-white rounded-lg mr-2" onClick={() => setShowEdit(true)}>Editar</button>
            <button className='py-2 px-6 mt-5 bg-orange-700 hover:bg-orange-800 text-white rounded-lg' onClick={() => deleteService(data._id)}>Eliminar</button>
            </div>
        </>
        
        }
    </div>

  )
}

export default CardServicio