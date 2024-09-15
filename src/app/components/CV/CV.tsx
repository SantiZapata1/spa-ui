import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';

import { getCvRequest, deleteCvRequest } from "../../../api/cv";
import columnsCV from "./columnsCV";
import customStylesCV from "../Turnos/customStyles"; // Opcional si tienes estilos personalizados para la tabla
import expandedCvCompomnent from "./expandedCvComponent";
export default function CV() {
    const [cvList, setCvList] = useState<any[]>([]);
    const [filteredCvList, setFilteredCvList] = useState<any[]>([]);

    const expandableIcon = {
        collapsed: <ArrowDownCircleIcon className='h-6 w-6' />,
        expanded: <ArrowUpCircleIcon className='h-6 w-6' />
    };

    // Función para obtener la lista de CVs
    const obtenerListaCv = async () => {
        try {
            const response = await getCvRequest();
            if (response.data && Array.isArray(response.data)) {
                setCvList(response.data);
                setFilteredCvList(response.data);
            } else {
                console.error("Error al obtener los CVs");
            }
        } catch (error) {
            console.error("Error al obtener los CVs:", error);
        }
    };

    // Elimina un CV de la base de datos
    const eliminarCV = async (id: string) => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: "No podrás revertir esto",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7BB263',
                cancelButtonColor: '#D8316C',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });

            if (result.isConfirmed) {
                await deleteCvRequest(id);
                Swal.fire('Eliminado!', 'El CV ha sido eliminado.', 'success');
                obtenerListaCv(); // Actualiza la lista después de eliminar
            }
        } catch (error) {
            console.error("Error al eliminar el CV:", error);
        }
    };

    useEffect(() => {
        obtenerListaCv(); // Obtiene los CVs cuando se monta el componente
    }, []);

    return (
        <>
        <div className="min-w-full  p-5">
            <div className="flex flex-col">
            <h2 className="text-2xl mb-4 text-left inline mr-5">Candidatos({cvList.length})</h2>

                {/* DataTable para mostrar los CVs */}
            </div>
        </div>
                <DataTable
                    columns={columnsCV(eliminarCV)} // Pasa la función eliminarCV a las columnas
                    expandableRows
                    expandableRowsComponent={expandedCvCompomnent}
                    expandableIcon={expandableIcon}
                    data={filteredCvList}
                    pagination
                    customStyles={customStylesCV} // Si tienes estilos personalizados
                />
                    </>
    );
}
