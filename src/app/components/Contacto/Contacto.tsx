//Hooks
import { useState, useEffect} from 'react'
// Dependencias
import Swal from "sweetalert2"
import DataTable from "react-data-table-component"
// Estilos
import customStyles from '../Turnos/customStyles'
// Backend
import { getContactos } from "../../../api/contacto"
// Iconos
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline'
// Componentes
import columnsContacto from './columnsContacto'

function Contacto() {

  const [listaContactos, setListaContactos] = useState<any>()

  useEffect(() => {
      
      const fetchInfo = async () => {
          try {
              const response = await getContactos()
              setListaContactos(response.data)
          } catch (error) {
            console.log(error)
          }
      }

      fetchInfo();
      
  }, [])
  const expandableIcon = {
    collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
    expanded: <ArrowUpCircleIcon className='h-6 w-6' />
};

  return (
    <div className='w-full'>
      <h2 className="text-2xl mb-4 text-left inline mr-5"> Mensajes de contacto</h2>
      <>
      {listaContactos?.length > 0 && (
        <DataTable
        columns={columnsContacto} 
        expandableRows
        //expandableRowsComponent={({ data }) => <div>{data.detalles}</div>}
        expandableIcon={expandableIcon}
        data={listaContactos}
        pagination
        customStyles={customStyles} 
        
        />
      )}
      </>


    </div>
  
  
  
  )
}

export default Contacto