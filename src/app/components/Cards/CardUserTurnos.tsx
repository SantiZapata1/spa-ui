import React from 'react'

type CardUserTurnosProps = {
    turnos: any
}

function CardUserTurnos({turnos}: CardUserTurnosProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg md:w-6/10 p-4 mt-5">
    <h2 className="text-3xl font-medium">Tus turnos</h2>
    
    {turnos.length === 0 && <p className="mt-2 text-xl">No tenés turnos agendados</p> }
    
    </div>
  )
}

export default CardUserTurnos