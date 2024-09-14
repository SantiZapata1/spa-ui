import React from 'react'
type Props = {
    data: any
    }


function expandableMensajes({data}: Props) {
  return (
    // Haz como una tarjeta para mostrar los comentarios con el nombre del usuario y el mensaje escrito
    <div className="bg-gray-100 p-4">
      <p className="text-xl font-medium">{data.servicio}</p>
      <p className="text-lg">{data.comentario}</p>
    </div>
  )
}

export default expandableMensajes