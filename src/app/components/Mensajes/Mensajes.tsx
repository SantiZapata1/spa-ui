import DataTable from 'react-data-table-component';
import customStyles from '../Turnos/customStyles';
import columnsDataTable from './columnsDataTable';
import { getCommentsRequest } from '../../../api/comments';
import { useEffect, useState } from 'react';
import expandableMensajes from './expandableMensajes';
export default function Mensajes(){
    const [mensajes, setMensajes] = useState<any>([]);

    useEffect(() => {
        const fetchMensajes = async () => {
            const mensajes = await getCommentsRequest();
            setMensajes(mensajes.data);
            console.log(mensajes.data)
        }
        
        fetchMensajes();
    }, []);

    return(
        <div className="w-full">
            <h2 >Mensajes</h2>
            <DataTable
                columns={columnsDataTable}
                data={mensajes}
                pagination
                customStyles={customStyles}
                expandableRows
                expandableRowsComponent={expandableMensajes}
    />
                
        </div>
    );

}