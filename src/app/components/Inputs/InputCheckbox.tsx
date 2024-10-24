/*
  [Input Checkbox]
  Se utiliza para crear un input de tipo checkbox con un label al lado y que puede realizar 
  cambios en los estados del componente padre.
*/

// Hooks
import { useEffect } from 'react'

// Props
interface Props {
  campo: string;
  nombre: string;
  setValue: any;
  register: any;
  type: string;
  error?: any;
  setHook?: any;
  state?: any;
  disabled?: boolean;
  id: any;
}

function InputCheckbox({disabled, campo, nombre, setValue, type, setHook, state, id }: Props) {
  
  // Si el estado cambia, se actualiza el valor del input
  useEffect(() => {
    state ? setValue(nombre, state) : setValue(nombre, false);
  }, [setValue, nombre]);

  // Función que se ejecuta cuando se cambia el valor del input
  const handleChange = (e: any) => {
    setValue(nombre, e.target.checked);
    if (setHook) {
      setHook(e.target.checked);
    }
  };

  return (
    <div className="flex flex-row justify-start items-center">
      <div>
        <input
          className="cursor-pointer border open-sans border-gray-300 rounded-md h-6 xl:h-6 xl:w-5 2xl:h-6 my-2 xl:my-1 xl:m-2 m-4 pl-2"
          type={type}
          onChange={handleChange}
          defaultChecked={state}
          id={id}
          disabled={disabled}
        />
      </div>
      <div>
        <label htmlFor={id} className="cursor-pointer font-medium xl:text-sm">
          {campo}
        </label>
      </div>
    </div>
  );
}

export default InputCheckbox