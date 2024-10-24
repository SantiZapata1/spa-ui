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
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import expandedComponents from './expandedComponents';
type CardUserTurnosProps = {
  today?: boolean;
}

function CardUserTurnos({today}: CardUserTurnosProps) {
  const [turnos, setTurnos] = useState([]);
  const { user, isLoading } = useAuth();
  
  useEffect(() => {
    const fetchTurnos = async () => {
      if (!isLoading) {
        const turnos = await getTurnosByUser(user.id);
        // Ordena por createdAt, el más reciente primero
        turnos.sort((a: any, b: any) => {
          if (a.createdAt > b.createdAt) {
            return -1;
          }
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          return 0;
        });

        setTurnos(turnos);
      }
    }
    fetchTurnos();
    console.log(turnos)
  }, []);
  
  const expandableIcon = {
    collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
    expanded: <ArrowUpCircleIcon className='h-6 w-6' />
};

  return (
    <>
    <div className="bg-white shadow-lg rounded-lg md:w-8/10 w-full p-4 mt-5">
      <h2 className="text-3xl font-medium">Tus turnos</h2>
      {turnos.length === 0 ? <p className="mt-2 text-xl">No tenés turnos agendados</p> :
        <DataTable 
        columns={columnsTurnos}
        data={turnos}
        customStyles={customStyles}
        pagination
        expandableRows
        expandableRowsComponent={expandedComponents}
        expandableIcon={expandableIcon}
        />
      }
    </div>
      </>
  )
}

export default CardUserTurnos