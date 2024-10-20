// Hooks
import { useState } from 'react';
// Componentes
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// Iconos
import { CalendarIcon } from '@heroicons/react/24/outline';
// Importar CSS
// import '../../../global.css';

// Tipos
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Props
interface InputDateRangeProps {
  register?: any;
  setValue: any;
  isRequired: boolean;
}

function InputDateRange({ setValue, isRequired }: InputDateRangeProps) {

  // Estado para manejar el rango de fechas
  const [date, setDate] = useState<Value>([null, null]);

  // Función para manejar el rango de fechas
  const handleDate = (dates: [Date, Date] | null) => {
    // Si las fechas no son nulas
    if (dates !== null) {
      // Extraer las fechas desde y hasta
      const [desde, hasta] = dates;

      // Crear objetos Date con las fechas proporcionadas
      const localDesde = new Date(desde);
      const localHasta = new Date(hasta);

      // Extraer solo los componentes de día, mes y año
      const utcDesdeYear = localDesde.getFullYear();
      const utcDesdeMonth = localDesde.getMonth() + 1; // Meses empiezan en 0, así que sumamos 1
      const utcDesdeDay = localDesde.getDate();

      const utcHastaYear = localHasta.getFullYear();
      const utcHastaMonth = localHasta.getMonth() + 1; // Meses empiezan en 0, así que sumamos 1
      const utcHastaDay = localHasta.getDate();

      // Crear las fechas en formato YYYY-MM-DD
      const desdeFormatted = `${utcDesdeYear}-${utcDesdeMonth.toString().padStart(2, '0')}-${utcDesdeDay.toString().padStart(2, '0')}`;
      const hastaFormatted = `${utcHastaYear}-${utcHastaMonth.toString().padStart(2, '0')}-${utcHastaDay.toString().padStart(2, '0')}`;

      // Llamar a setDate con las fechas formateadas
      setDate([desde, hasta]);
      setValue("desde", desdeFormatted);
      setValue("hasta", hastaFormatted);
  }
}

  return (
    <div className="flex flex-col w-full xl:w-1/2">
      <span className="font-medium ml-4 "> Rango de fechas </span>
      <DateRangePicker className="flex items-center justify-center align-center border open-sans border-gray-300 rounded-md h-10 xl:h-8 2xl:h-10 my-2 xl:my-1 xl:m-2 m-4 pl-2" onChange={(date:any) => { handleDate(date)}} value={date}  clearIcon={null} calendarIcon={<CalendarIcon className='h-6 w-6'/>} required={isRequired} />
    </div>
  );
}

export default InputDateRange;