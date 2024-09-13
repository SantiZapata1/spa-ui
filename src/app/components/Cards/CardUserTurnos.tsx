import React from 'react'
// Hooks
import { useState, useEffect } from 'react'
// Context
import { useAuth } from '../../../context/auth';
// Backend
import { getTurnosByUser } from '../../../api/turnos';
import DataTable from 'react-data-table-component';
import customStyles from '../Turnos/customStyles';
import columnsTurnos from './turnosCoolumns';
function CardUserTurnos() {
  const [turnos, setTurnos] = useState([]);
  const { user, isLoading } = useAuth();
  useEffect(() => {
    const fetchTurnos = async () => {
      if (!isLoading) {
        const turnos = await getTurnosByUser(user.id);
        setTurnos(turnos);
      }
    }
    fetchTurnos();
    console.log(turnos)
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg md:w-6/10 p-4 mt-5">
      <h2 className="text-3xl font-medium">Tus turnos</h2>

      {turnos.length === 0 ? <p className="mt-2 text-xl">No tenés turnos agendados</p> :
      
        <DataTable 
        columns={columnsTurnos}
        data={turnos}
        customStyles={customStyles}
        pagination
        />

      }

    </div>
  )
}

export default CardUserTurnos