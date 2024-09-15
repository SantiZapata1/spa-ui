// Librerias
import DataTable from 'react-data-table-component';
// Hooks
import { useEffect, useState } from 'react';
// Componentes
import columnsDataTable from './columnsDataTable';
import expandableMensajes from './expandableMensajes';
import customStyles from '../Turnos/customStyles';
// Backend
import { getCommentsRequest } from '../../../api/comments';
// Iconos
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline'



export default function Mensajes() {
    const [mensajes, setMensajes] = useState<any>([]);

    useEffect(() => {
        const fetchMensajes = async () => {
            const mensajes = await getCommentsRequest();
            // Ordenalo por más reciente por el campo createdAt
            mensajes.data.sort((a: any, b: any) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            });
            setMensajes(mensajes.data);
        }

        fetchMensajes();
    }, []);

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    }

    return (
        <div className="w-full p-5" >
            <h2 className="text-2xl mb-4 text-left inline mr-5">Mensajes</h2>
            <DataTable
                columns={columnsDataTable}
                data={mensajes}
                pagination
                customStyles={customStyles}
                expandableRows
                expandableRowsComponent={expandableMensajes}
                expandableIcon={expandableIcon}
            />
        </div>
    );

}