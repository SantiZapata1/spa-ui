import React from 'react'
import ServiceEdit from '../ServiceList/ServiceEdit'
type EditServiceProps = {
    data: any
    setEdit: any    
}

function EditService({data, setEdit}: EditServiceProps) {
  return (
    <div className='w-4/10 h-full bg-green-200 rounded-lg p-4'>
    <h1 className='text-2xl'>{formatServicio(data.nombre)}</h1>
    <p className='text-lg'>{formatServicio(data.tipo)}</p>
    <p className='text-lg'>${data.precio}</p>
    <p className='text-lg'>{data.detalles}</p>
    <div className='flex flex- items-center justify-center'>
    <button className="py-2 px-4 bg-green-700 hover:bg-green-800 text-white rounded-lg mr-2" onClick={() => setShowEdit(true)}>Editar</button>
    <button className='py-2 px-4 bg-orange-700 hover:bg-orange-800 text-white rounded-lg' onClick={() => deleteService(data._id)}>Eliminar</button>
    </div>
    {showEdit && <EditService data={data} setEdit={setShowEdit} />}
</div>

  )
}

export default EditService