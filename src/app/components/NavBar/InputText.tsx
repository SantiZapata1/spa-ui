import React from 'react';

type InputTextProps = {
  campo: string;
  placeholder: string;
  type: string;
  nombre: string;
  register: any;
  setValue: any;
  errors: any;
  require?: boolean;
};
// Definimos el componente funcional InputText
function InputText({campo, placeholder, type, nombre, register, require, setValue, errors }: InputTextProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {campo}
      </label>
      <input
        type={type}
        className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        {...register(nombre, { required: require === true ? true : false })} placeholder={placeholder} 
      />
    </div>
  );
}

export default InputText;