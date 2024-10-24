// Importamos de la librería xlsx
import { utils, writeFile } from 'xlsx';
import * as XLSX from 'xlsx';
import { useState } from 'react';
import { TableCellsIcon } from '@heroicons/react/24/outline';
import { getUsuarioPorId } from '../../../api/usuarios';
type ExcelProps = {
  data: any
}


function Excel({ data }: ExcelProps) {
    const [isLoading, setIsLoading] = useState(false);
    let turnos: Array<any> = [];

    const rellenarExcel = async () => {
    
        
    
        for(const turno of data) {

            const profesional_asignado = await getUsuarioPorId(turno.profesional_asignado);
            let nombre_profesional = "No asignado"
            if(profesional_asignado) {
                 nombre_profesional = profesional_asignado?.nombre + ' ' + profesional_asignado?.apellido;
            }
            turnos.push({
                // A1
                id: turno._id,
                // B1
                fecha: turno.fecha,
                // C1
                hora: turno.hora,
                // D1
                cliente: turno.cliente,
                // E1
                servicio: turno.servicio,
                // F1
                monto_abonado: turno.monto_abonado,
                // G1
                comentarios: turno.comentarios,
                // H1
                estado: turno.estado,
                // L1
                profesional_asignado: nombre_profesional

            })
        }
        }
        const exportarDenuncias = async () => {
            setIsLoading(true);
            // Rellenar las denuncias
            await rellenarExcel();
        
            // Crear una hoja de cálculo a partir de los datos de las denuncias
            const hoja = XLSX.utils.json_to_sheet(turnos);
        
            // Modificar celdas para que se vean mejor al visualizar los datos
            hoja['!cols'] = [
              { wch: 26 }, //id A1
              { wch: 15 }, // Fecha B1
              { wch: 10 }, // Hora C1
              { wch: 20 }, // Cliente D1
              { wch: 30 }, // Servicio E1
              { wch: 10 }, // Monto abonado F1
              { wch: 30 }, // Comentarios G1
              { wch: 10 }, // Estado H1
              { wch: 20 }, // Profesional asignado L1
            ];
            
            hoja['A1'] = { v: 'ID', t: 's' };
            hoja['B1'] = { v: 'Fecha', t: 's' };
            hoja['C1'] = { v: 'Hora', t: 's' };
            hoja['D1'] = { v: 'Cliente', t: 's' };
            hoja['E1'] = { v: 'Servicio', t: 's' };
            hoja['F1'] = { v: 'Monto abonado', t: 's' };
            hoja['G1'] = { v: 'Comentarios', t: 's' };
            hoja['H1'] = { v: 'Estado', t: 's' };
            hoja['I1'] = { v: 'Profesional asignado', t: 's' };

        
            // Crear un libro de trabajo y agregar la hoja de cálculo
            const libro = utils.book_new();
            utils.book_append_sheet(libro, hoja, 'Turnos');
            // Escribir el libro de trabajo a un archivo Excel
            setIsLoading(false);
        
            writeFile(libro, 'turnos.xlsx');
        
          };
          return (
            <button
              className={`flex flex-row items-center justify-center bg-sage hover:bg-sage-hover text-white font-bold py-2 px-4 rounded w-full md:w-3/10 scale-up-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={exportarDenuncias}
              disabled={isLoading}
            >
              <TableCellsIcon className='h-6 w-6' />
               Generar Excel
            </button>
        
          );
}

export default Excel